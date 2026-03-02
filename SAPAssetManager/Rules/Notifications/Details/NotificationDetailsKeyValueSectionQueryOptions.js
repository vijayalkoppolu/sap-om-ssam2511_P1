import IsPhaseModelEnabled from '../../Common/IsPhaseModelEnabled';

export default function NotificationDetailsKeyValueSectionQueryOptions(context) {
    let queryoptions = '$expand=Effect_Nav';

    if (IsPhaseModelEnabled(context)) {
        queryoptions += ',DetectionGroup_Nav,DetectionCode_Nav';
    }
    return queryoptions;
}
