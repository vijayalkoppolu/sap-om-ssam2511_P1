import ODataLibrary from '../OData/ODataLibrary';

export default function ExpensesAccessoryButtonIcon(context) {
    const local = ODataLibrary.hasAnyPendingChanges(context.binding);
    return local ? 'sap-icon://edit' : '';
}
