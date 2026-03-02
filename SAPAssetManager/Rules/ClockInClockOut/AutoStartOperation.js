import IsPhaseModelEnabled from '../Common/IsPhaseModelEnabled';
import OperationMobileStatusLibrary from '../Operations/MobileStatus/OperationMobileStatusLibrary';
import Logger from '../Log/Logger';
import WorkOrderOperationDetailsOnReturning from '../Operations/WorkOrderOperationDetailsOnReturning';

export default async function AutoStartOperation(context) {
    const binding = context?.binding?.OperationObject || {};

    let orderEAMStatusProfile = '';
    if (IsPhaseModelEnabled(context) && binding.WOHeader) {
        orderEAMStatusProfile = await getOrderEAMStatusProfile(context, binding.WOHeader);
    }

    const phaseReadyStatus = context.getGlobalDefinition('/SAPAssetManager/Globals/MobileStatus/ParameterNames/PhaseReadyParameterName.global').getValue();
    const startStatusQuery = `$filter=Status eq '${phaseReadyStatus}' and EAMOverallStatusProfile eq '${orderEAMStatusProfile}'`;
    return OperationMobileStatusLibrary.startOperation(context, binding, startStatusQuery)
        .then(() => {
            reloadOperationDetailsPage(context);
            return Promise.resolve();
        })
        .finally(() => {
            delete context.getPageProxy().getClientData().ChangeStatus;
        });
}

function getOrderEAMStatusProfile(context, order) {
    if (!order.OrderType) return '';

    return context.read('/SAPAssetManager/Services/AssetManager.service', 'OrderTypes', ['EAMOverallStatusProfile'], `$filter=OrderType eq '${order.OrderType}'`)
        .then(orderTypeArray => {
            return orderTypeArray.length ? orderTypeArray.getItem(0).EAMOverallStatusProfile : '';
        })
        .catch(error => {
            Logger.error('getOrderEAMStatusProfile', error);
            return '';
        });
}

function reloadOperationDetailsPage(context) {
    setTimeout(async () => {
        const currentPageAPI = context.currentPage.context.clientAPI;

        if (currentPageAPI.getName() === 'WorkOrderOperationDetailsPage' || currentPageAPI.getName() === 'WorkOrderOperationDetailsWithObjectCards') {
            let updatedValue = await currentPageAPI.read('/SAPAssetManager/Services/AssetManager.service', currentPageAPI.binding['@odata.readLink'], [], '$expand=OperationMobileStatus_Nav,WOHeader,UserTimeEntry_Nav').then((res) => {
                return res.getItem(0);
            });
            currentPageAPI._context.binding = updatedValue;

            let progressTrackerExtension = currentPageAPI.getControl('SectionedTable').getControl('ProgressTrackerExtensionControl')?.getExtension();
            if (progressTrackerExtension) {
                progressTrackerExtension.binding = updatedValue;
            }

            WorkOrderOperationDetailsOnReturning(currentPageAPI);
        }
    }, 1000);
}
