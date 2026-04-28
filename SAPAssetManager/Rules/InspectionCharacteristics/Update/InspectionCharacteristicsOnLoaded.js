import Logger from '../../Log/Logger';
import libCom from '../../Common/Library/CommonLibrary';
import inspCharLib from './InspectionCharacteristics';
import { Filterable } from '../../Common/Filterable';

export default async function InspectionCharacteristicsOnLoaded(context) {
    context.getClientData().Filterable = new Filterable(context);

    const {
        FromErrorArchive,
        ErrorObject,
        SectionBindings,
    } = context.getPageProxy().evaluateTargetPathForAPI('#Page:-Previous').getClientData();

    for (const bindingItem of SectionBindings) {
        context.getControls()[0].sections[0]._context.binding = bindingItem;

        if (bindingItem.RequiredChar === 'X') {
            await inspCharLib.enableDependentCharacteristics(context, bindingItem, SectionBindings);
        }
    }
    context.getControls()[0].redraw();

    try {
        if (FromErrorArchive || ErrorObject) {
            context.setActionBarItemVisible(0, false);
            context.setActionBarItemVisible(1, false);
        }
    } catch (err) {
        Logger.error('ErrorArchieve', err.message);
    }

    libCom.saveInitialValues(context);
}
