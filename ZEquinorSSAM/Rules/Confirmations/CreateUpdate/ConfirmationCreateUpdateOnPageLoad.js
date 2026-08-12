/**
 * NGE-122630: Equinor override of ConfirmationCreateUpdateOnPageLoad.
 *
 * Customizations:
  *  - The Duration (time) field on the Time Confirmation screen must always be
 *    defaulted to 0:00 hours and must be readonly.
*  - The Final Confirmation switch/radio button must always be readonly.
 *
 * The original SAP rule is delegated to first so that all standard behavior
 * (styling, defaults, scenario setup, etc.) continues to work. After the
 * standard logic has executed, we override the two controls.
 */
import style from '../../../../SAPAssetManager/Rules/Common/Style/StyleFormCellButton';
import libCom from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import Stylizer from '../../../../SAPAssetManager/Rules/Common/Style/Stylizer';
import hideCancel from '../../../../SAPAssetManager/Rules/ErrorArchive/HideCancelForErrorArchiveFix';
import LaborTimeMinuteInterval from '../../../../SAPAssetManager/Rules/Confirmations/CreateUpdate/LaborTimeMinuteInterval';
import ODataDate from '../../../../SAPAssetManager/Rules/Common/Date/ODataDate';
import onUpdate from '../../../../SAPAssetManager/Rules/Confirmations/CreateUpdate/IsOnUpdate';
import activityTypeDefault from '../../../../SAPAssetManager/Rules/Confirmations/CreateUpdate/ActivityTypeDefault';
import libConfirm from '../../../../SAPAssetManager/Rules/ConfirmationScenarios/ConfirmationScenariosLibrary';
import ConfirmationScenariosFeatureIsEnabled from '../../../../SAPAssetManager/Rules/ConfirmationScenarios/ConfirmationScenariosFeatureIsEnabled';
import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';

export default async function ConfirmationCreateUpdateOnPageLoad(context) {
    hideCancel(context);
    let stylizer = new Stylizer(['GrayText']);
    const formCellContainerProxy = context.getControl('FormCellContainer');
    if (!context.getBindingObject().IsOnCreate) {
        style(context, 'DiscardButton');
    }

    if (!context.getBindingObject().IsWorkOrderChangable) {
        let woPicker = formCellContainerProxy.getControl('WorkOrderLstPkr');
        stylizer.apply(woPicker, 'Value');

        if (onUpdate(context)) { //Only do this during edit, or MDK puts the wrong caption on the last screen field
            let confirmationId = formCellContainerProxy.getControl('ConfirmationIdProperty');
            stylizer.apply(confirmationId, 'Value');
        }

        if (!context.getBindingObject().IsOperationChangable) {
            let opPicker = formCellContainerProxy.getControl('OperationPkr');
            stylizer.apply(opPicker, 'Value');
            if (!context.getBindingObject().IsSubOperationChangable) {
                let subOpPicker = formCellContainerProxy.getControl('SubOperationPkr');
                stylizer.apply(subOpPicker, 'Value');
            }
        }
    }

    await returnLaborTimeMinuteInterval(context, formCellContainerProxy);
    await confirmationScenarioSetup(context);
    enforceFinalConfirmationReadonly(context, formCellContainerProxy);
}

function returnLaborTimeMinuteInterval(context, formCellContainerProxy) {
    return LaborTimeMinuteInterval(context, context.getBindingObject().OrderID, context.getBindingObject().Operation, context.getBindingObject().SubOperation).then(duration => { //Handle clock in/out processing if necessary
        let durationControl = formCellContainerProxy.getControl('DurationPkr');
       // durationControl.setValue(duration);
        durationControl.setValue(0, false);
        durationControl.setEditable(false);

    //***This block can be used in R4 for external and Internal employee differentiation*** 
    //     const isDurationReadonly = await shouldDurationBeReadonlyFromWorkCenterActivityType(context);
    //     durationControl.setEditable(!isDurationReadonly);

        enforceFinalConfirmationReadonly(context, formCellContainerProxy);

        if (context.getBindingObject().IsOnCreate) {
            let startDateTime;
            if (libCom.isDefined(context.getBindingObject().PostingDate)) {
                startDateTime = new ODataDate(context.getBindingObject().PostingDate);
                Logger.info('FCTCLog', 'FCTCLog - TIMESHEET  <returnLaborTimeMinuteInterval>  posting date ' + startDateTime.toLocalDateTimeString());
            } else {
                startDateTime = new ODataDate();
                Logger.info('FCTCLog', 'FCTCLog - TIMESHEET  <returnLaborTimeMinuteInterval> NO posting date');
            }

            startDateTime.date().setMinutes(startDateTime.date().getMinutes() - duration);

            let startDateControl = formCellContainerProxy.getControl('StartDatePicker');
            startDateControl.setValue(startDateTime.date());

            let startTimeControl = formCellContainerProxy.getControl('StartTimePicker');
            startTimeControl.setValue(startDateTime.date());
            Logger.info('FCTCLog', 'FCTCLog - TIMESHEET  <returnLaborTimeMinuteInterval> StartDateTime ' + startDateTime.toLocalDateTimeString());
        }

        //Set initial control values from binding
        let woControl = formCellContainerProxy.getControl('WorkOrderLstPkr');
        let opControl = formCellContainerProxy.getControl('OperationPkr');
        let subControl = formCellContainerProxy.getControl('SubOperationPkr');
        let actControl = formCellContainerProxy.getControl('ActivityTypePkr');
        let indicatorControl = formCellContainerProxy.getControl('AcctIndicatorPkr');

        if (context.getBindingObject().OrderID) {
            woControl.setValue(context.getBindingObject().OrderID);
        }

        if (context.getBindingObject().Operation) {
            opControl.setValue(context.getBindingObject().Operation);
        }

        if (context.getBindingObject().SubOperation) {
            subControl.setValue(context.getBindingObject().SubOperation);
        }

        if (context.getBindingObject().AccountingIndicator) {
            indicatorControl.setValue(context.getBindingObject().AccountingIndicator);
        }

        if (context.getBindingObject().ActivityType) {
            actControl.setValue(context.getBindingObject().ActivityType);
        } else {
            actControl.setValue(activityTypeDefault(context));
        }

        libCom.saveInitialValues(context);
        enforceFinalConfirmationReadonly(context, formCellContainerProxy);

        return true;
    });
}
//***This block can be used in R4 for external and Internal employee differentiation*** 
// async function shouldDurationBeReadonlyFromWorkCenterActivityType(context) {
//     try {
//         let appParamValue = (libCom.getAppParam(context, 'USER_AUTHORIZATIONS', 'ZEQ.WC.AT') || '').trim();

//         const configuredActivityTypePrefixes = (appParamValue.includes(',') ? appParamValue.split(',') : [appParamValue])
//             .map(value => value && value.trim().toUpperCase())
//             .filter(value => !!value);

//         if (configuredActivityTypePrefixes.length === 0) {
//             Logger.warn('FCTCLog', 'FCTCLog - TIMESHEET <shouldDurationBeReadonlyFromWorkCenterActivityType> ZEQ.WC.AT is empty');
//             return false;
//         }

//         const userWorkCenter = libCom.getDefaultUserParam('USER_PARAM.VAP');
//         const userPlanningPlant = libCom.getDefaultUserParam('USER_PARAM.IWK');
//         if (!userWorkCenter || !userPlanningPlant) {
//             return false;
//         }

//         const escapedWorkCenter = userWorkCenter.replace(/'/g, "''");
//         const escapedPlanningPlant = userPlanningPlant.replace(/'/g, "''");
//         const query = `$filter=ExternalWorkCenterId eq '${escapedWorkCenter}' and PlantId eq '${escapedPlanningPlant}'`;

//         const servicePath = `/${'SAPAssetManager'}/Services/AssetManager.service`;
//         const workCenterResults = await context.read(servicePath, 'WorkCenters', ['DefaultActivityType'], query);
//         if (!workCenterResults || workCenterResults.length === 0) {
//             return false;
//         }

//         for (let i = 0; i < workCenterResults.length; i++) {
//             const workCenter = workCenterResults.getItem(i);
//             const defaultActivityType = (workCenter.DefaultActivityType || '').toString().trim().toUpperCase();

//             if (defaultActivityType && configuredActivityTypePrefixes.some(prefix => defaultActivityType.startsWith(prefix))) {
//                 const formCellContainerProxy = context.getControl('FormCellContainer');
//                 const durationControl = formCellContainerProxy.getControl('DurationPkr');
//                 durationControl.setValue(0, false);
//                 return true;
//             }
//         }

//         return false;
//     } catch (error) {
//         Logger.warn('FCTCLog', `FCTCLog - TIMESHEET <shouldDurationBeReadonlyFromWorkCenterActivityType> fallback editable due to error: ${error}`);
//         return false;
//     }
// }

function enforceFinalConfirmationReadonly(context, formCellContainerProxy) {
    if (context?.getBindingObject()) {
        context.getBindingObject().IsFinalChangable = false;
    }

    const finalConfirmControl = formCellContainerProxy.getControl('IsFinalConfirmation');
    if (finalConfirmControl) {
        finalConfirmControl.setEditable(false);
    }
}

/**
 * Default the confirmation scenario fields if they exist in the binding object
 * @param {*} context
 * @param {*} formCellContainerProxy 
 */
export async function confirmationScenarioSetup(context, params) {
    let binding;
    const screen = context.getControl('FormCellContainer');

    if (ConfirmationScenariosFeatureIsEnabled(context)) {
        if (params) {
            binding = params;
        } else {
            binding = context.getBindingObject();
        }

        if (binding.ConfirmationScenarioPersonnelNumber) {
            screen.getControl('ResponsiblePersonnelNum').setValue(binding.ConfirmationScenarioPersonnelNumber);
            screen.getControl('ResponsiblePersonnelNum').setVisible(true);
        }

        if (binding.ConfirmationScenarioNote) {
            binding.ConfirmationScenarioNote = binding.ConfirmationScenarioNote.replace(/\\'/g, "'"); //Unescape the note
            screen.getControl('DescriptionNote').setValue(binding.ConfirmationScenarioNote);
        }

        await finalizeConfirmationScenarioFields(context, binding);
    }
}

/**
 * If this is a scenario confirmation, then set the segment control and states of other controls
 * @param {*} context 
 * @param {*} binding 
 * @param {*} formCellContainerProxy 
 * @param {*} personnelControl 
 */
async function finalizeConfirmationScenarioFields(context, binding) {
    let feature = binding.ConfirmationScenarioFeature;
    const screen = context.getControl('FormCellContainer');
    const captionDescriptor = context.getBindingObject().IsOnCreate ? 'create' : 'update';
    const coopScenario = context.getGlobalDefinition('/SAPAssetManager/Globals/ConfirmationScenarios/Cooperation.global').getValue();
    const doubleScenario = context.getGlobalDefinition('/SAPAssetManager/Globals/ConfirmationScenarios/DoubleCheck.global').getValue();

    if (binding.ConfirmationScenario === coopScenario) { //Handle editing an existing cooperation confirmation
        feature = 'Support';
    }
    if (binding.ConfirmationScenario === doubleScenario) { //Handle editing an existing double check confirmation
        feature = 'DoubleCheck';
    }
    if (feature) { //This is a cooperation confirmation, so set the segment control and states of other controls
        const stylizer = new Stylizer(['GrayText']);
        let scenario;

        if (feature === 'Support') scenario = coopScenario;
        if (feature === 'DoubleCheck') scenario = doubleScenario;

        screen.getControl('ScenarioSeg').setValue(feature, false);
        screen.getControl('ScenarioSeg').setEditable(false);
        screen.getControl('ResponsiblePersonnelNum').setEditable(false);
        stylizer.apply(screen.getControl('ResponsiblePersonnelNum'), 'Value');
        screen.getControl('WorkOrderLstPkr').setEditable(false);
        if (binding.DisableOrderFields) { //Started a scenario by clicking segment on confirmation page, so all order fields should not be editable
            screen.getControl('OperationPkr').setEditable(false);
            screen.getControl('SubOperationPkr').setEditable(false);
        }

        let woTemp = context.getBindingObject()?.OrderID; //Grab the work order either from binding or picker on screen
        if (!woTemp) {
            woTemp = screen.getControl('WorkOrderLstPkr').getValue()[0].ReturnValue;
        }
        let configResult = await libConfirm.readConfigByPlant(context, woTemp, scenario);
        let timeEntryNotAllowed = !(await libConfirm.getAllowTimeUpdate(context, configResult));

        if (timeEntryNotAllowed) { //Time entry is not allowed for a cooperation, so hide the fields and set to zero duration and current date/time
            let startDateTime = new ODataDate();

            screen.getControl('DurationPkr').setValue('0');
            screen.getControl('DurationPkr').setVisible(false);
            screen.getControl('StartDatePicker').setVisible(false);
            screen.getControl('StartTimePicker').setVisible(false);
            screen.getControl('StartDatePicker').setValue(startDateTime.date());
            screen.getControl('StartTimePicker').setValue(startDateTime.date());
        }
        
        //Other fields that are non-editable for cooperations
        screen.getControl('VarianceReasonPkr').setVisible(false);
        screen.getControl('VarianceReasonPkr').setEditable(false);
        screen.getControl('ActivityTypePkr').setVisible(false);
        screen.getControl('ActivityTypePkr').setEditable(false);
        screen.getControl('ActivityTypePkr').setValue('', false);
        screen.getControl('AcctIndicatorPkr').setVisible(false);
        screen.getControl('AcctIndicatorPkr').setEditable(false);
        screen.getControl('AcctIndicatorPkr').setValue('', false);
        screen.getControl('IsFinalConfirmation').setVisible(false);
        screen.getControl('IsFinalConfirmation').setEditable(false);
        screen.getControl('IsFinalConfirmation').setValue(false, false);
        screen.getControl('DescriptionNote').setEditable(false); //Note is not editable for cooperations
        if (feature === 'Support') {
            context.setCaption(context.localizeText(`cooperation_${captionDescriptor}_title`)); //Set screen caption for cooperation
        }
        if (feature === 'DoubleCheck') {
            context.setCaption(context.localizeText(`double_check_${captionDescriptor}_title`)); //Set screen caption for double check
        }
    } else {
        if (captionDescriptor === 'update') { //Edited confirmations cannot be changed to cooperations
            screen.getControl('ScenarioSeg').setEditable(false);
        }
    }
}
