import CommonLibrary from '../../Common/Library/CommonLibrary';

export default function GetFailedSubOperationsActivityType(context) {
    const subOperationsConfirmations = CommonLibrary.getStateVariable(context, 'OperationsToConfirm');
    
    const res = [];
    subOperationsConfirmations.map((item, index) => {
        if (!item.ActivityType) {
            res.push(`${index === 0 ? '' : '\n'}${item.OperationShortText} - ${item.SubOperation}`);
        }
    });

    return context.localizeText('validation_activity_type_is_required_workorder_for_operations', [res]);
}
