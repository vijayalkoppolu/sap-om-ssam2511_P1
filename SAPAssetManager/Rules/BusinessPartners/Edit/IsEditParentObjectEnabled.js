import CommonLibrary from '../../Common/Library/CommonLibrary';
import EnableEquipmentEdit from '../../UserAuthorizations/Equipments/EnableEquipmentEdit';
import EnableFunctionalLocationEdit from '../../UserAuthorizations/FunctionalLocations/EnableFunctionalLocationEdit';
import EnableWorkOrderEdit from '../../UserAuthorizations/WorkOrders/EnableWorkOrderEdit';

export default function IsEditParentObjectEnabled(context, binding = context.binding) {
    let enabled = true;

    const entityName = binding?.['@odata.type'];
    switch (entityName) {
        case '#sap_mobile.MyWorkOrderPartner':
        case '#sap_mobile.MyWorkOrderHeader':
            enabled = EnableWorkOrderEdit(context);
            break;
        case '#sap_mobile.MyEquipment':
        case '#sap_mobile.MyEquipPartner':
            enabled = EnableEquipmentEdit(context);
            break;
        case '#sap_mobile.MyFunctionalLocation':
        case '#sap_mobile.MyFuncLocPartner':
            enabled = EnableFunctionalLocationEdit(context);
            break;
        default:
            break;
    }

    return enabled || CommonLibrary.isEntityLocal(binding);
}
