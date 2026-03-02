import QueryBuilder from '../../Common/Query/QueryBuilder';
import Logger from '../../Log/Logger';
import PersonaLibrary from '../../Persona/PersonaLibrary';
import WorkOrdersFSMQueryOption from './WorkOrdersFSMQueryOption';

export default async function WorkOrderTypePickerItems(context) {
    const types = await readOrderTypes(context);

    return types.map(type => ({
        DisplayValue: `${type.OrderType} - ${type.OrderTypeDesc}`,
        ReturnValue: type.OrderType,
    }));
}

async function readOrderTypes(context) {
    const queryOptions = new QueryBuilder();
    queryOptions.addExtra('orderby=OrderType');

    try {
        if (PersonaLibrary.isFieldServiceTechnician(context)) {
            await WorkOrdersFSMQueryOption(context).then(types => queryOptions.addFilter(types));
        }

        const result = await context.read('/SAPAssetManager/Services/AssetManager.service', 'OrderTypes', [], queryOptions.build());
        if (result.length) {
            const seenTypes = new Set();
            const uniqueTypes = result.filter(type => {
                if (seenTypes.has(type.OrderType)) {
                    return false;
                }
                seenTypes.add(type.OrderType);
                return true;
            });
            return Array.from(uniqueTypes);
        }
        return [];
    } catch (error) {
        Logger.error('readOrderTypes', error);
        return [];
    }
}
