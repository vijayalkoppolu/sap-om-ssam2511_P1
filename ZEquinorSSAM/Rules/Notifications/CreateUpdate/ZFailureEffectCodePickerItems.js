import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';
import libCommon from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';

/**
 * Returns picker items for Failure Effect Code (Catalog='6') filtered by selected Codegroup.
 * @param {IClientAPI} context
 */
export default function ZFailureEffectCodePickerItems(context) {
    const codeGroup = libCommon.getTargetPathValue(context, '#Control:FailureEffectGroupListPicker/#SelectedValue');
    if (!codeGroup || codeGroup.length === 0) {
        return Promise.resolve([]);
    }
    
    return context.read(
        '/SAPAssetManager/Services/AssetManager.service',
        'PMCatalogCodes',
        ['Code', 'CodeDescription'],
        `$filter=CodeGroup eq '${codeGroup}' and Catalog eq '6'&$orderby=Code`
    ).then(results => {
        if (!results || results.length === 0) return [];
        return results._array.map(item => ({
            ReturnValue: item.Code,
            DisplayValue: `${item.Code} - ${item.CodeDescription}`,
        }));
    }).catch(error => {
        Logger.error('FailureEffectCodePickerItems', error);
        return [];
    });
}
