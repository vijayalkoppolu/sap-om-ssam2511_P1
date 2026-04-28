import MeterStatusText from '../../Meter/Details/MeterStatusText';

export default async function MeterStatus(context) {
    let connection;
    if (!context.binding.Device_Nav.DeviceBlocked) {
        connection = context.localizeText('connected');
    } else {
        connection = context.localizeText('disconnected');
    }
    const statusText = await MeterStatusText(context, context.binding);

    return `${statusText}\n${connection}`;
}
