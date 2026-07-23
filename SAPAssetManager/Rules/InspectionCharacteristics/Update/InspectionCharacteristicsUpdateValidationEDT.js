import inspCharLib from './InspectionCharacteristics';
import InspectionCharacteristicsLinkedMeasuringPointValidationEDT from './InspectionCharacteristicsLinkedMeasuringPointValidationEDT';
import { InspectionValuationVar } from '../../Common/Library/GlobalInspectionResults';
import libVal from '../../Common/Library/ValidationLibrary';
import LocalizationLibrary from '../../Common/Library/LocalizationLibrary';

export const MaxCommentLength = 40;

export default async function InspectionCharacteristicsUpdateValidationEDT(context, extension, row) {
    let binding = row.OdataBinding;
    let clientAPI = extension.context.clientAPI;
    let rowIndex = row.RowIndex;
    if (rowIndex !== -1) {
        let quantitativeCell = extension.getRowCellByName(rowIndex, 'Quantitive');
        let qualitativeCell = extension.getRowCellByName(rowIndex, 'Qualitative');
        let calculateCell = extension.getRowCellByName(rowIndex, 'Calculate');
        let remarksCell = extension.getRowCellByName(rowIndex, 'Remarks');
        let valuationCell = extension.getRowCellByName(rowIndex, 'Valuation');
        if (quantitativeCell) {
            quantitativeCell.clearValidation();
            if (inspCharLib.isRequired(binding) && libVal.evalIsEmpty(quantitativeCell.getValue())) {
                quantitativeCell.applyValidation(context.localizeText('field_is_required'));
                return false;
            }
        }
        if (qualitativeCell) {
            qualitativeCell.clearValidation();
            if (inspCharLib.isRequired(binding) && libVal.evalIsEmpty(qualitativeCell.getValue())) {
                qualitativeCell.applyValidation(context.localizeText('field_is_required'));
                return false;
            }
        }
        if (calculateCell) {
            calculateCell.clearValidation();
            if (inspCharLib.isRequired(binding) && libVal.evalIsEmpty(calculateCell.getValue())) {
                calculateCell.applyValidation(context.localizeText('field_is_required'));
                return false;
            }
        }

        let preComputedValuation;
        if (binding.RemarksRequiredOnRejection === 'X') {
            if (inspCharLib.isQuantitative(binding) || inspCharLib.isCalculatedAndQuantitative(binding)) {
                let cellValue;
                if (inspCharLib.isQuantitative(binding)) {
                    cellValue = quantitativeCell ? quantitativeCell.getValue() : undefined;
                } else if (inspCharLib.isCalculatedAndQuantitative(binding)) {
                    cellValue = calculateCell ? calculateCell.getValue() : undefined;
                }
                if (cellValue) {
                    const numValue = parseFloat(cellValue);
                    if (!Number.isNaN(numValue)) {
                        let valueAccepted = true;
                        if (binding.LowerLimitFlag === 'X' && numValue < binding.LowerLimit) {
                            valueAccepted = false;
                        }
                        if (valueAccepted && binding.UpperLimitFlag === 'X' && numValue > binding.UpperLimit) {
                            valueAccepted = false;
                        }
                        preComputedValuation = valueAccepted ? 'A' : 'R';
                    }
                }
            } else if (inspCharLib.isQualitative(binding) && binding.Valuation) {
                preComputedValuation = binding.Valuation;
            }
        }

        let isCommentValid = validateComment(context, remarksCell, valuationCell, binding, preComputedValuation);
        if (!isCommentValid) {
            return isCommentValid;
        }
        if (inspCharLib.isQuantitative(binding) || inspCharLib.isCalculatedAndQuantitative(binding)) {
            let value;
            if (inspCharLib.isQuantitative(binding)) {
                value = quantitativeCell.getValue();
            } else if (inspCharLib.isCalculatedAndQuantitative(binding)) {
                value = calculateCell.getValue();
            }
            if (value) {
                value = parseFloat(LocalizationLibrary.toNumber(context, value));
                if (Number.isNaN(value)) {
                    if (inspCharLib.isQuantitative(binding)) {
                        quantitativeCell.applyValidation(context.localizeText('invalid_reading'));
                    } else if (inspCharLib.isCalculatedAndQuantitative(binding)) {
                        calculateCell.applyValidation(context.localizeText('invalid_reading'));
                    }
                    return false;
                }
                let valueAccepted = true;
                let message = '';
                if ((binding.LowerLimitFlag === 'X' && value < binding.LowerLimit) || (binding.UpperLimitFlag === 'X' && value > binding.UpperLimit)) {
                    valueAccepted = false;
                }

                if (binding.CharId !== '' && binding.CharId !== '0000000000') { //if a linked measuring point exists then validate from measuring point's info
                    let linkedMeasuringPoint = await inspCharLib.getLinkedMeasuringPoint(clientAPI, binding);
                    if (linkedMeasuringPoint) {
                        await InspectionCharacteristicsLinkedMeasuringPointValidationEDT(clientAPI, linkedMeasuringPoint, value).then((mesuringPointResult) => {
                            if (mesuringPointResult) {
                                if (mesuringPointResult.Type === 'w' || mesuringPointResult.Type === 'e') {
                                    valueAccepted = false;
                                }
                                message += mesuringPointResult.Message;
                            }
                        }).catch(() => {
                            return false;
                        });
                    }
                }
                if (message) {
                    if (inspCharLib.isQuantitative(binding)) {
                        quantitativeCell.applyValidation(message);
                    } else if (inspCharLib.isCalculatedAndQuantitative(binding)) {
                        calculateCell.applyValidation(message);
                    }
                    return valueAccepted;
                }
                return true;
            }
        }
        return true;
    }
}

export function validateComment(context, remarksCell, valuationCell, binding, preComputedValuation) {
    const isMandatory = binding.RemarksRequired === 'X';
    const isMandatoryOnRejection = binding.RemarksRequiredOnRejection === 'X';

    if (remarksCell) {
        remarksCell.clearValidation();

        let comment = remarksCell.getValue();
        if (!comment && isMandatory) {
            remarksCell.applyValidation(context.localizeText('comment_is_mandatory'));
            return false;
        }

        if (!comment && isMandatoryOnRejection) {
            const isRejection = isRejectionValuation(valuationCell, preComputedValuation);
            if (isRejection) {
                remarksCell.applyValidation(context.localizeText('comment_is_mandatory'));
                return false;
            }
        }

        if (comment && comment.length > MaxCommentLength) {
            remarksCell.applyValidation(context.localizeText('maximum_field_length', [MaxCommentLength]));
            return false;
        }
    }
    return true;
}

export function isRejectionValuation(valuationCell, preComputedValuation) {
    if (preComputedValuation !== undefined) {
        return preComputedValuation === 'R' || preComputedValuation === 'F';
    }
    let valuations = InspectionValuationVar.getInspectionResultValuations();
    let valuation = valuations[valuationCell.getValue()];
    return (valuation === 'R' || valuation === 'F');
}

export async function validateDependentCharacteristics(context, extension, row) {
    let rowBinding = row.OdataBinding;
    let rowIndex = row.RowIndex;
    if (rowBinding.InspCharDependency_Nav && rowBinding.InspCharDependency_Nav.length > 0) {
        let rowBindings = extension.getRowBindings();
        let valuations = InspectionValuationVar.getInspectionResultValuations();
        let valuationCell = extension.getRowCellByName(rowIndex, 'Valuation');
        let valuation = valuations[valuationCell.getValue()];
        let dependentChars = [];
        for (const char of rowBinding.InspCharDependency_Nav) {
            const dependentCharBinding = rowBindings.find(item => item.InspectionChar === char.DependentInspChar && item.InspectionNode === char.InspectionNode);
            const dependentCharIndex = rowBindings.findIndex(item => item.InspectionChar === char.DependentInspChar && item.InspectionNode === char.InspectionNode);
            console.log('index : ' + dependentCharIndex);
            let isQualitative = false;
            let isQuantitative = false;
            let isCalculate = false;
            if (dependentCharBinding) {
                let editable = false;
                if (char.AfterAcceptance === 'X') {
                    editable = valuation === 'A';
                    if (inspCharLib.isQualitative(dependentCharBinding)) {
                        isQualitative = true;
                    } else if (inspCharLib.isQuantitative(dependentCharBinding)) {
                        isQuantitative = true;
                    } else if (inspCharLib.isCalculatedAndQuantitative(dependentCharBinding)) {
                        isCalculate = true;
                    }
                } else if (char.AfterRejection === 'X') {
                    editable = valuation === 'R';
                    if (inspCharLib.isQualitative(dependentCharBinding)) {
                        isQualitative = true;
                    } else if (inspCharLib.isQuantitative(dependentCharBinding)) {
                        isQuantitative = true;
                    } else if (inspCharLib.isCalculatedAndQuantitative(dependentCharBinding)) {
                        isCalculate = true;
                    }
                }
                let dependentCell;
                if (isQualitative) {
                    dependentCell = extension.getRowCellByName(dependentCharIndex, 'Qualitative');
                } else if (isQuantitative) {
                    dependentCell = extension.getRowCellByName(dependentCharIndex, 'Quantitive');
                } else if (isCalculate) {
                    dependentCell = extension.getRowCellByName(dependentCharIndex, 'Calculate');
                }
                if (editable) {
                    let dependentValue = dependentCell.getValue();
                    if (libVal.evalIsEmpty(dependentValue)) {
                        dependentChars.push(dependentCharBinding);
                    }
                }
            }
        }
        if (dependentChars && dependentChars.length > 0) {
            const result = await context.executeAction({
                'Name': '/SAPAssetManager/Actions/Common/GenericWarningDialog.action',
                'Properties': {
                    'Title': context.localizeText('confirm'),
                    'Message': context.localizeText('dependent_chars_warning_msg', [
                        `${rowBinding.InspectionChar} - ${rowBinding.ShortDesc}`,
                        dependentChars.map(char => `${char.InspectionChar} - "${char.ShortDesc}"`).join(', '),
                    ]),
                    'OKCaption': context.localizeText('confirm'),
                    'CancelCaption': context.localizeText('cancel'),
                },
            });
            let selection = JSON.parse(result.data);
            if (selection === false) {
                return false;
            }
        }
    }
    return true;
}
