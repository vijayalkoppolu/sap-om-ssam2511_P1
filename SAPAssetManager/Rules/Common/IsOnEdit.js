import libCommon from './Library/CommonLibrary';

export default function IsOnEdit(context) {
    return !libCommon.IsOnCreate(context);
}
