import libCommon from '../../Common/Library/CommonLibrary';
import OffsetODataDate from '../../Common/Date/OffsetODataDate';

/**
* Pick the due date color for display
* @param {IClientAPI} context
*/
export default function OperationDueDateColor(context) {
    if (libCommon.isDefined(context.binding.DisplayEndDateTime)) {
        let schedEnd = new OffsetODataDate(context, context.binding.DisplayEndDateTime, undefined, false, true);
        let now = new Date();
        if (schedEnd.date() < now) {
            return 'Red';
        } else {
            return 'Green';
        }
    }
}
