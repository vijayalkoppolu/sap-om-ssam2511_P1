import libEval from '../../Common/Library/ValidationLibrary';
/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function GetResource(context, useCachedValue = false) {
    const clientData = context.getPageProxy().getClientData();

    if (useCachedValue && clientData.resources !== undefined) {
        return Promise.resolve(clientData.resources);
    }

    return context.read('/SAPAssetManager/Services/AssetManager.service', 'WarehouseResources', [], '').then((results) => {
        let value = '';

        if (!libEval.evalIsEmpty(results)) {
            value = results.getItem(0).Resource;
        }

        if (useCachedValue) {
            clientData.resources = value;
        }

        return value;
    });
}
