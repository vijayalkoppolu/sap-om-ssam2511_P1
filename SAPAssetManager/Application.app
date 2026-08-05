{
	"MainPage": "/SAPAssetManager/Pages/SideMenuDrawer.page",
	"OnLaunch": [
		"/SAPAssetManager/Rules/Common/SetAppLaunchStarted.js",
		"/SAPAssetManager/Rules/Log/InitializeLoggerAndNativeScriptObject.js",
		"/SAPAssetManager/Rules/Common/PerformAppUpdateCheck.js",
		"/SAPAssetManager/Rules/Sync/InitializeSyncState.js",
		"/SAPAssetManager/Rules/Common/MonitorNetworkState.js"
	],
	"OnExit": "/SAPAssetManager/Rules/ApplicationEvents/ExitEventHandler.js",
	"OnWillUpdate": "/SAPAssetManager/Rules/ApplicationEvents/ApplicationOnWillUpdate.js",
	"OnDidUpdate": "/SAPAssetManager/Rules/ApplicationEvents/ApplicationOnDidUpdate.js",
	"OnLinkDataReceived": "/SAPAssetManager/Rules/DeepLinks/LinkDataReceived.js",
	"OnUserSwitch": "/SAPAssetManager/Rules/ApplicationEvents/ApplicationOnUserSwitch.js",
	"OnReceiveForegroundNotification": "/SAPAssetManager/Rules/PushNotifications/PushNotificationsForegroundNotificationEventHandler.js",
	"OnReceiveFetchCompletion": "/SAPAssetManager/Rules/PushNotifications/PushNotificationsContentAvailableEventHandler.js",
	"OnReceiveNotificationResponse": "/SAPAssetManager/Rules/PushNotifications/PushNotificationsReceiveNotificationResponseEventHandler.js",
	"Styles": "/SAPAssetManager/Styles/Styles.less",
	"Version": "3.1.2",
	"OnSuspend": "/SAPAssetManager/Rules/ApplicationEvents/SuspendEventHandler.js",
	"OnResume": "/SAPAssetManager/Rules/ApplicationEvents/ResumeEventHandler.js",
	"Localization": "/SAPAssetManager/i18n/i18n.properties",
	"_SchemaVersion": "25.9",
	"_Name": "SAPAssetManager"
}