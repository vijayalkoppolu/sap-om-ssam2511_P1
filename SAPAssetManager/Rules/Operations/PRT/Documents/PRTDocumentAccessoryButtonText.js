import DocumentLibrary from '../../../Documents/DocumentLibrary';

export default async function PRTDocumentAccessoryButtonText(context) {
    const isMediaLocal = await DocumentLibrary.isMediaLocal(context, '#Property:PRTDocument/#Property:@odata.readLink');
    if (isMediaLocal) {
        return context.localizeText('open');
    } else {
        return '';
    }
}
