import isDefenseEnabled from '../../Defense/isDefenseEnabled';
import Logger from '../../Log/Logger';
import UpdateOnlineQueryOptions from './UpdateOnlineQueryOptions';

export default function PartOnlineSwitch(context) {
    const controls = [
        'MaterialNumber',
        'MaterialDescription',
        ...(isDefenseEnabled(context) ? [
            'MaterialNatoStockNumber',
            'MaterialMPNStockNumber',
            'MaterialLMPNStockNumber',
        ] : []),
    ].map(field => context.getPageProxy().evaluateTargetPath(`#Control:${field}`));
    // Online Search is enabled
    if (context.getValue() === true) {
        return context.executeAction('/SAPAssetManager/Actions/Parts/PartsOnlineSearchIndicator.action').then(function() {
            updateControlsVisibility(controls, true);
            return UpdateOnlineQueryOptions(context);
        }).catch(function(err) {
            // Could not init online service
            Logger.error(`Failed to initialize Online OData Service: ${err}`);
            context.setValue(false);
            context.setEditable(false);
            context.getPageProxy().getClientData().Error = err;
            return context.executeAction('/SAPAssetManager/Actions/SyncErrorBannerMessage.action');
        });
    } else {
        updateControlsVisibility(controls, false);
        return UpdateOnlineQueryOptions(context);
    }
}

function updateControlsVisibility(fields, isVisible) {
    fields.forEach(field => field.setVisible(isVisible));
}
