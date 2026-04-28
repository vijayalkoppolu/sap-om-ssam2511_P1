import libCom from '../Library/CommonLibrary';
import ODataDate from './ODataDate';

/**
 * Return a date offset by the difference between backend and local time
 * @param {Context} context - calling context
 * @param {*} date - (optional) Representation of the Date - default is current date
 * @param {*} time - (optional) Representation of the time
 * @param {boolean} reverseOffset - (optional) If true, it will reverse the offset. Used to handle notifications with a time zone before saving to db
 * @param {boolean} isUTC - (optional) If true, we are overriding the normal backend system offset calculation and just returning the offset to UTC time. This is used for handling date time values from the backend that are in UTC time, but should be displayed in local time.
 * @returns {ODataDate} - ODataDate object with the offset applied
 */
export default function OffsetODataDate(context, date, time, reverseOffset, isUTC=false) {
    return new ODataDate(date, time, offset(context, date, reverseOffset, isUTC));
}

/**
 * Retrieve the offset between backend and local time
 * It will return the offset based on provided date or the current date. 
 *      
 * @param {*} context 
 * @param {*} date - (optional) Representation of the Date - default is current date
 * @param {boolean} reverseOffset - (optional) If true, it will reverse the offset. Used to handle notifications with a time zone before saving to db
 * @param {boolean} isUTC - (optional) If true, we are overriding the normal backend system offset calculation and just returning the offset to UTC time. This is used for handling date time values from the backend that are in UTC time, but should be displayed in local time.
 * @returns {number} - It will return the offset
 */
function offset(context, date, reverseOffset, isUTC=false) {
    let providedDate;
    let reverse = 1;

    if (reverseOffset) {
        reverse = -1;
    }
    if (date) {
        providedDate = new Date(date);
    } else {
        providedDate = new Date();
    }
    let backendOffset = -1 * libCom.getBackendOffsetFromSystemProperty(context);
    let timezoneOffset = (providedDate.getTimezoneOffset()) / 60;

    if (context.binding?.NotifTimeZone) {
        backendOffset = -1 * libCom.getBackendOffsetFromObjectProperty(context);
        timezoneOffset = ODataDate.isDST(providedDate) ? timezoneOffset + ODataDate.getSingleDigitHoursFromString(context.binding.DSTDifference) : timezoneOffset;
    }

    if (isUTC) return (0 - timezoneOffset) * reverse;

    return (backendOffset - timezoneOffset) * reverse;
}
