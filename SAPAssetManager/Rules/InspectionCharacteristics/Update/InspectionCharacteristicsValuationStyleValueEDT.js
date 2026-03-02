import InspectionCharacteristicValuationStyles from '../InspectionCharacteristicValuationStyles';

/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function InspectionCharacteristicsValuationStyleValueEDT(clientAPI) {
    const valuationColorsSchema = InspectionCharacteristicValuationStyles(clientAPI);
    if (clientAPI.binding.InspValuation_Nav && (clientAPI.binding.InspValuation_Nav.Valuation === 'R' || clientAPI.binding.InspValuation_Nav.Valuation === 'F')) {
        return valuationColorsSchema.REJECTED;
    } else if (clientAPI.binding.InspValuation_Nav && clientAPI.binding.InspValuation_Nav.Valuation === 'A') {
        return valuationColorsSchema.ACCEPTED;
    }
    return valuationColorsSchema.NO_VALUATION;
}
