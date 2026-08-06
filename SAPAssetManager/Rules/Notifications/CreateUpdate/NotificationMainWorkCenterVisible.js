import IsFromOnlineEquipCreate from '../../Common/IsFromOnlineEquipCreate';
import IsFromOnlineFlocCreate from '../../Common/IsFromOnlineFlocCreate';

export default function NotificationMainWorkCenterVisible(context) {
    return !IsFromOnlineEquipCreate(context) && !IsFromOnlineFlocCreate(context);
}
