import ValidationLibrary from '../Common/Library/ValidationLibrary';

export default function ObjectCellTechObjects(context, binding = context.binding) {
    let techObjects = [];

    if (ValidationLibrary.evalIsNotEmpty(binding.HeaderEquipment)) {
        techObjects.push(binding.HeaderEquipment);
    }

    if (ValidationLibrary.evalIsNotEmpty(binding.FunctionalLocation?.FuncLocId)) {
        techObjects.push(binding.FunctionalLocation.FuncLocId);
    } else if (ValidationLibrary.evalIsNotEmpty(binding.HeaderFunctionLocation)) {
        techObjects.push(binding.HeaderFunctionLocation);
    }
    
    return techObjects.join(', ');
}
