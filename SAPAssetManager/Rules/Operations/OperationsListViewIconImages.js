
import libMobile from '../MobileStatus/MobileStatusLibrary';
import AttachedDocumentIcon from '../Documents/AttachedDocumentIcon';
import CommonLibrary from '../Common/Library/CommonLibrary';
import ValidationLibrary from '../Common/Library/ValidationLibrary';
import ODataLibrary from '../OData/ODataLibrary';
import TechniciansExist from '../WorkOrders/Operations/TechniciansExist';
import OperationMobileStatusLibrary from './MobileStatus/OperationMobileStatusLibrary';
import Logger from '../Log/Logger';

function hasLocalOperationLongText(/** @type {MyWorkOrderOperation?} */ operation) {
    return HasLocalArrayItem(operation?.OperationLongText);
}

function hasLocalTools(/** @type {MyWorkOrderOperation?} */ operation) {
    return HasLocalArrayItem(operation?.Tools);
}

function hasLocalComponents(/** @type {MyWorkOrderOperation?} */ operation) {
    return HasLocalArrayItem(operation?.Components);
}

function hasLocalFinalConfirmations(/** @type {MyWorkOrderOperation?} */ operation) {
    return HasLocalArrayItem((operation?.Confirmations || []).filter(conf => conf.FinalConfirmation === 'X'));
}

/** @param {Array<{'@sap.hasPendingChanges': string?}>} arrayWithIslocalableItems  */
function HasLocalArrayItem(arrayWithIslocalableItems) {
    return !ValidationLibrary.evalIsEmpty(arrayWithIslocalableItems) && arrayWithIslocalableItems.some(item => !!ODataLibrary.hasAnyPendingChanges(item));
}


export default async function OperationsListViewIconImages(pageProxy) {
    const iconImage = [];
    const binding = pageProxy.binding;
    const split = await OperationMobileStatusLibrary.findMySplitForOperation(pageProxy, binding);

    let isConfirmed = false;
    if (!libMobile.isOperationStatusChangeable(pageProxy)) {
        await libMobile.isMobileStatusConfirmed(pageProxy)
            .then(confirmed => isConfirmed = confirmed)
            .catch((error) => Logger.error('isMobileStatusConfirmed', error));
    }

    if (((binding?.OperationNo && libMobile.isOperationStatusChangeable(pageProxy)) && ((libMobile.getMobileStatus(binding, pageProxy) === 'COMPLETED') || (libMobile.getMobileStatus(split, pageProxy) === 'COMPLETED'))) ||//check mobile status only if operation level assignment
        isConfirmed) { //check system status

        iconImage.push('/SAPAssetManager/Images/stepCheckmarkIcon.png');
    }

    if (ODataLibrary.hasAnyPendingChanges(binding)  ||
        hasLocalOperationLongText(binding) ||
        hasLocalTools(binding) ||
        hasLocalComponents(binding) ||
        (!libMobile.isOperationStatusChangeable(pageProxy) ? hasLocalFinalConfirmations(binding) : false) ||
        ODataLibrary.hasAnyPendingChanges(split ? split.PMMobileStatus_Nav : binding.OperationMobileStatus_Nav)) {

        iconImage.push(CommonLibrary.GetSyncIcon(pageProxy));
    }

    if (await TechniciansExist(pageProxy, binding)) {
        iconImage.push('sap-icon://family-care');
    }

    // check if Operations has any attached documents
    const docIcon = AttachedDocumentIcon(pageProxy, binding.WOOprDocuments_Nav);
    if (docIcon) {
        iconImage.push(docIcon);
    }


    return iconImage;
}
