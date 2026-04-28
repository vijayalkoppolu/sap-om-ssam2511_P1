import NativeScriptObject from '../Common/Library/NativeScriptObject';
import Logger from '../Log/Logger';
import getFileInfo from './DocumentEditorGetFileInfo';

export default function DocumentEditorVisible(context) {
    const fileInfo = getFileInfo(context);
    if (context.binding['@odata.type'] === '#sap_mobile.MatDocAttachment' ) {
        return false;
    }
    return fileInfo && fileInfo.FileName.slice(0,4) !== 'Sig_' && isValidDocument(context, fileInfo);
}

export function isValidDocument(context, fileInfo) {
    if (fileInfo?.Directory && fileInfo?.FileName) {
        try {
            const fileSystemModule = NativeScriptObject.getNativeScriptObject(context).fileSystemModule;
            const filePath = fileSystemModule.path.join(fileInfo.Directory, fileInfo.FileName);
            const docSize = fileSystemModule.File.fromPath(filePath).size;
            return docSize !== 0;
        } catch (error) {
            Logger.error('isValidDocument', error);
            return false;
        }
    }
    return false;
}
