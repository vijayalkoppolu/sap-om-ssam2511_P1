import IsS4ServiceIntegrationEnabled from '../../ServiceOrders/IsS4ServiceIntegrationEnabled';
import GetMdoId from '../../UserProfile/GetMdoId';

export default async function FSMSmartformsOMDOHeader(context) {
    let omdoID = await GetMdoId(context, 'XX_FSM_FORM_INSTANCE');

    if (IsS4ServiceIntegrationEnabled(context)) {
        omdoID = omdoID.concat('_S4');
    }

    return omdoID;
}
