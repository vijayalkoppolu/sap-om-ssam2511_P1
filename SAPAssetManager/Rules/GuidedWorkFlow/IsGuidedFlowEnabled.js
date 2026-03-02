import libFeature from '../UserFeatures/UserFeaturesLibrary';
import libCom from '../Common/Library/CommonLibrary';
import libVal from '../Common/Library/ValidationLibrary';
import libPersona from '../Persona/PersonaLibrary';
import { GUIDED_FLOW_CACHE_VARIABLE_NAME } from './GuidedFlowGenerator';
import Logger from '../Log/Logger';

export default async function IsGuidedFlowEnabled(context) {
    if (libFeature.isFeatureEnabled(context, context.getGlobalDefinition('/SAPAssetManager/Globals/Features/GuidedFlow.global').getValue())) {
        let binding = context.binding;
        if (libVal.evalIsEmpty(binding) || !libVal.evalIsEmpty(binding) && libVal.evalIsEmpty(binding['@odata.type'])) {
            binding = context.getPageProxy().getActionBinding();
        }

        const objectType = libCom.getMobileStatusEAMObjectType(context, binding);
        const activePersona = libPersona.getActivePersona(context);
        const cachedFlowCount = getCachedFlowCount(context, objectType, activePersona);
        if (cachedFlowCount !== undefined) return cachedFlowCount > 0;

        const headersCount = await libCom.getEntitySetCount(context, 'GuidedFlowHeaders',
            `$filter=ObjectType eq '${objectType}' and Persona eq '${libPersona.getActivePersona(context)}'`);

        cacheFlow(context, objectType, activePersona, headersCount);

        return headersCount > 0;
    }

    return false;
}

function getCachedFlowCount(context, objectType, activePersona) {
    const guidedFlowList = libCom.getStateVariable(context, GUIDED_FLOW_CACHE_VARIABLE_NAME) || {};
    const key = objectType + '_' + activePersona;

    if (Object.prototype.hasOwnProperty.call(guidedFlowList, key)) {
        return guidedFlowList[key];
    }

    return undefined;
}

function cacheFlow(context, objectType, activePersona, count) {
    const guidedFlowList = libCom.getStateVariable(context, GUIDED_FLOW_CACHE_VARIABLE_NAME) || {};
    const key = objectType + '_' + activePersona;

    Logger.info('Cached Flow Enabled', `key: ${key}; enabled: ${count > 0}`);
    guidedFlowList[key] = count;

    libCom.setStateVariable(context, GUIDED_FLOW_CACHE_VARIABLE_NAME, guidedFlowList);
}
