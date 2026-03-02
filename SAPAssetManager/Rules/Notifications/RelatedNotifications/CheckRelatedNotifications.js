import deleteMessage from '../../Common/DeleteEntityOnSuccess';
import Logger from '../../Log/Logger';
import IsEmergencyWorkEnabled from '../../WorkOrders/IsEmergencyWorkEnabled';

export default async function CheckRelatedNotifications(context) {
    const actions = [];

    const relatedNotification = await context.read('/SAPAssetManager/Services/AssetManager.service', 'NotificationHistories', [], `$filter=sap.hasPendingChanges() and NotificationNumber eq '${context.binding.NotificationNumber}' and ReferenceType eq 'P'`).then(result => result.length ? result.getItem(0) : null);
    if (relatedNotification) {
        actions.push(context.executeAction('/SAPAssetManager/Actions/Notifications/RelatedNotifications/RelatedNotificationDiscard.action'));
    } 

    actions.push(checkRelatedWorkOrder(context));

    if (IsEmergencyWorkEnabled(context)) {
        actions.push(discardEmergencyOrder(context));
    }

    return Promise.all(actions).then(() => {
        return deleteMessage(context);
    });
}

async function checkRelatedWorkOrder(context) {
    const workOrder = await context.read('/SAPAssetManager/Services/AssetManager.service', 'MyWorkOrderHeaders', [], `$filter=NotificationNumber eq '${context.binding.NotificationNumber}'`).then(result => result.length ? result.getItem(0) : null);
    const actions = [];

    const emergencyOrderType = context.getGlobalDefinition('/SAPAssetManager/Globals/WorkOrder/EmergencyOrderType.global').getValue();    
    if (workOrder && workOrder.OrderType !== emergencyOrderType) {
        actions.push(context.executeAction({
            'Name': '/SAPAssetManager/Actions/WorkOrders/CreateUpdate/WorkOrderUpdateNotificationNumber.action', 
            'Properties': {
                'Target': {
                    'EntitySet': 'MyWorkOrderHeaders',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'ReadLink': workOrder['@odata.readLink'],
                },
                'Properties': {
                    'NotificationNumber': '',
                },
                'UpdateLinks': [],
            },
        }));
    }

    const objectListsCount = await context.count('/SAPAssetManager/Services/AssetManager.service', 'MyWorkOrderObjectLists', `$filter=NotifNum eq '${context.binding.NotificationNumber}' and OrderId ne ''`);
    if (objectListsCount < 0) {
        actions.push(context.executeAction({
            'Name': '/SAPAssetManager/Actions/ObjectList/CreateUpdate/ObjectListDeleteNotificationForWorkOrder.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'MyWorkOrderObjectLists',
                    'Service': '/SAPAssetManager/Services/AssetManager.service',
                    'QueryOptions': `$filter=NotifNum eq '${context.binding.NotificationNumber}' and OrderId ne ''`,
                },
            }}));
    }

    return Promise.all(actions);
}

async function discardEmergencyOrder(context) {
    const actionResult = context.getActionResult('DiscardResult');
    let data;

    try {
        data = JSON.parse(actionResult?.data || '{}');
    } catch (error) {
        Logger.error('discardEmergencyOrder', error);
        return Promise.resolve();
    }

    if (data.NotifProcessingContext === '01' && data.OrderId) {
        const emergencyOrderType = context.getGlobalDefinition('/SAPAssetManager/Globals/WorkOrder/EmergencyOrderType.global').getValue();
        const filter = `$filter=OrderId eq '${data.OrderId}' and OrderType eq '${emergencyOrderType}'`;
        const order = await context.read('/SAPAssetManager/Services/AssetManager.service', 'MyWorkOrderHeaders', ['OrderId'], filter).then(result => result.length ? result.getItem(0) : null);
        if (order && order['@odata.readLink']) {
            return context.executeAction({
                'Name': '/SAPAssetManager/Actions/Common/GenericDelete.action',
                'Properties': {
                    'Target': {
                        'Service': '/SAPAssetManager/Services/AssetManager.service',
                        'EntitySet': 'MyWorkOrderHeaders',
                        'ReadLink': order['@odata.readLink'],
                    },
                },
            }).catch(error => {
                Logger.error('discardEmergencyOrder', error);
                return Promise.resolve();
            });
        }
    } 

    return Promise.resolve();
}
