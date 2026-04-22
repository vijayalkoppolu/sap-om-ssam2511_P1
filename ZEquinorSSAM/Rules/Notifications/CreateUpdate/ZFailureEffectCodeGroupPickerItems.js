import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';

/**
 * Returns picker items for Failure Effect Codegroup (Catalog = '6') from PMCatalogProfiles
 * @param {IClientAPI} context
 */
export default async function ZFailureEffectCodeGroupPickerItems(context) {
    return context.read(
        '/SAPAssetManager/Services/AssetManager.service',
        'PMCatalogProfiles',
        [],
        "$filter=Catalog eq '6'&$orderby=CodeGroup"
    ).then(results => {
        if (!results || results.length === 0) return [];
        
        // Use a Map to remove duplicates based on CodeGroup
        const uniqueCodeGroups = new Map();
        results._array.forEach(item => {
            if (!uniqueCodeGroups.has(item.CodeGroup)) {
                uniqueCodeGroups.set(item.CodeGroup, {
                    ReturnValue: item.CodeGroup,
                    DisplayValue: `${item.CodeGroup} - ${item.Description}`,
                });
            }
        });
        
        // Convert Map values to array
        return Array.from(uniqueCodeGroups.values());
    }).catch(error => {
        Logger.error('FailureEffectCodeGroupPickerItems', error);
        return [];
    });
}
