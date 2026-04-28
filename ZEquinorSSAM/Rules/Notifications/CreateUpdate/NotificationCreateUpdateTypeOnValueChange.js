import userFeaturesLib from '../../../../SAPAssetManager/Rules/UserFeatures/UserFeaturesLibrary';
import prioritySelector from '../../../../SAPAssetManager/Rules/Notifications/CreateUpdate/NotificationCreateUpdatePrioritySelector';
import EMPButtonIsVisible from '../../../../SAPAssetManager/Rules/Notifications/EMP/EMPButtonIsVisible';
import ResetValidationOnInput from '../../../../SAPAssetManager/Rules/Common/Validation/ResetValidationOnInput';
import ZFailureEffectCodeGroupPickerItems from './ZFailureEffectCodeGroupPickerItems';
import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';

export default async function NotificationCreateUpdateTypeOnValueChange(context) {
    ResetValidationOnInput(context);
    //Only allow the user to set part group and damage group once type has been set
   // context.getPageProxy().evaluateTargetPath('#Control:PartGroupLstPkr').setEditable(true);
   // context.getPageProxy().evaluateTargetPath('#Control:DamageGroupLstPkr').setEditable(true);

   await EMPButtonIsVisible(context);
   
   // Clear priority selection when type changes to ensure clean state
   try {
       const prioritySegControl = context.getPageProxy().evaluateTargetPath('#Control:PrioritySeg');
       const priorityLstPkrControl = context.getPageProxy().evaluateTargetPath('#Control:PriorityLstPkr');
       
       // Clear the priority values to reset to default state
       prioritySegControl.setVisible(false);
       priorityLstPkrControl.setVisible(false);
   }
   catch(error)
   {console.error(error)}

    // Equinor: Refresh Failure Effect Code Group picker based on new Notification Type
    // Filter by Catalog = 6 and CatalogProfile = 'PM-' + TypeLstPkr
    try {
        const pageProxy = context.getPageProxy ? context.getPageProxy() : context;
        const formCellContainer = pageProxy.getControl('FormCellContainer');
        const failureEffectGroupPicker = formCellContainer.getControl('FailureEffectGroupListPicker');
        const failureEffectCodePicker = formCellContainer.getControl('FailureEffectListPicker');

        // Clear existing selections
        failureEffectGroupPicker.setValue('', false);
        failureEffectCodePicker.setPickerItems([]);
        failureEffectCodePicker.setValue('', false);
        failureEffectCodePicker.setEditable(false);

        // Reload failure effect code group picker items with new filter
        const pickerItems = await ZFailureEffectCodeGroupPickerItems(failureEffectGroupPicker);
        failureEffectGroupPicker.setPickerItems(pickerItems);
    } catch (e) {
        Logger.error('NotificationCreateUpdateTypeOnValueChange - refresh failure effect group', e);
    }
   
    if (userFeaturesLib.isFeatureEnabled(context, context.getGlobalDefinition('/SAPAssetManager/Globals/Features/QM.global').getValue())) {
        return prioritySelector(context).then(() => updateGroupPickers(context.getPageProxy())).finally(() => {
            return notification.setFailureAndDetectionGroupQuery(context);
        });
    } else {
        return notification.NotificationCreateUpdatePrioritySelector(context).then(() => updateGroupPickers(context.getPageProxy())).finally(() => {
            return notification.setFailureAndDetectionGroupQuery(context);
        });
    }
}