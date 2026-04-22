export default function ZNotificationFailureEffectCodeGroupDescription(context) {
    let binding = context.binding;
    if (binding) {
        let codeGroup = binding.FailureEffectCodeGrp;
        if (codeGroup && codeGroup !== '') {
            return context.read('/SAPAssetManager/Services/AssetManager.service', 'PMCatalogProfiles', ['CodeGroup', 'Description'], 
                "$filter=CodeGroup eq '" + codeGroup + "' and Catalog eq '6'").then(function(result) {
                if (result && result.length > 0) {
                    return result.getItem(0).CodeGroup + ' - ' + result.getItem(0).Description;
                }
                return codeGroup;
            });
        }
    }
    return '';
}