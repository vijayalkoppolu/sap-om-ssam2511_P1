import WorkCenterControl from '../../../Common/Controls/WorkCenterControl';
import WorkCenterPlant from '../../../Common/Controls/WorkCenterPlantControl';
import CommonLibrary from '../../../Common/Library/CommonLibrary';
import Logger from '../../../Log/Logger';
import EquipFLocIsAllowed from '../WorkOrderOperationIsEquipFuncLocAllowed';
import { PrivateMethodLibrary as libPrivate } from '../WorkOrderOperationLibrary';

export default function WorkOrderOperationCreateUpdateDefault(control) {
    let controlName = control.getName();
    const pageProxy = control.getPageProxy();
    const binding = pageProxy.binding || {};
    let isOnEdit = !CommonLibrary.IsOnCreate(pageProxy);

    switch (controlName) {
        case 'EquipHierarchyExtensionControl': {
            if (pageProxy.getClientData().overrideValue) { //Do not reset to default value when control is reloaded
                pageProxy.getClientData().overrideValue = false;
                return '';
            }

            let extension = pageProxy.getControl('FormCellContainer').getControl('EquipHierarchyExtensionControl').getExtension();
            // Based on some backend config a notification sometimes is auto-created when creating a work order. 
            // Typically it is linked to WO header only, but with Objects List Assignment setting being 3, the notification is also linked to the first operation.
            return EquipFLocIsAllowed(pageProxy).then(result => {
                if (!result && isOnEdit) {
                    extension.setEditable(false);
                } //Default to operation first, then notification
                if (!binding.OperationFunctionLocation && !binding.OperationEquipment && CommonLibrary.isDefined(binding.NotifNum)) {
                    return setHierarchyListPickerValue(control, binding, extension, 'Equipment', 'EquipId');
                } else {
                    if (result === true || isOnEdit) {
                        /// Set the Equipment picker using the Header or Operation Functional Location
                        if (binding['@odata.type'] === '#sap_mobile.MyWorkOrderHeader') {
                            extension.setData(binding.HeaderEquipment);
                        } else if (binding['@odata.type'] === '#sap_mobile.MyWorkOrderOperation') {
                            extension.setData(binding.OperationEquipment);
                        } else { //Default operation during WO add                    
                            let parentWorkOrderPromise = libPrivate._getParentWorkOrder(pageProxy, true);
                            return parentWorkOrderPromise.then(parentWorkOrder => {
                                if (parentWorkOrder && parentWorkOrder.Equipment) {
                                    extension.setData(parentWorkOrder.Equipment);
                                }
                                return true;
                            });
                        }
                    } else {
                        extension.setEditable(false);
                    }
                    return true;
                }
            });
        }
        case 'FuncLocHierarchyExtensionControl': {
            if (pageProxy.getClientData().overrideValue) { //Do not reset to default value when control is reloaded
                pageProxy.getClientData().overrideValue = false;
                return '';
            }
            
            let extension = pageProxy.getControl('FormCellContainer').getControl('FuncLocHierarchyExtensionControl').getExtension();
            // Based on some backend config a notification sometimes is auto-created when creating a work order. 
            // Typically it is linked to WO header only, but with Objects List Assignment setting being 3, the notification is also linked to the first operation.
            // For that reason we need to check the Notification associated with the operation first.
            return EquipFLocIsAllowed(pageProxy).then(result => {
                if (!result && isOnEdit) {
                    extension.setEditable(false);
                } //Default to operation first, then notification
                if (!binding.OperationFunctionLocation && !binding.OperationEquipment && CommonLibrary.isDefined(binding.NotifNum)) {
                    return setHierarchyListPickerValue(control, binding, extension, 'FunctionalLocation', 'FuncLocIdIntern');
                } else {
                    if (result === true || isOnEdit) {
                        /// Set the FLOC picker using the Header or Operation Functional Location
                        if (binding['@odata.type'] === '#sap_mobile.MyWorkOrderHeader') {
                            extension.setData(binding.HeaderFunctionLocation);
                        } else if (binding['@odata.type'] === '#sap_mobile.MyWorkOrderOperation') {
                            extension.setData(binding.OperationFunctionLocation);
                        } else { //Default operation during WO add                    
                            let parentWorkOrderPromise = libPrivate._getParentWorkOrder(pageProxy, true);
                            return parentWorkOrderPromise.then(parentWorkOrder => {
                                if (parentWorkOrder && parentWorkOrder.FunctionalLocation) {
                                    extension.setData(parentWorkOrder.FunctionalLocation);
                                }
                                return Promise.resolve(true);
                            });
                        }
                    } else {
                        extension.setEditable(false);
                    }
                    return Promise.resolve(true);
                }
            });
        }
        case 'WorkCenterLstPkr':
            return WorkCenterControl.getOperationPageDefaultValue(control);
        case 'WorkCenterPlantLstPkr':
            return WorkCenterPlant.getOperationPageDefaultValue(control);
        case 'DescriptionNote': {
            const isOnWOChangeset = CommonLibrary.isOnWOChangeset(pageProxy);

            //Default description from parent work order or operation
            if (binding['@odata.type'] === '#sap_mobile.MyWorkOrderHeader' && !isOnWOChangeset) {
                return binding.OrderDescription;
            } else if (binding['@odata.type'] === '#sap_mobile.MyWorkOrderOperation') {
                return binding.OperationShortText;
            } else { //Default operation during WO add                    
                let parentWorkOrderPromise = libPrivate._getParentWorkOrder(pageProxy, isOnWOChangeset);                        
                return parentWorkOrderPromise.then(parentWorkOrder => {
                    if (parentWorkOrder && parentWorkOrder.Description) {
                        return parentWorkOrder.Description;
                    }
                    return binding.OperationShortText || '';                                    
                });
            }
        }
        default:
            return '';
    }
}

function setHierarchyListPickerValue(control, binding, extension, readEntity, writeEntity) {
    return control.getPageProxy()
        .read('/SAPAssetManager/Services/AssetManager.service',
            `MyNotificationHeaders('${binding.NotifNum}')/${readEntity}`, [], '')
        .then(function setExtentionData(equipmentArray) {
            let equipment = equipmentArray.getItem(0);
            extension.setData(equipment[writeEntity]);
            return Promise.resolve(true);
        })
        .catch(function processError(error) {
            Logger.error('Error in setHierarchyListPickerValue: ' + error);
            extension.setData('');
            return Promise.resolve(false);
        });
}
