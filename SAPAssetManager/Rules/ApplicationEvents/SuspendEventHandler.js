import ApplicationSettings from '../Common/Library/ApplicationSettings';
import resetPeriodicAutoSync from './ResetPeriodicAutoSync';

export default function SuspendEventHandler(context) {
    ApplicationSettings.setBoolean(context, 'inBackground', true);
    return resetPeriodicAutoSync(context);
}
