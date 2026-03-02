import IsS4ConfirmationItemIsNotCompletedAndCreateEnabled from '../Confirmations/Item/IsS4ConfirmationItemIsNotCompletedAndCreateEnabled';
import IsServiceConfirmationCreateEnabled from '../ServiceConfirmations/CreateUpdate/IsServiceConfirmationCreateEnabled';
import IsAddS4RelatedObjectEnabled from '../ServiceOrders/IsAddS4RelatedObjectEnabled';
import IsS4ServiceOrderNotCompletedAndCreateEnabled from '../ServiceOrders/ServiceItems/IsS4ServiceOrderNotCompletedAndCreateEnabled';
import IsServiceRequestIsNotCompletedAndCreateEnabled from '../ServiceOrders/ServiceRequests/Details/IsServiceRequestIsNotCompletedAndCreateEnabled';
import IsAnyNoteTypeAvailable from './Create/IsAnyNoteTypeAvailable';

export default async function ShowS4NoteCreateButton(context, binding = context.binding) {
    let enabled = true;
    const isAnyNoteTypeAvailable = await IsAnyNoteTypeAvailable(context);
    const entityName = binding?.['@odata.type'];

    switch (entityName) {
        case '#sap_mobile.S4ServiceItem':
        case '#sap_mobile.S4ServiceOrder':
            enabled = await IsS4ServiceOrderNotCompletedAndCreateEnabled(context);
            break;
        case '#sap_mobile.S4ServiceRequest':
            enabled = await IsServiceRequestIsNotCompletedAndCreateEnabled(context);
            break;
        case '#sap_mobile.S4ServiceConfirmation':
            enabled = await IsServiceConfirmationCreateEnabled(context);
            break;
        case '#sap_mobile.S4ServiceConfirmationItem':
            enabled = await IsS4ConfirmationItemIsNotCompletedAndCreateEnabled(context);
            break;
        default:
            enabled = IsAddS4RelatedObjectEnabled(context);
    }

    return enabled && isAnyNoteTypeAvailable;
}
