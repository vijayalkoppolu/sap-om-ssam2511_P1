import CommonLibrary from '../Common/Library/CommonLibrary';
import PersonaLibrary from '../Persona/PersonaLibrary';

export default function WorkOrderMyOperationsFilterVisible(clientAPI) {
    return PersonaLibrary.isMaintenanceTechnician(clientAPI) && CommonLibrary.getWorkOrderAssnTypeLevel(clientAPI) === 'Operation';
}
