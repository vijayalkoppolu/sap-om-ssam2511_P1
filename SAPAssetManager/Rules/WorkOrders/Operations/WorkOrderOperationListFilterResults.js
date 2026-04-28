import libCommon from '../../Common/Library/CommonLibrary';
import ODataDate from '../../Common/Date/ODataDate';
import phaseFilterResult from '../../PhaseModel/PhaseModelFilterPickerResult';
import IsPhaseModelEnabled from '../../Common/IsPhaseModelEnabled';
import PhaseLibrary from '../../PhaseModel/PhaseLibrary';
import FilterLibrary from '../../Filter/FilterLibrary';
import EnableTechObjectsFacet from '../../SideDrawer/EnableTechObjectsFacet';

const cachedWorkOrderOperationListFilterResults = (context) => FilterLibrary.cacheFilterResultIntoClientData(context, WorkOrderOperationListFilterResults);
export default cachedWorkOrderOperationListFilterResults;

function WorkOrderOperationListFilterResults(context) {
    let clientData = context.evaluateTargetPath('#Page:-Previous/#ClientData');
    let filterResults = GetWorkOrderOperationListFilterCriteria(context, true);
    const mobileStatusFilter = filterResults.find(c => c.name === 'OperationMobileStatus_Nav/MobileStatus');

    if (clientData.OperationFastFiltersClass) {
        filterResults = filterResults.concat(clientData.OperationFastFiltersClass.getFastFilterValuesFromFilterPage(context, mobileStatusFilter));
    }

    libCommon.removeStateVariable(context, 'OPERATIONS_DATE_FILTER');

    return filterResults.filter(c => !!c);
}

function GetWorkOrderOperationListFilterCriteria(context, saveToClientData = false) {
    let sorter = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:SortFilter/#Value');
    FilterLibrary.formatDescendingSorterDisplayText(sorter);
    FilterLibrary.addOrderToComplexSorters(sorter);

    let filterResults = [
        sorter,
        context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:MobileStatusFilter/#Value'),
        context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:MyOperationsFilter/#Value'),
        context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:AssignmentFilter/#FilterValue'),
        context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:TypeFilter/#FilterValue'),
        context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:MainWorkCenterFilter/#FilterValue'),
    ];

    if (IsPhaseModelEnabled(context)) {
        let execuationStage = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:ExecuationStageFilter/#Value');
        filterResults.push(execuationStage);
        let phase = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:PhaseFilter/#Value');
        let result = phaseFilterResult(context, 'PhaseFilter', phase);
        if (result) filterResults.push(result);

        PhaseLibrary.addPhaseControlFilterResult(context, 'WorkOrderOperationsFilterPage', filterResults);
        PhaseLibrary.addPhaseControlKeyFilterResult(context, 'WorkOrderOperationsFilterPage', filterResults);
    }

    if (EnableTechObjectsFacet(context)) {
        const flocResult = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:FunctionalLocationFilter/#FilterValue');
        const formattedFlocResult = FilterLibrary.formatObjectCellListPickerDisplayFilterResult(flocResult);
        filterResults.push(formattedFlocResult);

        const equipmentResult = context.evaluateTargetPath('#Page:WorkOrderOperationsFilterPage/#Control:EquipmentFilter/#FilterValue');
        const formattedEquipmentResult = FilterLibrary.formatObjectCellListPickerDisplayFilterResult(equipmentResult);
        filterResults.push(formattedEquipmentResult);
    }

    const scheduledEarliestStartDate = GetDateFilter(context, 'ScheduledEarliestStartDateSwitch', 'ScheduledEarliestStartDateStartFilter',
        'ScheduledEarliestStartDateEndFilter', 'SchedEarliestStartDate', context.localizeText('scheduled_earliest_start_date'),
        saveToClientData);

    const scheduledEarliestEndDate = GetDateFilter(context, 'ScheduledEarliestEndDateSwitch', 'ScheduledEarliestEndDateStartFilter',
        'ScheduledEarliestEndDateEndFilter', 'SchedEarliestEndDate', context.localizeText('scheduled_earliest_end_date'),
        saveToClientData);

    const scheduledLatestStartDate = GetDateFilter(context, 'ScheduledLatestStartDateSwitch', 'ScheduledLatestStartDateStartFilter',
        'ScheduledLatestStartDateEndFilter', 'SchedLatestStartDate', context.localizeText('scheduled_latest_start_date'),
        saveToClientData);

    const scheduledLatestEndDate = GetDateFilter(context, 'ScheduledLatestEndDateSwitch', 'ScheduledLatestEndDateStartFilter',
        'ScheduledLatestEndDateEndFilter', 'SchedLatestEndDate', context.localizeText('scheduled_latest_end_date'),
        saveToClientData);

    const startDueDateTime = GetDateFilter(context, 'StartDueDateSwitch', 'StartDueDateStartFilter',
        'StartDueDateEndFilter', 'DisplayStartDateTime', context.localizeText('sched_start'),
        saveToClientData, true);

    const endDueDateTime = GetDateFilter(context, 'EndDueDateSwitch', 'EndDueDateStartFilter',
        'EndDueDateEndFilter', 'DisplayEndDateTime', context.localizeText('sched_end'),
        saveToClientData, true);

    filterResults = filterResults.concat([scheduledEarliestStartDate, scheduledEarliestEndDate, scheduledLatestStartDate, scheduledLatestEndDate, startDueDateTime, endDueDateTime]);

    return filterResults.filter(c => !!c);
}

function GetDateFilter(context, switchCtrlName, startCtrlName, endCtrlName, filterProp, fastFilterLabel, saveToClientData, timeIncluded = false) {
    let clientData = context.evaluateTargetPath('#Page:-Previous/#ClientData');
    let dateSwitch = context.evaluateTargetPath(`#Page:WorkOrderOperationsFilterPage/#Control:${switchCtrlName}`);

    if (dateSwitch.getValue() === true) {
        let startDate = libCommon.getFieldValue(context, startCtrlName);

        let sdate = (libCommon.isDefined(startDate)) ? startDate : new Date();
        if (!timeIncluded) {
            sdate.setHours(0, 0, 0, 0);
        }
        let odataStartDate = new ODataDate(sdate);
        let odataBackendStartDate = '';
        if (!timeIncluded) {
            odataBackendStartDate = odataStartDate.toDBDateString(context);
        } else {
            odataBackendStartDate = odataStartDate.toDBDateTimeString(context);
        }

        let endDate = libCommon.getFieldValue(context, endCtrlName);
        let edate = (libCommon.isDefined(endDate)) ? endDate : new Date();
        if (!timeIncluded) {
            edate.setHours(0, 0, 0, 0);
        }
        let odataEndDate = new ODataDate(edate);
        let odataBackendEndDate = '';
        if (!timeIncluded) {
            odataBackendEndDate = odataEndDate.toDBDateString(context);
            odataBackendEndDate = odataBackendEndDate.substring(0, 10) + 'T23:59:59';
        } else {
            odataBackendEndDate = odataEndDate.toDBDateTimeString(context);
        }

        let dateFilter = [`${filterProp} ge datetime'${odataBackendStartDate}' and ${filterProp} le datetime'${odataBackendEndDate}'`];
        const startLabel = context.formatDatetime(sdate, '', '', { 'format': 'short' });
        const endLabel = context.formatDatetime(edate, '', '', { 'format': 'short' });
        let dateFilterResult = context.createFilterCriteria(context.filterTypeEnum.Filter, undefined, undefined, dateFilter, true, fastFilterLabel, [`${startLabel} - ${endLabel}`]);

        if (saveToClientData) {
            clientData[switchCtrlName] = dateSwitch.getValue();
            clientData[startCtrlName] = sdate;
            clientData[endCtrlName] = edate;
        }

        return dateFilterResult;
    }

    return null;
}
