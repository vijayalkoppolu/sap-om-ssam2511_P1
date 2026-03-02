import {BusinessPartnerWrapper} from './BusinessPartnerWrapper';

export default function BusinessPartnerDescription(context, binding = context.getBindingObject()) {
    const wrapper = new BusinessPartnerWrapper(binding);
    const partnerID = getPartnerID(binding);
    const description = wrapper.partnerDetails().Description;
    return partnerID ? `${partnerID} - ${description}` : description;
}

function getPartnerID(binding) {
    return binding.PartnerNum || binding.Partner || binding.PartnerNo;
}
