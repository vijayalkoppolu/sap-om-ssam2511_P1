import Logger from '../../Log/Logger';

export const slugRegex = /<[^:<>]+:[^:<>]+>/;

/**
 * Generates a slug header. An empty slug header will be returned if the parent object type is unknown or unable to be determined
 * 
 * @param {*} clientAPI 
 * @returns {Promise<string>} the correct Slug header based on the parent object type. 
 */
export default async function FormInstanceCreateUpdateSlug(clientAPI) {
    let context = clientAPI;

    // attempt to find the parent object context
    while (context?.binding?.['@odata.type'] === '#sap_mobile.DynamicFormLinkage') {
        context = context.evaluateTargetPath('#Page:-Previous')?.context?._clientAPI;
    }

    const readLink = context?.binding?.['@odata.readLink'];
    const headers = [];
    const type = context?.binding?.['@odata.type'];

    switch (type) {
        case '#sap_mobile.MyWorkOrderSubOperation':
            headers.push(['SubOperationNumber', `<${readLink}:SubOperationNo>`]);
            headers.push(['OperationNumber', `<${readLink}:OperationNo>`]);
            headers.push(['OrderID', `<${readLink}:OrderId>`]);
            break;
        case '#sap_mobile.MyWorkOrderOperation':
            headers.push(['OperationNumber', `<${readLink}:OperationNo>`]);
            headers.push(['OrderID', `<${readLink}:OrderId>`]);
            break;
        case '#sap_mobile.MyWorkOrderHeader':
            headers.push(['OrderID', `<${readLink}:OrderId>`]);
            break;
        case '#sap_mobile.MyNotificationHeader':
            headers.push(['ObjectKey', `<${readLink}:NotificationNumber>`]);
            break;
        case '#sap_mobile.MyFunctionalLocation':
            headers.push(['ObjectKey', `<${readLink}:FuncLocIdIntern>`]);
            break;
        case '#sap_mobile.MyEquipment':
            headers.push(['ObjectKey', `<${readLink}:EquipId>`]);
            break;
        case '#sap_mobile.S4ServiceItem':
            headers.push(['S4ItemNum', `<${readLink}:ItemNo>`]);
            headers.push(['S4ObjectType', `<${readLink}:ObjectType>`]);
            headers.push(['S4ObjectID', `<${readLink}:ObjectID>`]);
            break;
        case '#sap_mobile.S4ServiceOrder':
            headers.push(['S4ObjectType', `<${readLink}:ObjectType>`]);
            headers.push(['S4ObjectID', `<${readLink}:ObjectID>`]);
            break;
        case clientAPI.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/WCMApplication.global').getValue():
            headers.push(['ObjectKey', `<${readLink}:WCMApplication>`]);
            break;
        case clientAPI.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/WCMDocumentHeader.global').getValue():
            headers.push(['ObjectKey', `<${readLink}:WCMDocument>`]);
            break;
        default:
            Logger.error(clientAPI.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategorySAPDynamicForms.global'), `Not a known object type. Slug keys may be missing: ${type}`);
            break;
    }

    const headerstring = headers.map(([key,value]) => {
        if (value?.match(slugRegex)) {
            return `${key}=${value}`;
        }
        return `${key}="${encodeURIComponent(value)}"`;
    })
    .join(',');

    return `slug:${headerstring}`;
}
