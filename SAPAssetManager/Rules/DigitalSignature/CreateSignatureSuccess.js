import Logger from '../Log/Logger';
import libCommon from '../Common/Library/CommonLibrary';
import libTelemetry from '../Extensions/EventLoggers/Telemetry/TelemetryLibrary';

export default function CreateSignatureSuccess(context, result) {
    context.dismissActivityIndicator();

    libTelemetry.logUserEvent(context,
        context.getGlobalDefinition('/SAPAssetManager/Globals/Features/DigitalSignature.global').getValue(),
        libTelemetry.EVENT_TYPE_COMPLETE);

    try {
        let response = JSON.parse(result.data);
        libCommon.setStateVariable(context, 'TOTPReadLink',response['@odata.readLink']);
        libCommon.setStateVariable(context,'TOTPKeyURI', response.KeyURI);
        libCommon.setStateVariable(context, 'TOTPDeviceId', response.DeviceId);
        if (response.Seed) {
            return response.Seed;
        } else {
            Logger.error(context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryDigitalSignature/DigitalSignature.global').getValue(), 'Missing seed for TOTP');
        }
    } catch (e) {
        Logger.error(context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryDigitalSignature/DigitalSignature.global').getValue(), e);
    }

    return '';
}
