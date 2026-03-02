import libCom from '../Common/Library/CommonLibrary';
import libPersona from '../Persona/PersonaLibrary';

export default function OnloadUserSettings(context) {
    let switchPersonaLstPkrControl;
    const dict = libCom.getControlDictionaryFromPage(context);

    if (dict) {
        if (dict.SwitchPersonaLstPkr) {
            switchPersonaLstPkrControl = dict.SwitchPersonaLstPkr;

            const actualPersona = libPersona.getActivePersona(context);
            switchPersonaLstPkrControl.setValue(actualPersona);

            const length = libCom.getStateVariable(context, 'UserPersonas').length;
            updateControlsEditability(context, switchPersonaLstPkrControl, length > 1);

            // save current persona in client data
            libCom.setStateVariable(
                context,
                'currentPersona',
                actualPersona,
                'UserProfileSettings',
            );
        }
        // store original user selection for location tracking
        if (dict.LocationTrackingSwitch) {
            libCom.setStateVariable(context, 'LocationTrackingSwitch', dict.LocationTrackingSwitch.getValue());
        }
    }
}

function updateControlsEditability(context, switchPersonaLstPkrControl, editable) {
    switchPersonaLstPkrControl.setEditable(editable);
    context.getActionBar()?.getItem('ProfileDoneButton')?.setVisible(editable);
}
