import ModifyListViewTableDescriptionField from '../../LCNC/ModifyListViewTableDescriptionField';

export default function MyWorkSubOperationsListPageMetadata(context) {
	let page = context.getPageDefinition('/SAPAssetManager/Pages/WorkOrders/SubOperation/MyWorkSubOperationsListView.page');
	return ModifyListViewTableDescriptionField(context, page, 'MyWorkOrderSubOperation');
}
