import IsHUCountEditable from './IsHUCountEditable';

export default async function WHHandlingUnitQtyHelperText(context) {
    const editable = await IsHUCountEditable(context);
    return editable ? '' : context.localizeText('hu_qty_serialized');
}
