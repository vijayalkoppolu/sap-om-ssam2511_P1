import ApplicationSettings from '../../Common/Library/ApplicationSettings';
import NetworkMonitoringLibrary from '../../Common/Library/NetworkMonitoringLibrary';
import AutoSyncLib from './AutoSyncLibrary';

export default function AutoSyncOnResume(context) {
    ApplicationSettings.remove(context, 'inBackground');
    AutoSyncLib.autoSyncPeriodically(context);
    // check whether in a background network change was triggered, so execute actions
    NetworkMonitoringLibrary.getInstance().executeActions(context);
    return AutoSyncLib.autoSyncOnAppResume(context);
}
