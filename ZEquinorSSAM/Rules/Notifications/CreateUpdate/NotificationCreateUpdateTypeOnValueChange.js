import userFeaturesLib from '../../../../SAPAssetManager/Rules/UserFeatures/UserFeaturesLibrary';
import prioritySelector from '../../../../SAPAssetManager/Rules/Notifications/CreateUpdate/NotificationCreateUpdatePrioritySelector';
import EMPButtonIsVisible from '../../../../SAPAssetManager/Rules/Notifications/EMP/EMPButtonIsVisible';
import ResetValidationOnInput from '../../../../SAPAssetManager/Rules/Common/Validation/ResetValidationOnInput';

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
