import libCommon from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';

/**
 * Failure Effect Code picker is editable only when a Codegroup has been selected.
 * @param {IClientAPI} context
 */
export default function ZFailureEffectCodeListPickerEditable(context) {
    const codeGroupValue = libCommon.getTargetPathValue(context, '#Control:FailureEffectGroupListPicker/#SelectedValue');
    return !!(codeGroupValue && codeGroupValue.length > 0);
}