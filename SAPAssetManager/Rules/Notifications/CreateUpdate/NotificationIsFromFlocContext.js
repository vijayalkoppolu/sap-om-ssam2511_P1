import libCom from '../../Common/Library/CommonLibrary';

export default function NotificationIsFromFlocContext(context) {
    if (!context?.binding?.HeaderFlocId) {
        return false;
    }
    const flocPlant = context.binding.HeaderFlocPlanningPlant || '';
    if (!flocPlant) {
        return false;
    }
    const iwkPlants = (libCom.getParsedUserParam('USER_PARAM.IWK') || []).map(p => p.trim());
    const appParamPlant = libCom.getAppParam(context, 'NOTIFICATION', 'PlanningPlant') || '';
    return !iwkPlants.includes(flocPlant) && flocPlant !== appParamPlant;
}
