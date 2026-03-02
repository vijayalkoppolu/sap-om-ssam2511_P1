
export default function MapRedraw(controlAPI) {
    const extension = controlAPI._control;

    if (extension && controlAPI.getName() === 'MapExtensionControl') {
        extension.update();
    }
}
