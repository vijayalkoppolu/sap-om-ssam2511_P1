import AutoSyncLibrary from '../../ApplicationEvents/AutoSync/AutoSyncLibrary';
import ODataDate from '../../Common/Date/ODataDate';
import CommonLibrary from '../../Common/Library/CommonLibrary';
import ConfirmationsIsEnabled from '../../Confirmations/ConfirmationsIsEnabled';
import CreateLinks from '../../Confirmations/CreateUpdate/OnCommit/CreateLinks';
import ConfirmationScenariosLibrary from '../../ConfirmationScenarios/ConfirmationScenariosLibrary';
import CompleteSubOperationMobileStatusAction from '../../SubOperations/MobileStatus/CompleteSubOperationMobileStatusAction';
import SubOperationMobileStatusLibrary from '../../SubOperations/MobileStatus/SubOperationMobileStatusLibrary';
import TimeSheetCreateUpdateCreateLinks from '../../TimeSheets/CreateUpdate/TimeSheetCreateUpdateCreateLinks';
import TimeSheetsIsEnabled from '../../TimeSheets/TimeSheetsIsEnabled';
import { checkMeterComponentBeforeCompletion } from '../Complete/FinalizeCompletePageMessage';
import { createConfirmationOverviewRow, createOverviewIfMissing, getConfirmationProperties } from '../Operations/WorkOrderOperationsConfirmation';

export default async function WorkOrderSubOperationsConfirmation(context) {
    const subOperationsConfirmations = CommonLibrary.getStateVariable(context, 'OperationsToConfirm');

    let failures = [];
    let confirmAllActions = [];
    let subOperation;

    for (const item of subOperationsConfirmations) {
        const isTimeSheetValid = await validateTimeSheet(context, item);
        if (!isTimeSheetValid) return Promise.reject(false);

        //Mandatory double-check validation for confirmation scenarios feature
        const checkFailed = await ConfirmationScenariosLibrary.isDoubleCheckRequiredForThisOperation(context, item.OrderId || item.OrderID, item.Operation || item.OperationNo, item.SubOperation || item.SubOperationNo, 'PLANT');
        if (checkFailed) { //This operation requires a mandatory double-check, so do not process this operation and add to failed array
            item.error = context.localizeText('double_check_required_operation');
            failures.push(item);
            continue;
        }

        confirmAllActions.push(checkMeterComponentBeforeCompletion(context, item).then((result) => {
            if (result.data) {
                subOperation = item;
                return confirmSubOperation(context, item, failures);
            }
            failures.push(item);
            return Promise.resolve();
        }));
    }

    return Promise.all(confirmAllActions).then(() => {
        CommonLibrary.setStateVariable(context, 'OperationsToConfirm', []);
        CommonLibrary.setStateVariable(context, 'selectedOperations', []);
        if (failures.length) {
            CommonLibrary.setStateVariable(context, 'FailedOperations', failures);
            return context.executeAction('/SAPAssetManager/Actions/WorkOrders/SubOperations/ConfirmSubOperationsFailureMessage.action');
        }
        return context.executeAction('/SAPAssetManager/Actions/WorkOrders/SubOperations/SubOperationConfirmSuccessMessage.action') 
            .then(() => {
                let action = new CompleteSubOperationMobileStatusAction({
                    subOperation: subOperation,
                    WorkOrderId: subOperation.OrderId,
                    OperationId: subOperation.OperationNo,
                    SubOperationId: subOperation.SubOperationNo,
                });
                return action.execute(context.currentPage.context.clientAPI);
            })  
            .then(() => AutoSyncLibrary.autoSyncOnStatusChange(context));
    });
}

function validateTimeSheet(context, item) {
    const isTimesheetEnabled = !ConfirmationsIsEnabled(context) && TimeSheetsIsEnabled(context);

    if (isTimesheetEnabled && !item.ActivityType) {
        return context.executeAction({
            'Name': '/SAPAssetManager/Actions/WorkOrders/Operations/ActivityTypeForOperationRequiredError.action',
            'Properties': {
                'Message' : '/SAPAssetManager/Rules/WorkOrders/SubOperations/GetFailedSubOperationsActivityType.js',
            }}).then(() => {
                return false;
            });
    }

    return true;
}

function confirmSubOperation(context, item, failedOperations) {
    const isTimesheetEnabled = !ConfirmationsIsEnabled(context) && TimeSheetsIsEnabled(context);

    if (isTimesheetEnabled) {
        let date = item.Date || new ODataDate().toLocalDateString();
        return createOverviewIfMissing(context, date).then(() => {
            return context.executeAction({
                'Name': '/SAPAssetManager/Actions/Common/GenericCreate.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'CatsTimesheets',
                        'Service': '/SAPAssetManager/Services/AssetManager.service',
                    },
                    'Properties': {
                        'Counter': item.ConfirmationNum,
                        'Date': date,
                        'Hours': item.Hours,
                        'AttendAbsenceType': item.AttendAbsenceType || '',
                        'ActivityType': item.ActivityType,
                        'Workcenter': item.MainWorkCenter,
                        'PersonnelNumber': item.PersonnelNumber || '',
                        'ControllerArea': item.ControllerArea || '',
                    },
                    'Headers': {
                        'OfflineOData.RemoveAfterUpload': '/SAPAssetManager/Rules/Common/RemoveAfterUploadValue.js',
                        'OfflineOData.TransactionID': item.ConfirmationNum,
                    },
                    'CreateLinks': TimeSheetCreateUpdateCreateLinks(context, item),
                },
            }).then(() => {
                return SubOperationMobileStatusLibrary._createBlankConfirmation(context, item);
            });
        }).catch((error) => {
            item.error = error;
            failedOperations.push(item);
            return null;
        });
    } else {
        return context.executeAction({
            'Name': '/SAPAssetManager/Actions/Common/GenericCreate.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Confirmations',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                },
                'Properties': getConfirmationProperties(context, item),
                'Headers': {
                    'OfflineOData.RemoveAfterUpload': '/SAPAssetManager/Rules/Common/RemoveAfterUploadValue.js',
                    'OfflineOData.TransactionID': item.ConfirmationNum,
                },
                'CreateLinks': CreateLinks(context, item),
            },
        }).then(() => {
            return createConfirmationOverviewRow(context);
        }).catch((error) => {
            item.error = error;
            failedOperations.push(item);
            return null;
        });
    }
}
