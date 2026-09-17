import DocumentsIsVisible from '../../../SAPAssetManager/Rules/Documents/DocumentsIsVisible';
//Equinor GAP NGE-131762 starting - use the Operation Details scoped edit rule instead of EnableWorkOrderEdit
import ZEnableWorkOrderEditOnOperationDetails from '../UserAuthorizations/WorkOrders/ZEnableWorkOrderEditOnOperationDetails';
//Equinor GAP NGE-131762 ending

export default function DocumentAddFromOperationDetails(clientAPI) {
    if (DocumentsIsVisible(clientAPI)) {
        //Equinor GAP NGE-131762 starting
        return ZEnableWorkOrderEditOnOperationDetails(clientAPI).then(isEditEnabled => {
            return isEditEnabled;
        });
        //Equinor GAP NGE-131762 ending
    }

    return Promise.resolve(false);
}
