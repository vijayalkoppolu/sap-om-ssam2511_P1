import libCom from '../../Common/Library/CommonLibrary';

export default function SetSearchString(context) {
    return libCom.getStateVariable(context, 'SearchString') || '';
}
