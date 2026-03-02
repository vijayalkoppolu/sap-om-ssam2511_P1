const VALUATION_COLORS_LIGHT_MODE = {
    ACCEPTED: { FontColor: '107E3E' },
    REJECTED: { FontColor: 'BB0000' },
    NO_VALUATION: { FontColor: '76767B' },
};
const VALUATION_COLORS_DARK_MODE = {
    ACCEPTED: { FontColor: '5DC122' },
    REJECTED: { FontColor: 'FF5C77' },
    NO_VALUATION: { FontColor: '76767B' },
};

/**
 * Get colors for valuation cell based on the current appearance mode.
 * @param {IClientAPI} context 
 * @returns Object with color styles.
 */
export default function InspectionCharacteristicValuationStyles(context) {
    return context.getAppearanceMode() === 'dark' ? VALUATION_COLORS_DARK_MODE : VALUATION_COLORS_LIGHT_MODE;
}
