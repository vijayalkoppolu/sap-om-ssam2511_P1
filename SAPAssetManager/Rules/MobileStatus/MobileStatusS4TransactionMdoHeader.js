import GetMdoId from '../UserProfile/GetMdoId';

export default function MobileStatusS4TransactionMdoHeader(context) {
    return GetMdoId(context, 'XX_S4_SRV_MOBILE_STATUS');
}
