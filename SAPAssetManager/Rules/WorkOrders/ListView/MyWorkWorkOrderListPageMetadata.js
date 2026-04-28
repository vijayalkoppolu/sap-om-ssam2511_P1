import ModifyListViewTableDescriptionField from '../../LCNC/ModifyListViewTableDescriptionField';

export default function MyWorkWorkOrderListPageMetadata(context) {
	let page = context.getPageDefinition('/SAPAssetManager/Pages/WorkOrders/MyWorkWorkOrdersListView.page');
	return ModifyListViewTableDescriptionField(context, page, 'MyWorkOrderHeader');
}
