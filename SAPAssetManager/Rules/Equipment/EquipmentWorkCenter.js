import {ValueIfExists} from '../Common/Library/Formatter';

export default async function EquipmentWorkCenter(context) {
    const wcNav = context.binding?.WorkCenter_Main_Nav;
    if (wcNav) {
        const id = wcNav.ExternalWorkCenterId;
        const desc = wcNav.WorkCenterDescr;
        if (id && desc) return `${id} - ${desc}`;
        if (id) return id;
        if (desc) return desc;
        return '-';
    }

    // For Equipment or FunctionalLocation - use WorkCenter field with proper filtering
    const workCenter = context.binding?.WorkCenter;
    const objectType = context.binding?.CRObjectType || context.binding?.PMObjectType;

    if (workCenter && objectType) {
        const result = await context.read(
            '/SAPAssetManager/Services/AssetManager.service', 'WorkCenters',
            ['ExternalWorkCenterId', 'WorkCenterDescr'],
            `$filter=WorkCenterId eq '${workCenter}' and ObjectType eq '${objectType}'`,
        );
        if (result && result.length > 0) {
            const wc = result.getItem(0);
            const id = wc.ExternalWorkCenterId;
            const desc = wc.WorkCenterDescr;
            if (id && desc) return `${id} - ${desc}`;
            return ValueIfExists(id || desc);
        }
        return '-';
    }

    return '-';
}
