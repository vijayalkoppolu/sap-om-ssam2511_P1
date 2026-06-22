import common from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import notif from '../../../../SAPAssetManager/Rules/Notifications/NotificationLibrary';

export default function NotificationHistoryLinks(context) {
    let priorityType = context.binding ? context.binding.PriorityType : '';

    if (!priorityType) {
        const notificationType = notif.NotificationCreateUpdateTypeLstPkrValue(context);

        return context.read('/SAPAssetManager/Services/AssetManager.service', 'NotificationTypes', [], `$filter=NotifType eq '${notificationType}'`).then(function(data) {
            if (data.length) {
                priorityType = data.getItem(0).PriorityType;
            }
            return createLinks(context, priorityType);
        });
    }

    return createLinks(context, priorityType);
}

function createLinks(context, priorityType) {
    let linkPromises = [];
    const links = [];

    // Equinor: Only add HistoryPriority_Nav link when priority values are available
    // Priority is intentionally excluded from Equinor notifications to prevent it from being sent to S/4
    const priorityValue = notif.NotificationCreateUpdatePrioritySegValue(context);
    if (priorityType && priorityValue) {
        links.push({
            'Property': 'HistoryPriority_Nav',
            'Target':
            {
                'EntitySet': 'Priorities',
                'ReadLink': `Priorities(PriorityType='${priorityType}',Priority='${priorityValue}')`,
            },
        });
    }

    if (context.binding && context.binding['@odata.readLink'] && context.binding['@odata.readLink'].includes('MyWorkOrderHeader')) {
        if (common.getStateVariable(context, 'isFollowOn')) {
            links.push({
                'Property': 'NotificationHeader_Nav',
                'Target':
                {
                    'EntitySet': 'MyNotificationHeaders',
                    'ReadLink': 'pending_1',
                },
            });
        }

        links.push({
            'Property': 'RelatedWO_Nav',
            'Target':
            {
                'EntitySet': 'MyWorkOrderHeaders',
                'ReadLink': `MyWorkOrderHeaders('${context.binding.OrderId}')`,
            },
        });
    }

    const flocValue = common.getTargetPathValue(context, '#Control:FuncLocHierarchyExtensionControl/#Value');
    const equipmentValue = common.getTargetPathValue(context, '#Control:EquipHierarchyExtensionControl/#Value');
    if (equipmentValue && equipmentValue !== '' && !common.isCurrentReadLinkLocal(equipmentValue)) {
        links.push({
            'Property': 'Equipment_Nav',
            'Target':
            {
                'EntitySet': 'MyEquipments',
                'ReadLink': `MyEquipments('${equipmentValue}')`,
            },
        });
    } else if (flocValue && flocValue !== '' && !common.isCurrentReadLinkLocal(flocValue)) {
        links.push({
            'Property': 'FuncLoc_Nav',
            'Target':
            {
                'EntitySet': 'MyFunctionalLocations',
                'ReadLink': `MyFunctionalLocations('${flocValue}')`,
            },
        });
    }
    if (equipmentValue && equipmentValue !== '' && common.isCurrentReadLinkLocal(equipmentValue)) {
        linkPromises.push(
            common.getEntityProperty(context, `MyEquipments(${equipmentValue})`, 'EquipId').then(equipmentId => {
                let equipmentLink = context.createLinkSpecifierProxy(
                    'Equipment_Nav',
                    'MyEquipments',
                    `$filter=EquipId eq '${equipmentId}'`,
                );
                links.push(equipmentLink.getSpecifier());
                return links;
            }),
        );
    } else if (flocValue && flocValue !== '' && common.isCurrentReadLinkLocal(flocValue)) {
        linkPromises.push(
            common.getEntityProperty(context, `MyFunctionalLocations(${flocValue})`, 'FuncLocIdIntern').then(funcLocId => {
                let flocLink = context.createLinkSpecifierProxy(
                    'FuncLoc_Nav',
                    'MyFunctionalLocations',
                    `$filter=FuncLocIdIntern eq '${funcLocId}'`,
                );
                links.push(flocLink.getSpecifier());
                return links;
            }),
        );
    }

    if (linkPromises.length > 0) {
        return Promise.all(linkPromises).then(() => {
            return links;
        });
    }
    return links;
}
