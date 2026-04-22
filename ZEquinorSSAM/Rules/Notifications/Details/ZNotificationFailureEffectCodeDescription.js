export default function ZNotificationFailureEffectCodeDescription(context) {
    let binding = context.binding;
    if (binding) {
        let code = binding.FailureEffectCode;
        if (code && code !== '') {
            let codeGroup = binding.FailureEffectCodeGrp || '';
            return context.read('/SAPAssetManager/Services/AssetManager.service', 'PMCatalogCodes', ['Code', 'CodeDescription'], 
                "$filter=Code eq '" + code + "' and CodeGroup eq '" + codeGroup + "' and Catalog eq '6'").then(function(result) {
                if (result && result.length > 0) {
                    return result.getItem(0).Code + ' - ' + result.getItem(0).CodeDescription;
                }
                return code;
            });
        }
    }
    return '';
}