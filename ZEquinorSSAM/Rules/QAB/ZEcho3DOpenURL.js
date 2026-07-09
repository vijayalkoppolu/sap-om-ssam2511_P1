import URLModuleLibrary from '../../../SAPAssetManager/Extensions/URLModule/URLModuleLibrary';
import CommonLibrary from '../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';

export default function ZEcho3DOpenURL(context) {
    const binding = context.binding;

    // Get functional location ID
    let funcLocId = '';

    if (binding['@odata.type'] === context.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/FunctionalLocation.global').getValue() ||
        binding['@odata.type'] === context.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/OnlineFunctionalLocation.global').getValue()) {
        // For functional location binding
        funcLocId = binding.FuncLocIdIntern;
    } else if (binding['@odata.type'] === context.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/Equipment.global').getValue() ||
               binding['@odata.type'] === context.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/OnlineEquipment.global').getValue()) {
        // For equipment binding, get from functional location relationship
        funcLocId = binding.FuncLocIdIntern;
    }

    if (!funcLocId) {
        // Fallback: try to get from page binding if current binding doesn't have it
        const pageBinding = context.getPageProxy().binding;
        if (pageBinding) {
            funcLocId = pageBinding.FuncLocIdIntern;
        }
    }

    if (funcLocId) {
        // Read the Echo3D URL prefix from AppParameter
        const echo3DUrlPrefix = CommonLibrary.getAppParam(context, 'APPLICATION', 'ZEcho3DBaseURL');

        if (echo3DUrlPrefix) {
            // URL encode the functional location ID
            const encodedFuncLocId = encodeURIComponent(funcLocId);

            // Construct the full URL using the AppParameter prefix
            const url = `${echo3DUrlPrefix}?fl=${encodedFuncLocId}`;

            // Open URL in browser
            URLModuleLibrary.openUrl(context, url);
        } else {
            // If Echo3D AppParameter is not configured, show error message
            return context.executeAction({
                'Name': '/SAPAssetManager/Actions/ErrorBannerMessage.action',
                'Properties': {
                    'Message': context.localizeText('ZEcho3D_URL_parameter_not_configured')
                }
            });
        }
    } else {
        // If no functional location ID found, show error message
        return context.executeAction({
            'Name': '/SAPAssetManager/Actions/ErrorBannerMessage.action',
            'Properties': {
                'Message': context.localizeText('ZEcho3D_functional_location_ID_not_found')
            }
        });
    }
}
