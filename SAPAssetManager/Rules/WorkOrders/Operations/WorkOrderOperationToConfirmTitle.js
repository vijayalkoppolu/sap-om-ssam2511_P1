
export default function WorkOrderOperationToConfirmTitle(context) {
    if (context?.binding?.SubOperationNo) {
        return '{{#Property:OperationShortText}} ({{#Property:SubOperationNo}})';
    }

    return '{{#Property:OperationShortText}} ({{#Property:OperationNo}})';
}
