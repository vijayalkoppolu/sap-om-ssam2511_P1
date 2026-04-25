import CommonLibrary from '../../Library/CommonLibrary';

const switchControlAndDateControlMapping = {
    'StartDateSwitch': 'StartDatePicker',
    'ManufactureDateSwitch': 'ManufactureDatePicker',
};

export default function DateSwitchValueChanged(control) {
    const pageProxy = control.getPageProxy();
    const controlName = control.getName();
    const dateControlName = switchControlAndDateControlMapping[controlName];

    if (dateControlName) {
        const startDateControl = CommonLibrary.getControlProxy(pageProxy, dateControlName);

        if (startDateControl) {
            startDateControl.setEditable(control.getValue());
        }
    }
}
