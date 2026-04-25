import FilterSettings from '../../Filter/FilterSettings';
import SaveFilterAsDefault from '../../Filter/SaveFilterAsDefault';
import PersonalizationPreferences from '../../UserPreferences/PersonalizationPreferences';

export default async function WCMFilterApply(context) {
    if (await PersonalizationPreferences.getPersistFilterPreference(context)) {
       const filterResults = await SaveFilterAsDefault(context);
       await FilterSettings.onSettingsSave(context, filterResults);
    }
    return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action');
}
