import libClock from '../../ClockInClockOut/ClockInClockOutLibrary';
import IsPhaseModelEnabled from '../../Common/IsPhaseModelEnabled';
import libCommon from '../../Common/Library/CommonLibrary';
import Logger from '../../Log/Logger';
import AutoStartOperation from '../AutoStartOperation';

export default async function ConfirmationSuccess(context) {
    let binding = context.getBindingObject();
    if (binding.selectedOperations) {
        binding = context.getActionBinding();
    }

    if (IsPhaseModelEnabled(context)) {
        if (await autoStartIsRequiredForOperation(context, binding)) {
            return AutoStartOperation(context).then(() => {
                return finalConfirmationChecks(context, binding);
            });
        }
    }

    return finalConfirmationChecks(context, binding);
}

async function autoStartIsRequiredForOperation(context, binding) {
    if (binding.OrderID && binding.Operation) {
        const operation = await context.read('/SAPAssetManager/Services/AssetManager.service', `MyWorkOrderOperations(OrderId='${binding.OrderID}',OperationNo='${binding.Operation}')`, [], '$expand=OperationMobileStatus_Nav,WOHeader')
            .then(result => result.getItem(0))
            .catch(error => {
                Logger.error('autoStartIsRequiredForOperation', error);
                return false;
            });

        return operation?.OperationMobileStatus_Nav?.MobileStatus === 'READY';
    }

    return false;
}

export function finalConfirmationChecks(context, binding) {
    let isFinalConfirmation;

    if (binding.selectedOperations) {
        binding = context.getActionBinding();
        for (const [key, value] of Object.entries(binding)) {
            binding[key] = value;
        }
    }

    //Save the final confirmation flag to the state variable for OperationMobileStatusLibrary/SubOperationMobileStatusLibrary to use
    if (Object.prototype.hasOwnProperty.call(binding, 'isFinalConfirmation')) {
        isFinalConfirmation = binding.isFinalConfirmation;
    } else if (Object.prototype.hasOwnProperty.call(binding, 'FinalConfirmation')) {
        isFinalConfirmation = binding.FinalConfirmation;
    } else {
        isFinalConfirmation = libCommon.getControlProxy(context, 'IsFinalConfirmation').getValue();
    }
    let previousPage = context.evaluateTargetPathForAPI('#Page:-Previous');
    libCommon.setStateVariable(context, 'IsFinalConfirmation', isFinalConfirmation, libCommon.getPageName(previousPage));

    //Handle removing clock in/out records after time entry
    libCommon.setStateVariable(context, 'ClockTimeSaved', true);
    return libClock.removeUserTimeEntries(context, '', false, true);
}
