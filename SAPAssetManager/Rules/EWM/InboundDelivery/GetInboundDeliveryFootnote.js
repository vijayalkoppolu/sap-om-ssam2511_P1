import { EWMDisplayDate } from '../Inbound/WHInboundDeliveryPlannedDlvDate';

export default function GetInboundDeliveryFootnote(context, binding = context.binding) {
    const rawDate = binding?.PlannedDeliveryDate;
    if (!rawDate) {
        return '-';
    }
    const formattedDate = EWMDisplayDate(context, rawDate);
    return context.localizeText('delivery_x', [formattedDate]);
}

