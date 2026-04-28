import libCommon from '../../Common/Library/CommonLibrary';
import OffsetODataDate from '../../Common/Date/OffsetODataDate';

/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function OperationScheduledStart(context, binding = context.binding) {
    let start = '-';
    if (libCommon.isDefined(binding.DisplayStartDateTime)) {
        let odataDate = new OffsetODataDate(context, binding.DisplayStartDateTime, undefined, false, true);
        start = context.formatDatetime(odataDate.date(),'','',{'format': 'short'});
    }
    return start;
}
