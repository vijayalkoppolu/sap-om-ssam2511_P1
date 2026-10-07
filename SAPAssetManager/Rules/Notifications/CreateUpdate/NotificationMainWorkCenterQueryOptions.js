import NotificationLibrary from '../NotificationLibrary';

export default function NotificationMainWorkCenterQueryOptions(context) {
    const plant = context.binding?.HeaderFlocPlanningPlant
        || context.binding?.HeaderEquipPlanningPlant
        || context.binding?.MainWorkCenterPlant
        || NotificationLibrary.NotificationCreateDefaultPlant(context);
    if (plant) {
        return `$filter=PlantId eq '${plant}'&$orderby=ExternalWorkCenterId`;
     }
    return '$orderby=ExternalWorkCenterId';
}
