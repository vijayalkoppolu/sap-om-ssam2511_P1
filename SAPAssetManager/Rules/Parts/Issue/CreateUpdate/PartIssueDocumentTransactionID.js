import Logger from '../../../Log/Logger';
import PartIssueDocumentLocalID from './PartIssueDocumentLocalID';

export default function PartIssueDocumentTransactionID(context) {
    let objectKey = null;
    try {
        objectKey = context.evaluateTargetPathForAPI('#Page:-Previous').binding.ObjectKey;
    } catch (error) {
        Logger.error('PartIssueDocumentTransactionID', error);
    }

    if (objectKey) {
        context.getClientData().LocalMatDocId = objectKey;
        return objectKey;
    }
    return PartIssueDocumentLocalID(context);
}
