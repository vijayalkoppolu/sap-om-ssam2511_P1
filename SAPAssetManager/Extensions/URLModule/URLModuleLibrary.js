/* eslint-disable no-undef */
import { Application, Utils } from '@nativescript/core';

export default class {
    static openUrl(context, location) {
        if (Application.ios) {
            const url = NSURL.URLWithString(location.trim());
            if (UIApplication.sharedApplication.canOpenURL(url)) {
                return UIApplication.sharedApplication.openURLOptionsCompletionHandler(url, null, null);
            } else {
                return displayErrorMessage(context);
            }
        } else {
            const isOpen = Utils.openUrl(location);
            if (!isOpen) {
                return displayErrorMessage(context);
            }
            return isOpen;
        }
    }
}

function displayErrorMessage(context) {
    return context.executeAction({
        'Name': '/SAPAssetManager/Actions/Common/GenericErrorDialog.action',
        'Properties': {
            'Title': context.localizeText('error'),
            'Message': context.localizeText('failed_to_open_url'),
            'OKCaption':  context.localizeText('close'),
        },
    }).then(() => {
        return false;
    });
}
