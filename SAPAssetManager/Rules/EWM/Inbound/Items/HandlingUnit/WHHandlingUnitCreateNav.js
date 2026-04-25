import libCommon from '../../../../Common/Library/CommonLibrary';
import { WarehouseTaskStatus } from '../../../Common/EWMLibrary';
import { validateEditScreen } from '../../../InboundDelivery/SingleEdit/OnPressSingleEditDoneButton';
import { ValidateSerialQuantity } from '../../../InboundDelivery/SingleEdit/SerialNumber/IBDSerialNumberLib';

export default async function WHHandlingUnitCreateNav(context) {
    const binding = context.getActionBinding?.() || context.binding;

    if (await libCommon.getEntitySetCount(context, `${binding['@odata.readLink']}/WarehouseTask_Nav`, `$filter=WTStatus eq '${WarehouseTaskStatus.Open}'`)) {
        return context.executeAction({
            'Name': '/SAPAssetManager/Actions/Common/GenericErrorDialog.action',
            'Properties': {
                'OKCaption': context.localizeText('ok'),
                'Title': context.localizeText('error'),
                'Message': context.localizeText('handling_unit_create_error_task_open'),
            },
        });
    }

    if (libCommon.getCurrentPageName(context) === 'EditInboundDeliveryItemPage') {
        const editScreenValidationFlag = validateEditScreen(context);
        if (editScreenValidationFlag === 'quantity') {
            return context.executeAction('/SAPAssetManager/Actions/EWM/Inbound/Validation/QuantityErrorMessage.action');
        }
        if (binding.Serialized) {
            const isSerialValid = await ValidateSerialQuantity(context);
            if (isSerialValid) {
                if (editScreenValidationFlag !== 'noChanges') {
                    await context.executeAction('/SAPAssetManager/Actions/EWM/Inbound/IBDSaveEditSingleItemCS.action').then(() => {
                    libCommon.setStateVariable(context, 'IBDSerialsChanged', false);
                    });
                }
            } else {
                return context.executeAction({
                    'Name': '/SAPAssetManager/Actions/Common/GenericErrorDialog.action',
                    'Properties': {
                        'OKCaption': context.localizeText('ok'),
                        'Title': context.localizeText('ewm_packing_blocked'),
                        'Message': context.localizeText('ewm_packing_serial_quantity_error'),
                    },
                });
            }
        } else {
            if (editScreenValidationFlag !== 'noChanges') {
                await context.executeAction('/SAPAssetManager/Rules/EWM/InboundDelivery/SingleEdit/SaveInboundItem.js');
            }
        }
    }

    return context.executeAction('/SAPAssetManager/Actions/EWM/Inbound/HandlingUnit/WHHandlingUnitCreateNav.action');
}
