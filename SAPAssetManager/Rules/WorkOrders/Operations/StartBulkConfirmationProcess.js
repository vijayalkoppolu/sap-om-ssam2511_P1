import { IsBulkConfirmationSignatureRequired, ResetBulkConfirmationSignatureFlow, RunBulkConfirmationSignatureFlow } from './BulkConfirmationLibrary';
import WorkOrderOperationsConfirmation from './WorkOrderOperationsConfirmation';
import Logger from '../../Log/Logger';
import libCom from '../../Common/Library/CommonLibrary';
import WorkOrderSubOperationsConfirmation from '../SubOperations/WorkOrderSubOperationsConfirmation';
import libTelemetry from '../../Extensions/EventLoggers/Telemetry/TelemetryLibrary';

export default function StartBulkConfirmationProcess(context) {
    libTelemetry.logUserEvent(context,
        context.getGlobalDefinition('/SAPAssetManager/Globals/Features/PMConfirmation.global').getValue(),
        libTelemetry.EVENT_TYPE_COMPLETE, 'MultiSelect');

    return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
        if (context.binding?.selectedOperations?.[0]?.binding['@odata.type'] === '#sap_mobile.MyWorkOrderSubOperation') {
            return WorkOrderSubOperationsConfirmation(context);
        }

        const assignmentType = libCom.getWorkOrderAssnTypeLevel(context);
        if (assignmentType === 'Operation' && IsBulkConfirmationSignatureRequired(context)) {
            return RunBulkConfirmationSignatureFlow(context)
                .catch(() => {
                    ResetBulkConfirmationSignatureFlow(context);
                    Logger.info('User rejected a mandatory signature');
                });
        }

        return WorkOrderOperationsConfirmation(context);
    });
}
