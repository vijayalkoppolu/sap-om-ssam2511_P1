import IsNotFromOnlineCreate from '../../Common/IsNotFromOnlineCreate';
import NotificationIsFromFlocContext from './NotificationIsFromFlocContext';

export default function NotificationIsNotFromFlocContext(context) {
    return IsNotFromOnlineCreate(context) && !NotificationIsFromFlocContext(context);
}
