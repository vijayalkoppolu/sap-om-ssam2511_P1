import libCom from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';

export default function ZFailureEffectCodeValue(context) {
    let transactionType = libCom.getStateVariable(context, 'TransactionType');
    
    if (transactionType === 'UPDATE') {
        // In edit mode, get value from state variable (set during navigation)
        let stateValue = libCom.getStateVariable(context, 'FailureEffectCode');
        if (stateValue) {
            return stateValue;
        }
        // Fallback to binding
        let binding = context.binding;
        if (binding && binding.FailureEffectCode) {
            return binding.FailureEffectCode;
        }
    }
    return '';
}