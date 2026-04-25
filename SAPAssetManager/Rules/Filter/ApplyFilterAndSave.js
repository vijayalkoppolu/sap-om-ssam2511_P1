import PersonalizationPreferences from '../UserPreferences/PersonalizationPreferences';
import FilterDone from './FilterDone';
import FilterSettings from './FilterSettings';
import SaveFilterAsDefault from './SaveFilterAsDefault';

export default async function ApplyFilterAndSave(context) {
    const persistentFilterEnabled = await PersonalizationPreferences.getPersistFilterPreference(context);
    let filterResults;
    
    if (persistentFilterEnabled) {
        filterResults = await SaveFilterAsDefault(context);
    }

    return FilterDone(context).then(() => {
        if (persistentFilterEnabled) {
            FilterSettings.onSettingsSave(context, filterResults);
        } 
    });
}
