import {GlobalVar as globals} from '../../Common/Library/GlobalCommon';
import libComm from '../../Common/Library/CommonLibrary';
import {BusinessPartnerWrapper} from '../BusinessPartnerWrapper';
import IsEditS4RelatedObjectEnabled from '../../ServiceOrders/IsEditS4RelatedObjectEnabled';
import IsMeterComponentEnabled from '../../ComponentsEnablement/IsMeterComponentEnabled';
import IsEditParentObjectEnabled from './IsEditParentObjectEnabled';

export default function BusinessPartnerEditIsVisible(context) {
    const binding = context.getBindingObject() || {};
    const wrapper = new BusinessPartnerWrapper(binding);

    if (wrapper.onlinePartner || IsMeterComponentEnabled(context)) {
        return false;
    }

    // Handle S4 FSM case
    if (binding.PartnerFunction_Nav?.S4ItemPartnerFunc_Nav || binding.PartnerFunction_Nav?.S4PartnerFunc_Nav || binding.S4PartnerFunc_Nav) {
        if (binding.BusinessPartner_Nav?.AddressNum) {
            return IsEditS4RelatedObjectEnabled(context); 
        }
        return false; 
    }

    let address = wrapper.address();
    // Edit button is disable if address does not exists.
    if (!libComm.isDefined(address)) {
        return false;
    }

    if (binding.PartnerFunction_Nav?.PartnerType === globals.getAppParam().PARTNERFUNCTION.PersonelNumber) {
        return false;
    }

    return IsEditParentObjectEnabled(context, binding);
}
