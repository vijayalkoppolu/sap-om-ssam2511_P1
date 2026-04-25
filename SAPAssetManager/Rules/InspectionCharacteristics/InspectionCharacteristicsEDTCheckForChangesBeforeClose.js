import { discardDefects } from './RecordResultCheckForChangesBeforeClose';

/**
* Check for unsaved changes before closing or canceling a page
* @param {IClientAPI} context
*/
export default async function InspectionCharacteristicsEDTCheckForChangesBeforeClose(context) {
    const pageProxy = context.getPageProxy();

    if (isEDTDataChanged(pageProxy) ) {
        const result = await context.executeAction('/SAPAssetManager/Actions/Page/ConfirmClosePage.action');
        return result?.data ? discardDefects(pageProxy) : true;
    }

    await context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action');
    return discardDefects(pageProxy);
}

function isEDTDataChanged(context) {
    let changed = false;
    const sections = context.getControls()[0].getSections();

    for (let section of sections) {
        if (section.getExtension) {
            const extension = section.getExtension();
            if (extension && extension.constructor && extension.constructor.name === 'EditableDataTableViewExtension') {
                const values = extension.getUpdatedValues();
                changed = values?.length > 0;
            }
        }
    }

    return changed;
}
