import InspectionLotSetUsageQueryOptions from './InspectionLotSetUsageQueryOptions';
import InspectionCodesSortedPickerItems from '../../../InspectionCharacteristics/InspectionCodesSortedPickerItems';

export default async function InspectionLotSetUsageInspectionCodesPickerItems(context) {
    const queryOptions = await InspectionLotSetUsageQueryOptions(context);
    const udPlanningPlant = context.binding.UDPlant;

    return InspectionCodesSortedPickerItems(context, queryOptions, udPlanningPlant);
}
