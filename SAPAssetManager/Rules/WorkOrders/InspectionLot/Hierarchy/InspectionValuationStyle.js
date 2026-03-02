import libVal from '../../../Common/Library/ValidationLibrary';
import InspectionCharacteristicValuationStyles from '../../../InspectionCharacteristics/InspectionCharacteristicValuationStyles';

/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function InspectionValuationStyle(context) {
    const valuationColorsSchema = InspectionCharacteristicValuationStyles(context);
    if (!libVal.evalIsEmpty(context.binding.Valuation) && context.binding.Valuation === 'A') {
        return valuationColorsSchema.ACCEPTED;
    } else if (!libVal.evalIsEmpty(context.binding.Valuation) && context.binding.Valuation === 'R') {
        return valuationColorsSchema.REJECTED;
    }
    return '';
}
