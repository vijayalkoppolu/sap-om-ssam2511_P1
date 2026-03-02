import libCommon from '../../Common/Library/CommonLibrary';
import assnType from '../../Common/Library/AssignmentType';
import lamCopy from './WorkOrderCreateLAMCopy';
import { WorkOrderLibrary as libWo } from '../WorkOrderLibrary';
import Logger from '../../Log/Logger';

export default async function WorkOrderCreateFromNotificationNav(context) {
    //Remove variable FollowUpFlagPage before create
    libWo.removeFollowUpFlagPage(context);

    //Set the global TransactionType variable to CREATE
    libCommon.setOnCreateUpdateFlag(context, 'CREATE');

    //set the CHANGSET flag to true
    libCommon.setOnChangesetFlag(context, true);
    libCommon.setOnWOChangesetFlag(context, true);
    libCommon.resetChangeSetActionCounter(context);

    let binding = context.binding;
    let notificationWorkCenterExternalId = binding.MainWorkCenter ? await getWorkCenterExternalId(context, binding.MainWorkCenter) : null;

    let actionBinding = {
        OrderDescription: binding.NotificationDescription,
        PlanningPlant: binding.PlanningPlant,
        OrderType: libCommon.getAppParam(context, 'WORKORDER', 'OrderType'),
        Priority: binding.Priority,
        HeaderFunctionLocation: binding.HeaderFunctionLocation,
        HeaderEquipment: binding.HeaderEquipment,
        BusinessArea: '',
        MainWorkCenterPlant: binding.MainWorkCenterPlant || assnType.getWorkOrderFieldDefault('WorkOrderHeader', 'WorkCenterPlant'),
        MainWorkCenter: notificationWorkCenterExternalId || assnType.getWorkOrderFieldDefault('WorkOrderHeader', 'MainWorkCenter'),
        FromNotification: true,
        NotificationNumber: context.binding.NotificationNumber,
    };

    libCommon.setStateVariable(context, 'WODefaultPlanningPlant', actionBinding.PlanningPlant);
    libCommon.setStateVariable(context, 'WODefaultMainWorkCenter', actionBinding.MainWorkCenter);
    libCommon.setStateVariable(context, 'WODefaultWorkCenterPlant', actionBinding.MainWorkCenterPlant);

    context.setActionBinding(actionBinding);
    libCommon.setStateVariable(context, 'LocalId', ''); //Reset before starting create
    return context.executeAction('/SAPAssetManager/Actions/WorkOrders/CreateUpdate/WorkOrderCreateChangeset.action').then(() => {
        return lamCopy(context).then(() => {
            //Check if a new workorder was created successfully. If so, update the current Notification with the new OrderId
            let localId = libCommon.getStateVariable(context, 'LocalId');
            if (localId) {
                binding.LocalWorkOrderId = localId;
                binding.LocalWorkOrderReadLink = "MyWorkOrderHeaders('" + localId + "')";
                return context.executeAction('/SAPAssetManager/Actions/Notifications/CreateUpdate/NotificationUpdateWorkOrderId.action');
            }

            return Promise.resolve(true);
        });
        
    });
}

function getWorkCenterExternalId(context, mainWorkCenter) {
    const filterQuery = `$filter=WorkCenterId eq '${mainWorkCenter}' and ObjectType eq 'A'`;
    return context.read('/SAPAssetManager/Services/AssetManager.service', 'WorkCenters', [], filterQuery)
        .then(result => {
            return result.length ? result.getItem(0).ExternalWorkCenterId : null;
        })
        .catch(error => {
            Logger.error('getWorkCenterExternalId', error);
            return null;
        });
}
