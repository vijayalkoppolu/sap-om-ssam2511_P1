import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';
import libCom from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';

/**
 * Returns picker items for Failure Effect Codegroup (Catalog = '6') from PMCatalogProfiles
 * Filtered by CatalogProfile from the selected NotificationType entity
 * @param {IClientAPI} context
 */
export default async function ZFailureEffectCodeGroupPickerItems(context) {
    // Get the notification type from TypeLstPkr
    let notifType = '';
    try {
        const pageProxy = context.getPageProxy ? context.getPageProxy() : context;
        const formCellContainer = pageProxy.getControl('FormCellContainer');
        if (formCellContainer) {
            const typePkr = formCellContainer.getControl('TypeLstPkr');
            if (typePkr) {
                const typeValue = typePkr.getValue();
                if (typeValue) {
                    notifType = libCom.getListPickerValue(typeValue);
                }
            }
        }
    } catch (e) {
        Logger.error('ZFailureEffectCodeGroupPickerItems - getting notification type', e);
    }

    // Build filter: always Catalog = 6, add CatalogProfile filter from NotificationType entity
    let filter = "Catalog eq '6'";
    if (notifType) {
        try {
            // Read the NotificationTypes entity to get the actual CatalogProfile
            const pageProxy = context.getPageProxy ? context.getPageProxy() : context;
            const result = await pageProxy.read(
                '/SAPAssetManager/Services/AssetManager.service',
                'NotificationTypes',
                [],
                `$filter=NotificationType eq '${notifType}'`
            );
            if (result && result.length > 0) {
                const catalogProfile = result.getItem(0).CatalogProfile;
                if (catalogProfile) {
                    filter += ` and CatalogProfile eq '${catalogProfile}'`;
                }
            }
        } catch (e) {
            Logger.error('ZFailureEffectCodeGroupPickerItems - reading CatalogProfile from NotificationType', e);
        }
    }

    return context.read(
        '/SAPAssetManager/Services/AssetManager.service',
        'PMCatalogProfiles',
        [],
        `$filter=${filter}&$orderby=CodeGroup`
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