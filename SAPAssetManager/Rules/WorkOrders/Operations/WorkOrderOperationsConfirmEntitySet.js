
export default function WorkOrderOperationsConfirmEntitySet(context) {
    let prevPage = context.evaluateTargetPathForAPI('#Page:-Previous');
    let binding = prevPage ? prevPage.binding : context.binding;

    if (binding?.['@odata.type'] === '#sap_mobile.MyWorkOrderHeader') {
		return binding['@odata.readLink'] + '/Operations';
	} else if (binding?.['@odata.type'] === '#sap_mobile.MyWorkOrderOperation') {
		return binding['@odata.readLink'] + '/SubOperations';
	} else {
		return 'MyWorkOrderOperations';
	}
}
