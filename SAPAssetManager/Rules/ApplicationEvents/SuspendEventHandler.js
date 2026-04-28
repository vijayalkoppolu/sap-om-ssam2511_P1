import ApplicationSettings from '../Common/Library/ApplicationSettings';
import resetPeriodicAutoSync from './ResetPeriodicAutoSync';
import IsAndroid from '../Common/IsAndroid';

export default function SuspendEventHandler(context) {
    //work around from MDK: https://jira.tools.sap/browse/MDKBUG-4074
    if (IsAndroid(context)) {
            context.dismissActivityIndicator();
    } 
    ApplicationSettings.setBoolean(context, 'inBackground', true);
    return resetPeriodicAutoSync(context);
}
