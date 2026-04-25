import { Reminder } from '../UserPreferences/UserPreferencesLibrary';

/**
* Validates Reminder Description field on value change.
* @param {INoteFormCellProxy} control
*/
export default function ReminderDescriptionOnValueChange(control) {
    control.clearValidation();
    const descValue = Reminder.trimAndSetValue(control);
    if (descValue) {
        Reminder.validateDescriptionLength(control.getPageProxy(), control, descValue);
    }
}
