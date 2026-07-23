import notification from '../../../../SAPAssetManager/Rules/Notifications/NotificationLibrary';
import updateGroupPickers from '../../../../SAPAssetManager/Rules/Notifications/CreateUpdate/UpdateGroupPickers';
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


    // Equinor: Refresh Failure Effect Code Group picker based on new Notification Type
    // Filter by Catalog = 6 and CatalogProfile = 'PM-' + TypeLstPkr
    try {
        const pageProxy = context.getPageProxy ? context.getPageProxy() : context;
        const formCellContainer = pageProxy.getControl('FormCellContainer');
        const failureEffectGroupPicker = formCellContainer.getControl('FailureEffectGroupListPicker');
           
     // Reload failure effect code group picker items with new filter
        const pickerItems = await ZFailureEffectCodeGroupPickerItems(failureEffectGroupPicker);
        failureEffectGroupPicker.setPickerItems(pickerItems);
    } catch (e) {
        Logger.error('NotificationCreateUpdateTypeOnValueChange - refresh failure effect group', e);
    }
   
    const hidePriorityControls = () => {
        try {
            context.getPageProxy().evaluateTargetPath('#Control:PrioritySeg').setVisible(false);
            context.getPageProxy().evaluateTargetPath('#Control:PriorityLstPkr').setVisible(false);
        } catch (e) { /* controls may not exist on all notification types */ }
    };

    if (userFeaturesLib.isFeatureEnabled(context, context.getGlobalDefinition('/SAPAssetManager/Globals/Features/QM.global').getValue())) {
        return prioritySelector(context).then(() => updateGroupPickers(context.getPageProxy())).finally(() => {
            return notification.setFailureAndDetectionGroupQuery(context);
        }).then(hidePriorityControls);
    } else {
        return notification.NotificationCreateUpdatePrioritySelector(context).then(() => updateGroupPickers(context.getPageProxy())).finally(() => {
            return notification.setFailureAndDetectionGroupQuery(context);
        }).then(hidePriorityControls);
    }
}