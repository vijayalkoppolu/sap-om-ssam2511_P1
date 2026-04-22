import URLModuleLibrary from '../../../SAPAssetManager/Extensions/URLModule/URLModuleLibrary';
import CommonLibrary from '../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';

export default function ZSTIDOpenURL(context) {
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
        // Read the STID URL prefix from AppParameter
        const stidUrlPrefix = CommonLibrary.getAppParam(context, 'APPLICATION', 'ZSTIDBaseURL');

        if (stidUrlPrefix) {
            // Parse the functional location to extract plant and location
            // Example: 1970-10-IG6193 -> Plant: 1970, TagNumber: 10-IG6193
            const parts = funcLocId.split('-');
            if (parts.length >= 2) {
                const plant = parts[0];
                const tagNumber = parts.slice(1).join('-');
                const encodedFuncLocId = encodeURIComponent(tagNumber);

                // Construct the full URL
                const url = `${stidUrlPrefix}${plant}&TagNumber=${encodedFuncLocId}`;

                // Open URL in browser
                URLModuleLibrary.openUrl(url);
            } else {
                // If functional location format is not as expected, show error message
                return context.executeAction({
                    'Name': '/SAPAssetManager/Actions/ErrorBannerMessage.action',
                    'Properties': {
                        'Message': context.localizeText('STID_functional_location_format_invalid')
                    }
                });
            }
        } else {
            // If STID AppParameter is not configured, show error message
            return context.executeAction({
                'Name': '/SAPAssetManager/Actions/ErrorBannerMessage.action',
                'Properties': {
                    'Message': context.localizeText('ZSTID_URL_parameter_not_configured')
                }
            });
        }
    } else {
        // If no functional location ID found, show error message
        return context.executeAction({
            'Name': '/SAPAssetManager/Actions/ErrorBannerMessage.action',
            'Properties': {
                'Message': context.localizeText('ZSTID_functional_location_ID_not_found')
            }
        });
    }
}
