import IsAddS4RelatedObjectEnabled from '../../ServiceOrders/IsAddS4RelatedObjectEnabled';
import IsS4ServiceIntegrationNotEnabled from '../../ServiceOrders/IsS4ServiceIntegrationNotEnabled';
import IsAnyNoteTypeAvailable from '../Create/IsAnyNoteTypeAvailable';

export default async function IsNotesListCreateVisible(context) {
    if (IsS4ServiceIntegrationNotEnabled(context)) return true;

    return IsAddS4RelatedObjectEnabled(context) && await IsAnyNoteTypeAvailable(context);
}
