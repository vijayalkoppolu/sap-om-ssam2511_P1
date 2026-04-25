import ModifyListViewTableDescriptionField from '../../LCNC/ModifyListViewTableDescriptionField';

export default function MyWorkOperationListPageMetadata(context) {
	let page = context.getPageDefinition('/SAPAssetManager/Pages/WorkOrders/Operations/MyWorkOperationsListView.page');
	return ModifyListViewTableDescriptionField(context, page, 'MyWorkOrderOperation');
}
