import NotificationLibrary from '../NotificationLibrary';

export default function NotificationMainWorkCenterQueryOptions(context) {
    const binding = context.getPageProxy ? context.getPageProxy().binding : context.binding;
    const plant = binding?.PlanningPlant || NotificationLibrary.NotificationCreateDefaultPlant(context);
    if (plant) {
        return `$filter=PlantId eq '${plant}'&$orderby=ExternalWorkCenterId`;
    }
    return '$orderby=ExternalWorkCenterId';
}
