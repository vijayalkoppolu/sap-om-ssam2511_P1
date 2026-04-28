import Logger from '../Log/Logger';
import libDoc from './DocumentLibrary';

/**
 * Gets the substatus text for download documents cell, showing 'PRT' label for PRT docs in operation type sections
 * @param {IClientAPI} context
 * @param {object} [binding=context.binding]
 * @returns {Promise<string>} Returns 'prt' localized text if current document is a PRT document, empty string otherwise
 */
export default async function DownloadDocumentsCellSubstatusText(context, binding = context.binding) {
    if (isOperationTypeSection(context, binding?.DocumentID)) {
        try {
            const count = await context.count('/SAPAssetManager/Services/AssetManager.service', `${binding?.['@odata.readLink']}/PRTDocuments`, '');
            return count > 0 ? context.localizeText('prt') : '';
        } catch (error) {
            Logger.error('DownloadDocumentsCellSubstatusText', error);
        }
    }
    return '';
}

/**
 * Checks if the given document ID belongs to an operation type section
 * @param {IClientAPI} context
 * @param {string} docId The document ID to check
 * @returns {boolean} True if the document belongs to an operation type section, false otherwise
 */
function isOperationTypeSection(context, docId) {
    const { documentsList } = libDoc.getDownloadDocumentsDataFromContext(context.getPageProxy());
    return documentsList.some(section => section.type === 'OPERATIONS' && section.documents.some(doc => doc.DocumentID === docId));
}
