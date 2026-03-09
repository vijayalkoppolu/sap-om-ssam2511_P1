import userFeaturesLib from '../../../../SAPAssetManager/Rules/UserFeatures/UserFeaturesLibrary';
import libCommon from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';

export default async function IsCheckListEnabled(context) {
    // ZEquinorSSAM: show checklist only for operations that have associated EAM checklists
    if (userFeaturesLib.isFeatureEnabled(context, context.getGlobalDefinition('/SAPAssetManager/Globals/Features/Checklist.global').getValue())) {
        const binding = context.getPageProxy().binding;
        // if (binding.EAMChecklist_Nav) {
        //     return !!binding.EAMChecklist_Nav.length;
        // }
        const type = binding && binding['@odata.type'];
        try {
            if (type === '#sap_mobile.MyWorkOrderOperation'){
            const count = await libCommon.getEntitySetCount(context, `${binding['@odata.readLink']}/EAMChecklist_Nav`);
            return count > 0;
            }
            else{
                return false;
            }
        } catch (error) {
            Logger.error('Error in IsCheckListEnabled: ', error);
            return false;
        }
    } else {
        return false;
    }
}
