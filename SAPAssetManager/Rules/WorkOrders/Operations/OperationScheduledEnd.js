import libCommon from '../../Common/Library/CommonLibrary';
import OffsetODataDate from '../../Common/Date/OffsetODataDate';
/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function OperationScheduledEnd(context, binding = context.binding) {
    let end = '-';
    if (libCommon.isDefined(binding.DisplayEndDateTime)) {
        let odataDate = new OffsetODataDate(context, binding.DisplayEndDateTime, undefined, false, true);
        end = context.formatDatetime(odataDate.date(),'','',{'format': 'short'});
    }
    return end;
}
