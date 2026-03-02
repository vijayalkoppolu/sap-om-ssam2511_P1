import common from '../../Common/Library/CommonLibrary';

export default function breakdownOnChange(context) {
    const pageProxy = context.getPageProxy();
    const onCreate = common.IsOnCreate(context);

    let toggle = context.getValue() === true;

    pageProxy.evaluateTargetPath('#Control:MalfunctionStartDatePicker').setVisible(toggle);
    pageProxy.evaluateTargetPath('#Control:MalfunctionStartTimePicker').setVisible(toggle);
    pageProxy.evaluateTargetPath('#Control:BreakdownStartSwitch').setVisible(toggle);

    if (!onCreate) {
        pageProxy.evaluateTargetPath('#Control:BreakdownEndSwitch').setVisible(toggle);
        pageProxy.evaluateTargetPath('#Control:MalfunctionEndDatePicker').setVisible(toggle);
        pageProxy.evaluateTargetPath('#Control:MalfunctionEndTimePicker').setVisible(toggle);
    }
}
