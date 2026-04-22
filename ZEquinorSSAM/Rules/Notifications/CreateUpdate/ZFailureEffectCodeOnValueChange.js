import ResetValidationOnInput from '../../../../SAPAssetManager/Rules/Common/Validation/ResetValidationOnInput';

/**
 * Called when Failure Effect Code value changes.
 * @param {IClientAPI} context
 */
export default function ZFailureEffectCodeOnValueChange(context) {
    return ResetValidationOnInput(context);
}