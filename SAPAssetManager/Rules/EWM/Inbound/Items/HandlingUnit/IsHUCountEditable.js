import { getSerialNumberCount } from '../../../WarehouseTask/SerialNumber/WarehouseTaskCreateSerialCount';

export default async function IsHUCountEditable(context, binding = context.binding) {
    const serialized = binding?.Serialized;
    if (serialized) {
        const serialcount = await getSerialNumberCount(context, binding);
        return serialcount === 0;
    }

    return true;
}
