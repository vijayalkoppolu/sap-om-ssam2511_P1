import ConfirmationCreateUpdateNav from '../../Confirmations/CreateUpdate/ConfirmationCreateUpdateNav';
import libCommon from '../../Common/Library/CommonLibrary';
import TimeSheetsIsEnabled from '../../TimeSheets/TimeSheetsIsEnabled';
import ConfirmationsIsEnabled from '../../Confirmations/ConfirmationsIsEnabled';
import libConfirm from '../../ConfirmationScenarios/ConfirmationScenariosLibrary';

export default async function WorkOrderOperationConfirmationCreateNav(context) {
    let binding = context.getBindingObject();
    if (context.getPageProxy().getExecutedContextMenuItem()) {
        binding = context.getPageProxy().getExecutedContextMenuItem().getBinding();
    }
    if (binding.selectedOperations || context.getPageProxy().getActionBinding()) {
        binding = context.getPageProxy().getActionBinding();
    }
    const data = libCommon.getStateVariable(context, 'OperationsToConfirm');
    //gets the correct binding when executing rule from context swipe menu
    const selectedOperationItem = data.find(item => item.OperationReadlink === binding['@odata.readLink']);
    const selectedSubOperationItem = data.find(item => item.SubOperationReadlink === binding['@odata.readLink']);
    const selectedItem = selectedSubOperationItem || selectedOperationItem;
    if (selectedItem) {
        let override = {
            'WorkOrderHeader': selectedItem.WorkOrderHeader,
            'OrderID': selectedItem.OrderID,
            'ActivityType': selectedItem.ActivityType,
            'AccountingIndicator': selectedItem.AccountingIndicator,
            'Operation': selectedItem.Operation,
            'ActualDuration': selectedItem.ActualDuration,
            'ActualDurationUOM': selectedItem.ActualDurationUOM,
            'IsWorkOrderChangable': false,
            'IsOperationChangable': false,
            'IsFinalChangable': false,
            'IsOnCreate': false,
            'VarianceReason': selectedItem.VarianceReason,
            'Description': selectedItem.Description,
            'Plant': selectedItem.Plant,
            'IsFinal': selectedItem.FinalConfirmation === 'X',
            'OperationReadlink': selectedItem.OperationReadlink,
            'SubOperationReadlink': selectedItem.SubOperationReadlink,
            'PersonnelNumber': selectedItem.PersonnelNumber,
            'SubOperation': selectedItem.SubOperationNo,
        };

        //Check for mandatory double-check confirmation
        const checkFailed = await libConfirm.isDoubleCheckRequiredForThisOperation(context, selectedItem.OrderId, selectedItem.OperationNo, selectedItem.SubOperationNo);
        if (checkFailed) { //Display validation error dialog and exit
            return await libCommon.showErrorDialog(context, context.localizeText('double_check_required_operation'));
        }

        libCommon.setStateVariable(context, 'ConfirmationNoActionsReturnVariableName', 'OperationConfirmationsUpdatePayload');
        libCommon.setStateVariable(context, 'ConfirmationHideCancelOption', true);
        libCommon.setStateVariable(context, 'ConfirmationHideDiscardOption', true);

        //gets the correct binding when executing rule from context swipe menu
        let isTimesheetEnabled = !ConfirmationsIsEnabled(context) && TimeSheetsIsEnabled(context);
        if (isTimesheetEnabled) {
            libCommon.setOnCreateUpdateFlag(context, 'UPDATE');
            libCommon.setStateVariable(context, 'IsBulkConfirmationActive', true);
            
            override = {
                'WorkOrderHeader': selectedItem.WorkOrderHeader,
                'OrderId': selectedItem.OrderID,
                'ActivityType': selectedItem.ActivityType,
                'Date': selectedItem.Date,
                'Hours': selectedItem.Hours,
                'AttendAbsenceType': selectedItem.AttendAbsenceType,
                'OperationReadlink': selectedItem.OperationReadlink,
                'PersonnelNumber': selectedItem.PersonnelNumber,
                'SubOperation': selectedItem.SubOperationNo,
                'OperationNo': selectedItem.OperationNo,
                'SubOperationNo': selectedItem.SubOperationNo,
                'SubOperationReadlink': selectedItem.SubOperationReadlink,
            };

            context.getPageProxy().getClientData().timesheetArgs = override;
            context.getPageProxy().setActionBinding(override);
            return context.executeAction('/SAPAssetManager/Actions/TimeSheets/TimeSheetEntryEditNav.action');
        } else {
            if (context.getPageProxy()) {
                return ConfirmationCreateUpdateNav(context.getPageProxy(), override, selectedItem.StartTime, new Date(), true);
            } else {
                return ConfirmationCreateUpdateNav(context, override, selectedItem.StartTime, new Date(), true);
            }
        }
    }
}
