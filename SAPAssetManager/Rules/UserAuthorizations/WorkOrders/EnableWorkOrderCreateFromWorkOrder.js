import EnableWorkOrderCreate from './EnableWorkOrderCreate';
import { WorkOrderLibrary as libWO } from '../../WorkOrders/WorkOrderLibrary';
import CommonLibrary from '../../Common/Library/CommonLibrary';

export default function EnableWorkOrderCreateFromWorkOrder(context) {
    const isNotLocal = !CommonLibrary.isCurrentReadLinkLocal(context.binding['@odata.readLink']);
    return libWO.isWorkOrderInCreatedState(context) ? Promise.resolve(false) : Promise.resolve(EnableWorkOrderCreate(context) && isNotLocal);
}
