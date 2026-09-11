import EnableRecordResults from '../../../../SAPAssetManager/Rules/InspectionCharacteristics/Update/EnableRecordResults';
import IsQMEnabled from '../../../../SAPAssetManager/Rules/ComponentsEnablement/IsQMComponentEnabled';
import IsCheckListEnabled from '../../../../SAPAssetManager/Rules/WorkOrders/InspectionLot/IsCheckListEnabled';
//Equinor GAP NGE-131762 starting - use the Operation Details scoped edit rule instead of EnableWorkOrderEdit
import ZEnableWorkOrderEditOnOperationDetails from '../../UserAuthorizations/WorkOrders/ZEnableWorkOrderEditOnOperationDetails';
//Equinor GAP NGE-131762 ending

export default function EnableRecordResultsFromOperationDetails(clientAPI) {
    if (IsQMEnabled(clientAPI) || IsCheckListEnabled(clientAPI) ) {
        //Equinor GAP NGE-131762 starting
        return ZEnableWorkOrderEditOnOperationDetails(clientAPI).then(isEditEnabled => {
        //Equinor GAP NGE-131762 ending
            if (isEditEnabled) {
                return EnableRecordResults(clientAPI);
            } else {
                return false;
            }
        });
    } else {
        return Promise.resolve(false);
    }

}
