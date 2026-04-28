import { MovementTypes } from '../../Common/Library/InventoryLibrary';

/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function OnPlantToSelected(context) {
    let storageLocationToListPicker = context.getPageProxy().getControl('FormCellContainer').getControl('StorageLocationToListPicker');
    let batchToListPicker = context.getPageProxy().getControl('FormCellContainer').getControl('BatchNumToListPicker');
    if (context.getValue().length > 0) {
        let value = context.getValue()[0].ReturnValue;
        let materialNum = materialNum = context?.binding?.MaterialNum || context.getPageProxy().getClientData().Material;
         batchToListPicker.setValue('');
         const batchToSpec = batchToListPicker.getTargetSpecifier();
         if (materialNum && value) {
             batchToSpec.setEntitySet('MaterialBatches');
             batchToSpec.setService('/SAPAssetManager/Services/AssetManager.service');
             batchToSpec.setQueryOptions(`$filter=MaterialNum eq '${materialNum}' and Plant eq '${value}'`);
             batchToListPicker.setTargetSpecifier(batchToSpec);
             batchToListPicker.setEditable(true);
         } else {
             batchToListPicker.setEditable(false);
         }
         batchToListPicker.redraw();
        let movementTypeLstPkr = context.getPageProxy().getControl('FormCellContainer').getControl('MovementTypePicker');
        if (movementTypeLstPkr.getValue().length > 0) {
            let movementTypeValue = movementTypeLstPkr.getValue()[0].ReturnValue;
            if ([MovementTypes.t301, MovementTypes.t303, MovementTypes.t305].some(t => t === movementTypeValue)) {
                let storageLocationToSpecifier = storageLocationToListPicker.getTargetSpecifier();
                storageLocationToSpecifier.setEntitySet('StorageLocations');
                storageLocationToSpecifier.setService('/SAPAssetManager/Services/AssetManager.service');
                storageLocationToSpecifier.setQueryOptions(`$filter=Plant eq '${value}'&$orderby=StorageLocation`);
                storageLocationToListPicker.setEditable(movementTypeValue !== MovementTypes.t305);
                storageLocationToListPicker.setTargetSpecifier(storageLocationToSpecifier);
                storageLocationToListPicker.redraw();
            }
        }
    } else {
        storageLocationToListPicker.setEditable(false);
        batchToListPicker.setEditable(false);
    }
    storageLocationToListPicker.setValue('');
    storageLocationToListPicker.redraw();
}
