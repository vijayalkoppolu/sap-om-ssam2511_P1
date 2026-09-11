import DocumentAddFromOperationDetails from '../../../../SAPAssetManager/Rules/Documents/DocumentAddFromOperationDetails';
import IsAllowedExpenseCreate from '../../../../SAPAssetManager/Rules/Expense/CreateUpdate/IsAllowedExpenseCreate';
import IsAddSmartFormButtonVisible from '../../../../SAPAssetManager/Rules/Forms/FSM/AddSmartForm/IsAddSmartFormButtonVisible';
import EnableRecordResultsFromOperationDetails from '../../../../SAPAssetManager/Rules/InspectionCharacteristics/Update/EnableRecordResultsFromOperationDetails';
import MeasuringPointsTakeReadingsIsVisible from '../../../../SAPAssetManager/Rules/Measurements/Points/MeasuringPointsTakeReadingsIsVisible';
import IsPDFAllowedForOperation from '../../../../SAPAssetManager/Rules/PDF/IsPDFAllowedForOperation';
import MileageAddIsEnabled from '../../../../SAPAssetManager/Rules/ServiceOrders/Mileage/MileageAddIsEnabled';
import EnableNotificationCreateFromWorkOrderOperation from '../../../../SAPAssetManager/Rules/UserAuthorizations/Notifications/EnableNotificationCreateFromWorkOrderOperation';
import EnableSubOperation from '../../../../SAPAssetManager/Rules/UserAuthorizations/WorkOrders/EnableSubOperation';
import CooperationIsEnabledForWorkOrder from '../../../../SAPAssetManager/Rules/ConfirmationScenarios/CooperationIsEnabledForWorkOrder';
import DoubleCheckIsEnabledForWorkOrder from '../../../../SAPAssetManager/Rules/ConfirmationScenarios/DoubleCheckIsEnabledForWorkOrder';
import SDFCreateEnabled from '../../../../SAPAssetManager/Rules/Forms/SDF/SDFCreateEnabled';
//Equinor GAP NGE-131762 starting - use the Operation Details scoped edit rule instead of EnableWorkOrderEdit
import ZEnableWorkOrderEditOnOperationDetails from '../../UserAuthorizations/WorkOrders/ZEnableWorkOrderEditOnOperationDetails';
//Equinor GAP NGE-131762 ending

/**
* Check all of the individual menu item rules and only show the menu ("+" button) if one of them is true
* @param {IClientAPI} clientAPI
*/
export default function WorkOrderOperationPopoverIsVisible(clientAPI) {
    return Promise.all([
        EnableSubOperation(clientAPI),
        EnableNotificationCreateFromWorkOrderOperation(clientAPI),
        //Equinor GAP NGE-131762 starting
        ZEnableWorkOrderEditOnOperationDetails(clientAPI),
        //Equinor GAP NGE-131762 ending
        EnableRecordResultsFromOperationDetails(clientAPI),
        DocumentAddFromOperationDetails(clientAPI),
        IsAllowedExpenseCreate(clientAPI),
        MileageAddIsEnabled(clientAPI),
        IsPDFAllowedForOperation(clientAPI),
        MeasuringPointsTakeReadingsIsVisible(clientAPI),
        IsAddSmartFormButtonVisible(clientAPI),
        CooperationIsEnabledForWorkOrder(clientAPI),
        DoubleCheckIsEnabledForWorkOrder(clientAPI),
        SDFCreateEnabled(clientAPI),
    ]).then(isPopOverItemVisibleResultArray => isPopOverItemVisibleResultArray.some(i => i === true));
}