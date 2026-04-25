/**
* Update planning group list picker from equipment hierarchy picker
* @param {IClientAPI} context
*/
export default async function UpdatePlanningGroup(context) {
	const pageProxy = context.getPageProxy();
	const plannerGroupListPickerControl = pageProxy.getControl('FormCellContainer').getControl('PlannerGroupListPicker');
	const equipPickerValue = pageProxy.evaluateTargetPath('#Control:EquipHierarchyExtensionControl').getValue();

	if (equipPickerValue) {
		let plannerGroup = await context.read('/SAPAssetManager/Services/AssetManager.service', `MyEquipments('${equipPickerValue}')`, [], '')
			.then(res => res.getItem(0).PlannerGroup);

		if (plannerGroup) {
			plannerGroupListPickerControl.setValue(plannerGroup);
		}
	}

	return Promise.resolve();
}
