
export default function OnMapModeChanged(context) {
    const pageProxy = context?.getPageProxy();
    const clientData = pageProxy?.getClientData();

    if (clientData?.mapMode) {
        pageProxy.setCaption(context.localizeText('map') + ' (' + clientData.mapMode + ')');
        clientData.mapMode = null;
    }
}
