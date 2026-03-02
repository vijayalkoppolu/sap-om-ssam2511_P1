import { getSerialNumberCount } from '../../../WarehouseTask/SerialNumber/WarehouseTaskCreateSerialCount';

export default async function WHHandlingUnitQuantityCount(context, binding = context.binding) {
    const openPackableQuantity = binding?.OpenPackableQuantity || '0';
    const serialized = binding?.Serialized;
    if (serialized) {
        const serialcount = await getSerialNumberCount(context, binding);
        return serialcount > 0 ? String(serialcount) : openPackableQuantity;
    }
    return openPackableQuantity;
}
