import libCom from '../../Common/Library/CommonLibrary';

export default function PhysicalInventoryMaterialListPickerQueryOptions(context) {
 
    let plant = libCom.getStateVariable(context, 'PhysicalInventoryItemPlant');
    if (!plant) {
        plant = libCom.getDefaultUserParam('USER_PARAM.WRK');
    }
    let storageLocation = libCom.getStateVariable(context, 'PhysicalInventoryItemStorageLocation');
    if (!storageLocation) {
        storageLocation = libCom.getUserDefaultStorageLocation();
    }
    let searchString = context.searchString ? context.searchString.toLowerCase() : '';
    let searchFilter = '';
    if (searchString) {
        searchFilter = ` and (contains(tolower(Material/Description), '${searchString}') or contains(tolower(Material/EanUpc), '${searchString}') or contains(tolower(MaterialNum), '${searchString}'))`;
    }
    if (plant && storageLocation) {
        return `$filter=Plant eq '${plant}' and StorageLocation eq '${storageLocation}'${searchFilter} &$expand=Material&$orderby=MaterialNum,Plant,StorageLocation`;
    } else {
        return "$filter=Plant eq '-1'&$expand=Material&$orderby=MaterialNum,Plant,StorageLocation";
    }
}
