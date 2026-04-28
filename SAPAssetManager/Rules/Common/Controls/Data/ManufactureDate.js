import ODataDate from '../../../Common/Date/ODataDate';
import CommonLibrary from '../../Library/CommonLibrary';

export default function ManufactureDate(context) {
    let date = new Date();

    if (context?.binding?.ConstYear) {
        date.setFullYear(context.binding.ConstYear);
    }

    if (context?.binding?.ConstMonth) {
        date.setMonth(context.binding.ConstMonth - 1);
    }

    let oDataDate = new ODataDate(date).toLocalDateString();
    let formattedDate = new Date(oDataDate);

    CommonLibrary.getControlProxy(context, 'ManufactureDatePicker').setValue(formattedDate);
}
