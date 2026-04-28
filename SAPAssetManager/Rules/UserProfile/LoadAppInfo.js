import AppVersionInfo from './AppVersionInfo';

export default function LoadAppInfo(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let clientData = clientAPI.getAppClientData();
    clientData.ApplicationVersion = AppVersionInfo(clientAPI);
    clientData.DefinitionsVersion = versionInfo['Definitions Version'];
    clientData.MDKVersion = versionInfo.SAPMDC;
}
