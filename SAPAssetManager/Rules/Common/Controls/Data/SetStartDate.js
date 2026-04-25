import CommonLibrary from '../../Library/CommonLibrary';

export default function SetStartDate(context) {
    const binding = context.binding || {};
    const date = binding.StartDate ? new Date(binding.StartDate) : new Date();

    CommonLibrary.getControlProxy(context, 'StartDatePicker').setValue(date);
}
