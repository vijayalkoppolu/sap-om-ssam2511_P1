
import EnableCharEdit from '../../UserAuthorizations/Characteristics/EnableCharEdit';
import ODataLibrary from '../../OData/ODataLibrary';
import { rebindPageObject } from './CharacteristicValueDetailsOnReturning';

export default async function EnableAddCharLAMValue(context) {
    const pageProxy = context.getPageProxy();
    const binding = context.binding;
    const lamCount = await context.count('/SAPAssetManager/Services/AssetManager.service', 'ClassCharacteristics', `$filter=InternCharNum eq '${binding.CharId}' and InternClassNum eq '${binding.InternClassNum}' and LAMEnabled eq 'X'`);
    
    const reloadBinding = await rebindPageObject(pageProxy);
    let local = reloadBinding ? ODataLibrary.hasAnyPendingChanges(reloadBinding) : ODataLibrary.hasAnyPendingChanges(binding);
    return !local && EnableCharEdit(pageProxy) && (lamCount > 0);
}
