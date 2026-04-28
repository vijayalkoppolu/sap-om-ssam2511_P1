import RedrawFilterToolbar from '../../Filter/RedrawFilterToolbar';

/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function WorkOrderOperationEndDueDateFilter(context) {
    let dateSwitch = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:EndDueDateSwitch');
    let startControl = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:EndDueDateStartFilter');
    let endControl = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:EndDueDateEndFilter');

    startControl.setVisible(dateSwitch.getValue());
    endControl.setVisible(dateSwitch.getValue());

    startControl.redraw();
    endControl.redraw();

    // persist the date filter values
    let clientData = context.evaluateTargetPath('#Page:WorkOrderOperationsListViewPage/#ClientData');
    clientData.EndDueDateSwitch = dateSwitch.getValue();

    RedrawFilterToolbar(context);
}
