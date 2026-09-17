import ConfirmationEntryCreateVisible from '../../../SAPAssetManager/Rules/Confirmations/CreateUpdate/ConfirmationEntryCreateVisible';
import PersonaLibrary from '../../../SAPAssetManager/Rules/Persona/PersonaLibrary';
import IsAddConfirmationButtonVisible from '../../../SAPAssetManager/Rules/QAB/IsAddConfirmationButtonVisible';
import { GlobalVar as globals } from '../../../SAPAssetManager/Rules/Common/Library/GlobalCommon';
import ODataLibrary from '../../../SAPAssetManager/Rules/OData/ODataLibrary';
//Equinor GAP NGE-131762 starting - use the Operation Details scoped edit rule instead of EnableWorkOrderEdit
import ZEnableWorkOrderEditOnOperationDetails from '../UserAuthorizations/WorkOrders/ZEnableWorkOrderEditOnOperationDetails';
//Equinor GAP NGE-131762 ending

export default async function IsAddConfirmationButtonVisibleOnOperationDetails(context) {
    const isAutoReleaseOn = globals.getAppParam().WORKORDER.AutoRelease === 'Y'; //Only relevant for local operations
    const isEnabledOnLocal = globals.getAppParam().MOBILESTATUS.EnableOnLocalBusinessObjects === 'Y'; //Only relevant for local operations
    const isLocal = ODataLibrary.isLocal(context.binding);
    let allowCheck;

    if (isLocal) {
        allowCheck = isAutoReleaseOn && isEnabledOnLocal && PersonaLibrary.isMaintenanceTechnician(context) && IsAddConfirmationButtonVisible(context);
    } else {
        allowCheck = PersonaLibrary.isMaintenanceTechnician(context) && IsAddConfirmationButtonVisible(context);
    }

    if (allowCheck) {
        //Equinor GAP NGE-131762 starting
        if (await ZEnableWorkOrderEditOnOperationDetails(context)) {
        //Equinor GAP NGE-131762 ending
            return ConfirmationEntryCreateVisible(context);
        }
    }

    return false;
}
