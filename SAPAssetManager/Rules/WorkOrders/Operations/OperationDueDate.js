import OperationScheduledStart from './OperationScheduledStart';
import OperationScheduledEnd from './OperationScheduledEnd';
import OperationScheduledStartVisible from './Details/OperationScheduledStartVisible';
import OperationScheduledEndVisible from './Details/OperationScheduledEndVisible';

export default function OperationDueDate(context) {
    if (OperationScheduledStartVisible(context) && OperationScheduledEndVisible(context)) {
        return OperationScheduledStart(context) + ' - ' + OperationScheduledEnd(context);
    } else if (OperationScheduledStartVisible(context)) {
        return OperationScheduledStart(context);
    } else if (OperationScheduledEndVisible(context)) {
        return OperationScheduledEnd(context);
    } else {
        return context.localizeText('no_due_date');
    }
}
