import libCommon from '../../../Common/Library/CommonLibrary';

/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function OperationScheduledEndVisible(context, binding = context.binding) {
    return libCommon.isDefined(binding.DisplayEndDateTime);
}
