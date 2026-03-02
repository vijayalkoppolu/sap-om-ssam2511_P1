import libLocal from '../Common/Library/LocalizationLibrary';
import libCom from '../Common/Library/CommonLibrary';
import { validateDecimalPlacesBasedOnUom } from './CreateUpdate/ValidationRules/DecimalPlacesValidationBasedOnUom';

export default function CharacteristicLAMValuesCreateUpdateValidation(pageClientAPI) {

    const dict = {};
    libCom.getFieldValue(pageClientAPI, 'StartPoint', '', dict, true);
    libCom.getFieldValue(pageClientAPI, 'EndPoint', '', dict, true);
    libCom.getFieldValue(pageClientAPI, 'Length', '', dict, true);

    const controlNames = ['StartPoint', 'EndPoint', 'Length', 'UOMLstPkr'];
    
    controlNames.forEach(controlName => {
        const control = libCom.getControlProxy(pageClientAPI, controlName);
        libCom.setInlineControlErrorVisibility(control, false);
        control.clearValidation();
    });

    let validations = [];

    validations.push(validateStartPointReadingIsNumeric(pageClientAPI, dict));
    validations.push(validateEndPointReadingIsNumeric(pageClientAPI, dict));
    validations.push(validateLengthIsPositive(pageClientAPI, dict));
    validations.push(validateLengthEqualsEndStartDiff(pageClientAPI, dict));
    validations.push(validateFieldsBasedOnUOM(pageClientAPI, dict));
    
    return Promise.all(validations).then(() => {
        return true;
    }).catch(() => {
        return false;
    });
}
    /**
     * Validate Length is positive
     */

    function validateLengthIsPositive(pageClientAPI, dict) {
        if (libLocal.toNumber(pageClientAPI, dict.Length) > 0) {
            return Promise.resolve(true);
        } else {
            let message = pageClientAPI.localizeText('positive_length');
            libCom.setInlineControlError(pageClientAPI, libCom.getControlProxy(pageClientAPI, 'Length'), message);
            return Promise.reject(false);
        }
    }
    
    /**
     * Validate Length is equal to End Point - Start Point
     */

    function validateLengthEqualsEndStartDiff(pageClientAPI, dict) {
        const start = libLocal.toNumber(pageClientAPI, dict.StartPoint);
        const end = libLocal.toNumber(pageClientAPI, dict.EndPoint);
        if (start && end) {
            const diffFormatted = pageClientAPI.formatNumber((Math.abs(end - start)), '', {useGrouping : false}); // using the same formatting as when we set the length field, otherwise don't match
            if (libLocal.toNumber(pageClientAPI, dict.Length) === libLocal.toNumber(pageClientAPI, diffFormatted)) {
                return Promise.resolve(true);
            } else {
                let message = pageClientAPI.localizeText('validation_length_equal_end_start_diff');
                libCom.setInlineControlError(pageClientAPI, libCom.getControlProxy(pageClientAPI, 'Length'), message);
                return Promise.reject(false);
            }
        } else {
            return Promise.reject(false);
        }
    }

    /**
     * Start Point reading must be numeric for decimal separator according to the device's local.
     */
    function validateStartPointReadingIsNumeric(pageClientAPI, dict) {
        if (libLocal.isNumber(pageClientAPI, dict.StartPoint)) {
            return Promise.resolve(true);
        } else {
            let message = pageClientAPI.localizeText('start_point_is_required');
            libCom.setInlineControlError(pageClientAPI, libCom.getControlProxy(pageClientAPI, 'StartPoint'), message);
            return Promise.reject(false);
        }
    }

    /**
     * End Point reading must be numeric for decimal separator according to the device's local.
     */
    function validateEndPointReadingIsNumeric(pageClientAPI, dict) {

        if (libLocal.isNumber(pageClientAPI, dict.EndPoint)) {
            return Promise.resolve(true);
        } else {
            let message = pageClientAPI.localizeText('end_point_is_required');
            libCom.setInlineControlError(pageClientAPI, libCom.getControlProxy(pageClientAPI, 'EndPoint'), message);
            return Promise.reject(false);
        }
    }

    function validateFieldsBasedOnUOM(pageClientAPI, dict) {
        const uom = libCom.getControlValue(pageClientAPI.getControls()[0].getControl('UOMLstPkr'));
        if (uom) {
            return Promise.all([
                validateDecimalPlacesBasedOnUom(pageClientAPI, uom, dict.StartPoint),
                validateDecimalPlacesBasedOnUom(pageClientAPI, uom, dict.EndPoint),
                validateDecimalPlacesBasedOnUom(pageClientAPI, uom, dict.Length),
            ]).then(results => {
                return results.every(result => result.isValid) ? Promise.resolve(true) : Promise.reject(false);
            });
        }

        let message = pageClientAPI.localizeText('field_is_required');
        libCom.setInlineControlError(pageClientAPI, libCom.getControlProxy(pageClientAPI, 'UOMLstPkr'), message);
        return Promise.reject(false);
    }
