import CommonLibrary from '../../../../Common/Library/CommonLibrary';

export default function HandleMeasuringPointsEDTFiltersResetButtonEnabled(controlProxy) {
    const formCellContainer = controlProxy.getPageProxy().getControl('FormCellContainer');
    const resetButton = formCellContainer.getControl('ResetButton');
    const controlValue = CommonLibrary.getControlValue(controlProxy);

    if (controlValue) {
        resetButton.setEnabled(true);
        return;
    }

    const visibleControls = formCellContainer.getControls().filter(control => control.visible === true && control.getName() !== 'ResetButton');
    const controlsWithValue = visibleControls.filter(control => CommonLibrary.getControlValue(control));

    resetButton.setEnabled(controlsWithValue.length > 0);
}
