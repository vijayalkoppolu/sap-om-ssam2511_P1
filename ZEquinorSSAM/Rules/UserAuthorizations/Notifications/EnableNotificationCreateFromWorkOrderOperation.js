import EnableNotificationCreate from '../../../../SAPAssetManager/Rules/UserAuthorizations/Notifications/EnableNotificationCreate';
import { IsMyWorkOrderOperationEditable } from '../../../../SAPAssetManager/Rules/UserAuthorizations/WorkOrders/EnableWorkOrderEdit';
import IsPhaseModelEnabled from '../../../../SAPAssetManager/Rules/Common/IsPhaseModelEnabled';
import libPersona from '../../../../SAPAssetManager/Rules/Persona/PersonaLibrary';
//Equinor GAP NGE-131762 starting - use the Operation Details scoped edit rule instead of EnableWorkOrderEdit
import ZEnableWorkOrderEditOnOperationDetails from '../WorkOrders/ZEnableWorkOrderEditOnOperationDetails';
//Equinor GAP NGE-131762 ending

export default function EnableNotificationCreateFromWorkOrderOperation(clientAPI) {
    if (IsPhaseModelEnabled(clientAPI) || !EnableNotificationCreate(clientAPI)) {
        return Promise.resolve(false);
    }
    return Promise.all([
        //Equinor GAP NGE-131762 starting
        ZEnableWorkOrderEditOnOperationDetails(clientAPI),
        //Equinor GAP NGE-131762 ending
        IsWCMPersonaWithNonCompletedWorkOrderOperation(clientAPI, clientAPI.binding),
    ]).then(isEditEnabledArray => isEditEnabledArray.some(isEditEnabled => isEditEnabled === true));
}

function IsWCMPersonaWithNonCompletedWorkOrderOperation(context, myWorkOrderOperation) {
    return libPersona.isWCMOperator(context) ? IsMyWorkOrderOperationEditable(context, myWorkOrderOperation) : Promise.resolve(false);
}
