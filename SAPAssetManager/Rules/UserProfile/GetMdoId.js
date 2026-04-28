import Logger from '../Log/Logger';
import BackendAppVersionNumber from './BackendAppVersionNumber';

export default async function GetMdoId(context, omodoId) {
    const version = await BackendAppVersionNumber(context);

    if (version && omodoId) {
        Logger.info('BackendAppVersionNumber', version);
        const stringWithoutStart = omodoId.substring(omodoId.indexOf('_'), omodoId.length); // From SAM2505_TEST get _TEST
        return `SAM${version}${stringWithoutStart}`;
    }

    return omodoId;
}
