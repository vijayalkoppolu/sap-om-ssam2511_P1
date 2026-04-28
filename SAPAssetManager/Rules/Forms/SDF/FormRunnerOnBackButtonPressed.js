import ApplicationSettings from '../../Common/Library/ApplicationSettings';

/**
 * Warn if there are unsaved changes. Flag to flush the cache if no result is returned in a timely manner
 * 
 * @param {IClientAPI} context 
 */
export default function FormRunnerOnBackButtonPressed(context, timeout = 5000) {
    const pageProxy = context.getPageProxy();

    const webview = pageProxy.getControl('ExtensionControl0')._control.getWebView();

    const timer = setTimeout(() => {
        // bad/no response from the webview.
        ApplicationSettings.setBoolean(context, 'SDFCacheFlush', true);
    }, Math.max(timeout - 500, 0));
    
    const callback = (result) => {
        if (timer) {
            clearTimeout(timer);
        }

        if (result) {
            return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action');
        } else {
            return context.executeAction('/SAPAssetManager/Actions/Page/ConfirmClosePage.action');
        }
    };
    
    return webview.getIsFormDataSafe(callback, timeout);
}
