import libCom from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';

export default function ZFailureEffectCodeGroupValue(context) {
    let transactionType = libCom.getStateVariable(context, 'TransactionType');
    
    if (transactionType === 'UPDATE') {
        // In edit mode, get value from state variable (set during navigation)
        let stateValue = libCom.getStateVariable(context, 'FailureEffectCodeGroup');
        if (stateValue) {
            return stateValue;
        }
        // Fallback to binding
        let binding = context.binding;
        if (binding && binding.FailureEffectCodeGrp) {
            return binding.FailureEffectCodeGrp;
        }
    }
    return '';
}