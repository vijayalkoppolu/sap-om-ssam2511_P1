import libCom from '../../Common/Library/CommonLibrary';
import { extractMaterial } from './BatchListPickerQueryOptions';
/**
* This function will configure the query options for the material batch TO entity sets.
* 
* @param {IClientAPI} context
*/
export default function BatchToListPickerQueryOptions(context) {
    const qb = context.dataQueryBuilder();

    let queryPlant = libCom.getStateVariable(context, 'MaterialPlantValue');
     if (!queryPlant) {
         queryPlant = context?.binding?.MovePlant;
     }

     let queryMaterial;
     queryMaterial = extractMaterial(context?.binding);
     const FALLBACK = '-1';
     const plant = queryPlant ?? FALLBACK;
     const material = queryMaterial ?? FALLBACK;


     qb.filter(`MaterialNum eq '${material}' and Plant eq '${plant}'`);
     return qb;
}
