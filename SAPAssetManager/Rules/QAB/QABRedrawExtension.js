import libVal from '../Common/Library/ValidationLibrary';
import Logger from '../Log/Logger';

export default function QABRedrawExtension(context, useRedrawExtension = false) {
    const clientData = context.getPageProxy().getClientData();

    if (!libVal.evalIsEmpty(clientData.QABSettingsInstance)) {
        if (useRedrawExtension) {
            clientData.QABSettingsInstance.redrawExtension();
        } else {
            const extension = clientData.QABSettingsInstance.getExtension();
            if (extension) {
                extension.redraw();
            } else {
                Logger.warn('QABRedrawExtension', 'Extension not found for reinitialize control');
            }
        }
    }
}
