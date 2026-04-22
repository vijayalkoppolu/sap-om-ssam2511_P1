import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';
import ResetValidationOnInput from '../../../../SAPAssetManager/Rules/Common/Validation/ResetValidationOnInput';

/**
 * Called when Failure Effect Codegroup value changes.
 * Enables the Failure Effect Code picker and loads filtered codes from PMCatalogCodes (Catalog='6').
 * @param {IClientAPI} context
 */
export default function ZFailureEffectCodeGroupOnValueChange(context) {
    ResetValidationOnInput(context);

    const pageProxy = context.getPageProxy();
    const formCellContainer = pageProxy.getControl('FormCellContainer');
    const codePickerControl = formCellContainer.getControl('FailureEffectListPicker');

    const selection = context.getValue();
    const codeGroup = (selection && selection.length > 0 && selection[0].ReturnValue) ? selection[0].ReturnValue : '';

    // Reset the code picker value when codegroup changes
    codePickerControl.setValue('', false);

    if (!codeGroup) {
        codePickerControl.setEditable(false);
        codePickerControl.setPickerItems([]);
        return Promise.resolve();
    }

    // Enable the code picker and load filtered items
    codePickerControl.setEditable(true);

    return context.read(
        '/SAPAssetManager/Services/AssetManager.service',
        'PMCatalogCodes',
        ['Code', 'CodeDescription'],
        `$filter=CodeGroup eq '${codeGroup}' and Catalog eq '6'&$orderby=Code`
    ).then(results => {
        if (!results || results.length === 0) {
            codePickerControl.setPickerItems([]);
            return;
        }
        const items = results._array.map(item => ({
            ReturnValue: item.Code,
            DisplayValue: `${item.Code} - ${item.CodeDescription}`,
        }));
        codePickerControl.setPickerItems(items);
    }).catch(error => {
        Logger.error('FailureEffectCodeGroupOnValueChange', error);
        codePickerControl.setPickerItems([]);
    });
}