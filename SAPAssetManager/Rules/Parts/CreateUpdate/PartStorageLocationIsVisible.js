import CommonLibrary from '../../Common/Library/CommonLibrary';

export default function PartStorageLocationIsVisible(context) {
    if (CommonLibrary.IsOnCreate(context)) return true;

    const TEXT_ITEM_CATEGORY = CommonLibrary.getAppParam(context, 'PART', 'TextItemCategory');
    return context.binding?.ItemCategory !== TEXT_ITEM_CATEGORY;
}
