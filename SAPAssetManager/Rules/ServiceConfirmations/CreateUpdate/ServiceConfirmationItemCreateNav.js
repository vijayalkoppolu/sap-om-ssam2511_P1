
export default function ServiceConfirmationItemCreateNav(context, binding) {
    let pageProxy = context.getPageProxy();
    let hideCancelButton = pageProxy.getName() === 'SelectConfirmationItemPage';
    let actionBinding = binding || pageProxy.getActionBinding();

    return context.read('/SAPAssetManager/Services/AssetManager.service', actionBinding['@odata.readLink'], [], '$expand=MobileStatus_Nav,S4ServiceOrder_Nav/TransHistories_Nav,ServiceProfile_Nav').then(result => {
        const serviceItem = {hideCancelButton: hideCancelButton, ...result.getItem(0)};
        pageProxy.setActionBinding(serviceItem);
        return context.executeAction('/SAPAssetManager/Actions/ServiceConfirmations/Item/ServiceConfirmationItemCreateNav.action');
    });
}
