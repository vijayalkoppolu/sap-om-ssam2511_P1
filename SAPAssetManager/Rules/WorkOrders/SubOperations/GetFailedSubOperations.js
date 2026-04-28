import CommonLibrary from '../../Common/Library/CommonLibrary';

export default function GetFailedSubOperations(context) {
    const data = CommonLibrary.getStateVariable(context, 'FailedOperations');
    return data.map((item, index) => {
        return `${index === 0 ? '' : '\n'}${item.OperationShortText} - ${item.SubOperationNo} - ${item.error}`;
    });
}
