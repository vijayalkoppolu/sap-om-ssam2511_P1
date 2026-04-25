import DocumentLibrary from '../../../Documents/DocumentLibrary';

export default async function PRTDocumentStatusImage(context) {
    const isMediaLocal = await DocumentLibrary.isMediaLocal(context, '#Property:PRTDocument/#Property:@odata.readLink');
    if (isMediaLocal) {
        return '';
    } else {
        return 'sap-icon://download';
    }
}
