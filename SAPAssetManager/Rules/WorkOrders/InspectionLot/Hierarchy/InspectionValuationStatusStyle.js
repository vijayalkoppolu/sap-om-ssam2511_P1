import libVal from '../../../Common/Library/ValidationLibrary';
import InspectionCharacteristicValuationStyles from '../../../InspectionCharacteristics/InspectionCharacteristicValuationStyles';

/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function InspectionValuationStatusStyle(context) {
    const valuationColorsSchema = InspectionCharacteristicValuationStyles(context);
    if (!libVal.evalIsEmpty(context.binding.ValuationStatus) && context.binding.ValuationStatus === 'A') {
        return valuationColorsSchema.ACCEPTED;
    } else if (!libVal.evalIsEmpty(context.binding.ValuationStatus) && context.binding.ValuationStatus === 'R') {
        return valuationColorsSchema.REJECTED;
    }
    return '';
}
