import libCommon from '../../Common/Library/CommonLibrary';
import { getDefaultNotificationTypeObject } from '../NotificationTypePkrDefaultOnCreate';
import lamCopy from './NotificationCreateLAMCopy';
import NotificationCreateUpdatePartnerType from './NotificationCreateUpdatePartnerType';
import libNotif from '../NotificationLibrary';
import PreloadHierarchyListPickerValues from '../../HierarchyControl/PreloadHierarchyListPickerValues';

export default function NotificationCreateChangeSetNav(context, bindingParams) {
    libCommon.setOnChangesetFlag(context, true);
    libCommon.resetChangeSetActionCounter(context);
    libCommon.setOnCreateUpdateFlag(context, 'CREATE');

    //set the follow up flag for Equipment
    libNotif.setAddFromEquipmentFlag(context, true);
    //set the follow up flag for Functional Location
    libNotif.setAddFromFuncLocFlag(context, true);

    let contextBinding = libCommon.setBindingObject(context);
    if (!contextBinding && context.getActionBinding) {
        contextBinding = context.getActionBinding();
    }
    if (!contextBinding && context.getPageProxy().getActionBinding()) {
        contextBinding = context.getPageProxy().getActionBinding();
    }
    PreloadHierarchyListPickerValues(context, '/SAPAssetManager/Pages/Notifications/NotificationCreateUpdate.page');
    return getDefaultNotificationTypeObject(context).then(notificationTypeDefaultObject => {
        let binding = { 'NotifPriority': {} };
        const notifTypeDefault = notificationTypeDefaultObject?.NotifType;
        if (notificationTypeDefaultObject?.PriorityType) // Ensure notification create doesn't bomb out if no default is set
            binding.PriorityType = notificationTypeDefaultObject?.PriorityType;
        if (bindingParams) {
            Object.assign(binding, bindingParams);
        }
        if (notifTypeDefault && !binding.NotificationType) {
            binding.NotificationType = notifTypeDefault;
        }
        // Helper function to fetch WorkCenter details for online entities
        const fetchWorkCenterForOnlineEntity = (workCenterId, objectType, planningPlant) => {
            if (!workCenterId) {
                return Promise.resolve(null);
            }
            // For online entities, WorkCenter is just an ID field, not a navigation
            // We need to look it up in the WorkCenters entity using the WorkCenterId and ObjectType
            const filter = `$filter=WorkCenterId eq '${workCenterId}' and ObjectType eq '${objectType}'`;
            return context.read('/SAPAssetManager/Services/AssetManager.service', 'WorkCenters', ['WorkCenterId', 'ExternalWorkCenterId'], filter).then(result => {
                if (result && result.length > 0) {
                    const wc = result.getItem(0);
                    return {
                        WorkCenterId: wc.WorkCenterId,
                        ExternalWorkCenterId: wc.ExternalWorkCenterId,
                    };
                }
                return null;
            }).catch(() => {
                return null;
            });
        };

        // Helper function to continue with the binding after setting work center
        const continueWithBinding = (binding) => {
            const pageProxy = context.getPageProxy();
            pageProxy.setActionBinding(binding);
            libCommon.setStateVariable(context, 'LocalId', ''); //Reset before starting create
            libCommon.setStateVariable(context, 'lastLocalItemNumber', '');
            libCommon.setStateVariable(context,'NotifType', notifTypeDefault);
            return NotificationCreateUpdatePartnerType(context, context.binding, notifTypeDefault).finally(() => {
                return context.executeAction('/SAPAssetManager/Actions/Notifications/ChangeSet/NotificationCreateChangeset.action').then(() => {
                    return lamCopy(context);
                });
            });
        };

        if (contextBinding?.['@odata.type'] === '#sap_mobile.MyFunctionalLocation' || contextBinding?.['@odata.type'] === '#sap_mobile.FunctionalLocation') {
            binding.HeaderFunctionLocation = contextBinding.FuncLocIdIntern;
            binding.HeaderFlocId = contextBinding.FuncLocId;
            binding.HeaderFlocDescription = contextBinding.FuncLocDesc;
            binding.HeaderFlocPlanningPlant = contextBinding.PlanningPlant;
            binding.OnlineFloc = contextBinding['@odata.type'] === '#sap_mobile.FunctionalLocation';
            // For online FLOC, WorkCenter is a simple field, not a navigation property
            if (binding.OnlineFloc && contextBinding.WorkCenter) {
                // ObjectType for functional locations is 'A'
                return fetchWorkCenterForOnlineEntity(contextBinding.WorkCenter, 'A', contextBinding.PlanningPlant).then(wcNav => {
                    if (wcNav) {
                        binding.MainWorkCenter = wcNav.WorkCenterId;
                        binding.MainWorkCenterExternal = wcNav.ExternalWorkCenterId;
                    }
                    return continueWithBinding(binding);
                });
            }


            binding.MainWorkCenter = contextBinding.WorkCenter_Main_Nav?.WorkCenterId || contextBinding.WorkCenter;
            binding.MainWorkCenterExternal = contextBinding.WorkCenter_Main_Nav?.ExternalWorkCenterId;
            binding.PlanningPlant = contextBinding.PlanningPlant;
        } else if (contextBinding && contextBinding['@odata.type'] === '#sap_mobile.MyEquipment') {
            binding.HeaderEquipment = contextBinding.EquipId;
            binding.HeaderFunctionLocation = contextBinding.FuncLocIdIntern || contextBinding.FunctionalLocation?.FuncLocIdIntern;
            binding.HeaderEquipPlanningPlant = contextBinding.PlanningPlant;
            binding.MainWorkCenter = contextBinding.WorkCenter_Main_Nav?.WorkCenterId || contextBinding.WorkCenter;
            binding.PlanningPlant = contextBinding.PlanningPlant;
            binding.MainWorkCenterExternal = contextBinding.WorkCenter_Main_Nav?.ExternalWorkCenterId;
        } else if (contextBinding && contextBinding['@odata.type'] === '#sap_mobile.Equipment') { // online use case
            binding.HeaderEquipment = contextBinding.EquipId;
            binding.HeaderEquipmentDesc = contextBinding.EquipDesc;
            binding.HeaderEquipPlanningPlant = contextBinding.PlanningPlant;
            binding.OnlineEquipment = true;

            // For online Equipment, WorkCenter is a simple field, not a navigation property
            if (contextBinding.WorkCenter && contextBinding.PMObjectType) {
                return fetchWorkCenterForOnlineEntity(contextBinding.WorkCenter, contextBinding.PMObjectType, contextBinding.PlanningPlant).then(wcNav => {
                    if (wcNav) {
                        binding.MainWorkCenter = wcNav.WorkCenterId;
                        binding.MainWorkCenterExternal = wcNav.ExternalWorkCenterId;
                    }
                    return continueWithBinding(binding);
                });
            }

           binding.MainWorkCenter = contextBinding.WorkCenter_Main_Nav?.WorkCenterId;
            binding.MainWorkCenterExternal = contextBinding.WorkCenter_Main_Nav?.ExternalWorkCenterId;
         }

        return continueWithBinding(binding);
    });
}
