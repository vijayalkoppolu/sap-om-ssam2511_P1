import CheckForChangesBeforeClose from '../Common/CheckForChangesBeforeClose';

export default async function RecordResultCheckForChangesBeforeClose(context) {
    const result = await CheckForChangesBeforeClose(context);

    if (result.data !== false) {
        return discardDefects(context.getPageProxy());
    }

    return true;
}

export function discardDefects(context) {
    const recordedDefects = context.getClientData().RecordedDefects || [];

    if (recordedDefects.length) {
        const discardDefectActions = [];

        for (let defectLink of recordedDefects) {
            discardDefectActions.push(context.executeAction({
                'Name': '/SAPAssetManager/Actions/Common/GenericDelete.action', 
                'Properties': {
                    'Target': {
                        'EntitySet': 'MyNotificationHeaders',
                        'Service': '/SAPAssetManager/Services/AssetManager.service',
                        'ReadLink': defectLink,
                    },
                },
            }));
        }
       
        return Promise.all(discardDefectActions);
    }

    return true;
}
