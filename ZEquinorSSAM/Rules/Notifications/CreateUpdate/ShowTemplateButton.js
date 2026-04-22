import common from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';

/**
* Show/hide "Use Template" button
* @param {IClientAPI} context
*/
export default function ShowTemplateButton(context) {
	// commented this section out as per request from Equinor since they do not want to use templates for now, but we can easily enable it again in the future if needed by just uncommenting this code
	// if (common.IsOnCreate(context)) {
	// 	return context.count('/SAPAssetManager/Services/AssetManager.service', 'LongTextTemplates', '').then(count => {
	// 		return count > 0;
	// 	}).catch(error => {
	// 		Logger.error('Error in ShowTemplateButton: ' + error);
	// 		return false;
	// 	});
	// }

	return Promise.resolve(false);
}
