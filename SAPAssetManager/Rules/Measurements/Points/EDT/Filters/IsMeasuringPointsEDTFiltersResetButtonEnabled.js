
export default function IsMeasuringPointsEDTFiltersResetButtonEnabled(context) {
    const activeFilters = context.evaluateTargetPathForAPI('#Page:CreateUpdatePage').getClientData().filters?.active || {};
    return Object.keys(activeFilters).length > 0 && Object.values(activeFilters).some(value => !!value);
}
