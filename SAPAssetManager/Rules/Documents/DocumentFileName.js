import {ValueIfExists} from '../Common/Library/Formatter';
import libDoc from './DocumentLibrary';

export default function DocumentFileName(context, binding = context.binding) {
    const doc = libDoc.getDocumentFromBinding(binding);
    let docName;

    if (doc.FileName) {
        docName = doc.FileName;
    } else if (binding?.failedDocument) {
        docName = binding.failedDocument.FileName;
    }

    return ValueIfExists(docName, '-', function(val) {
        return val.replace('&KEY&', '');
    });
}
