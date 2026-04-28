import autoSyncOnResume from './AutoSync/AutoSyncOnResume';
import libConfirm from '../ConfirmationScenarios/ConfirmationScenariosLibrary';
import ApplicationSettings from '../Common/Library/ApplicationSettings';
import isAndroid from '../Common/IsAndroid';

export default function ResumeEventHandler(context) {
    //work around from MDK: https://jira.tools.sap/browse/MDKBUG-4074
    if (isAndroid(context)) {
        context.dismissActivityIndicator();
    } 
    ApplicationSettings.remove(context, 'inBackground');
    libConfirm.checkAppResumedDuringCountDown(context);
    return autoSyncOnResume(context);
}
