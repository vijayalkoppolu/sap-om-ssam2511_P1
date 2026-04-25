import libCommon from '../Common/Library/CommonLibrary';
import libVal from '../Common/Library/ValidationLibrary';
import MarkedJobLibrary from '../MarkedJobs/MarkedJobLibrary';
import ODataLibrary from '../OData/ODataLibrary';

export class UserPreferenceLibrary {

    /**
     * get preference name from current context; if local use odata.id, else use OrderId
     *
     * @static
     * @param {any} pageProxy
     *
     * @memberof UserPreferenceLibrary
     */
    static getPreferenceName(pageProxy) {
        let orderId = libCommon.getTargetPathValue(pageProxy, '#Property:OrderId');
        let woReadLink = libCommon.getTargetPathValue(pageProxy, '#Property:@odata.readLink');
        let isLocal = ODataLibrary.isLocal(pageProxy.binding);

        // if local record, use odata.id, else use OrderId
        let woID = isLocal ? woReadLink : orderId;

        return woID;
    }
}

export class MarkedJob {

    /**
     * get the marked job preferences
     *
     * @static
     * @param {IClientAPI} pageProxy
     * @param {string} id this id can be OrderId or odata.id
     * @returns {Promise}
     *
     * @memberof MarkedJob
     */
    static getMarkedJobUserPreferences(pageProxy, id) {
        if (libVal.evalIsEmpty(id)) {
            throw new TypeError('Error: Need id to get Marked Job');
        }

        let queryOptions = `$filter=PreferenceGroup eq 'MARKED_JOBS' and OrderId eq '${id}'`;
        return pageProxy.read('/SAPAssetManager/Services/AssetManager.service', 'MarkedJob', [], queryOptions);
    }

    static createUpdateOnCommitFromWoUpdate(pageProxy) {
        let markJobSwitchOn = libCommon.getFieldValue(pageProxy, 'Marked');
        let binding = pageProxy.getBindingObject();
        let markedJobPromise = null;

        if (binding.MarkedJob && !markJobSwitchOn) {
            // current MarkedJob record already created and switch is off => delete the marked job
            markedJobPromise = MarkedJobLibrary.unmark(pageProxy);
        } else if (markJobSwitchOn && !binding.MarkedJob) {
            // current Job does not have any MarkedJob user preference created yet, now create one
            markedJobPromise = MarkedJobLibrary.mark(pageProxy);
        } else {
            markedJobPromise = Promise.resolve(false);
        }

        return markedJobPromise;
    }
}

/**
 * Library class to hold reminder related business logic.
 */
export class Reminder {

    /**
     * Runs when the reminder add/edit screen is loaded. Enabled delete toolbar button on edits.
     */
    static reminderCreateUpdateOnPageLoad(context) {
        if (libCommon.IsOnCreate(context)) {
            context.setCaption(context.localizeText('add_reminder'));
        } else {
            const formCellContainer = context.getControl('FormCellContainer');
            [['Name', 'PreferenceName'], ['Description', 'PreferenceValue']]
                .forEach(([controlName, propName]) => formCellContainer.getControl(controlName).setValue(context.binding[propName] ? context.binding[propName] : '', undefined, true));
            context.setCaption(context.localizeText('edit_reminder'));
        }
    }

    /**
     * Handle inline error processing for Reminder create/update
     */
    static reminderCreateUpdateValidation(context) {
        const nameControl = libCommon.getTargetPathValue(context, '#Control:Name');
        const descControl = libCommon.getTargetPathValue(context, '#Control:Description');
        
        // Clear previous validation messages
        nameControl.clearValidation();
        descControl.clearValidation();

        // Get and trim values
        const nameValue = Reminder.trimAndSetValue(nameControl);
        const descValue = Reminder.trimAndSetValue(descControl);

        // Validate both fields and return combined result
        return Reminder.validateNameLength(context, nameControl, nameValue) && 
               Reminder.validateDescriptionLength(context, descControl, descValue);
    }

    /**
     * Helper method to trim and set control value
     */
    static trimAndSetValue(control) {
        const value = control.getValue();
        if (!libVal.evalIsEmpty(value)) {
            const trimmedValue = value.trim();
            control.setValue(trimmedValue, undefined, true);
            return trimmedValue;
        }
        return value;
    }

    /**
     * Validate name field requirements and length
     */
    static validateNameLength(context, nameControl, nameValue) {
        let validationPassed = true;

        //Validate Name is not blank. Show required field message.
        if (libVal.evalIsEmpty(nameValue)) {
            let message = context.localizeText('field_is_required');
            libCommon.executeInlineControlError(context, nameControl, message);
            validationPassed = false;
        }

        //Validate name length is less than max limit. Show max limit inline error message if needed.
        let nameMaxLength = libCommon.getAppParam(context, 'REMAINDER', 'NameLength');
        if (nameValue.length > Number(nameMaxLength)) {
            let dynamicParams = [nameMaxLength];
            let message = context.localizeText('validation_maximum_field_length', dynamicParams);
            libCommon.executeInlineControlError(context, nameControl, message);
            validationPassed = false;
        }

        return validationPassed;
    }

    /**
     * Validate description field length
     */
    static validateDescriptionLength(context, descControl, descValue) {
        let validationPassed = true;

        //Validate description length is less than max limit. Show max limit inline error message if needed.
        let descMaxLength = libCommon.getAppParam(context, 'REMAINDER', 'Descriptionlength');
        if (descValue?.length > Number(descMaxLength)) {
            let dynamicParams = [descMaxLength];
            let message = context.localizeText('validation_maximum_field_length', dynamicParams);
            libCommon.executeInlineControlError(context, descControl, message);
            validationPassed = false;
        }

        return validationPassed;
    }
}
