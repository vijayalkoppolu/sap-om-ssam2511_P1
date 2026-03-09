import userFeaturesLib from '../../../SAPAssetManager/Rules/UserFeatures/UserFeaturesLibrary';

export default function EnabledChecklistSideMenu(context) {
    // ZEquinorSSAM override: always hide checklist on side menu and overview
     //   return userFeaturesLib.isFeatureEnabled(context, context.getGlobalDefinition('/SAPAssetManager/Globals/Features/Checklist.global').getValue());
        return false;
    }
