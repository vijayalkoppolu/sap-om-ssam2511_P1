import RedrawFilterToolbar from '../../Filter/RedrawFilterToolbar';

/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function WorkOrderOperationStartDueDateFilter(context) {
    let dateSwitch = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:StartDueDateSwitch');
    let startControl = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:StartDueDateStartFilter');
    let endControl = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:StartDueDateEndFilter');

    startControl.setVisible(dateSwitch.getValue());
    endControl.setVisible(dateSwitch.getValue());

    startControl.redraw();
    endControl.redraw();

    // persist the date filter values
    let clientData = context.evaluateTargetPath('#Page:WorkOrderOperationsListViewPage/#ClientData');
    clientData.StartDueDateSwitch = dateSwitch.getValue();

    RedrawFilterToolbar(context);
}
