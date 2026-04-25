
import Logger from '../Log/Logger';
import ODataLibrary from '../OData/ODataLibrary';
import CreateSignatureSuccess from './CreateSignatureSuccess';

export default async function GetTOTP(controlAPI) {
    const pageProxy = controlAPI.getPageProxy();

    const activityIndicatorId = pageProxy.showActivityIndicator(pageProxy.localizeText('create_device'));
    const result = await ODataLibrary.initializeOnlineService(pageProxy).then(() => {
        return pageProxy.executeAction('/SAPAssetManager/Actions/OData/DigitalSignature/CreateTOTPDevice.action')
            .catch((error) => {
                Logger.error(pageProxy.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryDigitalSignature/DigitalSignature.global').getValue(), 'TOTP Create Device failed' + error);
            });
        }).catch((error) => {
            Logger.error(pageProxy.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryDigitalSignature/DigitalSignature.global').getValue(), 'Online Service Failed' + error);
        })
        .finally(() => {
            pageProxy.dismissActivityIndicator(activityIndicatorId);
        });

    if (result?.data) {
        return CreateSignatureSuccess(pageProxy, result);
    }

    return '';
}
