import libVal from '../Common/Library/ValidationLibrary';
import GetHTMLPath from '../Documents/GetHTMLPath';
import Logger from '../Log/Logger';
import IsS4ServiceIntegrationEnabled from '../ServiceOrders/IsS4ServiceIntegrationEnabled';
import IsPMWorkOrderEnabled from '../UserFeatures/IsPMWorkOrderEnabled';

export default function PDFTemplatePath(context, showError = true) {
    const serviceName = '/SAPAssetManager/Services/AssetManager.service';
    const S4ServiceIntegrationGlobal = context.getGlobalDefinition('/SAPAssetManager/Globals/Features/S4ServiceData.global').getValue();
    const CSServiceOrderGlobal = context.getGlobalDefinition('/SAPAssetManager/Globals/Features/CSServiceData.global').getValue();
    const PMWorkOrderGlobal = context.getGlobalDefinition('/SAPAssetManager/Globals/Features/PMWorkOrder.global').getValue();

    return context.read(serviceName, 'ReportTemplates', [], '$expand=Document_Nav').then(results => {
        if (!libVal.evalIsEmpty(results)) {
            let featureId;

            if (IsPMWorkOrderEnabled(context)) {
                featureId = PMWorkOrderGlobal;
            } else if (IsS4ServiceIntegrationEnabled(context)) {
                featureId = S4ServiceIntegrationGlobal;
            } else {
                featureId = CSServiceOrderGlobal;
            }

            const template = results.find(result => result.FeatureID === featureId);

            if (!libVal.evalIsEmpty(template)) {
                return GetHTMLPath(context, template.Document_Nav).then((path) => {
                    return path;
                }).catch(() => {
                    Logger.error('SERVICE REPORT', 'Failed to get the template path');
                    return showError
                        ? context.executeAction('/SAPAssetManager/Actions/PDF/PDFRenderFailureBannerMessage.action')
                        : null;
                });
            } else {
                Logger.error('SERVICE REPORT', 'Failed to find the template');
            }
        } else {
            Logger.error('SERVICE REPORT', 'Failed to find the template');
        }
        return Promise.resolve();
    });
}
