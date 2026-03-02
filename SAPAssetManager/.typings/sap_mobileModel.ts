interface AcctIndicator {
    AcctIndicatorDesc: string;
    AcctIndicator: string;
    Confirmations: Array<Confirmation> | DeferredContent;
    S4ConfirmItems_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ContractItems_Nav: Array<S4ServiceContractItem> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    WOHeaders_Nav: Array<MyWorkOrderHeader> | DeferredContent;
}

type AcctIndicatorId = string | {AcctIndicator: string};

interface EditableAcctIndicator extends Pick<AcctIndicator, "AcctIndicatorDesc"> {
}

interface ActivityType {
    NumberRange: string;
    OrderCategory: string;
    ActivityTypeDescription: string;
    ActivityType: string;
    OrderType: string;
}

type ActivityTypeId = {ActivityType: string,OrderType: string};

interface EditableActivityType extends Pick<ActivityType, "NumberRange" | "OrderCategory" | "ActivityTypeDescription" | "ActivityType" | "OrderType"> {
}

interface Address {
    Country: string;
    City: string;
    Street: string;
    HouseNum: string;
    LastName: string;
    FirstName: string;
    PersonalAddress: string;
    Name: string;
    PostalCode: string;
    CountryVersionFlag: string;
    Building: string;
    Floor: string;
    RoomNum: string;
    Region: string;
    AddressNum: string;
    AddressCommunication: Array<AddressCommunication> | DeferredContent;
    AddressGeocode_Nav: AddressGeocode | null | DeferredContent;
    BusinessPartner: Array<BusinessPartner> | DeferredContent;
    Country_Nav: Country | DeferredContent;
    Customer_Nav: Customer | null | DeferredContent;
    EquipPartner_Nav: Array<MyEquipPartner> | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FuncLocPartner_Nav: Array<MyFuncLocPartner> | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Notification: MyNotificationHeader | null | DeferredContent;
    NotificationPartner: Array<MyNotificationPartner> | DeferredContent;
    PurchaseRequisitionAddress_Nav: PurchaseRequisitionAddress | null | DeferredContent;
    Region_Nav: Region | DeferredContent;
    RouteStops: Array<MyRouteStop> | DeferredContent;
    S4BusinessPartner_Nav: Array<S4BusinessPartner> | DeferredContent;
    Vendor_Nav: Vendor | null | DeferredContent;
    WCMApplicationPartner_Nav: WCMApplicationPartner | null | DeferredContent;
    WCMApprovalPartner_Nav: WCMApprovalPartner | null | DeferredContent;
    WCMDocumentPartner_Nav: WCMDocumentPartner | null | DeferredContent;
    WorkOrder: MyWorkOrderHeader | null | DeferredContent;
    WorkOrderPartner: Array<MyWorkOrderPartner> | DeferredContent;
}

type AddressId = string | {AddressNum: string};

interface EditableAddress extends Pick<Address, "Country" | "City" | "Street" | "HouseNum" | "LastName" | "FirstName" | "PersonalAddress" | "Name" | "PostalCode" | "CountryVersionFlag" | "Building" | "Floor" | "RoomNum" | "Region"> {
}

interface AddressAtWork {
    PersonNum: string;
    PostalCode: string;
    Name: string;
    AddressNum: string;
    Department: string;
    Function: string;
    PersonalAddress: string;
    Street: string;
    RoomNum: string;
    Region: string;
    HouseNum: string;
    Floor: string;
    City: string;
    Building: string;
    CountryVersionFlag: string;
    Country: string;
    LastName: string;
    FirstName: string;
    AddressAtWorkComm: Array<AddressAtWorkComm> | DeferredContent;
    BusinessPartner: BusinessPartner | null | DeferredContent;
    EquipPartner_Nav: Array<MyEquipPartner> | DeferredContent;
    FuncLocPartner_Nav: Array<MyFuncLocPartner> | DeferredContent;
    NotificationPartner: Array<MyNotificationPartner> | DeferredContent;
    S4BusinessPartner_Nav: Array<S4BusinessPartner> | DeferredContent;
    SAPUser_Nav: Array<SAPUser> | DeferredContent;
    WCMApplicationPartner_Nav: Array<WCMApplicationPartner> | DeferredContent;
    WCMApprovalPartner_Nav: Array<WCMApprovalPartner> | DeferredContent;
    WCMDocumentPartner_Nav: Array<WCMDocumentPartner> | DeferredContent;
    WorkOrderPartner: Array<MyWorkOrderPartner> | DeferredContent;
}

type AddressAtWorkId = {PersonNum: string,AddressNum: string};

interface EditableAddressAtWork extends Pick<AddressAtWork, "PersonNum" | "PostalCode" | "Name" | "AddressNum" | "Department" | "Function" | "PersonalAddress" | "Street" | "RoomNum" | "Region" | "HouseNum" | "Floor" | "City" | "Building" | "CountryVersionFlag" | "Country" | "LastName" | "FirstName"> {
}

interface AddressAtWorkComm {
    Country: string;
    Default: string;
    TelNumber: string;
    TelExtension: string;
    PreferTelType: string;
    TelNumberCall: string;
    TelNumberLong: string;
    CommType: string;
    SequenceNum: string;
    AddressNum: string;
    EMail: string;
    PersonNum: string;
    AddressAtWork: AddressAtWork | null | DeferredContent;
}

type AddressAtWorkCommId = {CommType: string,SequenceNum: string,AddressNum: string,PersonNum: string};

interface EditableAddressAtWorkComm extends Pick<AddressAtWorkComm, "Country" | "Default" | "TelNumber" | "TelExtension" | "PreferTelType" | "TelNumberCall" | "TelNumberLong" | "CommType" | "SequenceNum" | "AddressNum" | "EMail" | "PersonNum"> {
}

interface AddressCommunication {
    TelNumber: string;
    TelNumberLong: string;
    TelExtension: string;
    Country: string;
    PreferTelType: string;
    Default: string;
    TelNumberCall: string;
    SequenceNum: string;
    CommType: string;
    AddressNum: string;
    EMail: string;
    PersonNum: string;
    Address: Address | null | DeferredContent;
}

type AddressCommunicationId = {SequenceNum: string,CommType: string,AddressNum: string,PersonNum: string};

interface EditableAddressCommunication extends Pick<AddressCommunication, "TelNumber" | "TelNumberLong" | "TelExtension" | "Country" | "PreferTelType" | "Default" | "TelNumberCall" | "SequenceNum" | "CommType" | "AddressNum" | "EMail" | "PersonNum"> {
}

interface AddressDetSequence {
    BusinessObject: string;
    PMObjectType: string;
    SrcObjectTechEntityType: string;
    SrcObjectType: string;
    SequenceNo: string;
    Active: string;
}

type AddressDetSequenceId = {BusinessObject: string,PMObjectType: string,SrcObjectTechEntityType: string,SrcObjectType: string};

interface EditableAddressDetSequence extends Pick<AddressDetSequence, "BusinessObject" | "PMObjectType" | "SrcObjectTechEntityType" | "SrcObjectType" | "SequenceNo" | "Active"> {
}

interface AddressGeocode {
    ObjectKey: string;
    SpatialObjectId: string;
    SpatialObjectGUID: string;
    AddressNumber: string;
    LogicalSystem: string;
    ObjectType: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    Address_Nav: Address | DeferredContent;
    Geometry_Nav: Geometry | null | DeferredContent;
}

type AddressGeocodeId = {ObjectKey: string,LogicalSystem: string,ObjectType: string,ObjectGroup: string,ObjectGroup1: string};

interface EditableAddressGeocode extends Pick<AddressGeocode, "ObjectKey" | "SpatialObjectId" | "SpatialObjectGUID" | "AddressNumber" | "LogicalSystem" | "ObjectType" | "ObjectGroup" | "ObjectGroup1"> {
}

interface AnswerHeader {
    Status: string;
    DisplayId: string;
    ShortDescription: string;
    Type: string;
    UoM: string;
    AnswerOptionCount: string;
    AnswerId: string;
    Client: string;
    HasDependentObjects: string;
    LongDescription: string;
    Name: string;
    OrganizationName: string;
    AnswerOptions_Nav: Array<AnswerOption> | DeferredContent;
    ChecklistQuestion_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
    FormQuestion_Nav: Array<FormQuestion> | DeferredContent;
}

type AnswerHeaderId = string | {AnswerId: string};

interface EditableAnswerHeader extends Pick<AnswerHeader, "Status" | "DisplayId" | "ShortDescription" | "Type" | "UoM" | "AnswerOptionCount" | "Client" | "HasDependentObjects" | "LongDescription" | "Name" | "OrganizationName"> {
}

interface AnswerOption {
    DisplayId: string;
    ScaleDimension: string;
    Weightage: string;
    IsSelected: string | null;
    UoM: string | null;
    Value2: string | null;
    OptionID: string;
    AnswerId: string;
    HasDependentObjects: string;
    Value1: string;
    SortNumber: string;
    ShortDescription: string;
    LongDescription: string | null;
    AnswerHeader_Nav: AnswerHeader | null | DeferredContent;
    ChecklistQuestion_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
}

type AnswerOptionId = {OptionID: string,AnswerId: string};

interface EditableAnswerOption extends Pick<AnswerOption, "DisplayId" | "ScaleDimension" | "Weightage" | "OptionID" | "AnswerId" | "HasDependentObjects" | "Value1" | "SortNumber" | "ShortDescription">, Partial<Pick<AnswerOption, "IsSelected" | "UoM" | "Value2" | "LongDescription">> {
}

interface AppParam {
    RecordNo: string;
    ParameterName: string;
    ParamGroup: string;
    FlagNoChange: boolean;
    ParamType: string;
    ParamScope: string;
    ParamComment: string;
    ParamValue: string;
}

type AppParamId = string | {RecordNo: string};

interface EditableAppParam extends Pick<AppParam, "ParameterName" | "ParamGroup" | "FlagNoChange" | "ParamType" | "ParamScope" | "ParamComment" | "ParamValue"> {
}

interface AssetCentralEquipmentIndicator {
    ThresholdDesc: string | null;
    MinimumThreshold: string | null;
    MaximumThreshold: string | null;
    TemplateInternalId: string | null;
    AggregatedValue: string | null;
    IndicatorCategory: string | null;
    IndicatorCategoryDescription: string | null;
    IndicatorType: string | null;
    NormalFlag: string | null;
    Trend: string | null;
    AINEquipmentGUID: string;
    UoMDescription: string | null;
    IndicatorDesc: string;
    IndicatorGroupName: string;
    IndicatorGroupDesc: string;
    IndicatorName: string;
    IndicatorGroupId: string;
    IndicatorInstanceId: string;
    IndicatorColorCode: string | null;
    IndicatorInternalId: string | null;
    IndicatorId: string | null;
    UpdateTimeStamp: string | null;
    TemplateId: string | null;
    IndicatorGroupInternalId: string;
    EquipId: string;
    Equipment_Nav: MyEquipment | null | DeferredContent;
}

type AssetCentralEquipmentIndicatorId = {AINEquipmentGUID: string,IndicatorGroupId: string,IndicatorInstanceId: string};

interface EditableAssetCentralEquipmentIndicator extends Pick<AssetCentralEquipmentIndicator, "AINEquipmentGUID" | "IndicatorDesc" | "IndicatorGroupName" | "IndicatorGroupDesc" | "IndicatorName" | "IndicatorGroupId" | "IndicatorInstanceId" | "IndicatorGroupInternalId" | "EquipId">, Partial<Pick<AssetCentralEquipmentIndicator, "ThresholdDesc" | "MinimumThreshold" | "MaximumThreshold" | "TemplateInternalId" | "AggregatedValue" | "IndicatorCategory" | "IndicatorCategoryDescription" | "IndicatorType" | "NormalFlag" | "Trend" | "UoMDescription" | "IndicatorColorCode" | "IndicatorInternalId" | "IndicatorId" | "UpdateTimeStamp" | "TemplateId">> {
}

interface AssetCentralObjectLink {
    FuncLocIdIntern: string;
    AINObjectId: string;
    EAMObjectType: string;
    AINObjectType: string;
    EAMObjectId: string;
    EquipId: string;
    ChecklistBusObject_Nav: Array<ChecklistBusObject> | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    ObjectFormCategory_Nav: Array<ObjectFormCategory> | DeferredContent;
}

type AssetCentralObjectLinkId = string | {AINObjectId: string};

interface EditableAssetCentralObjectLink extends Pick<AssetCentralObjectLink, "FuncLocIdIntern" | "EAMObjectType" | "AINObjectType" | "EAMObjectId" | "EquipId"> {
}

interface AttendanceType {
    AttendanceType: string;
    PersonnelSubareaGrouping: string;
    PersonnelSubarea: string;
    IsNonWorking: string;
    MinDuration: string;
    MaxDuration: string;
    PersonnelArea: string;
    AttendanceTypeText: string;
}

type AttendanceTypeId = {AttendanceType: string,PersonnelSubareaGrouping: string,PersonnelSubarea: string,PersonnelArea: string};

interface EditableAttendanceType extends Pick<AttendanceType, "AttendanceType" | "PersonnelSubareaGrouping" | "PersonnelSubarea" | "IsNonWorking" | "MinDuration" | "MaxDuration" | "PersonnelArea" | "AttendanceTypeText"> {
}

interface AutoCreateWarehouseTask {
    DocumentCategory: string;
    DocumentID: string;
}

type AutoCreateWarehouseTaskId = {DocumentCategory: string,DocumentID: string};

interface EditableAutoCreateWarehouseTask extends Pick<AutoCreateWarehouseTask, "DocumentCategory" | "DocumentID"> {
}

interface AutoCreateWarehouseTask {
    DocumentCategory: string;
    DocumentID: string;
}

type AutoCreateWarehouseTaskId = {DocumentCategory: string,DocumentID: string};

interface EditableAutoCreateWarehouseTask extends Pick<AutoCreateWarehouseTask, "DocumentCategory" | "DocumentID"> {
}

interface AutoPack {
    DocumentCategory: string;
    DocumentID: string;
}

type AutoPackId = {DocumentCategory: string,DocumentID: string};

interface EditableAutoPack extends Pick<AutoPack, "DocumentCategory" | "DocumentID"> {
}

interface BOMHeader {
    BOMCategory: string;
    BOMStatus: string;
    BaseQuantity: string;
    ValidFrom: string;
    BOMGroup: string;
    Counter: string;
    ValidTo: string;
    BOMDescription: string;
    BOMId: string;
    AlternativeBOM: string;
    BaseUoM: string;
    BOMItems_Nav: Array<BOMItem> | DeferredContent;
    EquiBOMs_Nav: Array<EquipmentBOM> | DeferredContent;
    FLocBOMs_Nav: Array<FunctionalLocationBOM> | DeferredContent;
    MaterialBOM_Nav: Array<MaterialBOM> | DeferredContent;
}

type BOMHeaderId = {BOMCategory: string,BOMId: string};

interface EditableBOMHeader extends Pick<BOMHeader, "BOMCategory" | "BOMStatus" | "BaseQuantity" | "ValidFrom" | "BOMGroup" | "Counter" | "ValidTo" | "BOMDescription" | "BOMId" | "AlternativeBOM" | "BaseUoM"> {
}

interface BOMItem {
    DocDesc: string;
    BOMPath: string;
    ItemText1: string;
    ItemCategory: string;
    ItemText2: string;
    PMAssembly: string;
    MaterialDesc: string;
    ValidFrom: string;
    InheritedItemNode: string;
    ObjectType: string;
    Sort: string;
    ItemNode: string;
    BOMCategory: string;
    MaterialNum: string;
    ItemId: string;
    Component: string;
    ChildBoMId: string;
    UoM: string;
    BOMId: string;
    Quantity: string;
    ItemGroup: string;
    Counter: string;
    RequiredComponent: string;
    ValidTo: string;
    ChildBoMUsage: string;
    ChildItemNode: string;
    ChildBoMCategory: string;
    BOMHeader_Nav: BOMHeader | null | DeferredContent;
    ItemCategory_Nav: ItemCategory | null | DeferredContent;
}

type BOMItemId = {ItemNode: string,BOMCategory: string,BOMId: string};

interface EditableBOMItem extends Pick<BOMItem, "DocDesc" | "BOMPath" | "ItemText1" | "ItemCategory" | "ItemText2" | "PMAssembly" | "MaterialDesc" | "ValidFrom" | "InheritedItemNode" | "ObjectType" | "Sort" | "ItemNode" | "BOMCategory" | "MaterialNum" | "ItemId" | "Component" | "ChildBoMId" | "UoM" | "BOMId" | "Quantity" | "ItemGroup" | "Counter" | "RequiredComponent" | "ValidTo" | "ChildBoMUsage" | "ChildItemNode" | "ChildBoMCategory"> {
}

interface BPCategory {
    PartnerCat: string;
    Description: string;
}

type BPCategoryId = string | {PartnerCat: string};

interface EditableBPCategory extends Pick<BPCategory, "Description"> {
}

interface BPNoteType {
    TextObject: string;
    TextDetProc: string;
    TextType: string;
    Sequence: string;
    Changes: string;
    TransferType: string;
    Redetermination: string;
    ObligatoryText: string;
    AccessSequence: string;
    Description: string;
}

type BPNoteTypeId = {TextObject: string,TextDetProc: string,TextType: string};

interface EditableBPNoteType extends Pick<BPNoteType, "TextObject" | "TextDetProc" | "TextType" | "Sequence" | "Changes" | "TransferType" | "Redetermination" | "ObligatoryText" | "AccessSequence" | "Description"> {
}

interface BlockingStatus {
    DeliveryBlock: string;
    DeliveryBlockDesc: string;
    InboundDelivery_Nav: InboundDelivery | null | DeferredContent;
    OutboundDelivery_Nav: OutboundDelivery | null | DeferredContent;
}

type BlockingStatusId = string | {DeliveryBlock: string};

interface EditableBlockingStatus extends Pick<BlockingStatus, "DeliveryBlockDesc"> {
}

interface BusinessArea {
    BusinessAreaDesc: string;
    BusinessArea: string;
}

type BusinessAreaId = string | {BusinessArea: string};

interface EditableBusinessArea extends Pick<BusinessArea, "BusinessAreaDesc"> {
}

interface BusinessPartner {
    AddressNum: string;
    FullName: string;
    LastName: string;
    FirstName: string;
    BPNum: string;
    PersonNum: string;
    OrgName1: string;
    UserName: string;
    BPType: string;
    CostCenter: string;
    OrgName2: string;
    Address: Address | DeferredContent;
    AddressAtWork: AddressAtWork | DeferredContent;
    Customer_Nav: Customer | null | DeferredContent;
    EquipmentPartner: MyEquipPartner | null | DeferredContent;
    FunctionalLocPartner: MyFuncLocPartner | null | DeferredContent;
    NotificationPartner: MyNotificationPartner | null | DeferredContent;
    Vendor_Nav: Vendor | null | DeferredContent;
    WCMApplicationPartner_Nav: WCMApplicationPartner | null | DeferredContent;
    WCMApprovalPartner_Nav: WCMApprovalPartner | null | DeferredContent;
    WCMDocumentPartner_Nav: WCMDocumentPartner | null | DeferredContent;
    WorkOrderPartner: MyWorkOrderPartner | null | DeferredContent;
}

type BusinessPartnerId = string | {BPNum: string};

interface EditableBusinessPartner extends Pick<BusinessPartner, "AddressNum" | "FullName" | "LastName" | "FirstName" | "PersonNum" | "OrgName1" | "UserName" | "BPType" | "CostCenter" | "OrgName2"> {
}

interface COActivityType {
    IsOvertime: string;
    CostCenterDescription: string;
    ActivityTypeDescription: string;
    FiscalYear: string;
    CostCenter: string;
    ControllingArea: string;
    ActivityType: string;
}

type COActivityTypeId = {FiscalYear: string,CostCenter: string,ControllingArea: string,ActivityType: string};

interface EditableCOActivityType extends Pick<COActivityType, "IsOvertime" | "CostCenterDescription" | "ActivityTypeDescription" | "FiscalYear" | "CostCenter" | "ControllingArea" | "ActivityType"> {
}

interface CategorizationSchema {
    SchemaGuid: string;
    SchemaID: string;
    CategoryGuid: string;
    CategoryID: string;
    CategoryName: string;
    CategoryDescription: string;
    CategoryLevel: string;
    PareGuid: string;
    NodeLeaf: string;
    SubjectProfile: string;
    CodeText: string;
    CodeCatalog: string;
    CodeGroup: string;
    PareGuid32: string;
    CategoryGuid32: string;
    SchemaGuid32: string;
    Code: string;
    S4ConfItemCat1_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ConfItemCat2_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ConfItemCat3_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ConfItemCat4_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ConfirmationCat1_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ConfirmationCat2_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ConfirmationCat3_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ConfirmationCat4_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4OrderCat1_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4OrderCat2_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4OrderCat3_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4OrderCat4_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4RequestCat1_1_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat1_2_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat2_1_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat2_2_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat3_1_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat3_2_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat4_1_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4RequestCat4_2_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4ServItemCat1_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServItemCat2_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServItemCat3_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServItemCat4_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotCat1_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceQuotCat2_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceQuotCat3_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceQuotCat4_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceQuotItemCat1_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    S4ServiceQuotItemCat2_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    S4ServiceQuotItemCat3_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    S4ServiceQuotItemCat4_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
}

type CategorizationSchemaId = {SchemaGuid: string,CategoryGuid: string};

interface EditableCategorizationSchema extends Pick<CategorizationSchema, "SchemaGuid" | "SchemaID" | "CategoryGuid" | "CategoryID" | "CategoryName" | "CategoryDescription" | "CategoryLevel" | "PareGuid" | "NodeLeaf" | "SubjectProfile" | "CodeText" | "CodeCatalog" | "CodeGroup" | "PareGuid32" | "CategoryGuid32" | "SchemaGuid32" | "Code"> {
}

interface CatsTimesheet {
    Workcenter: string;
    EndTime: string | null;
    StartTime: string | null;
    StartTimestamp: string | null;
    Plant: string;
    ActivityType: string;
    AttendAbsenceType: string;
    ControllerArea: string;
    Date: string | null;
    DocumentNumber: string;
    Hours: string;
    LastChangeDate: string | null;
    LastChangeTime: string;
    LongTextFlag: string;
    PersonnelNumber: string;
    SenderCostCenter: string;
    ShortText: string;
    Status: string;
    Counter: string;
    Operation: string | null;
    SubOperation: string | null;
    RecOrder: string | null;
    WBSElement: string;
    CostCenter: string | null;
    Network: string | null;
    Activity: string | null;
    Employee: Employee | DeferredContent;
    MyWOHeader: MyWorkOrderHeader | null | DeferredContent;
    MyWOOperation: MyWorkOrderOperation | null | DeferredContent;
    MyWOSubOperation: MyWorkOrderSubOperation | null | DeferredContent;
    Text: Array<CatsTimesheetText> | DeferredContent;
}

type CatsTimesheetId = string | {Counter: string};

interface EditableCatsTimesheet extends Pick<CatsTimesheet, "Workcenter" | "Plant" | "ActivityType" | "AttendAbsenceType" | "ControllerArea" | "DocumentNumber" | "Hours" | "LastChangeTime" | "LongTextFlag" | "PersonnelNumber" | "SenderCostCenter" | "ShortText" | "Status" | "WBSElement">, Partial<Pick<CatsTimesheet, "EndTime" | "StartTime" | "StartTimestamp" | "Date" | "LastChangeDate" | "Operation" | "SubOperation" | "RecOrder" | "CostCenter" | "Network" | "Activity">> {
}

interface CatsTimesheetOverviewRow {
    Date: string;
    Hours: string;
    TimesheetEntry: Array<CatsTimesheet> | DeferredContent;
}

type CatsTimesheetOverviewRowId = string | {Date: string};

interface EditableCatsTimesheetOverviewRow extends Pick<CatsTimesheetOverviewRow, "Hours"> {
}

interface CatsTimesheetText {
    NewTextString: string;
    TextString: string;
    ObjectKey: string;
    TextObjectType: string;
    TextId: string;
    Counter: string;
    TimesheetEntry: CatsTimesheet | DeferredContent;
}

type CatsTimesheetTextId = string | {Counter: string};

interface EditableCatsTimesheetText extends Pick<CatsTimesheetText, "NewTextString" | "TextString" | "ObjectKey" | "TextObjectType" | "TextId"> {
}

interface CharValueCode {
    ValueCode2: string | null;
    ValueCode1: string | null;
    ValueRel: string;
    ClassCharValCode_Nav: Array<ClassCharacteristicValue> | DeferredContent;
    EquipCharValCode_Nav: Array<MyEquipClassCharValue> | DeferredContent;
    FuncLocCharValCode_Nav: Array<MyFuncLocClassCharValue> | DeferredContent;
}

type CharValueCodeId = string | {ValueRel: string};

interface EditableCharValueCode extends Partial<Pick<CharValueCode, "ValueCode2" | "ValueCode1">> {
}

interface Characteristic {
    EntryRequired: string | null;
    DataType: string | null;
    CharName: string | null;
    CharDesc: string | null;
    CaseSensitive: string | null;
    AdditionalVal: string | null;
    Template: string | null;
    UoMExt: string | null;
    TableName: string | null;
    ValueSign: string | null;
    SingleValue: string | null;
    IntCounter: string;
    IntValueAllow: string | null;
    FieldName: string | null;
    NumofDecimal: number | null;
    NumofChar: number | null;
    Exponent: number | null;
    CharId: string;
    UoM: string | null;
    CharacteristicValues: Array<ClassCharacteristicValue> | DeferredContent;
    ClassCharacteristics: Array<ClassCharacteristic> | DeferredContent;
    EquiClassCharValue: Array<MyEquipClassCharValue> | DeferredContent;
    FuncLocClassCharValue: Array<MyFuncLocClassCharValue> | DeferredContent;
}

type CharacteristicId = string | {CharId: string};

interface EditableCharacteristic extends Pick<Characteristic, "IntCounter">, Partial<Pick<Characteristic, "EntryRequired" | "DataType" | "CharName" | "CharDesc" | "CaseSensitive" | "AdditionalVal" | "Template" | "UoMExt" | "TableName" | "ValueSign" | "SingleValue" | "IntValueAllow" | "FieldName" | "NumofDecimal" | "NumofChar" | "Exponent" | "UoM">> {
}

interface ChecklistAssessmentQuestion {
    Status: string;
    DisplayId: string;
    SelectedAnswerOptionId: string;
    Comments: string;
    AnswerId: string;
    QuestionId: string;
    ChecklistType: string;
    FormId: string;
    CLTemplateId: string;
    ObjectId: string;
    GroupId: string;
    AssessmentId: string;
    TemplateId: string;
    SortNumber: string;
    AINObjectId: string;
    Version: string;
    Language: string;
    AnswerHeader_Nav: AnswerHeader | null | DeferredContent;
    AnswerOption_Nav: AnswerOption | null | DeferredContent;
    ChecklistBusObject_Nav: ChecklistBusObject | null | DeferredContent;
    FormGroup_Nav: FormGroup | null | DeferredContent;
    FormQuestion_Nav: FormQuestion | null | DeferredContent;
}

type ChecklistAssessmentQuestionId = {QuestionId: string,ObjectId: string,GroupId: string,AssessmentId: string};

interface EditableChecklistAssessmentQuestion extends Pick<ChecklistAssessmentQuestion, "Status" | "DisplayId" | "SelectedAnswerOptionId" | "Comments" | "AnswerId" | "QuestionId" | "ChecklistType" | "FormId" | "CLTemplateId" | "ObjectId" | "GroupId" | "AssessmentId" | "TemplateId" | "SortNumber" | "AINObjectId" | "Version" | "Language"> {
}

interface ChecklistBusObject {
    FuncLocIdIntern: string;
    Status: string;
    ObjectType: string;
    DisplayId: string;
    ChecklistTemplateOrder: string;
    FormId: string;
    ObjectId: string;
    AssessmentId: string;
    TemplateId: string;
    EquipId: string;
    AssessmentQuestion_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    Form_Nav: Form | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
}

type ChecklistBusObjectId = {ObjectId: string,AssessmentId: string,TemplateId: string};

interface EditableChecklistBusObject extends Pick<ChecklistBusObject, "FuncLocIdIntern" | "Status" | "ObjectType" | "DisplayId" | "ChecklistTemplateOrder" | "FormId" | "ObjectId" | "AssessmentId" | "TemplateId" | "EquipId"> {
}

interface ChecklistType {
    ChecklistTypeDesc: string;
    ChecklistType: string;
    MyWOOperation_Nav: Array<MyWorkOrderOperation> | DeferredContent;
}

type ChecklistTypeId = string | {ChecklistType: string};

interface EditableChecklistType extends Pick<ChecklistType, "ChecklistTypeDesc"> {
}

interface ClassCharacteristic {
    LAMEnabled: string;
    InternCharNum: string;
    ItemId: string;
    InternClassNum: string;
    IntCounter: string;
    Characteristic: Characteristic | null | DeferredContent;
    ClassDefinition: ClassDefinition | null | DeferredContent;
}

type ClassCharacteristicId = {ItemId: string,InternClassNum: string,IntCounter: string};

interface EditableClassCharacteristic extends Pick<ClassCharacteristic, "LAMEnabled" | "InternCharNum" | "ItemId" | "InternClassNum" | "IntCounter"> {
}

interface ClassCharacteristicValue {
    IntCounter: string;
    CharValDesc: string | null;
    CharValTo: string | null;
    CharValFrom: string | null;
    ValueRel: string | null;
    CharValue: string | null;
    CharValCounter: string;
    CharId: string;
    UoM: string | null;
    CharValCode_Nav: CharValueCode | null | DeferredContent;
    Characteristic: Characteristic | null | DeferredContent;
}

type ClassCharacteristicValueId = {IntCounter: string,CharValCounter: string,CharId: string};

interface EditableClassCharacteristicValue extends Pick<ClassCharacteristicValue, "IntCounter" | "CharValCounter" | "CharId">, Partial<Pick<ClassCharacteristicValue, "CharValDesc" | "CharValTo" | "CharValFrom" | "ValueRel" | "CharValue" | "UoM">> {
}

interface ClassDefinition {
    ClassStatus: string;
    ClassId: string;
    ClassType: string;
    ClassDesc: string | null;
    InternClassNum: string;
    ClassCharacteristics: Array<ClassCharacteristic> | DeferredContent;
    EquipClass: MyEquipClass | null | DeferredContent;
    FuncLocClass: MyFuncLocClass | null | DeferredContent;
}

type ClassDefinitionId = string | {InternClassNum: string};

interface EditableClassDefinition extends Pick<ClassDefinition, "ClassStatus" | "ClassId" | "ClassType">, Partial<Pick<ClassDefinition, "ClassDesc">> {
}

interface ClassType {
    Description: string | null;
    Texts: string | null;
    Table: string | null;
    ClassType: string;
}

type ClassTypeId = string | {ClassType: string};

interface EditableClassType extends Partial<Pick<ClassType, "Description" | "Texts" | "Table">> {
}

interface Confirmation {
    WorkCenter: string;
    LAMObjectType: string;
    LAMTableKey: string;
    StartTimeStamp: string | null;
    OrderType: string;
    Plant: string;
    CreatedTime: string;
    ActualWork: string;
    ReverseIndicator: string;
    VarianceReason: string;
    StartTime: string;
    ActualDuration: string;
    AccountingIndicator: string;
    CompleteFlag: string;
    PersonnelNumber: string;
    FinalConfirmation: string;
    Description: string;
    CreatedBy: string;
    FinishTime: string;
    CreatedDate: string | null;
    PostingDate: string | null;
    ActivityType: string;
    FinishDate: string | null;
    StartDate: string | null;
    ConfirmationNum: string;
    CapacityCategory: string;
    SplitNumber: string;
    ConfirmationCounter: string;
    OrderID: string;
    Operation: string;
    SubOperation: string;
    ActualWorkUOM: string;
    ActualDurationUOM: string;
    AcctIndicator: AcctIndicator | DeferredContent;
    ConfirmationOverview: ConfirmationOverviewRow | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    LongText: Array<ConfirmationLongText> | DeferredContent;
    Variance: VarianceReason | DeferredContent;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
    WorkOrderOperation: MyWorkOrderOperation | DeferredContent;
    WorkOrderSubOperation: MyWorkOrderSubOperation | DeferredContent;
}

type ConfirmationId = {ConfirmationNum: string,ConfirmationCounter: string};

interface EditableConfirmation extends Pick<Confirmation, "WorkCenter" | "LAMObjectType" | "LAMTableKey" | "OrderType" | "Plant" | "CreatedTime" | "ActualWork" | "ReverseIndicator" | "VarianceReason" | "StartTime" | "ActualDuration" | "AccountingIndicator" | "CompleteFlag" | "PersonnelNumber" | "FinalConfirmation" | "Description" | "CreatedBy" | "FinishTime" | "ActivityType" | "ConfirmationNum" | "CapacityCategory" | "SplitNumber" | "ConfirmationCounter" | "OrderID" | "Operation" | "SubOperation" | "ActualWorkUOM" | "ActualDurationUOM">, Partial<Pick<Confirmation, "StartTimeStamp" | "CreatedDate" | "PostingDate" | "FinishDate" | "StartDate">> {
}

interface ConfirmationLongText {
    TextString: string;
    ConfirmationCounter: string;
    ObjectKey: string;
    TextObjType: string;
    TextId: string;
    ConfirmationNum: string;
    NewTextString: string;
    Confirmation: Confirmation | DeferredContent;
}

type ConfirmationLongTextId = {ConfirmationCounter: string,ConfirmationNum: string};

interface EditableConfirmationLongText extends Pick<ConfirmationLongText, "TextString" | "ConfirmationCounter" | "ObjectKey" | "TextObjType" | "TextId" | "ConfirmationNum" | "NewTextString"> {
}

interface ConfirmationOverviewRow {
    ActualDuration: string;
    ActualWork: string;
    PostingDate: string;
    ActualDurationUOM: string;
    ActualWorkUOM: string;
    Confirmations: Array<Confirmation> | DeferredContent;
}

type ConfirmationOverviewRowId = string | {PostingDate: string};

interface EditableConfirmationOverviewRow extends Pick<ConfirmationOverviewRow, "ActualDuration" | "ActualWork" | "ActualDurationUOM" | "ActualWorkUOM"> {
}

interface ConsequenceCategory {
    Subtitle: string;
    Title: string;
    CategoryId: string;
    GroupId: string;
    PrioritizationProfileId: string;
    ConsequenceGroup_Nav: ConsequenceGroup | null | DeferredContent;
    ConsequenceLikelihoodMap_Nav: Array<ConsequenceLikelihoodMap> | DeferredContent;
    ConsequenceSeverity_Nav: Array<ConsequenceSeverity> | DeferredContent;
}

type ConsequenceCategoryId = {CategoryId: string,GroupId: string,PrioritizationProfileId: string};

interface EditableConsequenceCategory extends Pick<ConsequenceCategory, "Subtitle" | "Title" | "CategoryId" | "GroupId" | "PrioritizationProfileId"> {
}

interface ConsequenceGroup {
    Description: string;
    GroupId: string;
    PrioritizationProfileId: string;
    ConsequenceCategory_Nav: Array<ConsequenceCategory> | DeferredContent;
    PrioritizationProfile_Nav: PrioritizationProfile | null | DeferredContent;
}

type ConsequenceGroupId = {GroupId: string,PrioritizationProfileId: string};

interface EditableConsequenceGroup extends Pick<ConsequenceGroup, "Description" | "GroupId" | "PrioritizationProfileId"> {
}

interface ConsequenceLikelihood {
    Description: string;
    Position: string;
    LikelihoodId: string;
    ConsequenceLikelihoodMap_Nav: Array<ConsequenceLikelihoodMap> | DeferredContent;
}

type ConsequenceLikelihoodId = string | {LikelihoodId: string};

interface EditableConsequenceLikelihood extends Pick<ConsequenceLikelihood, "Description" | "Position"> {
}

interface ConsequenceLikelihoodMap {
    CategoryId: string;
    GroupId: string;
    LikelihoodId: string;
    LikelihoodPosition: string;
    PrioritizationProfileId: string;
    ConsequenceCategory_Nav: ConsequenceCategory | null | DeferredContent;
    ConsequenceLikelihood_Nav: ConsequenceLikelihood | null | DeferredContent;
}

type ConsequenceLikelihoodMapId = {CategoryId: string,GroupId: string,LikelihoodId: string,LikelihoodPosition: string,PrioritizationProfileId: string};

interface EditableConsequenceLikelihoodMap extends Pick<ConsequenceLikelihoodMap, "CategoryId" | "GroupId" | "LikelihoodId" | "LikelihoodPosition" | "PrioritizationProfileId"> {
}

interface ConsequenceSeverity {
    Description: string;
    Position: string;
    CategoryId: string;
    ConsequenceId: string;
    GroupId: string;
    PrioritizationProfileId: string;
    ConsequenceCategory_Nav: ConsequenceCategory | null | DeferredContent;
}

type ConsequenceSeverityId = {CategoryId: string,ConsequenceId: string,GroupId: string,PrioritizationProfileId: string};

interface EditableConsequenceSeverity extends Pick<ConsequenceSeverity, "Description" | "Position" | "CategoryId" | "ConsequenceId" | "GroupId" | "PrioritizationProfileId"> {
}

interface ControlKey {
    ConfirmationIndicator: string;
    InspCharRequired: string;
    ControlKeyDescription: string;
    Application: string;
    ControlKey: string;
}

type ControlKeyId = {Application: string,ControlKey: string};

interface EditableControlKey extends Pick<ControlKey, "ConfirmationIndicator" | "InspCharRequired" | "ControlKeyDescription" | "Application" | "ControlKey"> {
}

interface CostCenter {
    Language: string;
    COArea: string;
    CostCenter: string;
    ValidTo: string;
    ValidFrom: string;
    LockActPCosts: string;
    Planpricosts: string;
    CompanyCode: string;
    BusinessArea: string;
    CCtrCategory: string;
    PersonResp: string;
    UserResponsible: string;
    Name1: string;
    Description: string;
    ShortText: string;
}

type CostCenterId = {COArea: string,CostCenter: string,ValidTo: string};

interface EditableCostCenter extends Pick<CostCenter, "Language" | "COArea" | "CostCenter" | "ValidTo" | "ValidFrom" | "LockActPCosts" | "Planpricosts" | "CompanyCode" | "BusinessArea" | "CCtrCategory" | "PersonResp" | "UserResponsible" | "Name1" | "Description" | "ShortText"> {
}

interface Country {
    Description: string;
    PostalCodeMask2: string;
    PostalCodeMask: string;
    DialingCode: string;
    PostalCodeLength: string;
    Country: string;
    Addresses_Nav: Array<Address> | DeferredContent;
    Regions_Nav: Array<Region> | DeferredContent;
}

type CountryId = string | {Country: string};

interface EditableCountry extends Pick<Country, "Description" | "PostalCodeMask2" | "PostalCodeMask" | "DialingCode" | "PostalCodeLength"> {
}

interface CrewList {
    Plant: string | null;
    UserGuid: string;
    CrewListNo: string;
    SAPUserName: string;
    ListType: string | null;
    ListReferenceKey: string | null;
    CompanyCode: string | null;
    OriginTimeStamp: string | null;
    CreationTimeStamp: string;
    CrewId: string;
    Description: string;
    Name: string;
    MinimumSize: number;
    MinimumCapacity: number;
    Status: string;
    EndTimestamp: string | null;
    CrewListItems: Array<CrewListItem> | DeferredContent;
}

type CrewListId = string | {CrewId: string};

interface EditableCrewList extends Pick<CrewList, "UserGuid" | "CrewListNo" | "SAPUserName" | "CreationTimeStamp" | "Description" | "Name" | "MinimumSize" | "MinimumCapacity" | "Status">, Partial<Pick<CrewList, "Plant" | "ListType" | "ListReferenceKey" | "CompanyCode" | "OriginTimeStamp" | "EndTimestamp">> {
}

interface CrewListItem {
    Plant: string | null;
    CatsHours: string | null;
    WorkDate: string | null;
    RemovalTimeStamp: string | null;
    RemovalFlag: string | null;
    CrewItemType: string;
    CrewItemKey: string;
    CompanyCode: string | null;
    CrewItemId: string;
    CrewId: string;
    CatsUoM: string | null;
    AssignmentType: string;
    StartTimestamp: string | null;
    EndTimestamp: string | null;
    TechnicianId: string;
    PersonnelNumber: string;
    BusinessPartner: string;
    TechnicianType: string;
    Status: string;
    BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    CrewList: CrewList | null | DeferredContent;
    Employee: Employee | DeferredContent;
    Fleet: Fleet | null | DeferredContent;
}

type CrewListItemId = string | {CrewItemId: string};

interface EditableCrewListItem extends Pick<CrewListItem, "CrewItemType" | "CrewItemKey" | "CrewId" | "AssignmentType" | "TechnicianId" | "PersonnelNumber" | "BusinessPartner" | "TechnicianType" | "Status">, Partial<Pick<CrewListItem, "Plant" | "CatsHours" | "WorkDate" | "RemovalTimeStamp" | "RemovalFlag" | "CompanyCode" | "CatsUoM" | "StartTimestamp" | "EndTimestamp">> {
}

interface Currency {
    XPRIMARY: string;
    SPRAS: string;
    KTEXT: string;
    WAERS: string;
    ISOCD: string;
    ALTWR: string;
    GDATU: string | null;
    S4ConfirmItems_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ContractItems_Nav: Array<S4ServiceContractItem> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
}

type CurrencyId = string | {WAERS: string};

interface EditableCurrency extends Pick<Currency, "XPRIMARY" | "SPRAS" | "KTEXT" | "ISOCD" | "ALTWR">, Partial<Pick<Currency, "GDATU">> {
}

interface Customer {
    CustomerAccountGroup: string;
    AddressNum: string;
    Name1: string;
    PartnerNum: string;
    Customer: string;
    Address_Nav: Address | DeferredContent;
    BusinessPartner_Nav: BusinessPartner | DeferredContent;
    NotifSales_Nav: Array<MyNotificationSales> | DeferredContent;
    OutboundDelivery_Nav: Array<OutboundDelivery> | DeferredContent;
    S4BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    WOSales_Nav: Array<MyWorkOrderSales> | DeferredContent;
}

type CustomerId = string | {Customer: string};

interface EditableCustomer extends Pick<Customer, "CustomerAccountGroup" | "AddressNum" | "Name1" | "PartnerNum"> {
}

interface DefectClass {
    QualityScore: string;
    ShortDesc: string;
    DefectClass: string;
    InspCode_Nav: Array<InspectionCode> | DeferredContent;
    InspectionChars_Nav: Array<InspectionCharacteristic> | DeferredContent;
    NotifItems_Nav: Array<MyNotificationItem> | DeferredContent;
    PMCatalogCode_Nav: Array<PMCatalogCode> | DeferredContent;
}

type DefectClassId = string | {DefectClass: string};

interface EditableDefectClass extends Pick<DefectClass, "QualityScore" | "ShortDesc"> {
}

interface DeliveryPriority {
    DeliveryPriority: string;
    Description: string;
    InboundDelivery_Nav: InboundDelivery | null | DeferredContent;
    OutboundDelivery_Nav: OutboundDelivery | null | DeferredContent;
}

type DeliveryPriorityId = string | {DeliveryPriority: string};

interface EditableDeliveryPriority extends Pick<DeliveryPriority, "Description"> {
}

interface DigitalSignatureApplication {
    ApplicationDescription: string;
    Application: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DigitalSignatureObjectConfig_Nav: Array<DigitalSignatureObjectConfig> | DeferredContent;
    DigitalSignatureObject_Nav: Array<DigitalSignatureObject> | DeferredContent;
}

type DigitalSignatureApplicationId = string | {Application: string};

interface EditableDigitalSignatureApplication extends Pick<DigitalSignatureApplication, "ApplicationDescription"> {
}

interface DigitalSignatureAuthGroup {
    ApplicationId: string;
    AuthorizationGroupDescription: string;
    AuthorizationGroup: string;
    DigitalSignatureItem_Nav: Array<DigitalSignatureItem> | DeferredContent;
}

type DigitalSignatureAuthGroupId = string | {AuthorizationGroup: string};

interface EditableDigitalSignatureAuthGroup extends Pick<DigitalSignatureAuthGroup, "ApplicationId" | "AuthorizationGroupDescription"> {
}

interface DigitalSignatureHeader {
    Type: string;
    Version: string;
    Application: string;
    Method: string;
    Object: string;
    ObjectDescription: string;
    Strategy: string;
    SignatureId: string;
    TimeStamp: string;
    DigitalSignatureApplication_Nav: DigitalSignatureApplication | DeferredContent;
    DigitalSignatureItem_Nav: Array<DigitalSignatureItem> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DigitalSignatureMethod_Nav: DigitalSignatureMethod | DeferredContent;
    DigitalSignatureObject_Nav: DigitalSignatureObject | DeferredContent;
    DigitalSignatureStrategy_Nav: DigitalSignatureStrategy | DeferredContent;
    DigitalSignatureType_Nav: DigitalSignatureType | DeferredContent;
}

type DigitalSignatureHeaderId = string | {SignatureId: string};

interface EditableDigitalSignatureHeader extends Pick<DigitalSignatureHeader, "Type" | "Version" | "Application" | "Method" | "Object" | "ObjectDescription" | "Strategy" | "TimeStamp"> {
}

interface DigitalSignatureItem {
    TimeStamp: string;
    AuthorizationGroup: string;
    Comment: string;
    IndividualSignature: string;
    Remark: string;
    SignatoryFirstName: string;
    SignatoryLastName: string;
    SignerObjectOwner: string;
    State: string;
    Step: string;
    Process: string;
    SignatureId: string;
    Index: number;
    Language: string;
    DigitalSignatureAuthGroup_Nav: DigitalSignatureAuthGroup | DeferredContent;
    DigitalSignatureHeader_Nav: DigitalSignatureHeader | DeferredContent;
}

type DigitalSignatureItemId = {Process: string,SignatureId: string,Index: number};

interface EditableDigitalSignatureItem extends Pick<DigitalSignatureItem, "TimeStamp" | "AuthorizationGroup" | "Comment" | "IndividualSignature" | "Remark" | "SignatoryFirstName" | "SignatoryLastName" | "SignerObjectOwner" | "State" | "Step" | "Process" | "SignatureId" | "Index" | "Language"> {
}

interface DigitalSignatureLink {
    Strategy: string;
    ObjectNumber: string;
    Application: string;
    Object: string;
    ObjectGroup: string;
    ObjectGroup1: string;
    ObjectType: string;
    SignatureId: string;
    Order: string;
    Notification: string;
    Operation: string;
    DigitalSignatureApplication_Nav: DigitalSignatureApplication | DeferredContent;
    DigitalSignatureHeader_Nav: DigitalSignatureHeader | DeferredContent;
    DigitalSignatureObject_Nav: DigitalSignatureObject | DeferredContent;
    DigitalSignatureStrategy_Nav: DigitalSignatureStrategy | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    WorkOrderHeader_Nav: MyWorkOrderHeader | DeferredContent;
    WorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type DigitalSignatureLinkId = string | {SignatureId: string};

interface EditableDigitalSignatureLink extends Pick<DigitalSignatureLink, "Strategy" | "ObjectNumber" | "Application" | "Object" | "ObjectGroup" | "ObjectGroup1" | "ObjectType" | "Order" | "Notification" | "Operation"> {
}

interface DigitalSignatureMethod {
    MethodDescription: string;
    Method: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
    DigitalSignatureStrategy_Nav: Array<DigitalSignatureStrategy> | DeferredContent;
}

type DigitalSignatureMethodId = string | {Method: string};

interface EditableDigitalSignatureMethod extends Pick<DigitalSignatureMethod, "MethodDescription"> {
}

interface DigitalSignatureNote {
    NoteDescription: string;
    NoteId: string;
}

type DigitalSignatureNoteId = string | {NoteId: string};

interface EditableDigitalSignatureNote extends Pick<DigitalSignatureNote, "NoteDescription"> {
}

interface DigitalSignatureObject {
    LogStructure: string;
    SubObject: string;
    AllowComment: string;
    AllowRemark: string;
    AllowObjectDescription: string;
    AllowDocumentSign: string;
    SignatureVersion: string;
    Application: string;
    Object: string;
    ObjectDescription: string;
    MetaName: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DigitalSignatureObjectConfig_Nav: DigitalSignatureObjectConfig | null | DeferredContent;
}

type DigitalSignatureObjectId = {Application: string,Object: string};

interface EditableDigitalSignatureObject extends Pick<DigitalSignatureObject, "LogStructure" | "SubObject" | "AllowComment" | "AllowRemark" | "AllowObjectDescription" | "AllowDocumentSign" | "SignatureVersion" | "Application" | "Object" | "ObjectDescription" | "MetaName"> {
}

interface DigitalSignatureObjectConfig {
    TableFields: string;
    ObjectType: string;
    Object: string;
    Application: string;
    DigitalSignatureApplication_Nav: DigitalSignatureApplication | DeferredContent;
    DigitalSignatureObject_Nav: DigitalSignatureObject | DeferredContent;
}

type DigitalSignatureObjectConfigId = {Object: string,Application: string};

interface EditableDigitalSignatureObjectConfig extends Pick<DigitalSignatureObjectConfig, "TableFields" | "ObjectType" | "Object" | "Application"> {
}

interface DigitalSignatureStrategy {
    ApplicationId: string;
    Method: string;
    Strategy: string;
    AllowComment: boolean;
    AllowRemark: boolean;
    AllowVerification: boolean;
    AllowDocument: boolean;
    StrategyDescription: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DigitalSignatureMethod_Nav: DigitalSignatureMethod | DeferredContent;
}

type DigitalSignatureStrategyId = string | {Strategy: string};

interface EditableDigitalSignatureStrategy extends Pick<DigitalSignatureStrategy, "ApplicationId" | "Method" | "AllowComment" | "AllowRemark" | "AllowVerification" | "AllowDocument" | "StrategyDescription"> {
}

interface DigitalSignatureType {
    SignatureTypeDescription: string;
    SignatureType: string;
    DigitalSignatureHeader_Nav: Array<DigitalSignatureHeader> | DeferredContent;
}

type DigitalSignatureTypeId = string | {SignatureType: string};

interface EditableDigitalSignatureType extends Pick<DigitalSignatureType, "SignatureTypeDescription"> {
}

interface DistributionChannel {
    DistributionChannelCode: string;
    DistributionChannelText: string;
    S4BPSalesArea_Nav: Array<S4BPSalesArea> | DeferredContent;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
}

type DistributionChannelId = string | {DistributionChannelCode: string};

interface EditableDistributionChannel extends Pick<DistributionChannel, "DistributionChannelText"> {
}

interface Division {
    Description: string;
    Division: string;
    Plants_NAV: Array<Plant> | DeferredContent;
    S4BPSalesArea_Nav: Array<S4BPSalesArea> | DeferredContent;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
}

type DivisionId = string | {Division: string};

interface EditableDivision extends Pick<Division, "Description"> {
}

interface Document {
    ObjectKey: string;
    ObjectLink: string;
    StorageCategory: string;
    WSApplication: string;
    URL: string;
    ObjectType: string;
    FileType: string;
    FileSize: string;
    FileName: string;
    Description: string;
    MimeType: string;
    DocumentID: string;
    EquipDocuments: Array<MyEquipDocument> | DeferredContent;
    FileExtension_Nav: FileExtension | DeferredContent;
    FuncLocDocuments: Array<MyFuncLocDocument> | DeferredContent;
    InspMethodDocs_Nav: Array<InspectionMethodDocument> | DeferredContent;
    InspectionLotDocument_Nav: Array<InspectionLotDocument> | DeferredContent;
    MatDocAttachment_Nav: Array<MatDocAttachment> | DeferredContent;
    NotifDocuments: Array<MyNotifDocument> | DeferredContent;
    PRTDocuments: Array<MyWorkOrderTool> | DeferredContent;
    ReportTemplate_Nav: Array<ReportTemplate> | DeferredContent;
    S4ServiceConfirmationDocument_Nav: Array<S4ServiceConfirmationDocument> | DeferredContent;
    S4ServiceContractDocument_Nav: Array<S4ServiceContractDocument> | DeferredContent;
    S4ServiceOrderDocs_Nav: Array<S4ServiceOrderDocument> | DeferredContent;
    S4ServiceQuotation_QuotDocs: Array<S4ServiceQuotationDocument> | DeferredContent;
    S4ServiceRequestDocument_Nav: Array<S4ServiceRequestDocument> | DeferredContent;
    WCMApplicationAttachments: Array<WCMApplicationAttachment> | DeferredContent;
    WCMApprovalAttachments: Array<WCMApprovalAttachment> | DeferredContent;
    WCMDocumentHeaderAttachments: Array<WCMDocumentHeaderAttachment> | DeferredContent;
    WCMDocumentItemAttachments: Array<WCMDocumentItemAttachment> | DeferredContent;
    WODocuments: Array<MyWorkOrderDocument> | DeferredContent;
}

type DocumentId = string | {DocumentID: string};

interface EditableDocument extends Pick<Document, "ObjectKey" | "ObjectLink" | "StorageCategory" | "WSApplication" | "URL" | "ObjectType" | "FileType" | "FileSize" | "FileName" | "Description" | "MimeType"> {
}

interface DynamicFormAttachment {
    AppName: string;
    AttachmentID: string;
    FormInstanceID: string;
    FormName: string;
    FormVersion: string;
    MimeType: string;
}

type DynamicFormAttachmentId = {AppName: string,AttachmentID: string,FormInstanceID: string,FormName: string,FormVersion: string};

interface EditableDynamicFormAttachment extends Pick<DynamicFormAttachment, "AppName" | "AttachmentID" | "FormInstanceID" | "FormName" | "FormVersion" | "MimeType"> {
}

interface DynamicFormConfigFile {
    Counter: string;
    ContentType: string;
    FileContent: string;
    FileName: string;
    URLPath: string;
}

type DynamicFormConfigFileId = string | {URLPath: string};

interface EditableDynamicFormConfigFile extends Pick<DynamicFormConfigFile, "Counter" | "ContentType" | "FileContent" | "FileName"> {
}

interface DynamicFormInstance {
    AppName: string;
    FormInstanceID: string;
    FormName: string;
    FormVersion: string;
    ChangeToken: string;
    Content: string;
    FormStatus: string;
    Mandatory: string;
    ObjectKey: string;
    ObjectType: string;
    TechnicalEntityKey: string;
    TechnicalEntityType: string;
    DynamicFormLinkage_Nav: DynamicFormLinkage | null | DeferredContent;
    DynamicFormTemplate_Nav: DynamicFormTemplate | null | DeferredContent;
}

type DynamicFormInstanceId = {AppName: string,FormInstanceID: string,FormName: string,FormVersion: string};

interface EditableDynamicFormInstance extends Pick<DynamicFormInstance, "AppName" | "FormInstanceID" | "FormName" | "FormVersion" | "ChangeToken" | "Content" | "FormStatus" | "Mandatory" | "ObjectKey" | "ObjectType" | "TechnicalEntityKey" | "TechnicalEntityType"> {
}

interface DynamicFormLinkage {
    S4ObjectID: string;
    S4ObjectType: string;
    SubOperationNumber: string;
    AppName: string;
    FormInstanceID: string;
    FormName: string;
    FormVersion: string;
    ObjectKey: string;
    ObjectType: string;
    OperationNumber: string;
    OrderID: string;
    SortField: string;
    TechnicalEntityKey: string;
    TechnicalEntityType: string;
    S4ItemNum: string;
    DynamicFormInstance_Nav: DynamicFormInstance | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    MyNotificationHeader_Nav: MyNotificationHeader | null | DeferredContent;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    MyWorkOrderSubOperation_Nav: MyWorkOrderSubOperation | null | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | null | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | null | DeferredContent;
    S4ServiceQuotationItem_Nav: S4ServiceQuotationItem | null | DeferredContent;
    S4ServiceQuotation_Nav: S4ServiceQuotation | null | DeferredContent;
    WCMApplication_Nav: WCMApplication | null | DeferredContent;
    WCMDocumentHeader_Nav: WCMDocumentHeader | null | DeferredContent;
}

type DynamicFormLinkageId = {AppName: string,FormInstanceID: string,FormName: string,FormVersion: string,ObjectKey: string,ObjectType: string};

interface EditableDynamicFormLinkage extends Pick<DynamicFormLinkage, "S4ObjectID" | "S4ObjectType" | "SubOperationNumber" | "AppName" | "FormInstanceID" | "FormName" | "FormVersion" | "ObjectKey" | "ObjectType" | "OperationNumber" | "OrderID" | "SortField" | "TechnicalEntityKey" | "TechnicalEntityType" | "S4ItemNum"> {
}

interface DynamicFormTemplate {
    Creatable: string;
    AppName: string;
    FormName: string;
    FormVersion: string;
    Content: string;
    DynamicFormInstance_Nav: Array<DynamicFormInstance> | DeferredContent;
}

type DynamicFormTemplateId = {AppName: string,FormName: string,FormVersion: string};

interface EditableDynamicFormTemplate extends Pick<DynamicFormTemplate, "Creatable" | "AppName" | "FormName" | "FormVersion" | "Content"> {
}

interface EAMChecklistLink {
    ChecklistType: string;
    ChecklistStatus: string;
    Deactivated: string;
    FunctionalLocation: string;
    ChecklistID: string;
    Equipment: string;
    OrderId: string;
    OperationNo: string;
    InspectionLot: string;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    InspectionChar_Nav: Array<InspectionCharacteristic> | DeferredContent;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
    MyNotifHeader_Nav: Array<MyNotificationHeader> | DeferredContent;
    MyWOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type EAMChecklistLinkId = string | {ChecklistID: string};

interface EditableEAMChecklistLink extends Pick<EAMChecklistLink, "ChecklistType" | "ChecklistStatus" | "Deactivated" | "FunctionalLocation" | "Equipment" | "OrderId" | "OperationNo" | "InspectionLot"> {
}

interface EAMOverallStatusConfig {
    Phase: string;
    PhaseDesc: string;
    Subphase: string;
    SubphaseDesc: string;
    TransitionTextKey: string;
    StatusAttribute2: string;
    StatusProfile: string;
    SystemStatus: string;
    UserStatus: string;
    SequenceNum: number;
    Status: string;
    EAMOverallStatusProfile: string;
    OverallStatusLabel: string;
    MobileStatus: string;
    StatusAttribute1: string;
    IsSkippable: string;
    IsLogged: string;
    EntityType: string;
    Description: string;
    EAMOverallStatus: string;
    ObjectType: string;
    NextOverallStatusSeq_Nav: Array<EAMOverallStatusSeq> | DeferredContent;
    OverallStatusSeq_Nav: Array<EAMOverallStatusSeq> | DeferredContent;
    PMMobileStatus_Nav: Array<PMMobileStatus> | DeferredContent;
}

type EAMOverallStatusConfigId = {Status: string,EAMOverallStatusProfile: string};

interface EditableEAMOverallStatusConfig extends Pick<EAMOverallStatusConfig, "Phase" | "PhaseDesc" | "Subphase" | "SubphaseDesc" | "TransitionTextKey" | "StatusAttribute2" | "StatusProfile" | "SystemStatus" | "UserStatus" | "SequenceNum" | "Status" | "EAMOverallStatusProfile" | "OverallStatusLabel" | "MobileStatus" | "StatusAttribute1" | "IsSkippable" | "IsLogged" | "EntityType" | "Description" | "EAMOverallStatus" | "ObjectType"> {
}

interface EAMOverallStatusSeq {
    ToEAMOverallStatusProfile: string;
    EAMOverallStatus: string;
    CannotBeSkipped: string;
    EAMNextOverallStatus: string;
    UserPersona: string;
    IsMandatory: string;
    EAMOverallStatusProfile: string;
    RoleType: string;
    FromStatus: string;
    ToStatus: string;
    TransitionType: string;
    PhaseModelRelevant: string;
    FeatureId: string;
    NextOverallStatusCfg_Nav: EAMOverallStatusConfig | DeferredContent;
    OverallStatusCfg_Nav: EAMOverallStatusConfig | DeferredContent;
}

type EAMOverallStatusSeqId = {ToEAMOverallStatusProfile: string,UserPersona: string,EAMOverallStatusProfile: string,RoleType: string,FromStatus: string,ToStatus: string,PhaseModelRelevant: string};

interface EditableEAMOverallStatusSeq extends Pick<EAMOverallStatusSeq, "ToEAMOverallStatusProfile" | "EAMOverallStatus" | "CannotBeSkipped" | "EAMNextOverallStatus" | "UserPersona" | "IsMandatory" | "EAMOverallStatusProfile" | "RoleType" | "FromStatus" | "ToStatus" | "TransitionType" | "PhaseModelRelevant" | "FeatureId"> {
}

interface Effect {
    EffectDescription: string;
    Effect: string;
    NotificationHeaders_Nav: Array<MyNotificationHeader> | DeferredContent;
}

type EffectId = string | {Effect: string};

interface EditableEffect extends Pick<Effect, "EffectDescription"> {
}

interface Employee {
    FirstName: string;
    StartDate: string | null;
    EndDate: string | null;
    ControllingArea: string;
    UserID: string;
    PersonnelArea: string;
    EmployeeName: string;
    LastName: string;
    PersonnelNumber: string;
    PartnerNumber: string;
    CatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    Confirmations: Array<Confirmation> | DeferredContent;
    CrewListItem: Array<CrewListItem> | DeferredContent;
    EmployeeAddress_Nav: Array<EmployeeAddress> | DeferredContent;
    EmployeeCommunications_Nav: Array<EmployeeCommunication> | DeferredContent;
    MyEquipPartners_Nav: Array<MyEquipPartner> | DeferredContent;
    MyFuncLocPartners_Nav: Array<MyFuncLocPartner> | DeferredContent;
    MyNotifPartners_Nav: Array<MyNotificationPartner> | DeferredContent;
    MyWorkOrderOperationCapacityRequirement_: Array<MyWorkOrderOperationCapacityRequirement> | DeferredContent;
    MyWorkOrderPartners_Nav: Array<MyWorkOrderPartner> | DeferredContent;
    NotificationHistory_Nav: Array<NotificationHistory> | DeferredContent;
    WCMApplicationPartner_Nav: Array<WCMApplicationPartner> | DeferredContent;
    WCMApprovalPartner_Nav: Array<WCMApprovalPartner> | DeferredContent;
    WCMDocumentPartner_Nav: Array<WCMDocumentPartner> | DeferredContent;
    WorkOrderHistory_Nav: Array<WorkOrderHistory> | DeferredContent;
    WorkOrderOperation_Nav: Array<MyWorkOrderOperation> | DeferredContent;
}

type EmployeeId = string | {PersonnelNumber: string};

interface EditableEmployee extends Pick<Employee, "FirstName" | "ControllingArea" | "UserID" | "PersonnelArea" | "EmployeeName" | "LastName" | "PartnerNumber">, Partial<Pick<Employee, "StartDate" | "EndDate">> {
}

interface EmployeeAddress {
    CareOfName: string;
    PostalCode: string;
    Floor: string;
    Building: string;
    HouseNum: string;
    City: string;
    Country: string;
    Street: string;
    District: string;
    SequenceNum: string;
    PersonnelNum: string;
    AddressType: string;
    Employee_Nav: Employee | DeferredContent;
}

type EmployeeAddressId = {SequenceNum: string,PersonnelNum: string,AddressType: string};

interface EditableEmployeeAddress extends Pick<EmployeeAddress, "CareOfName" | "PostalCode" | "Floor" | "Building" | "HouseNum" | "City" | "Country" | "Street" | "District" | "SequenceNum" | "PersonnelNum" | "AddressType"> {
}

interface EmployeeCommunication {
    Value: string;
    CommunicationType: string;
    PersonnelNumber: string;
    SequenceNum: string;
    Employee_Nav: Employee | DeferredContent;
}

type EmployeeCommunicationId = {CommunicationType: string,PersonnelNumber: string,SequenceNum: string};

interface EditableEmployeeCommunication extends Pick<EmployeeCommunication, "Value" | "CommunicationType" | "PersonnelNumber" | "SequenceNum"> {
}

interface EquipObjectType {
    ObjectTypeDesc: string;
    ObjectType: string;
    MyEquipments_Nav: Array<MyEquipment> | DeferredContent;
}

type EquipObjectTypeId = string | {ObjectType: string};

interface EditableEquipObjectType extends Pick<EquipObjectType, "ObjectTypeDesc"> {
}

interface EquipTemplate {
    EquipCategory: string;
    EquipId: string;
}

type EquipTemplateId = string | {EquipId: string};

interface EditableEquipTemplate extends Pick<EquipTemplate, "EquipCategory"> {
}

interface EquipmentBOM {
    BOMUsage: string;
    Plant: string;
    BOMCategory: string;
    EquipId: string;
    AlternativeBOM: string;
    BOMId: string;
    BOMHeader_Nav: BOMHeader | null | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
}

type EquipmentBOMId = {BOMUsage: string,Plant: string,BOMCategory: string,EquipId: string,AlternativeBOM: string,BOMId: string};

interface EditableEquipmentBOM extends Pick<EquipmentBOM, "BOMUsage" | "Plant" | "BOMCategory" | "EquipId" | "AlternativeBOM" | "BOMId"> {
}

interface EquipmentCategory {
    EquipCategory: string;
    EquipCategoryDesc: string;
    EquipTemplate_Nav: Array<EquipTemplate> | DeferredContent;
    MyEquipments_Nav: Array<MyEquipment> | DeferredContent;
}

type EquipmentCategoryId = string | {EquipCategory: string};

interface EditableEquipmentCategory extends Pick<EquipmentCategory, "EquipCategoryDesc"> {
}

interface FSMFormAttachment {
    Id: string;
    FileName: string;
    Type: string;
    Inactive: boolean;
    ObjectId: string;
    ObjectType: string;
    MimeType: string;
    LastChangedTimestamp: string | null;
    CreatedTimestamp: string | null;
    Description: string;
    FileContent: string;
    DocumentId: string;
    Category: string;
    Title: string;
    Status: string;
}

type FSMFormAttachmentId = string | {Id: string};

interface EditableFSMFormAttachment extends Pick<FSMFormAttachment, "FileName" | "Type" | "Inactive" | "ObjectId" | "ObjectType" | "MimeType" | "Description" | "FileContent" | "DocumentId" | "Category" | "Title" | "Status">, Partial<Pick<FSMFormAttachment, "LastChangedTimestamp" | "CreatedTimestamp">> {
}

interface FSMFormElement {
    Id: string;
    ChecklistId: string;
    Template: string;
    Value: string;
    LastChangedTimestamp: string | null;
    ElementID: string;
    ChapterID: string;
    FSMFormInstance_Nav: FSMFormInstance | null | DeferredContent;
}

type FSMFormElementId = string | {Id: string};

interface EditableFSMFormElement extends Pick<FSMFormElement, "ChecklistId" | "Template" | "Value" | "ElementID" | "ChapterID">, Partial<Pick<FSMFormElement, "LastChangedTimestamp">> {
}

interface FSMFormInstance {
    S4ServiceOrderId: string;
    S4ServiceItemNumber: string;
    S4ObjectType: string;
    Id: string;
    Description: string;
    OrgLevel: string;
    Owners: string;
    Content: string;
    SyncObjectKPIs: string;
    Template: string;
    Language: string;
    Mandatory: boolean;
    Inactive: boolean;
    DataVersion: number;
    LastChanged: string;
    CreatePerson: string;
    ExternalId: string;
    Groups: string;
    Branches: string;
    Version: number;
    CreatedTimeStamp: string | null;
    ResponsiblePerson: string;
    UdfMetaGroups: string;
    Closed: boolean;
    Location: string;
    UdfValues: string;
    LastChangedBy: string;
    ChecklistId: string;
    SyncStatus: string;
    ActivityId: string;
    WorkOrder: string;
    Operation: string;
    LastChangedTimestamp: string | null;
    FSMFormElement_Nav: Array<FSMFormElement> | DeferredContent;
    FSMFormTemplate_Nav: FSMFormTemplate | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
}

type FSMFormInstanceId = string | {Id: string};

interface EditableFSMFormInstance extends Pick<FSMFormInstance, "S4ServiceOrderId" | "S4ServiceItemNumber" | "S4ObjectType" | "Description" | "OrgLevel" | "Owners" | "Content" | "SyncObjectKPIs" | "Template" | "Language" | "Mandatory" | "Inactive" | "DataVersion" | "LastChanged" | "CreatePerson" | "ExternalId" | "Groups" | "Branches" | "Version" | "ResponsiblePerson" | "UdfMetaGroups" | "Closed" | "Location" | "UdfValues" | "LastChangedBy" | "ChecklistId" | "SyncStatus" | "ActivityId" | "WorkOrder" | "Operation">, Partial<Pick<FSMFormInstance, "CreatedTimeStamp" | "LastChangedTimestamp">> {
}

interface FSMFormTemplate {
    S4Flag: string;
    ChecklistCategoryName: string;
    Owners: string;
    Content: string;
    SyncObjectKPIs: string;
    DefaultLanguage: string;
    Inactive: boolean;
    Tag: string;
    LastChanged: string;
    CreatePerson: string;
    ExternalId: string;
    Groups: string;
    ChecklistCategory: string;
    Branches: string;
    HazardType: string;
    Version: number;
    CreatedTimeStamp: string | null;
    UdfMetaGroups: string;
    Name: string;
    Location: string;
    UdfValues: string;
    LastChangedBy: string;
    SyncStatus: string;
    Status: string;
    Id: string;
    Description: string;
    OrgLevel: string;
    FSMFormInstance_Nav: Array<FSMFormInstance> | DeferredContent;
}

type FSMFormTemplateId = string | {Id: string};

interface EditableFSMFormTemplate extends Pick<FSMFormTemplate, "S4Flag" | "ChecklistCategoryName" | "Owners" | "Content" | "SyncObjectKPIs" | "DefaultLanguage" | "Inactive" | "Tag" | "LastChanged" | "CreatePerson" | "ExternalId" | "Groups" | "ChecklistCategory" | "Branches" | "HazardType" | "Version" | "UdfMetaGroups" | "Name" | "Location" | "UdfValues" | "LastChangedBy" | "SyncStatus" | "Status" | "Description" | "OrgLevel">, Partial<Pick<FSMFormTemplate, "CreatedTimeStamp">> {
}

interface FSMObjectPicker {
    ObjectId: string;
    ObjectType: string;
    Text: string;
    Code: string;
}

type FSMObjectPickerId = string | {ObjectId: string};

interface EditableFSMObjectPicker extends Pick<FSMObjectPicker, "ObjectType" | "Text" | "Code"> {
}

interface FileExtension {
    Description: string;
    Extension: string;
    Type: string;
    Document_Nav: Array<Document> | DeferredContent;
}

type FileExtensionId = string | {Type: string};

interface EditableFileExtension extends Pick<FileExtension, "Description" | "Extension"> {
}

interface FldLogsContainer {
    ContainerID: string;
    DispatchDate: string;
    DispatchLoc: string;
    TripCounter: string;
    ContainerStatus: string;
    ProcessingStartDat: string | null;
    ProcessingEndDate: string | null;
    SourcePlant: string;
    ShipmentID: string;
    ProcessType: string;
    DestinationPlant: string;
    ContainerUUID: string;
    ContainerUnitID: string;
    AllProcessed: string;
    Delete: string;
    ChangedOn: string;
    VoyageUUID: string;
    VoyageNumber: string;
    ShippingPoint: string;
    ReceivingPoint: string;
    IsContainerReleased: string;
    ParentCtnID: string;
    Ctnclassification: string;
    ContainerSourcePlant: string;
    ContainerDestPlant: string;
    SupplierNo: string;
    ActionType: string;
    FldLogsContainerItem_Nav: Array<FldLogsContainerItem> | DeferredContent;
    FldLogsContainerStatus_Nav: FldLogsContainerStatus | null | DeferredContent;
    FldLogsPackage_Nav: Array<FldLogsPackage> | DeferredContent;
}

type FldLogsContainerId = {ContainerID: string,DispatchDate: string,DispatchLoc: string,TripCounter: string};

interface EditableFldLogsContainer extends Pick<FldLogsContainer, "ContainerID" | "DispatchDate" | "DispatchLoc" | "TripCounter" | "ContainerStatus" | "SourcePlant" | "ShipmentID" | "ProcessType" | "DestinationPlant" | "ContainerUUID" | "ContainerUnitID" | "AllProcessed" | "Delete" | "ChangedOn" | "VoyageUUID" | "VoyageNumber" | "ShippingPoint" | "ReceivingPoint" | "IsContainerReleased" | "ParentCtnID" | "Ctnclassification" | "ContainerSourcePlant" | "ContainerDestPlant" | "SupplierNo" | "ActionType">, Partial<Pick<FldLogsContainer, "ProcessingStartDat" | "ProcessingEndDate">> {
}

interface FldLogsContainerItem {
    ContainerID: string;
    DispatchDate: string;
    DispatchLoc: string;
    HandlingUnitID: string;
    ReferenceDocNumber: string;
    TripCounter: string;
    ActualDispatchPlant: string;
    ActualReceivingPlant: string;
    Batch: string;
    ChangedOn: string;
    Comments: string;
    Comments1: string;
    ContainerItemStatus: string;
    ContainerUnitID: string;
    DeliveryDocumentItem: string;
    DestStorLocID: string;
    DestinationStage: string;
    GoodsReceivingPoint: string;
    HandlingDecision: string;
    HandlingUnitQuantity: string;
    InboundDeliveryItem: string;
    InventorySpecialStockType: string;
    IsInternalBatchManaged: string;
    IsMarkedForDeletion: string;
    ItemType: string;
    KitIdentifier: string;
    KitItmRefDocument1: string;
    MatDocItem: string;
    OutboundDeliveryItem: string;
    PackagingType: string;
    ProcessType: string;
    PurchasingDocumentItem: string;
    RcvdHndlgUnitCnctntdID: string;
    ReceivingPlant: string;
    RecipientLocationCode: string;
    RecommendedAction: string;
    ReferenceDocCategory: string;
    ReferenceDocumentLongNumber: string;
    ReferenceSDDocumentItem: string;
    RefrbmtOrderReservation: string;
    RefrbmtOrderResvnItem: string;
    RemoteStorageLocation: string;
    Reservation: string;
    ReservationItem: string;
    RetPOOutbDelivIsCreated: string;
    RetblQtyInBaseUnit: string;
    RetblQtyInOrderUnit: string;
    ReturnStatus: string;
    ShipmentItemID: string;
    ShippingPoint: string;
    SourceStage: string;
    SrceStorLocID: string;
    StorageType: string;
    SubcontrgPOIsCreated: string;
    SuplrItemUUID: string;
    SupplyProcess: string;
    ValuationType: string;
    VisualInspection: string;
    VoyageNumber: string;
    VoyageUUID: string;
    WBSElementExternalID: string;
    WarehouseNo: string;
    WarehouseStorageBin: string;
    ActionType: string;
    DeliveryDocument: string;
    FldLogsRetServicePurOrd: string;
    HandlingUnitExternalID: string;
    HandlingUnitQuantityUnit: string;
    InboundDelivery: string;
    InspectionLot: string;
    MaintenanceOrder: string;
    MatDocYear: string;
    Material: string;
    MaterialDocument: string;
    OutboundDelivery: string;
    PackagingMaterial: string;
    PurchasingDocument: string;
    ReferenceOrder: string;
    ReferencePurchasingDocument: string;
    ReferenceSDDocument: string;
    RefurbishmentOrder: string;
    RetblQtyBaseUnit: string;
    RetblQtyOrderUnit: string;
    SerialNumber: string;
    StockTransportOrder: string;
    SubcontractingPO: string;
    WarehouseTask: string;
    FldLogsContainerItemStatus_Nav: FldLogsContainerItemStatus | null | DeferredContent;
    FldLogsHandlingDecision_Nav: FldLogsHandlingDecision | null | DeferredContent;
    FldLogsPackagingType_Nav: FldLogsPackagingType | null | DeferredContent;
    FldLogsVisualInspection_Nav: FldLogsVisualInspection | null | DeferredContent;
}

type FldLogsContainerItemId = {ContainerID: string,DispatchDate: string,DispatchLoc: string,HandlingUnitID: string,ReferenceDocNumber: string,TripCounter: string};

interface EditableFldLogsContainerItem extends Pick<FldLogsContainerItem, "ContainerID" | "DispatchDate" | "DispatchLoc" | "HandlingUnitID" | "ReferenceDocNumber" | "TripCounter" | "ActualDispatchPlant" | "ActualReceivingPlant" | "Batch" | "ChangedOn" | "Comments" | "Comments1" | "ContainerItemStatus" | "ContainerUnitID" | "DeliveryDocumentItem" | "DestStorLocID" | "DestinationStage" | "GoodsReceivingPoint" | "HandlingDecision" | "HandlingUnitQuantity" | "InboundDeliveryItem" | "InventorySpecialStockType" | "IsInternalBatchManaged" | "IsMarkedForDeletion" | "ItemType" | "KitIdentifier" | "KitItmRefDocument1" | "MatDocItem" | "OutboundDeliveryItem" | "PackagingType" | "ProcessType" | "PurchasingDocumentItem" | "RcvdHndlgUnitCnctntdID" | "ReceivingPlant" | "RecipientLocationCode" | "RecommendedAction" | "ReferenceDocCategory" | "ReferenceDocumentLongNumber" | "ReferenceSDDocumentItem" | "RefrbmtOrderReservation" | "RefrbmtOrderResvnItem" | "RemoteStorageLocation" | "Reservation" | "ReservationItem" | "RetPOOutbDelivIsCreated" | "RetblQtyInBaseUnit" | "RetblQtyInOrderUnit" | "ReturnStatus" | "ShipmentItemID" | "ShippingPoint" | "SourceStage" | "SrceStorLocID" | "StorageType" | "SubcontrgPOIsCreated" | "SuplrItemUUID" | "SupplyProcess" | "ValuationType" | "VisualInspection" | "VoyageNumber" | "VoyageUUID" | "WBSElementExternalID" | "WarehouseNo" | "WarehouseStorageBin" | "ActionType" | "DeliveryDocument" | "FldLogsRetServicePurOrd" | "HandlingUnitExternalID" | "HandlingUnitQuantityUnit" | "InboundDelivery" | "InspectionLot" | "MaintenanceOrder" | "MatDocYear" | "Material" | "MaterialDocument" | "OutboundDelivery" | "PackagingMaterial" | "PurchasingDocument" | "ReferenceOrder" | "ReferencePurchasingDocument" | "ReferenceSDDocument" | "RefurbishmentOrder" | "RetblQtyBaseUnit" | "RetblQtyOrderUnit" | "SerialNumber" | "StockTransportOrder" | "SubcontractingPO" | "WarehouseTask"> {
}

interface FldLogsContainerItemSrNo {
    DeliveryDocumentItem: string;
    Batch: string;
    ValuationType: string;
    ActualDeliveryQuantity: string;
    StorageLocation: string;
    DeliveryDocument: string;
    SerialNumber: string;
    DeliveryQuantityUnit: string;
}

type FldLogsContainerItemSrNoId = {DeliveryDocumentItem: string,Batch: string,ValuationType: string,DeliveryDocument: string,SerialNumber: string};

interface EditableFldLogsContainerItemSrNo extends Pick<FldLogsContainerItemSrNo, "DeliveryDocumentItem" | "Batch" | "ValuationType" | "ActualDeliveryQuantity" | "StorageLocation" | "DeliveryDocument" | "SerialNumber" | "DeliveryQuantityUnit"> {
}

interface FldLogsContainerItemStatus {
    FldContainerItemStatus: string;
    FldContainerItemStatusDesc: string;
}

type FldLogsContainerItemStatusId = string | {FldContainerItemStatus: string};

interface EditableFldLogsContainerItemStatus extends Pick<FldLogsContainerItemStatus, "FldContainerItemStatusDesc"> {
}

interface FldLogsContainerStatus {
    FldContainerStatus: string;
    FldContainerStatusDescription: string;
}

type FldLogsContainerStatusId = string | {FldContainerStatus: string};

interface EditableFldLogsContainerStatus extends Pick<FldLogsContainerStatus, "FldContainerStatusDescription"> {
}

interface FldLogsCtnPackageId {
    FldLogsContainerID: string;
    FldLogsContainerText: string;
    FldLogsCtnCurrentLocation: string;
    FldLogsContainerCategoryText: string;
}

type FldLogsCtnPackageIdId = string | {FldLogsContainerID: string};

interface EditableFldLogsCtnPackageId extends Pick<FldLogsCtnPackageId, "FldLogsContainerText" | "FldLogsCtnCurrentLocation" | "FldLogsContainerCategoryText"> {
}

interface FldLogsCtnPkgPackingStatus {
    CtnPkgPackingStatusText: string;
    CtnPkgPackingStatus: string;
}

type FldLogsCtnPkgPackingStatusId = string | {CtnPkgPackingStatus: string};

interface EditableFldLogsCtnPkgPackingStatus extends Pick<FldLogsCtnPkgPackingStatus, "CtnPkgPackingStatusText"> {
}

interface FldLogsHandlingDecision {
    HandlingDecision: string;
    ProcessType: string;
    Description: string;
}

type FldLogsHandlingDecisionId = {HandlingDecision: string,ProcessType: string};

interface EditableFldLogsHandlingDecision extends Pick<FldLogsHandlingDecision, "HandlingDecision" | "ProcessType" | "Description"> {
}

interface FldLogsHuDelItem {
    DispatchLoc: string;
    ReferenceDocNumber: string;
    ActualDispatchPlant: string;
    ActualReceivingPlant: string;
    Batch: string;
    ChangedOn: string | null;
    Comments: string;
    Comments1: string;
    ContainerID: string;
    ContainerItemStatus: string;
    ContainerUnitID: string;
    DeliveryDocumentItem: string;
    DestStorLocID: string;
    DestinationStage: string;
    GoodsReceivingPoint: string;
    HandlingDecision: string;
    InboundDeliveryItem: string;
    InventorySpecialStockType: string;
    IsInternalBatchManaged: string;
    IsMarkedForDeletion: string;
    ItemType: string;
    KitIdentifier: string;
    KitItmRefDocument1: string;
    MatDocItem: string;
    OutboundDeliveryItem: string;
    PackagingType: string;
    ProcessType: string;
    PurchasingDocumentItem: string;
    RcvdHndlgUnitCnctntdID: string;
    ReceivingPlant: string;
    RecipientLocationCode: string;
    RecommendedAction: string;
    ReferenceDocCategory: string;
    ReferenceSDDocumentItem: string;
    RefrbmtOrderReservation: string;
    RefrbmtOrderResvnItem: string;
    RemoteStorageLocation: string;
    Reservation: string;
    ReservationItem: string;
    RetPOOutbDelivIsCreated: string;
    ReturnStatus: string;
    ShippingPoint: string;
    SourceStage: string;
    SrceStorLocID: string;
    StorageType: string;
    SubcontrgPOIsCreated: string;
    SuplrItemUUID: string;
    SupplyProcess: string;
    ValuationType: string;
    VisualInspection: string;
    VoyageNumber: string;
    VoyageUUID: string;
    WBSElementExternalID: string;
    WarehouseNo: string;
    WarehouseStorageBin: string;
    DispatchDate: string;
    HandlingUnitID: string;
    ShipmentItemID: string;
    HandlingUnitQuantity: string;
    RetblQtyInBaseUnit: string;
    RetblQtyInOrderUnit: string;
    IsDeliveryItem: boolean;
    ActionType: string;
    DeliveryDocument: string;
    FldLogsRetServicePurOrd: string;
    HandlingUnitExternalID: string;
    HandlingUnitQuantityUnit: string;
    InboundDelivery: string;
    InspectionLot: string;
    MaintenanceOrder: string;
    MatDocYear: string;
    Material: string;
    MaterialDocument: string;
    OutboundDelivery: string;
    PackagingMaterial: string;
    PurchasingDocument: string;
    ReferenceOrder: string;
    ReferencePurchasingDocument: string;
    ReferenceSDDocument: string;
    RefurbishmentOrder: string;
    RetblQtyBaseUnit: string;
    RetblQtyOrderUnit: string;
    SerialNumber: string;
    StockTransportOrder: string;
    SubcontractingPO: string;
    WarehouseTask: string;
    FldLogsHUDelItemStatus_Nav: FldLogsContainerItemStatus | null | DeferredContent;
    FldLogsHandlingDecision_Nav: FldLogsHandlingDecision | null | DeferredContent;
    FldLogsPackagingType_Nav: FldLogsPackagingType | null | DeferredContent;
    FldLogsVisualInspection_Nav: FldLogsVisualInspection | null | DeferredContent;
}

type FldLogsHuDelItemId = {DispatchLoc: string,ReferenceDocNumber: string,DispatchDate: string,HandlingUnitID: string,ShipmentItemID: string};

interface EditableFldLogsHuDelItem extends Pick<FldLogsHuDelItem, "DispatchLoc" | "ReferenceDocNumber" | "ActualDispatchPlant" | "ActualReceivingPlant" | "Batch" | "Comments" | "Comments1" | "ContainerID" | "ContainerItemStatus" | "ContainerUnitID" | "DeliveryDocumentItem" | "DestStorLocID" | "DestinationStage" | "GoodsReceivingPoint" | "HandlingDecision" | "InboundDeliveryItem" | "InventorySpecialStockType" | "IsInternalBatchManaged" | "IsMarkedForDeletion" | "ItemType" | "KitIdentifier" | "KitItmRefDocument1" | "MatDocItem" | "OutboundDeliveryItem" | "PackagingType" | "ProcessType" | "PurchasingDocumentItem" | "RcvdHndlgUnitCnctntdID" | "ReceivingPlant" | "RecipientLocationCode" | "RecommendedAction" | "ReferenceDocCategory" | "ReferenceSDDocumentItem" | "RefrbmtOrderReservation" | "RefrbmtOrderResvnItem" | "RemoteStorageLocation" | "Reservation" | "ReservationItem" | "RetPOOutbDelivIsCreated" | "ReturnStatus" | "ShippingPoint" | "SourceStage" | "SrceStorLocID" | "StorageType" | "SubcontrgPOIsCreated" | "SuplrItemUUID" | "SupplyProcess" | "ValuationType" | "VisualInspection" | "VoyageNumber" | "VoyageUUID" | "WBSElementExternalID" | "WarehouseNo" | "WarehouseStorageBin" | "DispatchDate" | "HandlingUnitID" | "ShipmentItemID" | "HandlingUnitQuantity" | "RetblQtyInBaseUnit" | "RetblQtyInOrderUnit" | "IsDeliveryItem" | "ActionType" | "DeliveryDocument" | "FldLogsRetServicePurOrd" | "HandlingUnitExternalID" | "HandlingUnitQuantityUnit" | "InboundDelivery" | "InspectionLot" | "MaintenanceOrder" | "MatDocYear" | "Material" | "MaterialDocument" | "OutboundDelivery" | "PackagingMaterial" | "PurchasingDocument" | "ReferenceOrder" | "ReferencePurchasingDocument" | "ReferenceSDDocument" | "RefurbishmentOrder" | "RetblQtyBaseUnit" | "RetblQtyOrderUnit" | "SerialNumber" | "StockTransportOrder" | "SubcontractingPO" | "WarehouseTask">, Partial<Pick<FldLogsHuDelItem, "ChangedOn">> {
}

interface FldLogsHuDelSnItem {
    DeliveryDocumentItem: string;
    Batch: string;
    ValuationType: string;
    ActualDeliveryQuantity: string;
    StorageLocation: string;
    DeliveryDocument: string;
    SerialNumber: string;
    DeliveryQuantityUnit: string;
}

type FldLogsHuDelSnItemId = {DeliveryDocumentItem: string,Batch: string,ValuationType: string,DeliveryDocument: string,SerialNumber: string};

interface EditableFldLogsHuDelSnItem extends Pick<FldLogsHuDelSnItem, "DeliveryDocumentItem" | "Batch" | "ValuationType" | "ActualDeliveryQuantity" | "StorageLocation" | "DeliveryDocument" | "SerialNumber" | "DeliveryQuantityUnit"> {
}

interface FldLogsInitRetProduct {
    ObjectId: string;
    OutboundDelivery: string;
    Product: string;
    FldLogsReferenceDocumentNumber: string;
    FldLogsRemotePlant: string;
    DispatchedStartDate: string | null;
    FldLogsReturnStatus: string;
    FldLogsReturnStatusText: string;
    RetblQtyInBaseUnit: string;
    RetblQtyBaseUnit: string;
    FldLogsRecommendedAction: string;
    FldLogsRecommendedActionText: string;
    FldLogsSupplyProcess: string;
    FldLogsSupplyProcessText: string;
    ProductDescription: string;
    IsInternalBatchManaged: string;
    Batch: string;
    SerialNumber: string;
    RetblQtyInOrderUnit: string;
    RetblQtyOrderUnit: string;
    RetblQtyInOrderUnit: string;
    RetblQtyOrderUnit: string;
    LoadingQtyInOrderUnit: string;
    SupplyingStorageLocation: string;
    FieldLogisticsTransferPlant: string;
    RemoteStorageLocation: string;
    RemoteStorageLocation: string;
    InventoryUsabilityCode: string;
    FldLogsReturnComment: string;
    FldLogsRetOutbDelivIsCreated: string;
    PurchaseOrderItem: string;
    ReferencePurchasingDocument: string;
    ReferenceOrder: string;
    FldLogsRefurbishmentOrder: string;
    OrderCategory: string;
    FldLogsReferenceDocCategory: string;
    FldLogsTranspContainerID: string;
    RequestedShippingDate: string | null;
    FldLogsVoyageDestStage: string;
    FlogMaintenanceOrder: string;
    ReferenceDocumentItem: string;
    EntryQty: string;
    StockTypeName: string;
    FldLogsRecommendedAction_Nav: FldLogsRecommendedAction | null | DeferredContent;
    FldLogsRefDocType_Nav: FldLogsRefDocType | null | DeferredContent;
    FldLogsReturnStatus_Nav: FldLogsReturnStatus | null | DeferredContent;
    FldLogsShippingPoint_Nav: FldLogsShippingPoint | null | DeferredContent;
    FldLogsSupproc_Nav: FldLogsSupproc | null | DeferredContent;
}

type FldLogsInitRetProductId = {Product: string,FldLogsReferenceDocumentNumber: string,FldLogsRemotePlant: string,RemoteStorageLocation: string,FlogMaintenanceOrder: string,ReferenceDocumentItem: string};

interface EditableFldLogsInitRetProduct extends Pick<FldLogsInitRetProduct, "ObjectId" | "OutboundDelivery" | "Product" | "FldLogsReferenceDocumentNumber" | "FldLogsRemotePlant" | "FldLogsReturnStatus" | "FldLogsReturnStatusText" | "RetblQtyInBaseUnit" | "RetblQtyBaseUnit" | "FldLogsRecommendedAction" | "FldLogsRecommendedActionText" | "FldLogsSupplyProcess" | "FldLogsSupplyProcessText" | "ProductDescription" | "IsInternalBatchManaged" | "Batch" | "SerialNumber" | "RetblQtyInOrderUnit" | "RetblQtyOrderUnit" | "LoadingQtyInOrderUnit" | "SupplyingStorageLocation" | "FieldLogisticsTransferPlant" | "RemoteStorageLocation" | "InventoryUsabilityCode" | "FldLogsReturnComment" | "FldLogsRetOutbDelivIsCreated" | "PurchaseOrderItem" | "ReferencePurchasingDocument" | "ReferenceOrder" | "FldLogsRefurbishmentOrder" | "OrderCategory" | "FldLogsReferenceDocCategory" | "FldLogsTranspContainerID" | "FldLogsVoyageDestStage" | "FlogMaintenanceOrder" | "ReferenceDocumentItem" | "EntryQty" | "StockTypeName">, Partial<Pick<FldLogsInitRetProduct, "DispatchedStartDate" | "RequestedShippingDate">> {
}

interface FldLogsPackCtnPkgItem {
    DeliveryDocument: string;
    FldLogsSrcePlnt: string;
    HandlingUnitExternalID: string;
    MaterialName: string;
    OrderQuantityUnit: string;
    PackagingMaterial: string;
    QuantityInBaseUnit: string;
    ObjectId: string;
    FldLogsShptItemUuidExt: string;
}

type FldLogsPackCtnPkgItemId = {ObjectId: string,FldLogsShptItemUuidExt: string};

interface EditableFldLogsPackCtnPkgItem extends Pick<FldLogsPackCtnPkgItem, "DeliveryDocument" | "FldLogsSrcePlnt" | "HandlingUnitExternalID" | "MaterialName" | "OrderQuantityUnit" | "PackagingMaterial" | "QuantityInBaseUnit" | "ObjectId" | "FldLogsShptItemUuidExt"> {
}

interface FldLogsOrderCategory {
    OrderCategoryText: string;
    OrderCategory: string;
}

type FldLogsOrderCategoryId = string | {OrderCategory: string};

interface EditableFldLogsOrderCategory extends Pick<FldLogsOrderCategory, "OrderCategoryText"> {
}

interface FldLogsPackCtnActWgtUOM {
    UnitOfMeasure: string;
}

type FldLogsPackCtnActWgtUOMId = string | {UnitOfMeasure: string};

interface EditableFldLogsPackCtnActWgtUOM {
}

interface FldLogsPackCtnItem {
    DeliveryDocument: string;
    HandlingUnitExternalID: string;
    MaterialName: string;
    QuantityInBaseUnit: string;
    OrderQuantityUnit: string;
    FldLogsSrcePlnt: string;
    PackagingMaterial: string;
}

type FldLogsPackCtnItemId = string | {DeliveryDocument: string};

interface EditableFldLogsPackCtnItem extends Pick<FldLogsPackCtnItem, "HandlingUnitExternalID" | "MaterialName" | "QuantityInBaseUnit" | "OrderQuantityUnit" | "FldLogsSrcePlnt" | "PackagingMaterial"> {
}

interface FldLogsPackCtnItemStatus {
    FldLogsShptItmStsCode: string;
    FldLogsShptItmStsText: string;
}

type FldLogsPackCtnItemStatusId = string | {FldLogsShptItmStsCode: string};

interface EditableFldLogsPackCtnItemStatus extends Pick<FldLogsPackCtnItemStatus, "FldLogsShptItmStsText"> {
}

interface FldLogsPackCtnLocID {
    FldLogsShptLocationID: string;
}

type FldLogsPackCtnLocIDId = string | {FldLogsShptLocationID: string};

interface EditableFldLogsPackCtnLocID {
}

interface FldLogsPackCtnPkdPkg {
    ActionType: string;
    FldLogsContainerCategoryText: string;
    DeliveryDocument: string;
    FldLogsDestPlnt: string;
    FldLogsSrcePlnt: string;
    FldLogsVoyAssgmtStatusText: string;
    FldLogsCtnPackgStsText: string;
    FldLogsShptCtnIntTranspStsText: string;
    FldLogsVoyageSrceStage: string;
    FldLogsShptLocationID: string;
    FldLogsVoyageDestStage: string;
    FldLogsCtnUnitCurShipgPoint: string;
    FldLogsDestStorLocID: string;
    FldLogsVoyageAssignmentStatus: string;
    FldLogsCtnIntTranspStsCode: string;
    FldLogsReferenceDocumentNumber: string;
    FldLogsContainerUnitExternalID: string;
    FldLogsCtnUnitCurrentPlant: string;
    HandlingUnitExternalID: string;
    FieldLogisticsKitIdentifier: string;
    FldLogsCtnActualWeight: string | null;
    FldLogsContainerID: string;
    ProductGrossWeight: string;
    FldLogsGrossVolume: string;
    FldLogsSrceStorLocID: string;
    FldLogsCtnPackgStsCode: string;
    ObjectId: string;
}

type FldLogsPackCtnPkdPkgId = string | {ObjectId: string};

interface EditableFldLogsPackCtnPkdPkg extends Pick<FldLogsPackCtnPkdPkg, "DeliveryDocument" | "FldLogsDestPlnt" | "FldLogsSrcePlnt" | "FldLogsVoyAssgmtStatusText" | "FldLogsCtnPackgStsText" | "FldLogsShptCtnIntTranspStsText" | "FldLogsVoyageSrceStage" | "FldLogsShptLocationID" | "FldLogsVoyageDestStage" | "FldLogsCtnUnitCurShipgPoint" | "FldLogsDestStorLocID" | "FldLogsVoyageAssignmentStatus" | "FldLogsCtnIntTranspStsCode" | "FldLogsReferenceDocumentNumber" | "FldLogsContainerUnitExternalID" | "FldLogsCtnUnitCurrentPlant" | "HandlingUnitExternalID" | "FieldLogisticsKitIdentifier" | "FldLogsCtnActualWeight" | "FldLogsContainerID" | "ProductGrossWeight" | "FldLogsGrossVolume" | "FldLogsSrceStorLocID" | "FldLogsCtnPackgStsCode" | "FldLogsContainerUnitUUID"> {
}

interface FldLogsPackCtnRdyPck {
    OrderCategory: string;
    ObjectId: string;
    ActionType: string;
    FldLogsContainerId: string;
    Material: string;
    MaterialName: string;
    DeliveryDocument: string;
    FldLogsSrcePlnt: string;
    FldLogsDestPlnt: string;
    QuantityInBaseUnit: string;
    FldLogsDelivDueDate: string | null;
    HandlingUnitExternalId: string;
    FldLogsVoyageAssignmentStatus: string;
    HandlingUnitQuantity: string;
    OrderQuantityUnit: string;
    FldLogsShptItemActualWeight: string;
    ProductGrossWeight: string;
    ProductWeightUnit: string;
    FldLogsGrossVolume: string;
    FldLogsGrossVolumeUnit: string;
    ValuationType: string;
    PackagingMaterial: string;
    HandlingUnitQuantityUnit: string;
    FldLogsShptItemActlWeightUnit: string;
    FldLogsShptItemCurrentPlant: string;
    FldLogsShptItemCurShipgPoint: string;
    FldLogsVoyageSrceStage: string;
    FldLogsShptLocationId: string;
    FldLogsVoyageDestStage: string;
    FldLogsSrceStorLocId: string;
    FldLogsDestStorLocId: string;
    FldLogsCtnPackgStsCode: string;
    FldLogsShptItmStsCode: string;
    FldLogsShptItmStsText: string;
    FldLogsVoyAssgmtStatusText: string;
    FldLogsShptVoyageUuidExt: string;
    FldLogsVoyageStageId: string;
    FldLogsReferenceDocumentNumber: string;
    AssignContainerId: string;
    FldLogsCtnPackageId_Nav: FldLogsCtnPackageId | null | DeferredContent;
    FldLogsOrderCategory_Nav: FldLogsOrderCategory | null | DeferredContent;
    FldLogsPackCtnItemStatus_Nav: FldLogsPackCtnItemStatus | null | DeferredContent;
    FldLogsPackCtnRdyPckSrNo_Nav: Array<FldLogsPackCtnRdyPckSrNo> | DeferredContent;
    FldLogsPackCtnVygStage_Nav: Array<FldLogsPackCtnRdyPckVyg> | DeferredContent;
    FldLogsPlant_Nav: FldLogsPlant | null | DeferredContent;
}

type FldLogsPackCtnRdyPckId = string | {ObjectId: string};

interface EditableFldLogsPackCtnRdyPck extends Pick<FldLogsPackCtnRdyPck, "OrderCategory" | "ActionType" | "FldLogsContainerId" | "Material" | "MaterialName" | "DeliveryDocument" | "FldLogsSrcePlnt" | "FldLogsDestPlnt" | "QuantityInBaseUnit" | "HandlingUnitExternalId" | "FldLogsVoyageAssignmentStatus" | "HandlingUnitQuantity" | "OrderQuantityUnit" | "FldLogsShptItemActualWeight" | "ProductGrossWeight" | "ProductWeightUnit" | "FldLogsGrossVolume" | "FldLogsGrossVolumeUnit" | "ValuationType" | "PackagingMaterial" | "HandlingUnitQuantityUnit" | "FldLogsShptItemActlWeightUnit" | "FldLogsShptItemCurrentPlant" | "FldLogsShptItemCurShipgPoint" | "FldLogsVoyageSrceStage" | "FldLogsShptLocationId" | "FldLogsVoyageDestStage" | "FldLogsSrceStorLocId" | "FldLogsDestStorLocId" | "FldLogsCtnPackgStsCode" | "FldLogsShptItmStsCode" | "FldLogsShptItmStsText" | "FldLogsVoyAssgmtStatusText" | "FldLogsShptVoyageUuidExt" | "FldLogsVoyageStageId" | "FldLogsReferenceDocumentNumber">, Partial<Pick<FldLogsPackCtnRdyPck, "FldLogsDelivDueDate">> {
}

interface FldLogsPackage {
    ContainerID: string;
    DispatchDate: string;
    DispatchLoc: string;
    TripCounter: string;
    AllProcessed: string;
    ChangedOn: string;
    ContainerStatus: string;
    ContainerUUID: string;
    ContainerUnitID: string;
    Delete: string;
    DestinationPlant: string;
    IsContainerReleased: string;
    ProcessType: string;
    ProcessingEndDate: string | null;
    ProcessingStartDat: string | null;
    ReceivingPoint: string;
    ShipmentID: string;
    ShippingPoint: string;
    SourcePlant: string;
    VoyageNumber: string;
    VoyageUUID: string;
    ParentCtnID: string;
    Ctnclassification: string;
    PackagingSourcePlant: string;
    PackagingDestPlant: string;
    SupplierNo: string;
    ActionType: string;
    FldLogsContainerStatus_Nav: FldLogsContainerStatus | null | DeferredContent;
    FldLogsPackageItem_Nav: Array<FldLogsPackageItem> | DeferredContent;
}

type FldLogsPackageId = {ContainerID: string,DispatchDate: string,DispatchLoc: string,TripCounter: string};

interface EditableFldLogsPackage extends Pick<FldLogsPackage, "ContainerID" | "DispatchDate" | "DispatchLoc" | "TripCounter" | "AllProcessed" | "ChangedOn" | "ContainerStatus" | "ContainerUUID" | "ContainerUnitID" | "Delete" | "DestinationPlant" | "IsContainerReleased" | "ProcessType" | "ReceivingPoint" | "ShipmentID" | "ShippingPoint" | "SourcePlant" | "VoyageNumber" | "VoyageUUID" | "ParentCtnID" | "Ctnclassification" | "PackagingSourcePlant" | "PackagingDestPlant" | "SupplierNo" | "ActionType">, Partial<Pick<FldLogsPackage, "ProcessingEndDate" | "ProcessingStartDat">> {
}

interface FldLogsPackageItem {
    ContainerID: string;
    DispatchDate: string;
    DispatchLoc: string;
    HandlingUnitID: string;
    ReferenceDocNumber: string;
    TripCounter: string;
    ActualDispatchPlant: string;
    ActualReceivingPlant: string;
    Batch: string;
    ChangedOn: string;
    Comments: string;
    Comments1: string;
    ContainerItemStatus: string;
    ContainerUnitID: string;
    DeliveryDocumentItem: string;
    DestStorLocID: string;
    DestinationStage: string;
    GoodsReceivingPoint: string;
    HandlingDecision: string;
    HandlingUnitQuantity: string;
    InboundDeliveryItem: string;
    InventorySpecialStockType: string;
    IsInternalBatchManaged: string;
    IsMarkedForDeletion: string;
    ItemType: string;
    KitIdentifier: string;
    KitItmRefDocument1: string;
    MatDocItem: string;
    OutboundDeliveryItem: string;
    PackagingType: string;
    ProcessType: string;
    PurchasingDocumentItem: string;
    RcvdHndlgUnitCnctntdID: string;
    ReceivingPlant: string;
    RecipientLocationCode: string;
    RecommendedAction: string;
    ReferenceDocCategory: string;
    ReferenceDocumentLongNumber: string;
    ReferenceSDDocumentItem: string;
    RefrbmtOrderReservation: string;
    RefrbmtOrderResvnItem: string;
    RemoteStorageLocation: string;
    Reservation: string;
    ReservationItem: string;
    RetPOOutbDelivIsCreated: string;
    RetblQtyInBaseUnit: string;
    RetblQtyInOrderUnit: string;
    ReturnStatus: string;
    ShipmentItemID: string;
    ShippingPoint: string;
    SourceStage: string;
    SrceStorLocID: string;
    StorageType: string;
    SubcontrgPOIsCreated: string;
    SuplrItemUUID: string;
    SupplyProcess: string;
    ValuationType: string;
    VisualInspection: string;
    VoyageNumber: string;
    VoyageUUID: string;
    WBSElementExternalID: string;
    WarehouseNo: string;
    WarehouseStorageBin: string;
    ActionType: string;
    DeliveryDocument: string;
    FldLogsRetServicePurOrd: string;
    HandlingUnitExternalID: string;
    InspectionLot: string;
    MaintenanceOrder: string;
    Material: string;
    PurchasingDocument: string;
    ReferenceOrder: string;
    ReferencePurchasingDocument: string;
    ReferenceSDDocument: string;
    RefurbishmentOrder: string;
    RetblQtyOrderUnit: string;
    SerialNumber: string;
    SubcontractingPO: string;
    HandlingUnitQuantityUnit: string;
    InboundDelivery: string;
    MatDocYear: string;
    MaterialDocument: string;
    OutboundDelivery: string;
    PackagingMaterial: string;
    RetblQtyBaseUnit: string;
    StockTransportOrder: string;
    WarehouseTask: string;
    FldLogsContainerItemStatus_Nav: FldLogsContainerItemStatus | null | DeferredContent;
    FldLogsHandlingDecision_Nav: FldLogsHandlingDecision | null | DeferredContent;
    FldLogsPackagingType_Nav: FldLogsPackagingType | null | DeferredContent;
    FldLogsVisualInspection_Nav: FldLogsVisualInspection | null | DeferredContent;
}

type FldLogsPackageItemId = {ContainerID: string,DispatchDate: string,DispatchLoc: string,HandlingUnitID: string,ReferenceDocNumber: string,TripCounter: string};

interface EditableFldLogsPackageItem extends Pick<FldLogsPackageItem, "ContainerID" | "DispatchDate" | "DispatchLoc" | "HandlingUnitID" | "ReferenceDocNumber" | "TripCounter" | "ActualDispatchPlant" | "ActualReceivingPlant" | "Batch" | "ChangedOn" | "Comments" | "Comments1" | "ContainerItemStatus" | "ContainerUnitID" | "DeliveryDocumentItem" | "DestStorLocID" | "DestinationStage" | "GoodsReceivingPoint" | "HandlingDecision" | "HandlingUnitQuantity" | "InboundDeliveryItem" | "InventorySpecialStockType" | "IsInternalBatchManaged" | "IsMarkedForDeletion" | "ItemType" | "KitIdentifier" | "KitItmRefDocument1" | "MatDocItem" | "OutboundDeliveryItem" | "PackagingType" | "ProcessType" | "PurchasingDocumentItem" | "RcvdHndlgUnitCnctntdID" | "ReceivingPlant" | "RecipientLocationCode" | "RecommendedAction" | "ReferenceDocCategory" | "ReferenceDocumentLongNumber" | "ReferenceSDDocumentItem" | "RefrbmtOrderReservation" | "RefrbmtOrderResvnItem" | "RemoteStorageLocation" | "Reservation" | "ReservationItem" | "RetPOOutbDelivIsCreated" | "RetblQtyInBaseUnit" | "RetblQtyInOrderUnit" | "ReturnStatus" | "ShipmentItemID" | "ShippingPoint" | "SourceStage" | "SrceStorLocID" | "StorageType" | "SubcontrgPOIsCreated" | "SuplrItemUUID" | "SupplyProcess" | "ValuationType" | "VisualInspection" | "VoyageNumber" | "VoyageUUID" | "WBSElementExternalID" | "WarehouseNo" | "WarehouseStorageBin" | "ActionType" | "DeliveryDocument" | "FldLogsRetServicePurOrd" | "HandlingUnitExternalID" | "InspectionLot" | "MaintenanceOrder" | "Material" | "PurchasingDocument" | "ReferenceOrder" | "ReferencePurchasingDocument" | "ReferenceSDDocument" | "RefurbishmentOrder" | "RetblQtyOrderUnit" | "SerialNumber" | "SubcontractingPO" | "HandlingUnitQuantityUnit" | "InboundDelivery" | "MatDocYear" | "MaterialDocument" | "OutboundDelivery" | "PackagingMaterial" | "RetblQtyBaseUnit" | "StockTransportOrder" | "WarehouseTask"> {
}

interface FldLogsPackageItemSrNo {
    Batch: string;
    DeliveryDocumentItem: string;
    ValuationType: string;
    ActualDeliveryQuantity: string;
    StorageLocation: string;
    DeliveryDocument: string;
    SerialNumber: string;
    DeliveryQuantityUnit: string;
}

type FldLogsPackageItemSrNoId = {Batch: string,DeliveryDocumentItem: string,ValuationType: string,DeliveryDocument: string,SerialNumber: string};

interface EditableFldLogsPackageItemSrNo extends Pick<FldLogsPackageItemSrNo, "Batch" | "DeliveryDocumentItem" | "ValuationType" | "ActualDeliveryQuantity" | "StorageLocation" | "DeliveryDocument" | "SerialNumber" | "DeliveryQuantityUnit"> {
}

interface FldLogsPackagingType {
    FldLogsPackagingTypeCode: string;
    FldLogsPackagingTypeDescription: string;
}

type FldLogsPackagingTypeId = string | {FldLogsPackagingTypeCode: string};

interface EditableFldLogsPackagingType extends Pick<FldLogsPackagingType, "FldLogsPackagingTypeDescription"> {
}

interface FldLogsPlant {
    Plant: string;
    PlantName: string;
}

type FldLogsPlantId = string | {Plant: string};

interface EditableFldLogsPlant extends Pick<FldLogsPlant, "PlantName"> {
}

interface FldLogsRecommendedAction {
    FldLogsRecommendedAction: string;
    FldLogsRecommendedActionText: string;
}

type FldLogsRecommendedActionId = string | {FldLogsRecommendedAction: string};

interface EditableFldLogsRecommendedAction extends Pick<FldLogsRecommendedAction, "FldLogsRecommendedActionText"> {
}

interface FldLogsRefDocType {
    FldLogsReferenceDocCategory: string;
    ReferenceDocumentCategoryName: string;
}

type FldLogsRefDocTypeId = string | {FldLogsReferenceDocCategory: string};

interface EditableFldLogsRefDocType extends Pick<FldLogsRefDocType, "ReferenceDocumentCategoryName"> {
}

interface FldLogsReturnStatus {
    FldLogsReturnStatus: string;
    FldLogsReturnStatusText: string;
}

type FldLogsReturnStatusId = string | {FldLogsReturnStatus: string};

interface EditableFldLogsReturnStatus extends Pick<FldLogsReturnStatus, "FldLogsReturnStatusText"> {
}

interface FldLogsShippingPoint {
    Plant: string;
    ShippingPoint: string;
    ShippingPointText: string;
}

type FldLogsShippingPointId = {Plant: string,ShippingPoint: string};

interface EditableFldLogsShippingPoint extends Pick<FldLogsShippingPoint, "Plant" | "ShippingPoint" | "ShippingPointText"> {
}

interface FldLogsShptItemStatus {
    FldShptItemStatus: string;
    FlldShptItemStatusDescription: string;
}

type FldLogsShptItemStatusId = string | {FldShptItemStatus: string};

interface EditableFldLogsShptItemStatus extends Pick<FldLogsShptItemStatus, "FlldShptItemStatusDescription"> {
}

interface FldLogsSupproc {
    SupplyProcess: string;
    SupplyProcessText: string;
}

type FldLogsSupprocId = string | {SupplyProcess: string};

interface EditableFldLogsSupproc extends Pick<FldLogsSupproc, "SupplyProcessText"> {
}

interface FldLogsVisualInspection {
    VisualInspection: string;
    VisualInspectionText: string;
}

type FldLogsVisualInspectionId = string | {VisualInspection: string};

interface EditableFldLogsVisualInspection extends Pick<FldLogsVisualInspection, "VisualInspectionText"> {
}

interface FldLogsVoyage {
    VoyageStageUUID: string;
    SourceStage: string;
    DestinationStage: string;
    PlannedDeptrDate: string | null;
    PlannedArrivalDate: string | null;
    VoyageStatusCode: string;
    ChangedOn: string;
    StartTime: string | null;
    EndTime: string | null;
    VoyageNumber: string;
    VoyageTypeCode: string;
    VoyageVehnumber: string;
    VoyageVehName: string;
    ExternallyManaged: string;
    CountryRegionKey: string;
    ContainerNotAllwd: string;
    SourcePlant: string;
    DestinationPlant: string;
    Supplier: string;
    FldLogsVoyageStatus_Nav: FldLogsVoyageStatusCodeType | null | DeferredContent;
    FldLogsVoyageType_Nav: FldLogsVoyageTypeCode | null | DeferredContent;
}

type FldLogsVoyageId = string | {VoyageStageUUID: string};

interface EditableFldLogsVoyage extends Pick<FldLogsVoyage, "SourceStage" | "DestinationStage" | "VoyageStatusCode" | "ChangedOn" | "VoyageNumber" | "VoyageTypeCode" | "VoyageVehnumber" | "VoyageVehName" | "ExternallyManaged" | "CountryRegionKey" | "ContainerNotAllwd" | "SourcePlant" | "DestinationPlant" | "Supplier">, Partial<Pick<FldLogsVoyage, "PlannedDeptrDate" | "PlannedArrivalDate" | "StartTime" | "EndTime">> {
}

interface FldLogsVoyageMaster {
    FldLogsVoyageStageId: string;
    VoyageStageUUID: string;
    ChangedOn: string;
    ContainerNotAllwd: string;
    CountryRegionKey: string;
    DestinationPlant: string;
    DestinationStage: string;
    EndTime: string | null;
    ExternallyManaged: string;
    PlannedArrivalDate: string | null;
    PlannedDeptrDate: string | null;
    SourcePlant: string;
    SourceStage: string;
    StartTime: string | null;
    Supplier: string;
    VoyageNumber: string;
    VoyageStatusCode: string;
    VoyageTypeCode: string;
    VoyageVehName: string;
    VoyageVehnumber: string;
    FldLogsVoyageStatusCodeType_Nav: FldLogsVoyageStatusCodeType | null | DeferredContent;
    FldLogsVoyageTypeCode_Nav: FldLogsVoyageTypeCode | null | DeferredContent;
}

type FldLogsVoyageMasterId = string | {VoyageStageUUID: string};

interface EditableFldLogsVoyageMaster extends Pick<FldLogsVoyageMaster, "FldLogsVoyageStageId" | "ChangedOn" | "ContainerNotAllwd" | "CountryRegionKey" | "DestinationPlant" | "DestinationStage" | "ExternallyManaged" | "SourcePlant" | "SourceStage" | "Supplier" | "VoyageNumber" | "VoyageStatusCode" | "VoyageTypeCode" | "VoyageVehName" | "VoyageVehnumber">, Partial<Pick<FldLogsVoyageMaster, "EndTime" | "PlannedArrivalDate" | "PlannedDeptrDate" | "StartTime">> {
}

interface FldLogsVoyageStatusCodeType {
    VoyageStatusCodeType: string;
    Description: string;
}

type FldLogsVoyageStatusCodeTypeId = string | {VoyageStatusCodeType: string};

interface EditableFldLogsVoyageStatusCodeType extends Pick<FldLogsVoyageStatusCodeType, "Description"> {
}

interface FldLogsVoyageTypeCode {
    VoyageTypeCode: string;
    Description: string;
}

type FldLogsVoyageTypeCodeId = string | {VoyageTypeCode: string};

interface EditableFldLogsVoyageTypeCode extends Pick<FldLogsVoyageTypeCode, "Description"> {
}

interface FldLogsWoProduct {
    ManufacturerPartNum: string;
    EanUpc: string;
    ValuationType: string;
    Order: string;
    Product: string;
    Operation: string;
    Reservation: string;
    ProductDescription: string;
    RequiredQty: string | null;
    WithdrawnQty: string | null;
    ReturnQty: string | null;
    Status: string;
    Plant: string;
    RemoteStorageLocation: string;
    WBSElementExternalID: string;
    SupplyProcess: string;
    AcctAssgmtCat: string;
    ItemCategory: string;
    WBSInternalID: string;
    OrderType: string;
    BaseUnit: string;
    ReturnQtyUnit: string;
    IsBatchManaged: string;
    IsSerialized: string;
    EntryQty: string | null;
    FldLogsPlant_Nav: FldLogsPlant | null | DeferredContent;
    FldLogsSupproc_Nav: FldLogsSupproc | null | DeferredContent;
    ItemCategory_Nav: ItemCategory | null | DeferredContent;
    OrderType_Nav: OrderType | null | DeferredContent;
}

type FldLogsWoProductId = {Order: string,Product: string,Operation: string,Plant: string};

interface EditableFldLogsWoProduct extends Pick<FldLogsWoProduct, "ManufacturerPartNum" | "EanUpc" | "ValuationType" | "Order" | "Product" | "Operation" | "Reservation" | "ProductDescription" | "Status" | "Plant" | "RemoteStorageLocation" | "WBSElementExternalID" | "SupplyProcess" | "AcctAssgmtCat" | "ItemCategory" | "WBSInternalID" | "OrderType" | "BaseUnit" | "ReturnQtyUnit" | "IsBatchManaged" | "IsSerialized">, Partial<Pick<FldLogsWoProduct, "RequiredQty" | "WithdrawnQty" | "ReturnQty" | "EntryQty">> {
}

interface FldLogsWoProductSrNo {
    Equipment: string;
    Product: string;
    SerialNumber: string;
    Plant: string;
}

type FldLogsWoProductSrNoId = {Product: string,SerialNumber: string};

interface EditableFldLogsWoProductSrNo extends Pick<FldLogsWoProductSrNo, "Equipment" | "Product" | "SerialNumber" | "Plant"> {
}

interface FldLogsPackCtnContainerVyg {
    FldLogsShptVoyageUuidExt: string;
    ObjectID: string;
    FldLogsDestPlnt: string;
    FldLogsShptVoyageNumber: string;
    FldLogsShptVoyageTypeCode: string;
    FldLogsShptVoyageTypeText: string;
    FldLogsSrcePlnt: string;
    FldLogsVoyageDestStage: string;
    FldLogsVoyageSrceStage: string;
    FldLogsVoyageStageID: string;
}

type FldLogsPackCtnContainerVygId = {FldLogsShptVoyageUuidExt: string,ObjectID: string};

interface EditableFldLogsPackCtnContainerVyg extends Pick<FldLogsPackCtnContainerVyg, "FldLogsShptVoyageUuidExt" | "ObjectID" | "FldLogsDestPlnt" | "FldLogsShptVoyageNumber" | "FldLogsShptVoyageTypeCode" | "FldLogsShptVoyageTypeText" | "FldLogsSrcePlnt" | "FldLogsVoyageDestStage" | "FldLogsVoyageSrceStage" | "FldLogsVoyageStageID"> {
}

interface FldLogsWoResvItem {
    Batch: string;
    SerialNumber: string;
    ValuationType: string;
    IsSerialized: string;
    ItemCategory: string;
    AcctAssgmtCat: string;
    Product: string;
    Operation: string;
    Plant: string;
    PurchaseReq: string;
    PurchaseOrd: string;
    WBSInternalID: string;
    RemoteStorageLocation: string;
    StorageBin: string;
    Status: string;
    ReservationItem: string;
    Reservation: string;
    Order: string;
    RequiredQty: string;
    WithdrawnQty: string;
    WBSElementExternalID: string;
    BaseUnit: string;
    ProductDescription: string;
    IsBatchManaged: string;
    EntryQty: string;
}

type FldLogsWoResvItemId = {Operation: string,Plant: string,ReservationItem: string,Order: string};

interface EditableFldLogsWoResvItem extends Pick<FldLogsWoResvItem, "Batch" | "SerialNumber" | "ValuationType" | "IsSerialized" | "ItemCategory" | "AcctAssgmtCat" | "Product" | "Operation" | "Plant" | "PurchaseReq" | "PurchaseOrd" | "WBSInternalID" | "RemoteStorageLocation" | "StorageBin" | "Status" | "ReservationItem" | "Reservation" | "Order" | "RequiredQty" | "WithdrawnQty" | "WBSElementExternalID" | "BaseUnit" | "ProductDescription" | "IsBatchManaged" | "EntryQty"> {
}

interface FldLogsWorkOrder {
    Order: string;
    Plant: string;
    Operation: string;
    Reservation: string;
    OrderType: string;
    OrderCategory: string;
    ItemCount: string;
    Status: string;
    ObjectId: string;
    FldLogsWoProduct_Nav: Array<FldLogsWoProduct> | DeferredContent;
    FldLogsWoResvItem_Nav: Array<FldLogsWoResvItem> | DeferredContent;
}

type FldLogsWorkOrderId = {Order: string,Plant: string,Operation: string};

interface EditableFldLogsWorkOrder extends Pick<FldLogsWorkOrder, "Order" | "Plant" | "Operation" | "Reservation" | "OrderType" | "OrderCategory" | "ItemCount" | "Status" | "ObjectId"> {
}

interface Fleet {
    ObjectNumber: string;
    CatalogProfile: string | null;
    CRObjectType: string | null;
    UsagePerConsecNo: string | null;
    Manufacturer: string | null;
    CompanyCode: string | null;
    BusinessArea: string | null;
    Batch: string | null;
    ManufacturerVIN: string | null;
    ModelNumber: string | null;
    ABCIndicator: string | null;
    VehicleType: string | null;
    ManufactPartNo: string | null;
    CountryOfManufact: string | null;
    ControllingArea: string | null;
    ConstructionMonth: string | null;
    EquipmentDesc: string | null;
    EquipmentDataExists: string | null;
    Field: string | null;
    LocAcctAssignment: string;
    DeleteIndicator: string | null;
    EquipDivision: string | null;
    EquipCategory: string | null;
    DistributionChannel: string | null;
    LicensePlateNumber: string | null;
    Location: string | null;
    MaintenancePlant: string | null;
    ManufDrawingNumber: string | null;
    ManufSerialNumber: string | null;
    TechnicalObjectType: string | null;
    TechnicalIdentNo: string | null;
    FleetObjectData: string | null;
    InventoryNumber: string | null;
    ISU: string | null;
    PMDivision: string | null;
    WeightOfObject: string | null;
    ValidTo: string | null;
    DeliveryDate: string | null;
    StorageLocation: string | null;
    SortField: string | null;
    Size: string | null;
    SalesOrg: string | null;
    PlantSection: string | null;
    Plant: string | null;
    PlanningPlant: string | null;
    PPWorkCenter: string | null;
    PMObjectType: string | null;
    PlannerGroup: string | null;
    ObjReference: string | null;
    EquipmentNumber: string;
    SettlementOrder: string | null;
    Material: string | null;
    MeasuringPoint: string | null;
    SerialNumber: string | null;
    SubNumber: string | null;
    CostCenter: string | null;
    Asset: string | null;
    WBSElement: string | null;
    UnitOfWeight: string | null;
    SuperOrdEquipment: string | null;
    MaintenancePlan: string | null;
    ConstructionYear: string | null;
    ConstructionType: string | null;
    CrewListItem: CrewListItem | null | DeferredContent;
    MeasuringPoints: Array<MeasuringPoint> | DeferredContent;
}

type FleetId = string | {EquipmentNumber: string};

interface EditableFleet extends Pick<Fleet, "ObjectNumber" | "LocAcctAssignment">, Partial<Pick<Fleet, "CatalogProfile" | "CRObjectType" | "UsagePerConsecNo" | "Manufacturer" | "CompanyCode" | "BusinessArea" | "Batch" | "ManufacturerVIN" | "ModelNumber" | "ABCIndicator" | "VehicleType" | "ManufactPartNo" | "CountryOfManufact" | "ControllingArea" | "ConstructionMonth" | "EquipmentDesc" | "EquipmentDataExists" | "Field" | "DeleteIndicator" | "EquipDivision" | "EquipCategory" | "DistributionChannel" | "LicensePlateNumber" | "Location" | "MaintenancePlant" | "ManufDrawingNumber" | "ManufSerialNumber" | "TechnicalObjectType" | "TechnicalIdentNo" | "FleetObjectData" | "InventoryNumber" | "ISU" | "PMDivision" | "WeightOfObject" | "ValidTo" | "DeliveryDate" | "StorageLocation" | "SortField" | "Size" | "SalesOrg" | "PlantSection" | "Plant" | "PlanningPlant" | "PPWorkCenter" | "PMObjectType" | "PlannerGroup" | "ObjReference" | "SettlementOrder" | "Material" | "MeasuringPoint" | "SerialNumber" | "SubNumber" | "CostCenter" | "Asset" | "WBSElement" | "UnitOfWeight" | "SuperOrdEquipment" | "MaintenancePlan" | "ConstructionYear" | "ConstructionType">> {
}

interface Form {
    Status: string;
    DisplayId: string;
    UpdatedOn: string | null;
    ObjectCount: string;
    Ownership: string;
    Source: string;
    StatusText: string;
    Type: string;
    TypeDescription: string;
    LongDescription: string;
    MatrixDisplayID: string;
    MobileStatus: string;
    Client: string;
    FormId: string;
    CreatedOn: string | null;
    ShortDescription: string;
    Language: string;
    ChecklistBusObjects_Nav: Array<ChecklistBusObject> | DeferredContent;
}

type FormId = string | {FormId: string};

interface EditableForm extends Pick<Form, "Status" | "DisplayId" | "ObjectCount" | "Ownership" | "Source" | "StatusText" | "Type" | "TypeDescription" | "LongDescription" | "MatrixDisplayID" | "MobileStatus" | "Client" | "ShortDescription" | "Language">, Partial<Pick<Form, "UpdatedOn" | "CreatedOn">> {
}

interface FldLogsPackCtnContainerItem {
    DeliveryDocument: string;
    FldLogsSrcePlnt: string;
    HandlingUnitExternalID: string;
    MaterialName: string;
    OrderQuantityUnit: string;
    PackagingMaterial: string;
    QuantityInBaseUnit: string;
    ObjectId: string;
    FldLogsShptItemUuidExt: string;
}

type FldLogsPackCtnContainerItemId = {ObjectId: string,FldLogsShptItemUuidExt: string};

interface EditableFldLogsPackCtnContainerItem extends Pick<FldLogsPackCtnContainerItem, "DeliveryDocument" | "FldLogsSrcePlnt" | "HandlingUnitExternalID" | "MaterialName" | "OrderQuantityUnit" | "PackagingMaterial" | "QuantityInBaseUnit" | "ObjectId" | "FldLogsShptItemUuidExt"> {
}

interface FormGroup {
    Status: string;
    DisplayId: string;
    OrganizationName: string;
    HasDependentObjects: string;
    ImageURL: string;
    GroupId: string;
    ShortDescription: string;
    LongDescription: string;
    ChecklistQuestion_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
    TemplateGroups_Nav: Array<FormTemplateGroup> | DeferredContent;
}

type FormGroupId = string | {GroupId: string};

interface EditableFormGroup extends Pick<FormGroup, "Status" | "DisplayId" | "OrganizationName" | "HasDependentObjects" | "ImageURL" | "ShortDescription" | "LongDescription"> {
}

interface FormQuestion {
    Status: string;
    DisplayId: string;
    ShortDescription: string;
    MaxScaleOptionsValue: string;
    QuestionId: string;
    MinScaleOptionsValue: string;
    OrganizationName: string;
    AnswerId: string;
    QuestionDesc: string;
    HasDependentObjects: string;
    ScaleOptionCount: string;
    QuestionText: string;
    LongDescription: string;
    AnswerHeader_Nav: AnswerHeader | null | DeferredContent;
    ChecklistQuestions_Nav: Array<ChecklistAssessmentQuestion> | DeferredContent;
    TemplateQuestions_Nav: Array<FormTemplateQuestion> | DeferredContent;
}

type FormQuestionId = string | {QuestionId: string};

interface EditableFormQuestion extends Pick<FormQuestion, "Status" | "DisplayId" | "ShortDescription" | "MaxScaleOptionsValue" | "MinScaleOptionsValue" | "OrganizationName" | "AnswerId" | "QuestionDesc" | "HasDependentObjects" | "ScaleOptionCount" | "QuestionText" | "LongDescription"> {
}

interface FormTemplateGroup {
    DisplayId: string;
    GroupId: string;
    TemplateId: string;
    SortNumber: string;
    FormGroup_Nav: FormGroup | null | DeferredContent;
    GroupQuestion_Nav: Array<FormTemplateQuestion> | DeferredContent;
    TemplateHeader_Nav: FormTemplateHeader | null | DeferredContent;
}

type FormTemplateGroupId = {GroupId: string,TemplateId: string};

interface EditableFormTemplateGroup extends Pick<FormTemplateGroup, "DisplayId" | "GroupId" | "TemplateId" | "SortNumber"> {
}

interface FormTemplateHeader {
    Status: string;
    DisplayId: string;
    LongDescription: string;
    TemplateId: string;
    IntentCode: string;
    PublishDate: string;
    ShortDescription: string;
    Version: string;
    BusinessObjects: string;
    FormCategory: string;
    TemplateGroups_Nav: Array<FormTemplateGroup> | DeferredContent;
}

type FormTemplateHeaderId = string | {TemplateId: string};

interface EditableFormTemplateHeader extends Pick<FormTemplateHeader, "Status" | "DisplayId" | "LongDescription" | "IntentCode" | "PublishDate" | "ShortDescription" | "Version" | "BusinessObjects" | "FormCategory"> {
}

interface FormTemplateQuestion {
    Status: string;
    DisplayId: string;
    AnswerId: string;
    Version: string;
    QuestionId: string;
    TemplateId: string;
    GroupId: string;
    SortNumber: string;
    FormQuestion_Nav: FormQuestion | null | DeferredContent;
    TemplateGroup_Nav: FormTemplateGroup | null | DeferredContent;
}

type FormTemplateQuestionId = {QuestionId: string,TemplateId: string,GroupId: string};

interface EditableFormTemplateQuestion extends Pick<FormTemplateQuestion, "Status" | "DisplayId" | "AnswerId" | "Version" | "QuestionId" | "TemplateId" | "GroupId" | "SortNumber"> {
}

interface FuncLocCategory {
    FuncLocCategory: string;
    FuncLocCategoryDesc: string;
    MyFunctionalLocations_Nav: Array<MyFunctionalLocation> | DeferredContent;
}

type FuncLocCategoryId = string | {FuncLocCategory: string};

interface EditableFuncLocCategory extends Pick<FuncLocCategory, "FuncLocCategoryDesc"> {
}

interface FuncLocLabel {
    FuncLocLabel: string;
    PrimaryLabel: string;
    Unique: string;
    FuncLocLabelDesc: string;
}

type FuncLocLabelId = string | {FuncLocLabel: string};

interface EditableFuncLocLabel extends Pick<FuncLocLabel, "PrimaryLabel" | "Unique" | "FuncLocLabelDesc"> {
}

interface FuncLocStructInd {
    FuncLocStructInd: string;
    EditMask: string;
    HierarchyLevels: string;
    FuncLocStructIndDesc: string;
}

type FuncLocStructIndId = string | {FuncLocStructInd: string};

interface EditableFuncLocStructInd extends Pick<FuncLocStructInd, "EditMask" | "HierarchyLevels" | "FuncLocStructIndDesc"> {
}

interface FuncLocTemplate {
    FuncLocCategory: string;
    FuncLocIdIntern: string;
    FuncLocId: string;
}

type FuncLocTemplateId = string | {FuncLocIdIntern: string};

interface EditableFuncLocTemplate extends Pick<FuncLocTemplate, "FuncLocCategory" | "FuncLocId"> {
}

interface FunctionalLocationBOM {
    FuncLocIdIntern: string;
    BOMUsage: string;
    BOMCategory: string;
    Plant: string;
    BOMId: string;
    AlternativeBOM: string;
    BOMHeader_Nav: BOMHeader | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
}

type FunctionalLocationBOMId = {FuncLocIdIntern: string,BOMUsage: string,BOMCategory: string,Plant: string,BOMId: string,AlternativeBOM: string};

interface EditableFunctionalLocationBOM extends Pick<FunctionalLocationBOM, "FuncLocIdIntern" | "BOMUsage" | "BOMCategory" | "Plant" | "BOMId" | "AlternativeBOM"> {
}

interface GISMapParameter {
    ParameterGroup: string;
    ParameterName: string;
    ParameterValue: string;
    ParentParemeterGroup: string;
}

type GISMapParameterId = {ParameterGroup: string,ParameterName: string,ParentParemeterGroup: string};

interface EditableGISMapParameter extends Pick<GISMapParameter, "ParameterGroup" | "ParameterName" | "ParameterValue" | "ParentParemeterGroup"> {
}

interface GLAccount {
    GLAccount: string;
    AuthorizationGroup: string;
    ChartofAccounts: string;
    CompanyCode: string;
    GLAccountLongText: string;
    Language: string;
    AccountGroup: string;
    GLAccountText: string;
    SearchTerm: string;
}

type GLAccountId = {GLAccount: string,ChartofAccounts: string};

interface EditableGLAccount extends Pick<GLAccount, "GLAccount" | "AuthorizationGroup" | "ChartofAccounts" | "CompanyCode" | "GLAccountLongText" | "Language" | "AccountGroup" | "GLAccountText" | "SearchTerm"> {
}

interface Geometry {
    GeometryType: string;
    ObjectKey: string;
    SegmentCount: number;
    OutputFormat: string;
    GeometryValue: string;
    ObjectType: string;
    SegmentNo: number;
    SpacialId: string;
    SpacialGUId: string;
    ObjectGroup1: string;
    ObjectGroup: string;
    LogicalSystem: string;
    EquipGeometries: Array<MyEquipGeometry> | DeferredContent;
    Equip_Nav: MyEquipment | null | DeferredContent;
    FuncLocGeometries: Array<MyFuncLocGeometry> | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    NotifGeometries: Array<MyNotifGeometry> | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    WOGeometries: Array<MyWorkOrderGeometry> | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
}

type GeometryId = {ObjectType: string,SpacialId: string,SpacialGUId: string,ObjectGroup1: string,ObjectGroup: string};

interface EditableGeometry extends Pick<Geometry, "GeometryType" | "ObjectKey" | "SegmentCount" | "OutputFormat" | "GeometryValue" | "ObjectType" | "SegmentNo" | "SpacialId" | "SpacialGUId" | "ObjectGroup1" | "ObjectGroup" | "LogicalSystem"> {
}

interface GeometryType {
    ObjectType: string;
    GeometryType: string;
    GeometryTypeString: string;
    ObjectGroup: string;
    ObjectGroup1: string;
}

type GeometryTypeId = {ObjectType: string,GeometryType: string};

interface EditableGeometryType extends Pick<GeometryType, "ObjectType" | "GeometryType" | "GeometryTypeString" | "ObjectGroup" | "ObjectGroup1"> {
}

interface GlobalParam {
    RecordNo: string;
    ParameterName: string;
    ParamGroup: string;
    ParamValue: string;
    ParamType: string;
    ParamScope: string;
    ParamComment: string;
    FlagNoChange: boolean;
}

type GlobalParamId = string | {RecordNo: string};

interface EditableGlobalParam extends Pick<GlobalParam, "ParameterName" | "ParamGroup" | "ParamValue" | "ParamType" | "ParamScope" | "ParamComment" | "FlagNoChange"> {
}

interface GuidedFlowHeader {
    FlowID: string;
    Default: string;
    Feature: string;
    FlowDescription: string;
    ObjectGroup1Entity: string;
    ObjectGroup1EntityProerty: string;
    ObjectGroup1Name: string;
    ObjectGroup1Nav: string;
    ObjectGroup1Value: string;
    ObjectGroupEntity: string;
    ObjectGroupEntityProperty: string;
    ObjectGroupName: string;
    ObjectGroupNav: string;
    ObjectGroupValue: string;
    ObjectType: string;
    Persona: string;
    Role: string;
    GuidedFlowStatusSeq_Nav: Array<GuidedFlowStatusSeq> | DeferredContent;
    GuidedFlowStep_Nav: Array<GuidedFlowStep> | DeferredContent;
}

type GuidedFlowHeaderId = string | {FlowID: string};

interface EditableGuidedFlowHeader extends Pick<GuidedFlowHeader, "Default" | "Feature" | "FlowDescription" | "ObjectGroup1Entity" | "ObjectGroup1EntityProerty" | "ObjectGroup1Name" | "ObjectGroup1Nav" | "ObjectGroup1Value" | "ObjectGroupEntity" | "ObjectGroupEntityProperty" | "ObjectGroupName" | "ObjectGroupNav" | "ObjectGroupValue" | "ObjectType" | "Persona" | "Role"> {
}

interface GuidedFlowStatusConfig {
    EAMOverallStatusProfile: string;
    Status: string;
    Description: string;
    EAMOverallStatus: string;
    EntityType: string;
    IsLogged: string;
    IsSkippable: string;
    MobileStatus: string;
    ObjectType: string;
    OverallStatusLabel: string;
    Phase: string;
    PhaseDesc: string;
    SequenceNum: number;
    StatusAttribute1: string;
    StatusAttribute2: string;
    StatusProfile: string;
    Subphase: string;
    SubphaseDesc: string;
    SystemStatus: string;
    TransitionTextKey: string;
    UserStatus: string;
    GuidedFlowFromStatusSeq_Nav: Array<GuidedFlowStatusSeq> | DeferredContent;
    GuidedFlowToStatusSeq_Nav: Array<GuidedFlowStatusSeq> | DeferredContent;
}

type GuidedFlowStatusConfigId = {EAMOverallStatusProfile: string,MobileStatus: string,ObjectType: string};

interface EditableGuidedFlowStatusConfig extends Pick<GuidedFlowStatusConfig, "EAMOverallStatusProfile" | "Status" | "Description" | "EAMOverallStatus" | "EntityType" | "IsLogged" | "IsSkippable" | "MobileStatus" | "ObjectType" | "OverallStatusLabel" | "Phase" | "PhaseDesc" | "SequenceNum" | "StatusAttribute1" | "StatusAttribute2" | "StatusProfile" | "Subphase" | "SubphaseDesc" | "SystemStatus" | "TransitionTextKey" | "UserStatus"> {
}

interface GuidedFlowStatusSeq {
    FlowID: string;
    RecordNo: string;
    Step: string;
    Feature: string;
    FromStatus: string;
    Mandatory: string;
    NextOverallStatusProfile: string;
    OverallStatus: string;
    OverallStatusProfile: string;
    ToStatus: string;
    TransitionType: string;
    ObjectType: string;
    GuidedFlowFromStatusConfig_Nav: GuidedFlowStatusConfig | null | DeferredContent;
    GuidedFlowHeader_Nav: GuidedFlowHeader | null | DeferredContent;
    GuidedFlowToStatusConfig_Nav: GuidedFlowStatusConfig | null | DeferredContent;
}

type GuidedFlowStatusSeqId = {FlowID: string,RecordNo: string,Step: string};

interface EditableGuidedFlowStatusSeq extends Pick<GuidedFlowStatusSeq, "FlowID" | "RecordNo" | "Step" | "Feature" | "FromStatus" | "Mandatory" | "NextOverallStatusProfile" | "OverallStatus" | "OverallStatusProfile" | "ToStatus" | "TransitionType" | "ObjectType"> {
}

interface GuidedFlowStep {
    FlowID: string;
    ToStep: string;
    Actions: string;
    FromStep: string;
    Sequence: string;
    GuidedFlowHeader_Nav: GuidedFlowHeader | null | DeferredContent;
}

type GuidedFlowStepId = {FlowID: string,ToStep: string};

interface EditableGuidedFlowStep extends Pick<GuidedFlowStep, "FlowID" | "ToStep" | "Actions" | "FromStep" | "Sequence"> {
}

interface HandlingUnit {
    GUID: string;
    HandlingUnit: string;
    LoadingWeight: string;
    PackingMaterialDesc: string;
    PackingMaterial: string;
    LoadingWeightUnit: string;
    HUType: string;
    HandlingUnitItem_Nav: Array<HandlingUnitItem> | DeferredContent;
}

type HandlingUnitId = string | {GUID: string};

interface EditableHandlingUnit extends Pick<HandlingUnit, "HandlingUnit" | "LoadingWeight" | "PackingMaterialDesc" | "PackingMaterial" | "LoadingWeightUnit" | "HUType"> {
}

interface HandlingUnitItem {
    ParentGUID: string;
    StockGUID: string;
    RefDocCategory: string;
    RefDocId: string;
    RefItemId: string;
    PackedQuantity: string;
    QuantityUoM: string;
    Serialized: string;
    LoadingWeight: string;
    LoadingWeightUoM: string;
    Header_Nav: HandlingUnit | DeferredContent;
    InboundDeliveryItem_Nav: WarehouseInboundDeliveryItem | null | DeferredContent;
}

type HandlingUnitItemId = {ParentGUID: string,StockGUID: string};

interface EditableHandlingUnitItem extends Pick<HandlingUnitItem, "ParentGUID" | "StockGUID" | "RefDocCategory" | "RefDocId" | "RefItemId" | "PackedQuantity" | "QuantityUoM" | "Serialized" | "LoadingWeight" | "LoadingWeightUoM"> {
}

interface HandlingUnitType {
    WarehouseNumber: string;
    HUType: string;
    HUTypeGroup: string;
}

type HandlingUnitTypeId = {WarehouseNumber: string,HUType: string};

interface EditableHandlingUnitType extends Pick<HandlingUnitType, "WarehouseNumber" | "HUType" | "HUTypeGroup"> {
}

interface InboundDelivery {
    ActualGoodsMvtDate: string | null;
    ShippingPoint: string;
    NumPackages: number;
    ReceivingPlant: string;
    GoodsMvtStatus: string;
    WeightUnit: string;
    Vendor: string;
    TotalWeight: string;
    DocumentCategory: string;
    WMStatus: string;
    OverallStatus: string;
    DeliveryBlock: string;
    DeliveryDate: string;
    DeliveryType: string;
    DeliveryPriority: string;
    UnloadingPoint: string;
    ShippingConditions: string;
    DeliveryNum: string;
    BlockingStatus_Nav: BlockingStatus | null | DeferredContent;
    DeliveryPriority_Nav: DeliveryPriority | null | DeferredContent;
    Items_Nav: Array<InboundDeliveryItem> | DeferredContent;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
}

type InboundDeliveryId = string | {DeliveryNum: string};

interface EditableInboundDelivery extends Pick<InboundDelivery, "ShippingPoint" | "NumPackages" | "ReceivingPlant" | "GoodsMvtStatus" | "WeightUnit" | "Vendor" | "TotalWeight" | "DocumentCategory" | "WMStatus" | "OverallStatus" | "DeliveryBlock" | "DeliveryDate" | "DeliveryType" | "DeliveryPriority" | "UnloadingPoint" | "ShippingConditions">, Partial<Pick<InboundDelivery, "ActualGoodsMvtDate">> {
}

interface InboundDeliveryBatchSplit {
    Delivery: string;
    Item: string;
    HghLevItmBatch: string;
    Batch: string;
    DeliveryQty: string;
    BaseUnit: string;
}

type InboundDeliveryBatchSplitId = {Delivery: string,Item: string,HghLevItmBatch: string};

interface EditableInboundDeliveryBatchSplit extends Pick<InboundDeliveryBatchSplit, "Delivery" | "Item" | "HghLevItmBatch" | "Batch" | "DeliveryQty" | "BaseUnit"> {
}

interface InboundDeliveryItem {
    StorageBin: string;
    ItemDescript: string;
    ValuationType: string;
    PickedQuantity: string | null;
    PickedDiffQuantity: string | null;
    Item: string;
    ItemCategory: string;
    ItemGMRelevant: string;
    DeliveryNum: string;
    SalesUnit: string;
    UOM: string;
    DenominatorConvertSKU: string;
    Quantity: string;
    WMStatus: string;
    ReasonForMovement: string;
    MovementType: string;
    Plant: string;
    ItemType: string;
    Batch: string;
    NumeratorConvertSKU: string;
    StorageLocation: string;
    Material: string;
    GoodsMvmtStatus: string;
    InboundDeliverySerial_Nav: Array<InboundDeliverySerial> | DeferredContent;
    InboundDelivery_Nav: InboundDelivery | DeferredContent;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
}

type InboundDeliveryItemId = {Item: string,DeliveryNum: string};

interface EditableInboundDeliveryItem extends Pick<InboundDeliveryItem, "StorageBin" | "ItemDescript" | "ValuationType" | "Item" | "ItemCategory" | "ItemGMRelevant" | "DeliveryNum" | "SalesUnit" | "UOM" | "DenominatorConvertSKU" | "Quantity" | "WMStatus" | "ReasonForMovement" | "MovementType" | "Plant" | "ItemType" | "Batch" | "NumeratorConvertSKU" | "StorageLocation" | "Material" | "GoodsMvmtStatus">, Partial<Pick<InboundDeliveryItem, "PickedQuantity" | "PickedDiffQuantity">> {
}

interface InboundDeliverySerial {
    IsDownloaded: string;
    Item: string;
    SerialNumber: string;
    DeliveryNum: string;
    UniversalItemId: string;
    InboundDeliveryItem_Nav: InboundDeliveryItem | DeferredContent;
}

type InboundDeliverySerialId = {Item: string,SerialNumber: string,DeliveryNum: string};

interface EditableInboundDeliverySerial extends Pick<InboundDeliverySerial, "IsDownloaded" | "Item" | "SerialNumber" | "DeliveryNum" | "UniversalItemId"> {
}

interface InspectionCatalogValuation {
    ShortText: string;
    Valuation: string;
    InspectionCodes_Nav: Array<InspectionCode> | DeferredContent;
    InspectionLots_Nav: Array<InspectionLot> | DeferredContent;
    InspectionPoints_Nav: Array<InspectionPoint> | DeferredContent;
}

type InspectionCatalogValuationId = string | {Valuation: string};

interface EditableInspectionCatalogValuation extends Pick<InspectionCatalogValuation, "ShortText"> {
}

interface InspectionCharDependency {
    InspectionChar: string;
    InspectionLot: string;
    InspectionNode: string;
    SampleNum: string;
    DependentInspChar: string;
    AfterAcceptance: string;
    AfterRejection: string;
    DependentInspNode: string;
    InspCharacteristics_Nav: InspectionCharacteristic | null | DeferredContent;
}

type InspectionCharDependencyId = {InspectionChar: string,InspectionLot: string,InspectionNode: string,SampleNum: string,DependentInspChar: string,DependentInspNode: string};

interface EditableInspectionCharDependency extends Pick<InspectionCharDependency, "InspectionChar" | "InspectionLot" | "InspectionNode" | "SampleNum" | "DependentInspChar" | "AfterAcceptance" | "AfterRejection" | "DependentInspNode"> {
}

interface InspectionCharStatus {
    Status: string;
    ShortDesc: string;
    InspChar_Nav: Array<InspectionCharacteristic> | DeferredContent;
}

type InspectionCharStatusId = string | {Status: string};

interface EditableInspectionCharStatus extends Pick<InspectionCharStatus, "ShortDesc"> {
}

interface InspectionCharacteristic {
    CreatedAtTime: string;
    UoM: string;
    MasterInspChar: string;
    CatalogVersion: string;
    CharId: string;
    InspectionChar: string;
    SampleNum: string;
    CharAttributeFlag: string;
    RecordingType: string;
    QuantitativeFlag: string;
    DefectRecordingFlag: string;
    InspectionScope: string;
    LongTermInspFlag: string;
    ScrapShareFlag: string;
    Status: string;
    ResultChangedBy: string;
    InspectionMethodPlant: string;
    OriginalInput: string;
    DefectClass: string;
    Valuation: string;
    Catalog: string;
    CodeGroup: string;
    Code: string;
    MasterInspCharPlant: string;
    SelectedSetFlag: string;
    SelectedSet: string;
    SelectedSetPlant: string;
    CharCategory: string;
    CalculatedCharFlag: string;
    Formula1: string;
    Formula2: string;
    ShortDesc: string;
    ChangedBy: string;
    CreatedBy: string;
    LongTextFlag: string;
    TargetValueFlag: string;
    UpperLimitFlag: string;
    LowerLimitFlag: string;
    ResultValueFlag: string;
    OperationNum: string;
    LongTextLang: string;
    InspectionMethod: string;
    InspectionMethodVersion: string;
    SampleUOM: string;
    MasterInspCharVersion: string;
    SampleQty: string;
    TargetValue: string;
    UpperLimit: string;
    LowerLimit: string;
    DecimalPlaces: number;
    ValueAbove: string;
    ValueBelow: string;
    NoOfDefect: number;
    NoOfInspected: number;
    ResultValue: string;
    ChangedAt: string | null;
    CreatedAt: string | null;
    ResultChangedAt: string | null;
    InspectionLot: string;
    InspectionNode: string;
    SecondUpperLimit: string;
    SecondUpperLimitFlag: string;
    SecondLowerLimit: string;
    SecondLowerLimitFlag: string;
    InfoField1: string;
    InfoField2: string;
    InfoField3: string;
    FirstUpperLimit: string;
    FirstUpperLimitFlag: string;
    FirstLowerLimit: string;
    FirstLowerLimitFlag: string;
    RemarksRequired: string;
    Remarks: string;
    RemarksRequiredOnRejection: string;
    RequiredChar: string;
    OptionalChar: string;
    AfterAcceptance: string;
    AfterRejection: string;
    DefectClass_Nav: DefectClass | null | DeferredContent;
    EAMChecklist_Nav: EAMChecklistLink | null | DeferredContent;
    InspCharDependency_Nav: Array<InspectionCharDependency> | DeferredContent;
    InspCharStatus_Nav: InspectionCharStatus | null | DeferredContent;
    InspValuation_Nav: InspectionResultValuation | null | DeferredContent;
    InspectionCode_Nav: InspectionCode | null | DeferredContent;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
    InspectionMethod_Nav: InspectionMethod | null | DeferredContent;
    InspectionPoint_Nav: InspectionPoint | null | DeferredContent;
    MasterInspCharLongText_Nav: MasterInspectionCharLongText | null | DeferredContent;
    MasterInspChar_Nav: MasterInspectionChar | null | DeferredContent;
    NotifItems_Nav: Array<MyNotificationItem> | DeferredContent;
}

type InspectionCharacteristicId = {InspectionChar: string,SampleNum: string,InspectionLot: string,InspectionNode: string};

interface EditableInspectionCharacteristic extends Pick<InspectionCharacteristic, "CreatedAtTime" | "UoM" | "MasterInspChar" | "CatalogVersion" | "CharId" | "InspectionChar" | "SampleNum" | "CharAttributeFlag" | "RecordingType" | "QuantitativeFlag" | "DefectRecordingFlag" | "InspectionScope" | "LongTermInspFlag" | "ScrapShareFlag" | "Status" | "ResultChangedBy" | "InspectionMethodPlant" | "OriginalInput" | "DefectClass" | "Valuation" | "Catalog" | "CodeGroup" | "Code" | "MasterInspCharPlant" | "SelectedSetFlag" | "SelectedSet" | "SelectedSetPlant" | "CharCategory" | "CalculatedCharFlag" | "Formula1" | "Formula2" | "ShortDesc" | "ChangedBy" | "CreatedBy" | "LongTextFlag" | "TargetValueFlag" | "UpperLimitFlag" | "LowerLimitFlag" | "ResultValueFlag" | "OperationNum" | "LongTextLang" | "InspectionMethod" | "InspectionMethodVersion" | "SampleUOM" | "MasterInspCharVersion" | "SampleQty" | "TargetValue" | "UpperLimit" | "LowerLimit" | "DecimalPlaces" | "ValueAbove" | "ValueBelow" | "NoOfDefect" | "NoOfInspected" | "ResultValue" | "InspectionLot" | "InspectionNode" | "SecondUpperLimit" | "SecondUpperLimitFlag" | "SecondLowerLimit" | "SecondLowerLimitFlag" | "InfoField1" | "InfoField2" | "InfoField3" | "FirstUpperLimit" | "FirstUpperLimitFlag" | "FirstLowerLimit" | "FirstLowerLimitFlag" | "RemarksRequired" | "Remarks" | "RemarksRequiredOnRejection" | "RequiredChar" | "OptionalChar" | "AfterAcceptance" | "AfterRejection">, Partial<Pick<InspectionCharacteristic, "ChangedAt" | "CreatedAt" | "ResultChangedAt">> {
}

interface InspectionCode {
    Plant: string;
    SelectedSet: string;
    QualityScore: number;
    Catalog: string;
    CodeGroup: string;
    Code: string;
    CodeDesc: string;
    CodeGroupDesc: string;
    DefectClass: string;
    ValuationStatus: string;
    Version: string;
    DefectClass_Nav: DefectClass | null | DeferredContent;
    InspCharacteristics_Nav: Array<InspectionCharacteristic> | DeferredContent;
    InspHistories_Nav: Array<InspectionHistory> | DeferredContent;
    InspPoints_Nav: Array<InspectionPoint> | DeferredContent;
    InspValuation_Nav: InspectionCatalogValuation | null | DeferredContent;
    InspectionLots_Nav: Array<InspectionLot> | DeferredContent;
}

type InspectionCodeId = {Plant: string,SelectedSet: string,Catalog: string,CodeGroup: string,Code: string};

interface EditableInspectionCode extends Pick<InspectionCode, "Plant" | "SelectedSet" | "QualityScore" | "Catalog" | "CodeGroup" | "Code" | "CodeDesc" | "CodeGroupDesc" | "DefectClass" | "ValuationStatus" | "Version"> {
}

interface InspectionHistory {
    EquipId: string;
    FuncLocIdIntern: string;
    MeanValue: string;
    InspectionLot: string;
    InspectionNode: string;
    InspectionChar: string;
    SampleNum: string;
    StartDate: string | null;
    EndDate: string | null;
    LastChangedDate: string | null;
    InputValue: string;
    Valuation: string;
    NumOfDefects: number;
    NumOfInspected: number;
    DefectClass: string;
    DefectCode: string;
    DefectCodeGroup: string;
    DefectCatalog: string;
    Plant: string;
    Inspector: string;
    DefectSelectedSet: string;
    DefectPlant: string;
    MasterInspChar: string;
    MasterInspVersion: string;
    InspectionCode_Nav: InspectionCode | null | DeferredContent;
    MasterInspChar_Nav: MasterInspectionChar | null | DeferredContent;
}

type InspectionHistoryId = {InspectionLot: string,InspectionNode: string,InspectionChar: string,SampleNum: string};

interface EditableInspectionHistory extends Pick<InspectionHistory, "EquipId" | "FuncLocIdIntern" | "MeanValue" | "InspectionLot" | "InspectionNode" | "InspectionChar" | "SampleNum" | "InputValue" | "Valuation" | "NumOfDefects" | "NumOfInspected" | "DefectClass" | "DefectCode" | "DefectCodeGroup" | "DefectCatalog" | "Plant" | "Inspector" | "DefectSelectedSet" | "DefectPlant" | "MasterInspChar" | "MasterInspVersion">, Partial<Pick<InspectionHistory, "StartDate" | "EndDate" | "LastChangedDate">> {
}

interface InspectionLot {
    StartDate: string | null;
    UDCode: string;
    UDCodeGroup: string;
    UDSelectedSet: string;
    ValuationStatus: string;
    UDCreatedAt: string;
    UDChangedAt: string;
    ObjNum: string;
    InspectionLotOrigin: string;
    EAMChecklistInd: string;
    QualityScore: string;
    InspectionLot: string;
    CreatedAt: string | null;
    EndDate: string | null;
    UDChangedDate: string | null;
    UDCreatedDate: string | null;
    InspectionType: string;
    ObjCategory: string;
    TaskListType: string;
    Plant: string;
    UserStatus: string;
    SystemStatus: string;
    UDCatalog: string;
    TaskListUsage: string;
    ShortDesc: string;
    CreatedBy: string;
    UDCreatedBy: string;
    UDChangedBy: string;
    OrderId: string;
    Equipment: string;
    FunctionalLocation: string;
    TaskListGroup: string;
    SelectedSetVersion: string;
    InspectionPointType: string;
    CodeVersion: string;
    FieldCombination: string;
    EAMChecklist_Nav: EAMChecklistLink | null | DeferredContent;
    InspValuation_Nav: InspectionCatalogValuation | null | DeferredContent;
    InspectionChars_Nav: Array<InspectionCharacteristic> | DeferredContent;
    InspectionCode_Nav: InspectionCode | null | DeferredContent;
    InspectionLotDocument_Nav: Array<InspectionLotDocument> | DeferredContent;
    InspectionPointValuation_Nav: InspectionPointValuation | null | DeferredContent;
    InspectionPoints_Nav: Array<InspectionPoint> | DeferredContent;
    NotifHeaders_Nav: Array<MyNotificationHeader> | DeferredContent;
    Plant_Nav: Plant | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
}

type InspectionLotId = string | {InspectionLot: string};

interface EditableInspectionLot extends Pick<InspectionLot, "UDCode" | "UDCodeGroup" | "UDSelectedSet" | "ValuationStatus" | "UDCreatedAt" | "UDChangedAt" | "ObjNum" | "InspectionLotOrigin" | "EAMChecklistInd" | "QualityScore" | "InspectionType" | "ObjCategory" | "TaskListType" | "Plant" | "UserStatus" | "SystemStatus" | "UDCatalog" | "TaskListUsage" | "ShortDesc" | "CreatedBy" | "UDCreatedBy" | "UDChangedBy" | "OrderId" | "Equipment" | "FunctionalLocation" | "TaskListGroup" | "SelectedSetVersion" | "InspectionPointType" | "CodeVersion" | "FieldCombination">, Partial<Pick<InspectionLot, "StartDate" | "CreatedAt" | "EndDate" | "UDChangedDate" | "UDCreatedDate">> {
}

interface InspectionLotDocument {
    RelationshipID: string;
    ObjectKey: string;
    DocumentID: string;
    InspectionLot: string;
    Document: Document | null | DeferredContent;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
}

type InspectionLotDocumentId = {DocumentID: string,InspectionLot: string};

interface EditableInspectionLotDocument extends Pick<InspectionLotDocument, "RelationshipID" | "ObjectKey" | "DocumentID" | "InspectionLot"> {
}

interface InspectionMethod {
    Version: string;
    Method: string;
    Plant: string;
    SortField: string;
    Status: string;
    ShortDesc: string;
    LongTextFlag: string;
    StatusDesc: string;
    InspectionChars_Nav: Array<InspectionCharacteristic> | DeferredContent;
    MethodDoc_Nav: Array<InspectionMethodDocument> | DeferredContent;
    MethodLongText_Nav: InspectionMethodLongText | null | DeferredContent;
}

type InspectionMethodId = {Version: string,Method: string,Plant: string};

interface EditableInspectionMethod extends Pick<InspectionMethod, "Version" | "Method" | "Plant" | "SortField" | "Status" | "ShortDesc" | "LongTextFlag" | "StatusDesc"> {
}

interface InspectionMethodDocument {
    Version: string;
    Method: string;
    RelationshipID: string;
    ObjectKey: string;
    Plant: string;
    DocumentID: string;
    Document_Nav: Document | null | DeferredContent;
    InspectionMethod_Nav: InspectionMethod | null | DeferredContent;
}

type InspectionMethodDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableInspectionMethodDocument extends Pick<InspectionMethodDocument, "Version" | "Method" | "RelationshipID" | "ObjectKey" | "Plant" | "DocumentID"> {
}

interface InspectionMethodLongText {
    TextString: string;
    TextObjType: string;
    ObjectKey: string;
    TextId: string;
    Plant: string;
    Method: string;
    Version: string;
    InspectionMethod_Nav: InspectionMethod | null | DeferredContent;
}

type InspectionMethodLongTextId = {Plant: string,Method: string,Version: string};

interface EditableInspectionMethodLongText extends Pick<InspectionMethodLongText, "TextString" | "TextObjType" | "ObjectKey" | "TextId" | "Plant" | "Method" | "Version"> {
}

interface InspectionPoint {
    EquipNum: string;
    OperationNo: string;
    OrderId: string;
    Plant: string;
    SampleNum: string;
    FuncLocId: string;
    InspectionNode: string;
    InspectionLot: string;
    ConfirmCounter: string;
    ConfirmNum: string;
    FuncLocIntern: string;
    ValSelectedSet: string;
    ValCatalog: string;
    ValCodeGroup: string;
    ValCode: string;
    ValuationStatus: string;
    Inspector: string;
    Equip_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    InspCode_Nav: InspectionCode | null | DeferredContent;
    InspValuation_Nav: InspectionCatalogValuation | null | DeferredContent;
    InspectionChar_Nav: Array<InspectionCharacteristic> | DeferredContent;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
    NotifItems_Nav: Array<MyNotificationItem> | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type InspectionPointId = {SampleNum: string,InspectionNode: string,InspectionLot: string};

interface EditableInspectionPoint extends Pick<InspectionPoint, "EquipNum" | "OperationNo" | "OrderId" | "Plant" | "SampleNum" | "FuncLocId" | "InspectionNode" | "InspectionLot" | "ConfirmCounter" | "ConfirmNum" | "FuncLocIntern" | "ValSelectedSet" | "ValCatalog" | "ValCodeGroup" | "ValCode" | "ValuationStatus" | "Inspector"> {
}

interface InspectionPointValuation {
    AcceptedCodeGroup: string;
    AcceptedCode: string;
    RejectedCodeGroup: string;
    RejectedCode: string;
    FieldCombination: string;
    InspectionPointType: string;
    SelectedSet: string;
    Plant: string;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
}

type InspectionPointValuationId = {FieldCombination: string,InspectionPointType: string};

interface EditableInspectionPointValuation extends Pick<InspectionPointValuation, "AcceptedCodeGroup" | "AcceptedCode" | "RejectedCodeGroup" | "RejectedCode" | "FieldCombination" | "InspectionPointType" | "SelectedSet" | "Plant"> {
}

interface InspectionResultValuation {
    ShortText: string;
    Valuation: string;
    InspectionChars_Nav: Array<InspectionCharacteristic> | DeferredContent;
}

type InspectionResultValuationId = string | {Valuation: string};

interface EditableInspectionResultValuation extends Pick<InspectionResultValuation, "ShortText"> {
}

interface ItemCategory {
    ItemCategoryDesc: string;
    ItemCategory: string;
    BOMItemCategory_Nav: Array<BOMItem> | DeferredContent;
    CompItemCategory_Nav: Array<MyWorkOrderComponent> | DeferredContent;
}

type ItemCategoryId = string | {ItemCategory: string};

interface EditableItemCategory extends Pick<ItemCategory, "ItemCategoryDesc"> {
}

interface LAMCharacteristicValue {
    LAMInternCounter: string;
    ObjectKey: string;
    CharValCounter: string;
    ObjClassFlag: string;
    ClassType: string;
    InternCounter: string;
    Table: string;
    InternCharacteristic: string;
    StartPoint: string;
    EndPoint: string;
    Length: string;
    UOM: string;
    MyEquipClassCharValue_Nav: MyEquipClassCharValue | null | DeferredContent;
    MyFuncLocClassCharValue_Nav: MyFuncLocClassCharValue | null | DeferredContent;
}

type LAMCharacteristicValueId = {LAMInternCounter: string,ObjectKey: string,CharValCounter: string,ObjClassFlag: string,ClassType: string,InternCounter: string,Table: string,InternCharacteristic: string};

interface EditableLAMCharacteristicValue extends Pick<LAMCharacteristicValue, "LAMInternCounter" | "ObjectKey" | "CharValCounter" | "ObjClassFlag" | "ClassType" | "InternCounter" | "Table" | "InternCharacteristic" | "StartPoint" | "EndPoint" | "Length" | "UOM"> {
}

interface LAMObjectDatum {
    EndMarkerDistance: string;
    ConfirmationCounter: string;
    ConfirmationNum: string;
    NotifItemNumber: string;
    StartMarkerDistance: string;
    Offset2Value: string;
    Offset2Type: string;
    Offset1Value: string;
    Offset1Type: string;
    LRPId: string;
    Length: string;
    StartPoint: string;
    EndMarker: string;
    StartMarker: string;
    EndPoint: string;
    ObjectType: string;
    TableKey: string;
    OrderId: string;
    EquipId: string;
    UOM: string;
    MarkerUOM: string;
    Offset1UOM: string;
    Offset2UOM: string;
    FuncLocIdIntern: string;
    NotificationNumber: string;
    OperationNo: string;
    MeasurementDocNum: string;
    Point: string;
    Confirmation_Nav: Confirmation | null | DeferredContent;
    MeasurementDocument_Nav: MeasurementDocument | null | DeferredContent;
    MeasuringPoint_Nav: MeasuringPoint | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    MyNotificationHeader_Nav: MyNotificationHeader | null | DeferredContent;
    MyNotificationItem_Nav: MyNotificationItem | null | DeferredContent;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type LAMObjectDatumId = {ObjectType: string,TableKey: string};

interface EditableLAMObjectDatum extends Pick<LAMObjectDatum, "EndMarkerDistance" | "ConfirmationCounter" | "ConfirmationNum" | "NotifItemNumber" | "StartMarkerDistance" | "Offset2Value" | "Offset2Type" | "Offset1Value" | "Offset1Type" | "LRPId" | "Length" | "StartPoint" | "EndMarker" | "StartMarker" | "EndPoint" | "ObjectType" | "TableKey" | "OrderId" | "EquipId" | "UOM" | "MarkerUOM" | "Offset1UOM" | "Offset2UOM" | "FuncLocIdIntern" | "NotificationNumber" | "OperationNo" | "MeasurementDocNum" | "Point"> {
}

interface LAMOffsetType {
    Description: string;
    DocumentationObject: string;
    DefaultOffset: string;
    OffsetTypeCode: string;
    UOM: string;
}

type LAMOffsetTypeId = string | {OffsetTypeCode: string};

interface EditableLAMOffsetType extends Pick<LAMOffsetType, "Description" | "DocumentationObject" | "DefaultOffset" | "UOM"> {
}

interface Language {
    SPRAS: string;
    LASPEZ: string;
    LAHQ: string;
    LAISO: string;
    SPTXT: string;
}

type LanguageId = string | {SPRAS: string};

interface EditableLanguage extends Pick<Language, "LASPEZ" | "LAHQ" | "LAISO" | "SPTXT"> {
}

interface LinearReferencePatternHeader {
    Type: string;
    Description: string;
    LRPId: string;
    UOM: string;
    MarkerDistanceCode: string;
    LRPItem_Nav: Array<LinearReferencePatternItem> | DeferredContent;
}

type LinearReferencePatternHeaderId = string | {LRPId: string};

interface EditableLinearReferencePatternHeader extends Pick<LinearReferencePatternHeader, "Type" | "Description" | "UOM" | "MarkerDistanceCode"> {
}

interface LinearReferencePatternItem {
    LRPId: string;
    Marker: string;
    UOM: string;
    MarkerType: string;
    TechnicalObject: string;
    Description: string;
    StartPoint: string;
    Length: string;
}

type LinearReferencePatternItemId = {LRPId: string,Marker: string};

interface EditableLinearReferencePatternItem extends Pick<LinearReferencePatternItem, "LRPId" | "Marker" | "UOM" | "MarkerType" | "TechnicalObject" | "Description" | "StartPoint" | "Length"> {
}

interface Location {
    LocationName: string;
    Location: string;
    Plant: string;
    MyEquipments_Nav: Array<MyEquipment> | DeferredContent;
    MyFunctionalLocations_Nav: Array<MyFunctionalLocation> | DeferredContent;
    Plant_Nav: Plant | DeferredContent;
}

type LocationId = {Location: string,Plant: string};

interface EditableLocation extends Pick<Location, "LocationName" | "Location" | "Plant"> {
}

interface LongTextTemplate {
    TextString: string;
    Object: string;
    TemplateName: string;
}

type LongTextTemplateId = {Object: string,TemplateName: string};

interface EditableLongTextTemplate extends Pick<LongTextTemplate, "TextString" | "Object" | "TemplateName"> {
}

interface MarkedJob {
    PreferenceValue: string;
    PreferenceName: string;
    PreferenceGroup: string;
    UserGUID: string;
    RecordId: string;
    OrderId: string;
    WorkOrderHeader: MyWorkOrderHeader | null | DeferredContent;
}

type MarkedJobId = string | {OrderId: string};

interface EditableMarkedJob extends Pick<MarkedJob, "PreferenceValue" | "PreferenceName" | "PreferenceGroup" | "UserGUID" | "RecordId"> {
}

interface MasterInspectionChar {
    TargetValue: string;
    DecimalPlaces: number;
    UpperLimit: string;
    LowerLimit: string;
    ShortDesc: string;
    UpperLimitFlag: string;
    LowerLimitFlag: string;
    CharCategory: string;
    CalculatedCharFlag: string;
    CharAttributeFlag: string;
    QuantitativeFlag: string;
    DefectRecordingFlag: string;
    InspectionScope: string;
    LongTermInspFlag: string;
    ScrapShareFlag: string;
    SortField: string;
    TargetValueFlag: string;
    DefectCodeGroupLowerLimit: string;
    DefectCodeLowerLimit: string;
    DefectCodeGroupUpperLimit: string;
    SampleProcReqFlag: string;
    RecordingType: string;
    DefectCodeUpperLimit: string;
    MasterInspCharPlant: string;
    UoM: string;
    MasterInspChar: string;
    MasterInspCharVersion: string;
    CharId: string;
    InspHistory_Nav: Array<InspectionHistory> | DeferredContent;
    InspectionChar_Nav: Array<InspectionCharacteristic> | DeferredContent;
}

type MasterInspectionCharId = {MasterInspCharPlant: string,MasterInspChar: string,MasterInspCharVersion: string};

interface EditableMasterInspectionChar extends Pick<MasterInspectionChar, "TargetValue" | "DecimalPlaces" | "UpperLimit" | "LowerLimit" | "ShortDesc" | "UpperLimitFlag" | "LowerLimitFlag" | "CharCategory" | "CalculatedCharFlag" | "CharAttributeFlag" | "QuantitativeFlag" | "DefectRecordingFlag" | "InspectionScope" | "LongTermInspFlag" | "ScrapShareFlag" | "SortField" | "TargetValueFlag" | "DefectCodeGroupLowerLimit" | "DefectCodeLowerLimit" | "DefectCodeGroupUpperLimit" | "SampleProcReqFlag" | "RecordingType" | "DefectCodeUpperLimit" | "MasterInspCharPlant" | "UoM" | "MasterInspChar" | "MasterInspCharVersion" | "CharId"> {
}

interface MasterInspectionCharLongText {
    MasterInspChar: string;
    MasterInspCharPlant: string;
    MasterInspCharVersion: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    TextString: string;
    InspChar_Nav: Array<InspectionCharacteristic> | DeferredContent;
}

type MasterInspectionCharLongTextId = {MasterInspChar: string,MasterInspCharPlant: string,MasterInspCharVersion: string};

interface EditableMasterInspectionCharLongText extends Pick<MasterInspectionCharLongText, "MasterInspChar" | "MasterInspCharPlant" | "MasterInspCharVersion" | "ObjectKey" | "TextId" | "TextObjType" | "TextString"> {
}

interface MatDocAttachment {
    ObjectKey: string;
    RelationShipID: string;
    DocumentID: string;
    MatDocYear: string;
    MaterialDoc: string;
    Document: Document | null | DeferredContent;
    MaterialDocument_Nav: MaterialDocument | DeferredContent;
}

type MatDocAttachmentId = {DocumentID: string,MatDocYear: string,MaterialDoc: string};

interface EditableMatDocAttachment extends Pick<MatDocAttachment, "ObjectKey" | "RelationShipID" | "DocumentID" | "MatDocYear" | "MaterialDoc"> {
}

interface MatDocItemSerialNum {
    UniversalItemId: string;
    MatDocItem: string;
    SerialNum: string;
    MaterialDocYear: string;
    MaterialDocNumber: string;
    MatDocItem_Nav: MaterialDocItem | DeferredContent;
}

type MatDocItemSerialNumId = {MatDocItem: string,SerialNum: string,MaterialDocYear: string,MaterialDocNumber: string};

interface EditableMatDocItemSerialNum extends Pick<MatDocItemSerialNum, "UniversalItemId" | "MatDocItem" | "SerialNum" | "MaterialDocYear" | "MaterialDocNumber"> {
}

interface Material {
    NATOStockNum: string;
    LongManufacturerPartNum: string;
    ManufacturerPartNum: string;
    Manufacturer: string;
    WeightUnit: string;
    VolumeUnit: string;
    EanUpc: string;
    MaterialNum: string;
    BaseUOM: string;
    MaterialType: string;
    ProductHierarchy: string;
    SerialNumberProfile: string;
    Description: string;
    MaterialGroup: string;
    Volume: string;
    Division: string;
    GrossWeight: string;
    NetWeight: string;
    ItemCatGroup: string;
    InboundDeliveryItem_Nav: Array<InboundDeliveryItem> | DeferredContent;
    MaterialBOM_Nav: Array<MaterialBOM> | DeferredContent;
    MaterialBatchStock_Nav: Array<MaterialBatchStock> | DeferredContent;
    MaterialBatch_Nav: Array<MaterialBatch> | DeferredContent;
    MaterialPlants: Array<MaterialPlant> | DeferredContent;
    MaterialProjectStock: Array<MaterialProjectStock> | DeferredContent;
    MaterialSLocs: Array<MaterialSLoc> | DeferredContent;
    MaterialSales_Nav: Array<MaterialSales> | DeferredContent;
    MaterialUOMs: Array<MaterialUOM> | DeferredContent;
    MaterialValuation_Nav: Array<MaterialValuation> | DeferredContent;
    MaterialVendorConsignmentStock: Array<MaterialVendorConsignmentStock> | DeferredContent;
    MyNotificationHeader_Nav: MyNotificationHeader | null | DeferredContent;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    OutboundDeliveryItem_Nav: Array<OutboundDeliveryItem> | DeferredContent;
    PhysicalInventoryDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
    ProductionOrderItem_Nav: Array<ProductionOrderItem> | DeferredContent;
    PurchaseOrderItem_Nav: Array<PurchaseOrderItem> | DeferredContent;
    S4ConfirmationRefObjHistory_Nav: Array<S4ServiceConfirmationRefObjHistory> | DeferredContent;
    S4OrderRefObjHistory_Nav: Array<S4ServiceOrderRefObjHistory> | DeferredContent;
    S4QuotRefObjHistory_Nav: Array<S4ServiceQuotationRefObjHistory> | DeferredContent;
    S4QuotRefObj_Nav: Array<S4ServiceQuotationRefObj> | DeferredContent;
    S4RefObjects_Nav: Array<S4ServiceOrderRefObj> | DeferredContent;
    S4RequestRefObjHistory_Nav: Array<S4ServiceRequestRefObjHistory> | DeferredContent;
    S4RequestRefObj_Nav: Array<S4ServiceRequestRefObj> | DeferredContent;
    S4ServiceConfirmationItems_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceContractItem_Nav: Array<S4ServiceContractItem> | DeferredContent;
    S4ServiceContractRefObj_Nav: Array<S4ServiceContractRefObj> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    SerialNumbers: Array<MyEquipSerialNumber> | DeferredContent;
    StockTransportOrderItem_Nav: Array<StockTransportOrderItem> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WorkOrderComponent: Array<MyWorkOrderComponent> | DeferredContent;
    WorkOrderTool: Array<MyWorkOrderTool> | DeferredContent;
}

type MaterialId = string | {MaterialNum: string};

interface EditableMaterial extends Pick<Material, "NATOStockNum" | "LongManufacturerPartNum" | "ManufacturerPartNum" | "Manufacturer" | "WeightUnit" | "VolumeUnit" | "EanUpc" | "BaseUOM" | "MaterialType" | "ProductHierarchy" | "SerialNumberProfile" | "Description" | "MaterialGroup" | "Volume" | "Division" | "GrossWeight" | "NetWeight" | "ItemCatGroup"> {
}

interface MaterialBOM {
    Plant: string;
    BOMCategory: string;
    BOMUsage: string;
    MaterialNum: string;
    BOMId: string;
    BOMHeader_Nav: BOMHeader | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
}

type MaterialBOMId = {Plant: string,BOMCategory: string,BOMUsage: string,MaterialNum: string,BOMId: string};

interface EditableMaterialBOM extends Pick<MaterialBOM, "Plant" | "BOMCategory" | "BOMUsage" | "MaterialNum" | "BOMId"> {
}

interface MaterialBatch {
    ValuationType: string;
    BatchType: string;
    Batch: string;
    Plant: string;
    MaterialNum: string;
    MaterialPlant_Nav: MaterialPlant | DeferredContent;
    MaterialProjectStock: Array<MaterialProjectStock> | DeferredContent;
    MaterialVendorConsignmentStock: Array<MaterialVendorConsignmentStock> | DeferredContent;
    Material_Nav: Material | DeferredContent;
    MyEquipSerialNum_Nav: Array<MyEquipSerialNumber> | DeferredContent;
    MyWOComponent_Nav: Array<MyWorkOrderComponent> | DeferredContent;
}

type MaterialBatchId = {Batch: string,Plant: string,MaterialNum: string};

interface EditableMaterialBatch extends Pick<MaterialBatch, "ValuationType" | "BatchType" | "Batch" | "Plant" | "MaterialNum"> {
}

interface MaterialBatchStock {
    MaterialNum: string;
    Plant: string;
    StorageLocation: string;
    Batch: string;
    UnrestrictedQuantity: string;
    MaterialPlant_Nav: MaterialPlant | DeferredContent;
    Material_Nav: Material | DeferredContent;
    MyEquipSerialNumber_Nav: Array<MyEquipSerialNumber> | DeferredContent;
    MyWorkOrderComponent_Nav: Array<MyWorkOrderComponent> | DeferredContent;
}

type MaterialBatchStockId = {MaterialNum: string,Plant: string,StorageLocation: string,Batch: string};

interface EditableMaterialBatchStock extends Pick<MaterialBatchStock, "MaterialNum" | "Plant" | "StorageLocation" | "Batch" | "UnrestrictedQuantity"> {
}

interface MaterialDocItem {
    MaterialDocYear: string;
    ReferenceDocHdr: string;
    ReferenceDocYear: string;
    ReferenceDocItem: string;
    Vendor: string;
    WBSElement: string;
    CostCenter: string;
    Customer: string;
    Delivery: string;
    EntryUOM: string;
    GLAccount: string;
    MaterialDocNumber: string;
    NumOfLabels: string;
    MoveValuationType: string;
    GoodsRecipient: string;
    NetworkActivity: string;
    ValuationCategory: string;
    AutoGenerateSerialNumbers: string;
    ResvRecordType: string;
    StorageBin: string;
    Plant: string;
    MovementIndicator: string;
    MovementReason: string;
    MovementType: string;
    OrderItemNumber: string;
    PurchaseOrderItem: string;
    Quantity: string;
    ReservationItemNumber: string;
    SalesOrderItem: string;
    SpecialStockInd: string;
    StockType: string;
    StorageLocation: string;
    UnloadingPoint: string;
    ValuationType: string;
    Batch: string;
    DeliveryItem: string;
    EntryQuantity: string;
    FinalIssue: string;
    ItemText: string;
    MoveBatch: string;
    MovePlant: string;
    MoveStorageLocation: string;
    MatDocItem: string;
    OrderNumber: string;
    Material: string;
    Network: string;
    PurchaseOrderNumber: string;
    ReservationNumber: string;
    SalesOrderNumber: string;
    StockWBSElement: string;
    UOM: string;
    Plannofoper: string;
    Counter: string;
    AssociatedMaterialDoc: MaterialDocument | DeferredContent;
    InboundDeliveryItem_Nav: InboundDeliveryItem | null | DeferredContent;
    InboundDelivery_Nav: InboundDelivery | null | DeferredContent;
    OutboundDeliveryItem_Nav: OutboundDeliveryItem | null | DeferredContent;
    ProductionOrderComponent_Nav: ProductionOrderComponent | DeferredContent;
    ProductionOrderItem_Nav: ProductionOrderItem | DeferredContent;
    PurchaseOrderItem_Nav: PurchaseOrderItem | null | DeferredContent;
    PurchaseOrder_Nav: PurchaseOrderHeader | null | DeferredContent;
    ReservationItem_Nav: ReservationItem | null | DeferredContent;
    Reservation_Nav: ReservationHeader | null | DeferredContent;
    STO_Nav: StockTransportOrderHeader | null | DeferredContent;
    SerialNum: Array<MatDocItemSerialNum> | DeferredContent;
    StockTransportOrderItem_Nav: StockTransportOrderItem | null | DeferredContent;
    ValuationType_Nav: ValuationType | null | DeferredContent;
    WorkOrderCompMatDoc: MyWorkOrderComponentMatDoc | DeferredContent;
    WorkOrderHeader: MyWorkOrderHeader | null | DeferredContent;
}

type MaterialDocItemId = {MaterialDocYear: string,MaterialDocNumber: string,MatDocItem: string};

interface EditableMaterialDocItem extends Pick<MaterialDocItem, "MaterialDocYear" | "ReferenceDocHdr" | "ReferenceDocYear" | "ReferenceDocItem" | "Vendor" | "WBSElement" | "CostCenter" | "Customer" | "Delivery" | "EntryUOM" | "GLAccount" | "MaterialDocNumber" | "NumOfLabels" | "MoveValuationType" | "GoodsRecipient" | "NetworkActivity" | "ValuationCategory" | "AutoGenerateSerialNumbers" | "ResvRecordType" | "StorageBin" | "Plant" | "MovementIndicator" | "MovementReason" | "MovementType" | "OrderItemNumber" | "PurchaseOrderItem" | "Quantity" | "ReservationItemNumber" | "SalesOrderItem" | "SpecialStockInd" | "StockType" | "StorageLocation" | "UnloadingPoint" | "ValuationType" | "Batch" | "DeliveryItem" | "EntryQuantity" | "FinalIssue" | "ItemText" | "MoveBatch" | "MovePlant" | "MoveStorageLocation" | "MatDocItem" | "OrderNumber" | "Material" | "Network" | "PurchaseOrderNumber" | "ReservationNumber" | "SalesOrderNumber" | "StockWBSElement" | "UOM" | "Plannofoper" | "Counter"> {
}

interface MaterialDocument {
    BillOfLading: string;
    GMCode: string;
    UserName: string;
    RefDocumentNumber: string;
    HeaderText: string;
    GoodsReceiptIssueNumber: string;
    PostingDate: string | null;
    DocumentDate: string | null;
    MaterialDocNumber: string;
    MaterialDocYear: string;
    ObjectKey: string;
    MatDocAttachment_Nav: Array<MatDocAttachment> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
    RelatedItem: Array<MaterialDocItem> | DeferredContent;
}

type MaterialDocumentId = {MaterialDocNumber: string,MaterialDocYear: string};

interface EditableMaterialDocument extends Pick<MaterialDocument, "BillOfLading" | "GMCode" | "UserName" | "RefDocumentNumber" | "HeaderText" | "GoodsReceiptIssueNumber" | "MaterialDocNumber" | "MaterialDocYear" | "ObjectKey">, Partial<Pick<MaterialDocument, "PostingDate" | "DocumentDate">> {
}

interface MaterialPlant {
    ValuationCategory: string;
    ValuationArea: string;
    SerialNumberProfile: string;
    PurchasingGroup: string;
    BatchIndicator: string;
    Plant: string;
    MaterialNum: string;
    InboundDeliveryItem_Nav: Array<InboundDeliveryItem> | DeferredContent;
    Material: Material | DeferredContent;
    MaterialBatchStock_Nav: Array<MaterialBatchStock> | DeferredContent;
    MaterialBatch_Nav: Array<MaterialBatch> | DeferredContent;
    MaterialProjectStock: Array<MaterialProjectStock> | DeferredContent;
    MaterialSLocs: Array<MaterialSLoc> | DeferredContent;
    MaterialValuation_Nav: Array<MaterialValuation> | DeferredContent;
    MaterialVendorConsignmentStock: Array<MaterialVendorConsignmentStock> | DeferredContent;
    OutboundDeliveryItem_Nav: Array<OutboundDeliveryItem> | DeferredContent;
    PhysicalInventoryDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
    ProductionOrderComponent_Nav: Array<ProductionOrderComponent> | DeferredContent;
    ProductionOrderItem_Nav: Array<ProductionOrderItem> | DeferredContent;
    PurchaseOrderItem_Nav: Array<PurchaseOrderItem> | DeferredContent;
    ReservationItem_Nav: Array<ReservationItem> | DeferredContent;
    StockTransportOrderItem_Nav: Array<StockTransportOrderItem> | DeferredContent;
}

type MaterialPlantId = {Plant: string,MaterialNum: string};

interface EditableMaterialPlant extends Pick<MaterialPlant, "ValuationCategory" | "ValuationArea" | "SerialNumberProfile" | "PurchasingGroup" | "BatchIndicator" | "Plant" | "MaterialNum"> {
}

interface MaterialProjectStock {
    Batch: string;
    MaterialNum: string;
    Plant: string;
    SpecialStock: string;
    StorageLocation: string;
    WBSElement: string;
    BlockedQty: string;
    QualityInspectionQty: string;
    RestrictedUseQty: string;
    UnrestrictedQty: string;
    Material: Material | DeferredContent;
    MaterialBatch: MaterialBatch | null | DeferredContent;
    MaterialPlant: MaterialPlant | DeferredContent;
    MaterialSLoc: MaterialSLoc | DeferredContent;
}

type MaterialProjectStockId = {Batch: string,MaterialNum: string,Plant: string,SpecialStock: string,StorageLocation: string,WBSElement: string};

interface EditableMaterialProjectStock extends Pick<MaterialProjectStock, "Batch" | "MaterialNum" | "Plant" | "SpecialStock" | "StorageLocation" | "WBSElement" | "BlockedQty" | "QualityInspectionQty" | "RestrictedUseQty" | "UnrestrictedQty"> {
}

interface MaterialSLoc {
    PlantDescription: string;
    TransferSlocQuantity: string;
    UnrestrictedQuantity: string;
    OnOrderQuantity: string;
    StorageLocationDesc: string;
    Plant: string;
    StorageBin: string;
    BatchIndicator: string;
    StorageLocation: string;
    MaterialNum: string;
    Material: Material | DeferredContent;
    MaterialPlant: MaterialPlant | DeferredContent;
    MaterialProjectStock: Array<MaterialProjectStock> | DeferredContent;
    MaterialVendorConsignmentStock: Array<MaterialVendorConsignmentStock> | DeferredContent;
}

type MaterialSLocId = {Plant: string,StorageLocation: string,MaterialNum: string};

interface EditableMaterialSLoc extends Pick<MaterialSLoc, "PlantDescription" | "TransferSlocQuantity" | "UnrestrictedQuantity" | "OnOrderQuantity" | "StorageLocationDesc" | "Plant" | "StorageBin" | "BatchIndicator" | "StorageLocation" | "MaterialNum"> {
}

interface MaterialSales {
    ItemCategoryGoup: string;
    SalesOrg: string;
    DistributionChannel: string;
    MaterialNum: string;
    Material_Nav: Material | DeferredContent;
}

type MaterialSalesId = {SalesOrg: string,DistributionChannel: string,MaterialNum: string};

interface EditableMaterialSales extends Pick<MaterialSales, "ItemCategoryGoup" | "SalesOrg" | "DistributionChannel" | "MaterialNum"> {
}

interface MaterialUOM {
    Denominator: string;
    ConversionFactor: string;
    BatchIndicator: string;
    BaseFlag: boolean;
    Numerator: string;
    BaseUOM: string;
    MaterialNum: string;
    UOM: string;
    Material: Material | DeferredContent;
}

type MaterialUOMId = {MaterialNum: string,UOM: string};

interface EditableMaterialUOM extends Pick<MaterialUOM, "Denominator" | "ConversionFactor" | "BatchIndicator" | "BaseFlag" | "Numerator" | "BaseUOM" | "MaterialNum" | "UOM"> {
}

interface MaterialValuation {
    Material: string;
    ValuationArea: string;
    ValuationType: string;
    ValuationCategory: string;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
    ValuationType_Nav: ValuationType | null | DeferredContent;
}

type MaterialValuationId = {Material: string,ValuationType: string,ValuationCategory: string};

interface EditableMaterialValuation extends Pick<MaterialValuation, "Material" | "ValuationArea" | "ValuationType" | "ValuationCategory"> {
}

interface MaterialVendorConsignmentStock {
    Batch: string;
    MaterialNum: string;
    Plant: string;
    SpecialStock: string;
    StorageLocation: string;
    Supplier: string;
    BlockedQty: string;
    QualityInspectionQty: string;
    RestrictedQty: string;
    UnrestrictedQty: string;
    Material: Material | DeferredContent;
    MaterialBatch: MaterialBatch | null | DeferredContent;
    MaterialPlant: MaterialPlant | DeferredContent;
    MaterialSLoc: MaterialSLoc | DeferredContent;
}

type MaterialVendorConsignmentStockId = {Batch: string,MaterialNum: string,Plant: string,SpecialStock: string,StorageLocation: string,Supplier: string};

interface EditableMaterialVendorConsignmentStock extends Pick<MaterialVendorConsignmentStock, "Batch" | "MaterialNum" | "Plant" | "SpecialStock" | "StorageLocation" | "Supplier" | "BlockedQty" | "QualityInspectionQty" | "RestrictedQty" | "UnrestrictedQty"> {
}

interface MeasurementDocument {
    LAMObjectType: string;
    LAMTableKey: string;
    SortField: string;
    OperationObjNum: string;
    OrderObjNum: string;
    ReadingTimestamp: string | null;
    CodeCatalog: string;
    RecordedValueFloat: string | null;
    SecondaryIndex: string;
    ShortText: string;
    TotalReadingValue: string;
    ValuationCode: string;
    CodeGroup: string;
    CodeShortText: string;
    CounterReadingDifference: string;
    CounterReadingValue: string;
    CustomDuprecOccurred: string;
    DifferenceReading: string;
    HasReadingValue: string;
    IsCounterReading: string;
    OriginIndicator: string;
    PointObjectKey: string;
    ReadBy: string;
    ReadingAfterAction: string;
    ReadingDate: string | null;
    ReadingTime: string;
    ReadingValue: string;
    RecordedValue: string;
    EquipmentId: string;
    UOM: string;
    FunctionalLocation: string;
    NotificationNumber: string;
    Point: string;
    RecordedUnit: string;
    MeasurementDocNum: string;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    LongText: Array<MeasurementDocumentLongText> | DeferredContent;
    MeasuringPoint: MeasuringPoint | DeferredContent;
}

type MeasurementDocumentId = string | {MeasurementDocNum: string};

interface EditableMeasurementDocument extends Pick<MeasurementDocument, "LAMObjectType" | "LAMTableKey" | "SortField" | "OperationObjNum" | "OrderObjNum" | "CodeCatalog" | "SecondaryIndex" | "ShortText" | "TotalReadingValue" | "ValuationCode" | "CodeGroup" | "CodeShortText" | "CounterReadingDifference" | "CounterReadingValue" | "CustomDuprecOccurred" | "DifferenceReading" | "HasReadingValue" | "IsCounterReading" | "OriginIndicator" | "PointObjectKey" | "ReadBy" | "ReadingAfterAction" | "ReadingTime" | "ReadingValue" | "RecordedValue" | "EquipmentId" | "UOM" | "FunctionalLocation" | "NotificationNumber" | "Point" | "RecordedUnit">, Partial<Pick<MeasurementDocument, "ReadingTimestamp" | "RecordedValueFloat" | "ReadingDate">> {
}

interface MeasurementDocumentLongText {
    TextString: string;
    ObjectKey: string;
    TextObjType: string;
    TextId: string;
    MeasurementDocNum: string;
    MeasurementDocument: MeasurementDocument | DeferredContent;
}

type MeasurementDocumentLongTextId = string | {MeasurementDocNum: string};

interface EditableMeasurementDocumentLongText extends Pick<MeasurementDocumentLongText, "TextString" | "ObjectKey" | "TextObjType" | "TextId"> {
}

interface MeasuringPoint {
    CharId: string;
    Point: string;
    PrevHasReadingValue: string;
    PrevReadBy: string;
    PrevTotalReadingValue: string;
    PrevReadingDate: string | null;
    ShortText: string;
    Target: string;
    UoM: string;
    UpperRange: string;
    ValuationCode: string;
    AnnualEstimate: string;
    CatalogType: string;
    CharDescription: string;
    CharName: string;
    CharType: string;
    CodeGroup: string;
    IsValid: string;
    LongTextExists: string;
    LowerRange: string;
    Mode: string;
    ModifiedBy: string;
    PointDesc: string;
    PointObjectKey: string;
    PointType: string;
    Position: string;
    PositionIndicator: string;
    PrevCatalogType: string;
    PrevCodeDescription: string;
    PrevCodeGroup: string;
    PrevCounterReadingDiff: string;
    PrevCounterValue: string;
    PrevReadingTime: string;
    PrevReadingValue: string;
    PrevValuationCode: string;
    CounterOverflow: string;
    Decimal: number;
    DecimalPlaces: number;
    DeletionFlag: string;
    DisplayExponent: number;
    Exponent: number;
    FuncLocIdIntern: string;
    IsAnnualEstimate: string;
    IsCodeSufficient: string;
    LAMObjectType: string;
    LAMTableKey: string;
    SortField: string;
    IsCounter: string;
    IsCounterOverflow: string;
    IsInactive: string;
    IsLowerRange: string;
    IsNegative: string;
    IsPrevReading: string;
    IsRefMeasurementTransfer: string;
    IsReferenceCharacteristic: string;
    IsReferenceCodeGroup: string;
    IsReferenceMeasuringPoint: string;
    IsReferenceShortText: string;
    IsReferenceTarget: string;
    IsReverse: string;
    IsTransfer: string;
    IsUpperRange: string;
    EquipId: string;
    RangeUOM: string;
    ReferenceMeasuringPoint: string;
    LocalizationAssembly: string;
    PrevMeasurementDoc: string;
    IsReferenceTransfer: string;
    Equipment: MyEquipment | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    LongText: Array<MeasuringPointText> | DeferredContent;
    MeasurementDocs: Array<MeasurementDocument> | DeferredContent;
    RoutePoints: Array<MyRoutePoint> | DeferredContent;
    WorkOrderTool: Array<MyWorkOrderTool> | DeferredContent;
}

type MeasuringPointId = string | {Point: string};

interface EditableMeasuringPoint extends Pick<MeasuringPoint, "CharId" | "PrevHasReadingValue" | "PrevReadBy" | "PrevTotalReadingValue" | "ShortText" | "Target" | "UoM" | "UpperRange" | "ValuationCode" | "AnnualEstimate" | "CatalogType" | "CharDescription" | "CharName" | "CharType" | "CodeGroup" | "IsValid" | "LongTextExists" | "LowerRange" | "Mode" | "ModifiedBy" | "PointDesc" | "PointObjectKey" | "PointType" | "Position" | "PositionIndicator" | "PrevCatalogType" | "PrevCodeDescription" | "PrevCodeGroup" | "PrevCounterReadingDiff" | "PrevCounterValue" | "PrevReadingTime" | "PrevReadingValue" | "PrevValuationCode" | "CounterOverflow" | "Decimal" | "DecimalPlaces" | "DeletionFlag" | "DisplayExponent" | "Exponent" | "FuncLocIdIntern" | "IsAnnualEstimate" | "IsCodeSufficient" | "LAMObjectType" | "LAMTableKey" | "SortField" | "IsCounter" | "IsCounterOverflow" | "IsInactive" | "IsLowerRange" | "IsNegative" | "IsPrevReading" | "IsRefMeasurementTransfer" | "IsReferenceCharacteristic" | "IsReferenceCodeGroup" | "IsReferenceMeasuringPoint" | "IsReferenceShortText" | "IsReferenceTarget" | "IsReverse" | "IsTransfer" | "IsUpperRange" | "EquipId" | "RangeUOM" | "ReferenceMeasuringPoint" | "LocalizationAssembly" | "PrevMeasurementDoc" | "IsReferenceTransfer">, Partial<Pick<MeasuringPoint, "PrevReadingDate">> {
}

interface MeasuringPointText {
    TextString: string;
    ObjectKey: string;
    TextObjType: string;
    TextId: string;
    Point: string;
    MeasuringPoint: MeasuringPoint | DeferredContent;
}

type MeasuringPointTextId = string | {Point: string};

interface EditableMeasuringPointText extends Pick<MeasuringPointText, "TextString" | "ObjectKey" | "TextObjType" | "TextId"> {
}

interface MobileStatusMapping {
    StatusProfile: string;
    SystemStatus: string;
    UserStatus: string;
    StatusAttribute1: string;
    StatusAttribute2: string;
    InitialStatusFlag: boolean;
    MobileStatusLabel: string;
    MobileStatus: string;
    ObjectType: string;
    RecordNo: string;
}

type MobileStatusMappingId = string | {RecordNo: string};

interface EditableMobileStatusMapping extends Pick<MobileStatusMapping, "StatusProfile" | "SystemStatus" | "UserStatus" | "StatusAttribute1" | "StatusAttribute2" | "InitialStatusFlag" | "MobileStatusLabel" | "MobileStatus" | "ObjectType"> {
}

interface MovementReason {
    MovementReason: string;
    MovementType: string;
    MovementReasonText: string;
}

type MovementReasonId = {MovementReason: string,MovementType: string};

interface EditableMovementReason extends Pick<MovementReason, "MovementReason" | "MovementType" | "MovementReasonText"> {
}

interface MovementType {
    DebitCredit: string;
    RevMvmtTypeInd: string;
    Consumption: string;
    LanguageKey: string;
    MovementInd: string;
    MovementType: string;
    SpecialStockInd: string;
    ReceiptInd: string;
    MovementTypeDesc: string;
    SAMType: string;
}

type MovementTypeId = {Consumption: string,LanguageKey: string,MovementInd: string,MovementType: string,SpecialStockInd: string,ReceiptInd: string};

interface EditableMovementType extends Pick<MovementType, "DebitCredit" | "RevMvmtTypeInd" | "Consumption" | "LanguageKey" | "MovementInd" | "MovementType" | "SpecialStockInd" | "ReceiptInd" | "MovementTypeDesc" | "SAMType"> {
}

interface MovementTypeSpecialStock {
    Language: string;
    MovementType: string;
    SpecialStock: string;
    MovementInd: string;
    ReceiptInd: string;
    Consumption: string;
    MovementTypeText: string;
}

type MovementTypeSpecialStockId = {Language: string,MovementType: string,SpecialStock: string,MovementInd: string,ReceiptInd: string,Consumption: string};

interface EditableMovementTypeSpecialStock extends Pick<MovementTypeSpecialStock, "Language" | "MovementType" | "SpecialStock" | "MovementInd" | "ReceiptInd" | "Consumption" | "MovementTypeText"> {
}

interface MovementTypeTcode {
    MovementTypeText: string;
    ProposeMovementType: string;
    SpecialStockIndicator: string;
    MovementType: string;
    Tcode: string;
}

type MovementTypeTcodeId = {SpecialStockIndicator: string,MovementType: string,Tcode: string};

interface EditableMovementTypeTcode extends Pick<MovementTypeTcode, "MovementTypeText" | "ProposeMovementType" | "SpecialStockIndicator" | "MovementType" | "Tcode"> {
}

interface MovementTypeText {
    Client: string;
    Language: string;
    TransactionCode: string;
    MovementType: string;
    SpecialStock: string;
    Text: string;
}

type MovementTypeTextId = {Client: string,Language: string,TransactionCode: string,MovementType: string,SpecialStock: string};

interface EditableMovementTypeText extends Pick<MovementTypeText, "Client" | "Language" | "TransactionCode" | "MovementType" | "SpecialStock" | "Text"> {
}

interface MyEAMWorkOrderHeader {
    OrderId: string;
    AccountingIndicator: string;
    AddressNum: string;
    BusinessArea: string;
    ControllingArea: string;
    CostCenter: string;
    CreationDate: string | null;
    CreationTime: string;
    DueDate: string | null;
    HeaderEquipment: string | null;
    HeaderFunctionLocation: string | null;
    LastChangeTime: string | null;
    MainWorkCenter: string;
    MainWorkCenterPlant: string;
    MaintenanceActivityType: string;
    MaintenancePlant: string;
    NotificationNumber: string;
    ObjectKey: string;
    ObjectNumber: string;
    ObjectType: string;
    OrderCategory: string;
    OrderCurrency: string;
    OrderDescription: string;
    OrderProcessingContext: string;
    OrderType: string;
    Phase: string;
    PlannerGroup: string;
    PlanningPlant: string;
    Priority: string;
    PriorityType: string;
    RequestStartDate: string | null;
    RequestStartTime: string | null;
    ScheduledStartDate: string | null;
    ScheduledStartTime: string | null;
    Subphase: string;
    WorkCenterInternalId: string;
    TechnicalObject: string;
    TechnicalObjectType: string;
    Components: Array<MyWorkOrderComponent> | DeferredContent;
    Confirmations: Array<Confirmation> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    HeaderLongText: Array<MyWorkOrderHeaderLongText> | DeferredContent;
    MarkedJob: MarkedJob | null | DeferredContent;
    MaterialDocItem: Array<MaterialDocItem> | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    Operations: Array<MyEAMWorkOrderOperation> | DeferredContent;
    OrderMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    OrderType_Nav: OrderType | null | DeferredContent;
    PMMobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    PhaseControl_Nav: Array<WorkOrderPhaseControl> | DeferredContent;
    RelatedNotif_Nav: Array<NotificationHistory> | DeferredContent;
    RelatedWOHistory: Array<WorkOrderHistory> | DeferredContent;
    Route: Array<MyRoute> | DeferredContent;
    UserTimeEntry_Nav: Array<UserTimeEntry> | DeferredContent;
    WOCatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    WODocuments: Array<MyWorkOrderDocument> | DeferredContent;
    WOGeometries: Array<MyWorkOrderGeometry> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOPartners: Array<MyWorkOrderPartner> | DeferredContent;
    WOSales_Nav: MyWorkOrderSales | null | DeferredContent;
    WOTransfer: Array<WorkOrderTransfer> | DeferredContent;
}

type MyEAMWorkOrderHeaderId = string | {OrderId: string};

interface EditableMyEAMWorkOrderHeader extends Pick<MyEAMWorkOrderHeader, "AccountingIndicator" | "AddressNum" | "BusinessArea" | "ControllingArea" | "CostCenter" | "CreationTime" | "MainWorkCenter" | "MainWorkCenterPlant" | "MaintenanceActivityType" | "MaintenancePlant" | "NotificationNumber" | "ObjectKey" | "ObjectNumber" | "ObjectType" | "OrderCategory" | "OrderCurrency" | "OrderDescription" | "OrderProcessingContext" | "OrderType" | "Phase" | "PlannerGroup" | "PlanningPlant" | "Priority" | "PriorityType" | "Subphase" | "WorkCenterInternalId" | "TechnicalObject" | "TechnicalObjectType">, Partial<Pick<MyEAMWorkOrderHeader, "CreationDate" | "DueDate" | "HeaderEquipment" | "HeaderFunctionLocation" | "LastChangeTime" | "RequestStartDate" | "RequestStartTime" | "ScheduledStartDate" | "ScheduledStartTime">> {
}

interface MyEAMWorkOrderOperation {
    OperationNo: string;
    OrderId: string;
    ActivityType: string;
    ControlKey: string;
    Duration: string;
    DurationUOM: string;
    MainWorkCenter: string;
    MainWorkCenterPlant: string;
    MaintenancePlant: string;
    NotifNum: string;
    NumberOfCapacities: string;
    ObjectKey: string;
    ObjectNumber: string;
    ObjectType: string;
    OperationCategory: string;
    OperationEquipment: string | null;
    OperationFunctionLocation: string | null;
    OperationShortText: string;
    PersonNum: string | null;
    Phase: string;
    Subphase: string;
    Work: string;
    WorkCenterInternalId: string;
    WorkUnit: string;
    ActualWork: string;
    ForecastWork: string;
    TechnicalObject: string;
    TechnicalObjectType: string;
    Components: Array<MyWorkOrderComponent> | DeferredContent;
    Confirmations: Array<Confirmation> | DeferredContent;
    DigitalSignLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    EquipmentOperation: MyEquipment | null | DeferredContent;
    FunctionalLocationOperation: MyFunctionalLocation | null | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    OperationLongText: Array<MyWorkOrderOperationLongText> | DeferredContent;
    OperationMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    PhaseControl_Nav: Array<WorkOrderOperationPhaseControl> | DeferredContent;
    RouteStop: Array<MyRouteStop> | DeferredContent;
    RouteTechObjects: Array<MyTechObject> | DeferredContent;
    SubOperations: Array<MyWorkOrderSubOperation> | DeferredContent;
    UserTimeEntry_Nav: Array<UserTimeEntry> | DeferredContent;
    WOHeader: MyEAMWorkOrderHeader | null | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOOperationCatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    WOOprDocuments_Nav: Array<MyWorkOrderDocument> | DeferredContent;
    WOTransfer: Array<WorkOrderTransfer> | DeferredContent;
}

type MyEAMWorkOrderOperationId = {OperationNo: string,OrderId: string};

interface EditableMyEAMWorkOrderOperation extends Pick<MyEAMWorkOrderOperation, "OperationNo" | "OrderId" | "ActivityType" | "ControlKey" | "Duration" | "DurationUOM" | "MainWorkCenter" | "MainWorkCenterPlant" | "MaintenancePlant" | "NotifNum" | "NumberOfCapacities" | "ObjectKey" | "ObjectNumber" | "ObjectType" | "OperationCategory" | "OperationShortText" | "Phase" | "Subphase" | "Work" | "WorkCenterInternalId" | "WorkUnit" | "ActualWork" | "ForecastWork" | "TechnicalObject" | "TechnicalObjectType">, Partial<Pick<MyEAMWorkOrderOperation, "OperationEquipment" | "OperationFunctionLocation" | "PersonNum">> {
}

interface MyEquipClass {
    ClassId: string;
    ObjectKey: string;
    ObjClassFlag: string;
    InternCounter: string;
    InternClassNum: string;
    ClassType: string;
    EquipId: string;
    ClassDefinition: ClassDefinition | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
}

type MyEquipClassId = {ObjectKey: string,ObjClassFlag: string,InternCounter: string,InternClassNum: string,ClassType: string};

interface EditableMyEquipClass extends Pick<MyEquipClass, "ClassId" | "ObjectKey" | "ObjClassFlag" | "InternCounter" | "InternClassNum" | "ClassType" | "EquipId"> {
}

interface MyEquipClassCharValue {
    CharValue: string | null;
    ValueRel: string | null;
    ObjectKey: string;
    ObjClassFlag: string;
    InternCounter: string;
    ClassType: string;
    CharValCounter: string;
    CharId: string;
    CharValTo: string | null;
    CharValFrom: string | null;
    CharValDesc: string | null;
    EquipId: string;
    CharValCode_Nav: CharValueCode | null | DeferredContent;
    Characteristic: Characteristic | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    LAMCharacteristicValue_Nav: Array<LAMCharacteristicValue> | DeferredContent;
}

type MyEquipClassCharValueId = {ObjectKey: string,ObjClassFlag: string,InternCounter: string,ClassType: string,CharValCounter: string,CharId: string};

interface EditableMyEquipClassCharValue extends Pick<MyEquipClassCharValue, "ObjectKey" | "ObjClassFlag" | "InternCounter" | "ClassType" | "CharValCounter" | "CharId" | "EquipId">, Partial<Pick<MyEquipClassCharValue, "CharValue" | "ValueRel" | "CharValTo" | "CharValFrom" | "CharValDesc">> {
}

interface MyEquipDocument {
    DocumentID: string;
    RelationshipID: string;
    ObjectKey: string;
    EquipId: string;
    Document: Document | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
}

type MyEquipDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableMyEquipDocument extends Pick<MyEquipDocument, "DocumentID" | "RelationshipID" | "ObjectKey" | "EquipId"> {
}

interface MyEquipGeometry {
    LogicalSystem: string;
    EquipId: string;
    ObjectGroup1: string;
    ObjectKey: string;
    ObjectType: string;
    SpacialId: string;
    SpacialGUId: string;
    ObjectGroup: string;
    Equip_Nav: MyEquipment | null | DeferredContent;
    Geometry: Geometry | null | DeferredContent;
}

type MyEquipGeometryId = {LogicalSystem: string,ObjectGroup1: string,ObjectKey: string,ObjectType: string,ObjectGroup: string};

interface EditableMyEquipGeometry extends Pick<MyEquipGeometry, "LogicalSystem" | "EquipId" | "ObjectGroup1" | "ObjectKey" | "ObjectType" | "SpacialId" | "SpacialGUId" | "ObjectGroup"> {
}

interface MyEquipLongText {
    EquipmentNum: string;
    TextString: string;
    TextObjType: string;
    TextId: string;
    ObjectKey: string;
    NewTextString: string;
    Equipment: MyEquipment | DeferredContent;
}

type MyEquipLongTextId = string | {EquipmentNum: string};

interface EditableMyEquipLongText extends Pick<MyEquipLongText, "TextString" | "TextObjType" | "TextId" | "ObjectKey" | "NewTextString"> {
}

interface MyEquipObjectStatus {
    EquipId: string;
    Status: string;
    ObjectKey: string;
    Equipment_Nav: MyEquipment | DeferredContent;
    SystemStatus_Nav: SystemStatus | DeferredContent;
}

type MyEquipObjectStatusId = string | {EquipId: string};

interface EditableMyEquipObjectStatus extends Pick<MyEquipObjectStatus, "Status" | "ObjectKey"> {
}

interface MyEquipPartner {
    PersonnelNum: string;
    ObjectNum: string;
    Counter: string;
    EquipId: string;
    PartnerFunction: string;
    AddressNum: string;
    ObjectCategory: string;
    PartnerNum: string;
    BPNum: string;
    PersonNum: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type MyEquipPartnerId = {Counter: string,EquipId: string,PartnerFunction: string};

interface EditableMyEquipPartner extends Pick<MyEquipPartner, "PersonnelNum" | "ObjectNum" | "Counter" | "EquipId" | "PartnerFunction" | "AddressNum" | "ObjectCategory" | "PartnerNum" | "BPNum" | "PersonNum"> {
}

interface MyEquipSerialNumber {
    LastSerialNumber: string;
    SerialNumber: string;
    Vendor: string;
    WBSElement: string;
    Issued: string;
    SpecialStock: string;
    Plant: string;
    MasterBatchNumber: string;
    CompanyCode: string;
    BatchNumber: string;
    StorageLocation: string;
    StockType: string;
    LastGoodsMvtDate: string | null;
    EquipId: string;
    MaterialNum: string;
    SalesOrder: string;
    Customer: string;
    UniqueItemIdentifier: string;
    IUIDType: string;
    UIIPlant: string;
    Equipment: MyEquipment | DeferredContent;
    Material: Material | DeferredContent;
    MaterialBatch_Nav: MaterialBatch | null | DeferredContent;
}

type MyEquipSerialNumberId = string | {EquipId: string};

interface EditableMyEquipSerialNumber extends Pick<MyEquipSerialNumber, "LastSerialNumber" | "SerialNumber" | "Vendor" | "WBSElement" | "Issued" | "SpecialStock" | "Plant" | "MasterBatchNumber" | "CompanyCode" | "BatchNumber" | "StorageLocation" | "StockType" | "MaterialNum" | "SalesOrder" | "Customer" | "UniqueItemIdentifier" | "IUIDType" | "UIIPlant">, Partial<Pick<MyEquipSerialNumber, "LastGoodsMvtDate">> {
}

interface MyEquipSystemStatus {
    StatusInact: string | null;
    SequencePriority: string;
    SequencePosition: string;
    ObjectNum: string;
    Status: string;
    EquipId: string;
    Equipment_Nav: MyEquipment | DeferredContent;
    SystemStatus_Nav: SystemStatus | DeferredContent;
}

type MyEquipSystemStatusId = {ObjectNum: string,Status: string};

interface EditableMyEquipSystemStatus extends Pick<MyEquipSystemStatus, "SequencePriority" | "SequencePosition" | "ObjectNum" | "Status" | "EquipId">, Partial<Pick<MyEquipSystemStatus, "StatusInact">> {
}

interface MyEquipUserStatus {
    StatusInact: string | null;
    SequencePriority: string;
    SequencePosition: string;
    StatusNum: string;
    ObjectNum: string;
    StatusProfile: string;
    Status: string;
    EquipId: string;
    Equipment_Nav: MyEquipment | DeferredContent;
    UserStatus_Nav: UserStatus | DeferredContent;
}

type MyEquipUserStatusId = {ObjectNum: string,Status: string};

interface EditableMyEquipUserStatus extends Pick<MyEquipUserStatus, "SequencePriority" | "SequencePosition" | "StatusNum" | "ObjectNum" | "StatusProfile" | "Status" | "EquipId">, Partial<Pick<MyEquipUserStatus, "StatusInact">> {
}

interface MyEquipWarranty {
    WarrantyType: string;
    CreateDate: string | null;
    WarrantyEnd: string | null;
    WarrantyDate: string | null;
    CreateTime: string;
    ObjectNum: string;
    WarrantyTypeDesc: string;
    WarrantyDesc: string;
    EquipId: string;
    MasterWarrantyNum: string;
    Equipment: MyEquipment | null | DeferredContent;
}

type MyEquipWarrantyId = {WarrantyType: string,EquipId: string};

interface EditableMyEquipWarranty extends Pick<MyEquipWarranty, "WarrantyType" | "CreateTime" | "ObjectNum" | "WarrantyTypeDesc" | "WarrantyDesc" | "EquipId" | "MasterWarrantyNum">, Partial<Pick<MyEquipWarranty, "CreateDate" | "WarrantyEnd" | "WarrantyDate">> {
}

interface MyEquipWarrantyLongText {
    TextString: string;
    NewTextString: string;
    TextObjType: string;
    TextId: string;
    ObjectKey: string;
    MasterWarrantyNum: string;
}

type MyEquipWarrantyLongTextId = string | {MasterWarrantyNum: string};

interface EditableMyEquipWarrantyLongText extends Pick<MyEquipWarrantyLongText, "TextString" | "NewTextString" | "TextObjType" | "TextId" | "ObjectKey"> {
}

interface MyEquipment {
    Size: string;
    StartDate: string | null;
    Weight: string;
    ConstYear: string;
    ConstMonth: string;
    CopyDocuments: string;
    CopyPartners: string;
    CopyMeasuringPoints: string;
    CopyInstallLocation: string;
    CopyNote: string;
    UpdateEquip: string;
    CopyClassification: string;
    CopyClassificationValues: string;
    CopyEquipId: string;
    CRObjectType: string;
    LAMObjectType: string;
    LAMTableKey: string;
    LongTextIndicator: string;
    MaintPlant: string;
    PMObjectType: string;
    CatalogProfile: string;
    DismantleTime: string;
    InstallTime: string;
    PRTFlag: string;
    DismantleDate: string | null;
    DismantleFuncLocIdIntern: string | null;
    FuncLocIdIntern: string | null;
    InstallDate: string | null;
    InstallPosition: string | null;
    ObjectNum: string;
    BusinessArea: string;
    ConfigFlag: string;
    ControllingArea: string;
    EquipCategory: string;
    EquipDesc: string;
    EquipFlag: string;
    EquipType: string;
    FuncLocId: string | null;
    ISUFlag: string;
    InventoryNum: string;
    Location: string;
    MaintWorkCenter: string;
    ManufCountry: string;
    ManufPartNo: string;
    ManufSerialNo: string | null;
    Manufacturer: string | null;
    ModelNum: string | null;
    ObjAuthGroup: string;
    PlannerGroup: string;
    PlanningPlant: string;
    PlantSection: string;
    Room: string | null;
    SerialNoFlag: string;
    ConstType: string;
    ValidDate: string | null;
    BoMFlag: string;
    WorkCenter: string;
    EquipId: string;
    AddressNum: string;
    CostCenter: string;
    DismantleEquip: string | null;
    Language: string;
    PrimaryLanguage: string;
    SuperiorEquip: string | null;
    VendorNumber: string;
    TechnicalID: string;
    Address: Address | DeferredContent;
    AssetCentralIndicators_Nav: Array<AssetCentralEquipmentIndicator> | DeferredContent;
    AssetCentralObjectLink_Nav: Array<AssetCentralObjectLink> | DeferredContent;
    ChecklistBusObject_Nav: Array<ChecklistBusObject> | DeferredContent;
    ClassCharValues: Array<MyEquipClassCharValue> | DeferredContent;
    Classes: Array<MyEquipClass> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    EAMChecklist_Nav: Array<EAMChecklistLink> | DeferredContent;
    EAMWorkOrderHeader: Array<MyEAMWorkOrderHeader> | DeferredContent;
    EAMWorkOrderOperation: Array<MyEAMWorkOrderOperation> | DeferredContent;
    EquiBOMs_Nav: Array<EquipmentBOM> | DeferredContent;
    EquipDocuments: Array<MyEquipDocument> | DeferredContent;
    EquipFormCategories_Nav: Array<ObjectFormCategory> | DeferredContent;
    EquipGeometries: Array<MyEquipGeometry> | DeferredContent;
    EquipObjectType_Nav: EquipObjectType | DeferredContent;
    EquipmentCategory_Nav: EquipmentCategory | DeferredContent;
    EquipmentLongText_Nav: Array<MyEquipLongText> | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    InspectionPoints_Nav: Array<InspectionPoint> | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    Location_Nav: Location | DeferredContent;
    MeasuringPoints: Array<MeasuringPoint> | DeferredContent;
    NotifHistory_Nav: Array<NotificationHistory> | DeferredContent;
    NotificationHeader: Array<MyNotificationHeader> | DeferredContent;
    NotificationItem: Array<MyNotificationItem> | DeferredContent;
    ObjectStatus_Nav: MyEquipObjectStatus | null | DeferredContent;
    Partners: Array<MyEquipPartner> | DeferredContent;
    RelatedWOHistory: Array<WorkOrderHistory> | DeferredContent;
    RouteStops: Array<MyRouteStop> | DeferredContent;
    RouteTechObjects: Array<MyTechObject> | DeferredContent;
    S4ConfirmationRefObjHistory_Nav: Array<S4ServiceConfirmationRefObjHistory> | DeferredContent;
    S4OrderRefObjHistory_Nav: Array<S4ServiceOrderRefObjHistory> | DeferredContent;
    S4QuotRefObjHistory_Nav: Array<S4ServiceQuotationRefObjHistory> | DeferredContent;
    S4QuotRefObj_Nav: Array<S4ServiceQuotationRefObj> | DeferredContent;
    S4RefObject_Nav: Array<S4ServiceOrderRefObj> | DeferredContent;
    S4RequestRefObjHistory_Nav: Array<S4ServiceRequestRefObjHistory> | DeferredContent;
    S4RequestRefObj_Nav: Array<S4ServiceRequestRefObj> | DeferredContent;
    S4ServiceConfirmationRefObj_Nav: Array<S4ServiceConfirmationRefObj> | DeferredContent;
    SerialNumber: MyEquipSerialNumber | null | DeferredContent;
    SystemStatuses_Nav: Array<MyEquipSystemStatus> | DeferredContent;
    UserStatuses_Nav: Array<MyEquipUserStatus> | DeferredContent;
    WCMApplications_Nav: Array<WCMApplication> | DeferredContent;
    WCMApprovals_Nav: Array<WCMApproval> | DeferredContent;
    WCMDocumentHeaders_Nav: Array<WCMDocumentHeader> | DeferredContent;
    WCMDocumentItem_Nav: Array<WCMDocumentItem> | DeferredContent;
    WCMObjectList_Nav: Array<WCMObjectList> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    Warranties: Array<MyEquipWarranty> | DeferredContent;
    WorkCenter_Main_Nav: WorkCenter | DeferredContent;
    WorkCenter_Nav: WorkCenter | DeferredContent;
    WorkOrderHeader: Array<MyWorkOrderHeader> | DeferredContent;
    WorkOrderOperation: Array<MyWorkOrderOperation> | DeferredContent;
    WorkOrderSubOperation: Array<MyWorkOrderSubOperation> | DeferredContent;
    WorkOrderTool: Array<MyWorkOrderTool> | DeferredContent;
}

type MyEquipmentId = string | {EquipId: string};

interface EditableMyEquipment extends Pick<MyEquipment, "Size" | "Weight" | "ConstYear" | "ConstMonth" | "CopyDocuments" | "CopyPartners" | "CopyMeasuringPoints" | "CopyInstallLocation" | "CopyNote" | "UpdateEquip" | "CopyClassification" | "CopyClassificationValues" | "CopyEquipId" | "CRObjectType" | "LAMObjectType" | "LAMTableKey" | "LongTextIndicator" | "MaintPlant" | "PMObjectType" | "CatalogProfile" | "DismantleTime" | "InstallTime" | "PRTFlag" | "ObjectNum" | "BusinessArea" | "ConfigFlag" | "ControllingArea" | "EquipCategory" | "EquipDesc" | "EquipFlag" | "EquipType" | "ISUFlag" | "InventoryNum" | "Location" | "MaintWorkCenter" | "ManufCountry" | "ManufPartNo" | "ObjAuthGroup" | "PlannerGroup" | "PlanningPlant" | "PlantSection" | "SerialNoFlag" | "ConstType" | "BoMFlag" | "WorkCenter" | "AddressNum" | "CostCenter" | "Language" | "PrimaryLanguage" | "VendorNumber" | "TechnicalID">, Partial<Pick<MyEquipment, "StartDate" | "DismantleDate" | "DismantleFuncLocIdIntern" | "FuncLocIdIntern" | "InstallDate" | "InstallPosition" | "FuncLocId" | "ManufSerialNo" | "Manufacturer" | "ModelNum" | "Room" | "ValidDate" | "DismantleEquip" | "SuperiorEquip">> {
}

interface MyFuncLocClass {
    FuncLocIdIntern: string;
    ClassId: string;
    ClassType: string;
    ObjectKey: string;
    ObjClassFlag: string;
    InternCount: string;
    InternClassNum: string;
    ClassDefinition: ClassDefinition | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
}

type MyFuncLocClassId = {ClassType: string,ObjectKey: string,ObjClassFlag: string,InternCount: string,InternClassNum: string};

interface EditableMyFuncLocClass extends Pick<MyFuncLocClass, "FuncLocIdIntern" | "ClassId" | "ClassType" | "ObjectKey" | "ObjClassFlag" | "InternCount" | "InternClassNum"> {
}

interface MyFuncLocClassCharValue {
    CharValue: string | null;
    ValueRel: string | null;
    FuncLocIdIntern: string;
    CharValFrom: string | null;
    CharValDesc: string | null;
    CharValTo: string | null;
    ObjectKey: string;
    ObjClassFlag: string;
    InternCounter: string;
    ClassType: string;
    CharValCounter: string;
    CharId: string;
    CharValCode_Nav: CharValueCode | null | DeferredContent;
    Characteristic: Characteristic | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    LAMCharacteristicValue_Nav: Array<LAMCharacteristicValue> | DeferredContent;
}

type MyFuncLocClassCharValueId = {ObjectKey: string,ObjClassFlag: string,InternCounter: string,ClassType: string,CharValCounter: string,CharId: string};

interface EditableMyFuncLocClassCharValue extends Pick<MyFuncLocClassCharValue, "FuncLocIdIntern" | "ObjectKey" | "ObjClassFlag" | "InternCounter" | "ClassType" | "CharValCounter" | "CharId">, Partial<Pick<MyFuncLocClassCharValue, "CharValue" | "ValueRel" | "CharValFrom" | "CharValDesc" | "CharValTo">> {
}

interface MyFuncLocDocument {
    FuncLocIdIntern: string;
    DocumentID: string;
    RelationshipID: string;
    ObjectKey: string;
    Document: Document | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
}

type MyFuncLocDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableMyFuncLocDocument extends Pick<MyFuncLocDocument, "FuncLocIdIntern" | "DocumentID" | "RelationshipID" | "ObjectKey"> {
}

interface MyFuncLocGeometry {
    FuncLocIdIntern: string;
    SpacialGUId: string;
    SpacialId: string;
    ObjectKey: string;
    ObjectGroup1: string;
    ObjectGroup: string;
    ObjectType: string;
    FuncLocId: string;
    LogicalSystem: string;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    Geometry: Geometry | null | DeferredContent;
}

type MyFuncLocGeometryId = {ObjectKey: string,ObjectGroup1: string,ObjectGroup: string,ObjectType: string,LogicalSystem: string};

interface EditableMyFuncLocGeometry extends Pick<MyFuncLocGeometry, "FuncLocIdIntern" | "SpacialGUId" | "SpacialId" | "ObjectKey" | "ObjectGroup1" | "ObjectGroup" | "ObjectType" | "FuncLocId" | "LogicalSystem"> {
}

interface MyFuncLocLongText {
    FuncLocIdIntern: string;
    FuncLocId: string;
    NewTextString: string;
    TextString: string;
    ObjectKey: string;
    TextObjType: string;
    TextId: string;
    FuncLocNumber: string;
    FunctionalLocation: MyFunctionalLocation | DeferredContent;
}

type MyFuncLocLongTextId = string | {FuncLocNumber: string};

interface EditableMyFuncLocLongText extends Pick<MyFuncLocLongText, "FuncLocIdIntern" | "FuncLocId" | "NewTextString" | "TextString" | "ObjectKey" | "TextObjType" | "TextId"> {
}

interface MyFuncLocObjectStatus {
    FuncLocIdIntern: string;
    ObjectKey: string;
    Status: string;
    FunctionalLocation_Nav: MyFunctionalLocation | DeferredContent;
    SystemStatus_Nav: SystemStatus | DeferredContent;
}

type MyFuncLocObjectStatusId = string | {ObjectKey: string};

interface EditableMyFuncLocObjectStatus extends Pick<MyFuncLocObjectStatus, "FuncLocIdIntern" | "Status"> {
}

interface MyFuncLocPartner {
    PersonnelNum: string;
    ObjectNum: string;
    ObjectCategory: string;
    Counter: string;
    FuncLocIdIntern: string;
    AddressNum: string;
    BPNum: string;
    PartnerNum: string;
    PersonNum: string;
    PartnerFunction: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type MyFuncLocPartnerId = {Counter: string,FuncLocIdIntern: string,PartnerFunction: string};

interface EditableMyFuncLocPartner extends Pick<MyFuncLocPartner, "PersonnelNum" | "ObjectNum" | "ObjectCategory" | "Counter" | "FuncLocIdIntern" | "AddressNum" | "BPNum" | "PartnerNum" | "PersonNum" | "PartnerFunction"> {
}

interface MyFuncLocSystemStatus {
    SequencePriority: string;
    SequencePosition: string;
    StatusInact: string | null;
    FuncLocIdIntern: string;
    ObjectNum: string;
    Status: string;
    FunctionalLocation_Nav: MyFunctionalLocation | DeferredContent;
    SystemStatus_Nav: SystemStatus | DeferredContent;
}

type MyFuncLocSystemStatusId = {ObjectNum: string,Status: string};

interface EditableMyFuncLocSystemStatus extends Pick<MyFuncLocSystemStatus, "SequencePriority" | "SequencePosition" | "FuncLocIdIntern" | "ObjectNum" | "Status">, Partial<Pick<MyFuncLocSystemStatus, "StatusInact">> {
}

interface MyFuncLocUserStatus {
    SequencePriority: string;
    SequencePosition: string;
    StatusInact: string | null;
    FuncLocIdIntern: string;
    ObjectNum: string;
    StatusProfile: string;
    Status: string;
    StatusNum: string;
    FunctionalLocation_Nav: MyFunctionalLocation | DeferredContent;
    UserStatus_Nav: UserStatus | DeferredContent;
}

type MyFuncLocUserStatusId = {ObjectNum: string,Status: string};

interface EditableMyFuncLocUserStatus extends Pick<MyFuncLocUserStatus, "SequencePriority" | "SequencePosition" | "FuncLocIdIntern" | "ObjectNum" | "StatusProfile" | "Status" | "StatusNum">, Partial<Pick<MyFuncLocUserStatus, "StatusInact">> {
}

interface MyFunctionalLocation {
    ConstType: string;
    Location: string;
    LongTextIndicator: string;
    LAMTableKey: string;
    LAMObjectType: string;
    CopyFuncLocIdIntern: string;
    MaintWorkCenter: string;
    PMObjectType: string;
    SuperiorFuncLocInternId: string;
    AuthorizationGroup: string;
    CRObjectType: string;
    CopyMeasuringPoints: string;
    InventoryNumber: string;
    Manufacturer: string;
    ModelNumber: string;
    PartNumber: string;
    Room: string;
    Section: string;
    SerialNumber: string;
    SingleInstall: string;
    SuperiorFuncLoc: string;
    FuncLocStructInd: string;
    FuncLocLabel: string;
    RefFuncLocIdIntern: string;
    BoMFlag: string;
    ObjectNum: string;
    EquipType: string;
    FuncLocDesc: string;
    FuncLocId: string;
    FuncLocType: string;
    LocAssignment: string;
    MaintPlant: string;
    MasterLanguage: string;
    PlanningPlant: string;
    WorkCenter: string;
    BusinessArea: string;
    CatalogProfile: string;
    CompanyCode: string;
    ControllingArea: string;
    EquipAllowed: string;
    FuncLocIdIntern: string;
    AddressNum: string;
    StartDate: string | null;
    ConstYear: string;
    ConstMonth: string;
    CopyNote: string;
    CopyClassification: string;
    CopyDocuments: string;
    CopyPartners: string;
    Address: Address | DeferredContent;
    AssetCentralObjectLink_Nav: Array<AssetCentralObjectLink> | DeferredContent;
    ChecklistBusObject_Nav: Array<ChecklistBusObject> | DeferredContent;
    ClassCharValues: Array<MyFuncLocClassCharValue> | DeferredContent;
    Classes: Array<MyFuncLocClass> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    EAMChecklist_Nav: Array<EAMChecklistLink> | DeferredContent;
    EAMWorkOrderHeader: Array<MyEAMWorkOrderHeader> | DeferredContent;
    EAMWorkOrderOperation: Array<MyEAMWorkOrderOperation> | DeferredContent;
    Equipments: Array<MyEquipment> | DeferredContent;
    FLocBOMs_Nav: Array<FunctionalLocationBOM> | DeferredContent;
    FuncLocCategory_Nav: FuncLocCategory | DeferredContent;
    FuncLocDocuments: Array<MyFuncLocDocument> | DeferredContent;
    FuncLocFormCategories_Nav: Array<ObjectFormCategory> | DeferredContent;
    FuncLocGeometries: Array<MyFuncLocGeometry> | DeferredContent;
    FuncLocLongText_Nav: Array<MyFuncLocLongText> | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    InspectionPoints_Nav: Array<InspectionPoint> | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    Location_Nav: Location | DeferredContent;
    MeasuringPoints: Array<MeasuringPoint> | DeferredContent;
    NotifHistory_Nav: Array<NotificationHistory> | DeferredContent;
    NotificationHeader: Array<MyNotificationHeader> | DeferredContent;
    NotificationItem: Array<MyNotificationItem> | DeferredContent;
    ObjectStatus_Nav: MyFuncLocObjectStatus | null | DeferredContent;
    Partners: Array<MyFuncLocPartner> | DeferredContent;
    RelatedWOHistory: Array<WorkOrderHistory> | DeferredContent;
    RouteStops: Array<MyRouteStop> | DeferredContent;
    RouteTechObjects: Array<MyTechObject> | DeferredContent;
    S4ConfirmationRefObjHistory_Nav: Array<S4ServiceConfirmationRefObjHistory> | DeferredContent;
    S4OrderRefObjHistory_Nav: Array<S4ServiceOrderRefObjHistory> | DeferredContent;
    S4QuotRefObjHistory_Nav: Array<S4ServiceQuotationRefObjHistory> | DeferredContent;
    S4QuotRefObj_Nav: Array<S4ServiceQuotationRefObj> | DeferredContent;
    S4RefObject_Nav: Array<S4ServiceOrderRefObj> | DeferredContent;
    S4RequestRefObjHistory_Nav: Array<S4ServiceRequestRefObjHistory> | DeferredContent;
    S4RequestRefObj_Nav: Array<S4ServiceRequestRefObj> | DeferredContent;
    S4ServiceConfirmationRefObj_Nav: Array<S4ServiceConfirmationRefObj> | DeferredContent;
    SystemStatuses_Nav: Array<MyFuncLocSystemStatus> | DeferredContent;
    UserStatuses_Nav: Array<MyFuncLocUserStatus> | DeferredContent;
    WCMApplications_Nav: Array<WCMApplication> | DeferredContent;
    WCMApprovals_Nav: Array<WCMApproval> | DeferredContent;
    WCMDocumentHeaders_Nav: Array<WCMDocumentHeader> | DeferredContent;
    WCMDocumentItem_Nav: Array<WCMDocumentItem> | DeferredContent;
    WCMObjectList_Nav: Array<WCMObjectList> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WorkCenter_Main_Nav: WorkCenter | DeferredContent;
    WorkCenter_Nav: WorkCenter | DeferredContent;
    WorkOrderHeader: Array<MyWorkOrderHeader> | DeferredContent;
    WorkOrderOperation: Array<MyWorkOrderOperation> | DeferredContent;
    WorkOrderSubOperation: Array<MyWorkOrderSubOperation> | DeferredContent;
}

type MyFunctionalLocationId = string | {FuncLocIdIntern: string};

interface EditableMyFunctionalLocation extends Pick<MyFunctionalLocation, "ConstType" | "Location" | "LongTextIndicator" | "LAMTableKey" | "LAMObjectType" | "CopyFuncLocIdIntern" | "MaintWorkCenter" | "PMObjectType" | "SuperiorFuncLocInternId" | "AuthorizationGroup" | "CRObjectType" | "CopyMeasuringPoints" | "InventoryNumber" | "Manufacturer" | "ModelNumber" | "PartNumber" | "Room" | "Section" | "SerialNumber" | "SingleInstall" | "SuperiorFuncLoc" | "FuncLocStructInd" | "FuncLocLabel" | "RefFuncLocIdIntern" | "BoMFlag" | "ObjectNum" | "EquipType" | "FuncLocDesc" | "FuncLocId" | "FuncLocType" | "LocAssignment" | "MaintPlant" | "MasterLanguage" | "PlanningPlant" | "WorkCenter" | "BusinessArea" | "CatalogProfile" | "CompanyCode" | "ControllingArea" | "EquipAllowed" | "AddressNum" | "ConstYear" | "ConstMonth" | "CopyNote" | "CopyClassification" | "CopyDocuments" | "CopyPartners">, Partial<Pick<MyFunctionalLocation, "StartDate">> {
}

interface MyInventoryObject {
    GenericObjectId: string;
    MatDocYear: string;
    ObjectId: string;
    OrderId: string;
    ObjectDate: string | null;
    ObjectIdExtn: string;
    ObjectType: string;
    IMObject: string;
    ItemCount: string;
    InboundDelivery_Nav: InboundDelivery | null | DeferredContent;
    MaterialDocument_Nav: MaterialDocument | null | DeferredContent;
    OutboundDelivery_Nav: OutboundDelivery | null | DeferredContent;
    PhysicalInventoryDocHeader_Nav: PhysicalInventoryDocHeader | null | DeferredContent;
    ProductionOrderHeader_Nav: ProductionOrderHeader | null | DeferredContent;
    PurchaseOrderHeader_Nav: PurchaseOrderHeader | null | DeferredContent;
    PurchaseRequisitionHeader_Nav: PurchaseRequisitionHeader | null | DeferredContent;
    ReservationHeader_Nav: ReservationHeader | null | DeferredContent;
    StockTransportOrderHeader_Nav: StockTransportOrderHeader | null | DeferredContent;
}

type MyInventoryObjectId = {ObjectId: string,OrderId: string,IMObject: string};

interface EditableMyInventoryObject extends Pick<MyInventoryObject, "GenericObjectId" | "MatDocYear" | "ObjectId" | "OrderId" | "ObjectIdExtn" | "ObjectType" | "IMObject" | "ItemCount">, Partial<Pick<MyInventoryObject, "ObjectDate">> {
}

interface MyNotifActivityLongText {
    TextString: string;
    ObjectKey: string;
    TextObjType: string;
    NotificationNumber: string;
    TextId: string;
    ActivitySequenceNumber: string;
    NewTextString: string;
    NotificationActivity: MyNotificationActivity | DeferredContent;
}

type MyNotifActivityLongTextId = {NotificationNumber: string,ActivitySequenceNumber: string};

interface EditableMyNotifActivityLongText extends Pick<MyNotifActivityLongText, "TextString" | "ObjectKey" | "TextObjType" | "NotificationNumber" | "TextId" | "ActivitySequenceNumber" | "NewTextString"> {
}

interface MyNotifDocument {
    NotificationNumber: string;
    DocumentID: string;
    RelationshipID: string;
    ObjectKey: string;
    Document: Document | null | DeferredContent;
    NotifHeader: MyNotificationHeader | null | DeferredContent;
}

type MyNotifDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableMyNotifDocument extends Pick<MyNotifDocument, "NotificationNumber" | "DocumentID" | "RelationshipID" | "ObjectKey"> {
}

interface MyNotifGeometry {
    SpacialGUId: string;
    SpacialId: string;
    ObjectType: string;
    ObjectKey: string;
    ObjectGroup1: string;
    ObjectGroup: string;
    NotificationNumber: string;
    LogicalSystem: string;
    Geometry: Geometry | null | DeferredContent;
    NotifHeader: MyNotificationHeader | null | DeferredContent;
}

type MyNotifGeometryId = {ObjectType: string,ObjectKey: string,ObjectGroup1: string,ObjectGroup: string,LogicalSystem: string};

interface EditableMyNotifGeometry extends Pick<MyNotifGeometry, "SpacialGUId" | "SpacialId" | "ObjectType" | "ObjectKey" | "ObjectGroup1" | "ObjectGroup" | "NotificationNumber" | "LogicalSystem"> {
}

interface MyNotifHeaderLongText {
    NewTextString: string;
    TextString: string;
    ObjectKey: string;
    TextObjType: string;
    NotificationNumber: string;
    TextId: string;
    Notification: MyNotificationHeader | DeferredContent;
}

type MyNotifHeaderLongTextId = string | {NotificationNumber: string};

interface EditableMyNotifHeaderLongText extends Pick<MyNotifHeaderLongText, "NewTextString" | "TextString" | "ObjectKey" | "TextObjType" | "TextId"> {
}

interface MyNotifItemActivityLongText {
    ActivitySequenceNumber: string;
    TextId: string;
    NewTextString: string;
    TextString: string;
    ItemNumber: string;
    ObjectKey: string;
    TextObjType: string;
    NotificationNumber: string;
    NotificationItemActivity: MyNotificationItemActivity | DeferredContent;
}

type MyNotifItemActivityLongTextId = {ActivitySequenceNumber: string,ItemNumber: string,NotificationNumber: string};

interface EditableMyNotifItemActivityLongText extends Pick<MyNotifItemActivityLongText, "ActivitySequenceNumber" | "TextId" | "NewTextString" | "TextString" | "ItemNumber" | "ObjectKey" | "TextObjType" | "NotificationNumber"> {
}

interface MyNotifItemCauseLongText {
    ItemNumber: string;
    CauseSequenceNumber: string;
    TextId: string;
    NotificationNumber: string;
    TextObjType: string;
    ObjectKey: string;
    TextString: string;
    NewTextString: string;
    NotificationItemCause: MyNotificationItemCause | DeferredContent;
}

type MyNotifItemCauseLongTextId = {ItemNumber: string,CauseSequenceNumber: string,NotificationNumber: string};

interface EditableMyNotifItemCauseLongText extends Pick<MyNotifItemCauseLongText, "ItemNumber" | "CauseSequenceNumber" | "TextId" | "NotificationNumber" | "TextObjType" | "ObjectKey" | "TextString" | "NewTextString"> {
}

interface MyNotifItemLongText {
    ObjectKey: string;
    TextObjType: string;
    NotificationNumber: string;
    TextId: string;
    ItemNumber: string;
    NewTextString: string;
    TextString: string;
    NotificationItem: MyNotificationItem | DeferredContent;
}

type MyNotifItemLongTextId = {NotificationNumber: string,ItemNumber: string};

interface EditableMyNotifItemLongText extends Pick<MyNotifItemLongText, "ObjectKey" | "TextObjType" | "NotificationNumber" | "TextId" | "ItemNumber" | "NewTextString" | "TextString"> {
}

interface MyNotifItemTaskLongText {
    NewTextString: string;
    TextString: string;
    ItemNumber: string;
    ObjectKey: string;
    TextObjType: string;
    NotificationNumber: string;
    TextId: string;
    TaskSequenceNumber: string;
    NotificationItemTask: MyNotificationItemTask | DeferredContent;
}

type MyNotifItemTaskLongTextId = {ItemNumber: string,NotificationNumber: string,TaskSequenceNumber: string};

interface EditableMyNotifItemTaskLongText extends Pick<MyNotifItemTaskLongText, "NewTextString" | "TextString" | "ItemNumber" | "ObjectKey" | "TextObjType" | "NotificationNumber" | "TextId" | "TaskSequenceNumber"> {
}

interface MyNotifTaskLongText {
    NewTextString: string;
    TextString: string;
    TextObjType: string;
    ObjectKey: string;
    NotificationNumber: string;
    TextId: string;
    TaskSequenceNumber: string;
    NotificationTask: MyNotificationTask | DeferredContent;
}

type MyNotifTaskLongTextId = {NotificationNumber: string,TaskSequenceNumber: string};

interface EditableMyNotifTaskLongText extends Pick<MyNotifTaskLongText, "NewTextString" | "TextString" | "TextObjType" | "ObjectKey" | "NotificationNumber" | "TextId" | "TaskSequenceNumber"> {
}

interface MyNotificationActivity {
    NotificationNumber: string;
    LongTextFlag: string;
    PlannedFinishDate: string | null;
    PlannedFinishTime: string;
    PlannedStartDate: string | null;
    PlannedStartTime: string;
    QuantityFactor: string;
    Version: string;
    ActivityCatalogType: string;
    ActivityCode: string;
    ActivityCodeGroup: string;
    ActivitySortNumber: string;
    ActivityText: string;
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    Deleted: string;
    Language: string;
    ActivitySequenceNumber: string;
    ActivityLongText: Array<MyNotifActivityLongText> | DeferredContent;
    Notification: MyNotificationHeader | DeferredContent;
}

type MyNotificationActivityId = {NotificationNumber: string,ActivitySequenceNumber: string};

interface EditableMyNotificationActivity extends Pick<MyNotificationActivity, "NotificationNumber" | "LongTextFlag" | "PlannedFinishTime" | "PlannedStartTime" | "QuantityFactor" | "Version" | "ActivityCatalogType" | "ActivityCode" | "ActivityCodeGroup" | "ActivitySortNumber" | "ActivityText" | "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "Deleted" | "Language" | "ActivitySequenceNumber">, Partial<Pick<MyNotificationActivity, "PlannedFinishDate" | "PlannedStartDate" | "ChangedDate" | "CreationDate">> {
}

interface MyNotificationHeader {
    UTCSign: string;
    UTCDifference: string | null;
    DSTDifference: string | null;
    RequiredStartTime: string | null;
    RequiredEndTime: string | null;
    NotifTimeZone: string;
    MainWorkCenterPlant: string;
    MaintenancePlant: string;
    NotificationDescription: string;
    NotificationType: string;
    OrderCurrency: string;
    PlanningGroup: string;
    PlanningPlant: string;
    Priority: string;
    BusinessArea: string;
    ControllingArea: string;
    CreationDate: string | null;
    CreationTime: string;
    DateForCompletion: string | null;
    SortField: string;
    HeaderFunctionLocation: string | null;
    OrderId: string;
    HeaderEquipment: string | null;
    NotificationNumber: string;
    AddressNum: string;
    Assembly: string;
    ReferenceNumber: string;
    DetectionCode: string;
    DetectionCatalog: string;
    Phase: string;
    LAMTableKey: string;
    LAMObjectType: string;
    MalfunctionStartDate: string | null;
    MalfunctionStartTime: string | null;
    RequiredEndDate: string | null;
    RequiredStartDate: string | null;
    ObjectNumber: string;
    LastChangeTime: string;
    MainWorkCenter: string;
    NotifProcessingContext: string;
    RefObjectKey: string;
    BreakdownIndicator: boolean;
    QMCodeGroup: string;
    QMCode: string;
    QMCatalog: string;
    ExternalWorkCenterId: string;
    RefObjectType: string;
    ReportedBy: string;
    MalfunctionEndDate: string | null;
    MalfunctionEndTime: string | null;
    PriorityType: string;
    ObjectKey: string;
    InspectionLot: string;
    Subphase: string;
    Effect: string;
    DetectionCodeGroup: string;
    Activities: Array<MyNotificationActivity> | DeferredContent;
    Address: Address | DeferredContent;
    Assembly_Nav: Material | null | DeferredContent;
    DigitalSignLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    EAMChecklist_Nav: EAMChecklistLink | null | DeferredContent;
    EAMWorkOrderOperation: MyEAMWorkOrderOperation | null | DeferredContent;
    Effect_Nav: Effect | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    HeaderLongText: Array<MyNotifHeaderLongText> | DeferredContent;
    InspectionLot_Nav: InspectionLot | null | DeferredContent;
    Items: Array<MyNotificationItem> | DeferredContent;
    LAMObjectDatum_Nav: Array<LAMObjectDatum> | DeferredContent;
    NotifDocuments: Array<MyNotifDocument> | DeferredContent;
    NotifGeometries: Array<MyNotifGeometry> | DeferredContent;
    NotifHistory_Nav: Array<NotificationHistory> | DeferredContent;
    NotifMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    NotifPriority: Priority | null | DeferredContent;
    NotificationProcessingContext_Nav: NotificationProcessingContext | null | DeferredContent;
    Partners: Array<MyNotificationPartner> | DeferredContent;
    RelatedWO_Nav: Array<WorkOrderHistory> | DeferredContent;
    Sales_Nav: MyNotificationSales | null | DeferredContent;
    Tasks: Array<MyNotificationTask> | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    WOSubOperation_Nav: MyWorkOrderSubOperation | null | DeferredContent;
    WorkOrder: MyWorkOrderHeader | null | DeferredContent;
    WorkRequestConsequence_Nav: Array<WorkRequestConsequence> | DeferredContent;
}

type MyNotificationHeaderId = string | {NotificationNumber: string};

interface EditableMyNotificationHeader extends Pick<MyNotificationHeader, "UTCSign" | "NotifTimeZone" | "MainWorkCenterPlant" | "MaintenancePlant" | "NotificationDescription" | "NotificationType" | "OrderCurrency" | "PlanningGroup" | "PlanningPlant" | "Priority" | "BusinessArea" | "ControllingArea" | "CreationTime" | "SortField" | "OrderId" | "AddressNum" | "Assembly" | "ReferenceNumber" | "DetectionCode" | "DetectionCatalog" | "Phase" | "LAMTableKey" | "LAMObjectType" | "ObjectNumber" | "LastChangeTime" | "MainWorkCenter" | "NotifProcessingContext" | "RefObjectKey" | "BreakdownIndicator" | "QMCodeGroup" | "QMCode" | "QMCatalog" | "ExternalWorkCenterId" | "RefObjectType" | "ReportedBy" | "PriorityType" | "ObjectKey" | "InspectionLot" | "Subphase" | "Effect" | "DetectionCodeGroup">, Partial<Pick<MyNotificationHeader, "UTCDifference" | "DSTDifference" | "RequiredStartTime" | "RequiredEndTime" | "CreationDate" | "DateForCompletion" | "HeaderFunctionLocation" | "HeaderEquipment" | "MalfunctionStartDate" | "MalfunctionStartTime" | "RequiredEndDate" | "RequiredStartDate" | "MalfunctionEndDate" | "MalfunctionEndTime">> {
}

interface MyNotificationItem {
    OrderId: string;
    NotificationNumber: string;
    MaterialNumber: string;
    OperationNo: string;
    Assembly: string;
    DefectValuationUnit: string;
    Version: string;
    LAMObjectType: string;
    LAMTableKey: string;
    DefectClass: string;
    DefectType: string;
    InspectionChar: string;
    InspectionLot: string;
    InspectionNode: string;
    InspectionSample: string;
    ItemFuncLocExtern: string;
    ReportType: string;
    WorkCenterPlant: string;
    MaintenancePlant: string;
    ChangedDate: string | null;
    ChangedBy: string;
    ChangedTime: string;
    CodeGroup: string;
    CreatedBy: string;
    ActivityType: string;
    ItemNumber: string;
    CreationDate: string | null;
    CreationTime: string;
    DamageCode: string;
    Deleted: string;
    ItemFunctionLocation: string;
    ItemSortNumber: string;
    ItemText: string;
    Language: string;
    LongTextFlag: string;
    MainWorkCenter: string;
    NumDefects: string;
    ObjectPart: string;
    ObjectPartCatalogType: string;
    ObjectPartCodeGroup: string;
    ObjectType: string;
    ItemEquipment: string;
    DefectClass_Nav: DefectClass | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    InspectionChar_Nav: InspectionCharacteristic | null | DeferredContent;
    InspectionPoint_Nav: InspectionPoint | null | DeferredContent;
    ItemActivities: Array<MyNotificationItemActivity> | DeferredContent;
    ItemCauses: Array<MyNotificationItemCause> | DeferredContent;
    ItemLongText: Array<MyNotifItemLongText> | DeferredContent;
    ItemTasks: Array<MyNotificationItemTask> | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    Notification: MyNotificationHeader | DeferredContent;
}

type MyNotificationItemId = {NotificationNumber: string,ItemNumber: string};

interface EditableMyNotificationItem extends Pick<MyNotificationItem, "OrderId" | "NotificationNumber" | "MaterialNumber" | "OperationNo" | "Assembly" | "DefectValuationUnit" | "Version" | "LAMObjectType" | "LAMTableKey" | "DefectClass" | "DefectType" | "InspectionChar" | "InspectionLot" | "InspectionNode" | "InspectionSample" | "ItemFuncLocExtern" | "ReportType" | "WorkCenterPlant" | "MaintenancePlant" | "ChangedBy" | "ChangedTime" | "CodeGroup" | "CreatedBy" | "ActivityType" | "ItemNumber" | "CreationTime" | "DamageCode" | "Deleted" | "ItemFunctionLocation" | "ItemSortNumber" | "ItemText" | "Language" | "LongTextFlag" | "MainWorkCenter" | "NumDefects" | "ObjectPart" | "ObjectPartCatalogType" | "ObjectPartCodeGroup" | "ObjectType" | "ItemEquipment">, Partial<Pick<MyNotificationItem, "ChangedDate" | "CreationDate">> {
}

interface MyNotificationItemActivity {
    ItemSortNumber: string;
    NotificationNumber: string;
    ActivitySortNumber: string;
    CreationDate: string | null;
    ChangedDate: string | null;
    PlannedStartDate: string | null;
    PlannedFinishDate: string | null;
    ItemNumber: string;
    ActivitySequenceNumber: string;
    Deleted: string;
    ChangedBy: string;
    CreatedBy: string;
    CauseSequenceNumber: string;
    QuantityFactor: string;
    Version: string;
    ActivityCatalogType: string;
    ActivityCodeGroup: string;
    ActivityCode: string;
    LongTextFlag: string;
    Language: string;
    ActivityText: string;
    ChangedTime: string;
    CreationTime: string;
    PlannedFinishTime: string;
    PlannedStartTime: string;
    Item: MyNotificationItem | DeferredContent;
    ItemActivityLongText: Array<MyNotifItemActivityLongText> | DeferredContent;
}

type MyNotificationItemActivityId = {NotificationNumber: string,ItemNumber: string,ActivitySequenceNumber: string};

interface EditableMyNotificationItemActivity extends Pick<MyNotificationItemActivity, "ItemSortNumber" | "NotificationNumber" | "ActivitySortNumber" | "ItemNumber" | "ActivitySequenceNumber" | "Deleted" | "ChangedBy" | "CreatedBy" | "CauseSequenceNumber" | "QuantityFactor" | "Version" | "ActivityCatalogType" | "ActivityCodeGroup" | "ActivityCode" | "LongTextFlag" | "Language" | "ActivityText" | "ChangedTime" | "CreationTime" | "PlannedFinishTime" | "PlannedStartTime">, Partial<Pick<MyNotificationItemActivity, "CreationDate" | "ChangedDate" | "PlannedStartDate" | "PlannedFinishDate">> {
}

interface MyNotificationItemCause {
    CauseSortNumber: string;
    ItemSortNumber: string;
    NotificationNumber: string;
    CauseSequenceNumber: string;
    ItemNumber: string;
    CauseCatalogType: string;
    CauseCode: string;
    CauseCodeGroup: string;
    CauseText: string;
    ChangedBy: string;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    Language: string;
    LongTextFlag: string;
    PartyRespCodeGroup: string;
    Quantity: string;
    ChangedDate: string | null;
    Item: MyNotificationItem | DeferredContent;
    ItemCauseLongText: Array<MyNotifItemCauseLongText> | DeferredContent;
}

type MyNotificationItemCauseId = {NotificationNumber: string,CauseSequenceNumber: string,ItemNumber: string};

interface EditableMyNotificationItemCause extends Pick<MyNotificationItemCause, "CauseSortNumber" | "ItemSortNumber" | "NotificationNumber" | "CauseSequenceNumber" | "ItemNumber" | "CauseCatalogType" | "CauseCode" | "CauseCodeGroup" | "CauseText" | "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "Language" | "LongTextFlag" | "PartyRespCodeGroup" | "Quantity">, Partial<Pick<MyNotificationItemCause, "CreationDate" | "ChangedDate">> {
}

interface MyNotificationItemTask {
    ResponsiblePartner: string;
    ItemSortNumber: string;
    ObjectKey: string;
    ObjectNumber: string;
    KeysForFunction: string;
    Language: string;
    LongTextFlag: string;
    PlannedFinishDate: string | null;
    PlannedFinishTime: string;
    PlannedStartDate: string | null;
    PlannedStartTime: string;
    Quantity: string;
    TaskCatalogType: string;
    TaskCode: string;
    TaskCodeGroup: string;
    TaskSortNumber: string;
    TaskText: string;
    Template: string;
    ItemNumber: string;
    TaskSequenceNumber: string;
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    Deleted: string;
    GlobalIdentifier: string;
    NotificationNumber: string;
    RespPartnerFunction: string;
    UnitOfMeasure: string;
    Item: MyNotificationItem | DeferredContent;
    ItemTaskLongText: Array<MyNotifItemTaskLongText> | DeferredContent;
    ItemTaskMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
}

type MyNotificationItemTaskId = {ItemNumber: string,TaskSequenceNumber: string,NotificationNumber: string};

interface EditableMyNotificationItemTask extends Pick<MyNotificationItemTask, "ResponsiblePartner" | "ItemSortNumber" | "ObjectKey" | "ObjectNumber" | "KeysForFunction" | "Language" | "LongTextFlag" | "PlannedFinishTime" | "PlannedStartTime" | "Quantity" | "TaskCatalogType" | "TaskCode" | "TaskCodeGroup" | "TaskSortNumber" | "TaskText" | "Template" | "ItemNumber" | "TaskSequenceNumber" | "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "Deleted" | "GlobalIdentifier" | "NotificationNumber" | "RespPartnerFunction" | "UnitOfMeasure">, Partial<Pick<MyNotificationItemTask, "PlannedFinishDate" | "PlannedStartDate" | "ChangedDate" | "CreationDate">> {
}

interface MyNotificationPartner {
    Counter: string;
    PartnerFunction: string;
    AddressNum: string | null;
    ObjectCategory: string;
    NotificationNumber: string;
    BPNum: string;
    OldPartner: string;
    PartnerNum: string;
    PersonNum: string | null;
    OneTimeAddress: string;
    PersonnelNum: string;
    ObjectNum: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    Notification: MyNotificationHeader | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type MyNotificationPartnerId = {Counter: string,PartnerFunction: string,NotificationNumber: string};

interface EditableMyNotificationPartner extends Pick<MyNotificationPartner, "Counter" | "PartnerFunction" | "ObjectCategory" | "NotificationNumber" | "BPNum" | "OldPartner" | "PartnerNum" | "OneTimeAddress" | "PersonnelNum" | "ObjectNum">, Partial<Pick<MyNotificationPartner, "AddressNum" | "PersonNum">> {
}

interface MyNotificationSales {
    ContractItemNum: string;
    Division: string;
    DistributionChannel: string;
    SalesOrg: string;
    CustomerReference: string;
    ContractDesc: string;
    ContractDateFrom: string | null;
    ContractDateTo: string | null;
    CustomerReferenceDate: string | null;
    NotificationNumber: string;
    Customer: string;
    ServiceContract: string;
    Customer_Nav: Customer | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | DeferredContent;
}

type MyNotificationSalesId = string | {NotificationNumber: string};

interface EditableMyNotificationSales extends Pick<MyNotificationSales, "ContractItemNum" | "Division" | "DistributionChannel" | "SalesOrg" | "CustomerReference" | "ContractDesc" | "Customer" | "ServiceContract">, Partial<Pick<MyNotificationSales, "ContractDateFrom" | "ContractDateTo" | "CustomerReferenceDate">> {
}

interface MyNotificationTask {
    ObjectKey: string;
    ObjectNumber: string;
    Template: string;
    TaskSequenceNumber: string;
    ChangedBy: string;
    ChangedDate: string | null;
    ChangedTime: string;
    CreatedBy: string;
    CreationDate: string | null;
    CreationTime: string;
    Deleted: string;
    GlobalIdentifier: string;
    KeysForFunction: string;
    Language: string;
    LongTextFlag: string;
    PlannedFinishDate: string | null;
    PlannedFinishTime: string;
    PlannedStartDate: string | null;
    PlannedStartTime: string;
    Quantity: string;
    TaskCatalogType: string;
    TaskCode: string;
    TaskCodeGroup: string;
    TaskSortNumber: string;
    TaskText: string;
    NotificationNumber: string;
    UnitOfMeasure: string;
    RespPartnerFunction: string;
    ResponsiblePartner: string;
    Notification: MyNotificationHeader | null | DeferredContent;
    TaskLongText: Array<MyNotifTaskLongText> | DeferredContent;
    TaskMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
}

type MyNotificationTaskId = {TaskSequenceNumber: string,NotificationNumber: string};

interface EditableMyNotificationTask extends Pick<MyNotificationTask, "ObjectKey" | "ObjectNumber" | "Template" | "TaskSequenceNumber" | "ChangedBy" | "ChangedTime" | "CreatedBy" | "CreationTime" | "Deleted" | "GlobalIdentifier" | "KeysForFunction" | "Language" | "LongTextFlag" | "PlannedFinishTime" | "PlannedStartTime" | "Quantity" | "TaskCatalogType" | "TaskCode" | "TaskCodeGroup" | "TaskSortNumber" | "TaskText" | "NotificationNumber" | "UnitOfMeasure" | "RespPartnerFunction" | "ResponsiblePartner">, Partial<Pick<MyNotificationTask, "ChangedDate" | "CreationDate" | "PlannedFinishDate" | "PlannedStartDate">> {
}

interface MyRoute {
    Description: string;
    Status: string;
    RouteID: string;
    ReferenceType: string;
    ReferenceID: string;
    Stops: Array<MyRouteStop> | DeferredContent;
    WorkOrder: MyWorkOrderHeader | null | DeferredContent;
}

type MyRouteId = string | {RouteID: string};

interface EditableMyRoute extends Pick<MyRoute, "Description" | "Status" | "ReferenceType" | "ReferenceID"> {
}

interface MyRoutePoint {
    RouteID: string;
    PRTPoint: string;
    SequenceNum: string;
    Obligated: string;
    StopID: string;
    Equipment: string;
    FuncLocID: string;
    Point: string;
    MeasuringPoint: MeasuringPoint | DeferredContent;
    Stops: MyRouteStop | null | DeferredContent;
    TechObject: MyTechObject | null | DeferredContent;
}

type MyRoutePointId = {RouteID: string,StopID: string,Point: string};

interface EditableMyRoutePoint extends Pick<MyRoutePoint, "RouteID" | "PRTPoint" | "SequenceNum" | "Obligated" | "StopID" | "Equipment" | "FuncLocID" | "Point"> {
}

interface MyRouteStop {
    Description: string;
    Status: string;
    RouteID: string;
    StopLocation: string;
    StopID: string;
    AddressNum: string;
    Address: Address | null | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FuncLoc: MyFunctionalLocation | null | DeferredContent;
    Operation: MyWorkOrderOperation | null | DeferredContent;
    Points: Array<MyRoutePoint> | DeferredContent;
    Route: MyRoute | null | DeferredContent;
    TechObjects: Array<MyTechObject> | DeferredContent;
}

type MyRouteStopId = {RouteID: string,StopID: string};

interface EditableMyRouteStop extends Pick<MyRouteStop, "Description" | "Status" | "RouteID" | "StopLocation" | "StopID" | "AddressNum"> {
}

interface MyTechObject {
    FuncLocID: string;
    RouteID: string;
    StopID: string;
    EquipDesc: string;
    FuncLocDesc: string;
    Equipment: string;
    Equip: MyEquipment | null | DeferredContent;
    FuncLoc: MyFunctionalLocation | null | DeferredContent;
    Operation: MyWorkOrderOperation | null | DeferredContent;
    Points: Array<MyRoutePoint> | DeferredContent;
    Stops: MyRouteStop | null | DeferredContent;
}

type MyTechObjectId = {FuncLocID: string,RouteID: string,StopID: string,Equipment: string};

interface EditableMyTechObject extends Pick<MyTechObject, "FuncLocID" | "RouteID" | "StopID" | "EquipDesc" | "FuncLocDesc" | "Equipment"> {
}

interface MyWorkOrderComponent {
    StorageBin: string;
    DebitCreditIndicator: string;
    MovementType: string;
    QuantityUnE: string;
    UnitOfEntry: string;
    BackFlushIndicator: string;
    RequirementUOM: string;
    MaterialNum: string;
    OperationNo: string;
    OrderId: string;
    RequirementQuantity: string;
    RequirementNumber: string;
    RecordType: string;
    ItemCategory: string;
    ItemNumber: string;
    StorageLocation: string;
    Plant: string;
    SerialNoProfile: string;
    TextTypeDesc: string;
    WithdrawnQuantity: string;
    WithdrawnQuantityOrig: string;
    OperationDesc: string;
    ItemCategoryDesc: string;
    ComponentDesc: string;
    Batch: string;
    CommittedQuantity: string;
    ComponentLongText: Array<MyWorkOrderComponentLongText> | DeferredContent;
    ItemCategory_Nav: ItemCategory | null | DeferredContent;
    Material: Material | DeferredContent;
    MaterialBatch_Nav: MaterialBatch | null | DeferredContent;
    MaterialDoc: Array<MyWorkOrderComponentMatDoc> | DeferredContent;
    WOHeader: MyWorkOrderHeader | null | DeferredContent;
    WOOperation: MyWorkOrderOperation | null | DeferredContent;
}

type MyWorkOrderComponentId = {OperationNo: string,OrderId: string,ItemNumber: string};

interface EditableMyWorkOrderComponent extends Pick<MyWorkOrderComponent, "StorageBin" | "DebitCreditIndicator" | "MovementType" | "QuantityUnE" | "UnitOfEntry" | "BackFlushIndicator" | "RequirementUOM" | "MaterialNum" | "OperationNo" | "OrderId" | "RequirementQuantity" | "RequirementNumber" | "RecordType" | "ItemCategory" | "ItemNumber" | "StorageLocation" | "Plant" | "SerialNoProfile" | "TextTypeDesc" | "WithdrawnQuantity" | "WithdrawnQuantityOrig" | "OperationDesc" | "ItemCategoryDesc" | "ComponentDesc" | "Batch" | "CommittedQuantity"> {
}

interface MyWorkOrderComponentLongText {
    NewTextString: string;
    TextString: string;
    ObjectKey: string;
    TextId: string;
    TextObjType: string;
    ItemNumber: string;
    OperationNo: string;
    OrderId: string;
    RecordType: string;
    RequirementNumber: string;
    WorkOrderComponent: MyWorkOrderComponent | DeferredContent;
}

type MyWorkOrderComponentLongTextId = {ItemNumber: string,OperationNo: string,OrderId: string,RecordType: string};

interface EditableMyWorkOrderComponentLongText extends Pick<MyWorkOrderComponentLongText, "NewTextString" | "TextString" | "ObjectKey" | "TextId" | "TextObjType" | "ItemNumber" | "OperationNo" | "OrderId" | "RecordType" | "RequirementNumber"> {
}

interface MyWorkOrderComponentMatDoc {
    MatDocItem: string;
    ItemNumber: string | null;
    OrderId: string | null;
    OperationNo: string | null;
    MaterialDocYear: string;
    MaterialDocNumber: string;
    RecordType: string | null;
    MaterialDocItem: MaterialDocItem | DeferredContent;
    WorkOrderComponent: MyWorkOrderComponent | DeferredContent;
}

type MyWorkOrderComponentMatDocId = {MatDocItem: string,MaterialDocYear: string,MaterialDocNumber: string};

interface EditableMyWorkOrderComponentMatDoc extends Pick<MyWorkOrderComponentMatDoc, "MatDocItem" | "MaterialDocYear" | "MaterialDocNumber">, Partial<Pick<MyWorkOrderComponentMatDoc, "ItemNumber" | "OrderId" | "OperationNo" | "RecordType">> {
}

interface MyWorkOrderDocument {
    RelationshipID: string;
    DocumentID: string;
    OrderId: string;
    ObjectKey: string;
    OperationNo: string;
    Document: Document | null | DeferredContent;
    WOHeader: MyWorkOrderHeader | null | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type MyWorkOrderDocumentId = {RelationshipID: string,ObjectKey: string};

interface EditableMyWorkOrderDocument extends Pick<MyWorkOrderDocument, "RelationshipID" | "DocumentID" | "OrderId" | "ObjectKey" | "OperationNo"> {
}

interface MyWorkOrderGeometry {
    ObjectKey: string;
    SpacialId: string;
    OrderId: string;
    ObjectType: string;
    ObjectGroup1: string;
    ObjectGroup: string;
    SpacialGUId: string;
    LogicalSystem: string;
    Geometry: Geometry | null | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
}

type MyWorkOrderGeometryId = {ObjectKey: string,ObjectType: string,ObjectGroup1: string,ObjectGroup: string,LogicalSystem: string};

interface EditableMyWorkOrderGeometry extends Pick<MyWorkOrderGeometry, "ObjectKey" | "SpacialId" | "OrderId" | "ObjectType" | "ObjectGroup1" | "ObjectGroup" | "SpacialGUId" | "LogicalSystem"> {
}

interface MyWorkOrderHeader {
    RequestStartTime: string | null;
    RequestEndTime: string | null;
    ControllingArea: string;
    CreationDate: string | null;
    CreationTime: string;
    HeaderFunctionLocation: string | null;
    LastChangeTime: string | null;
    MainWorkCenter: string;
    OrderId: string;
    HeaderEquipment: string | null;
    NotificationNumber: string;
    AddressNum: string;
    ReferenceOrder: string;
    Assembly: string;
    CostCenter: string;
    OrderType: string;
    PlanningPlant: string;
    Priority: string;
    BusinessArea: string;
    ScheduledStartTime: string | null;
    ScheduledEndTime: string | null;
    ObjectNumber: string;
    Phase: string;
    Subphase: string;
    LAMObjectType: string;
    LAMTableKey: string;
    ScheduledEndDate: string | null;
    OrderProcessingContext: string;
    ScheduledStartDate: string | null;
    PlannerGroup: string;
    PriorityType: string;
    WorkCenterInternalId: string;
    AccountingIndicator: string;
    RequestStartDate: string | null;
    DueDate: string | null;
    ObjectKey: string;
    MaintenancePlant: string;
    MainWorkCenterPlant: string;
    MaintenanceActivityType: string;
    ObjectType: string;
    OrderCategory: string;
    OrderCurrency: string;
    OrderDescription: string;
    Address: Address | DeferredContent;
    Assembly_nav: Material | null | DeferredContent;
    Components: Array<MyWorkOrderComponent> | DeferredContent;
    Confirmations: Array<Confirmation> | DeferredContent;
    DigitalSignatureLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    EAMChecklist_Nav: Array<EAMChecklistLink> | DeferredContent;
    Equipment: MyEquipment | null | DeferredContent;
    FunctionalLocation: MyFunctionalLocation | null | DeferredContent;
    Geometry_Nav: Array<Geometry> | DeferredContent;
    HeaderLongText: Array<MyWorkOrderHeaderLongText> | DeferredContent;
    InspectionLot_Nav: Array<InspectionLot> | DeferredContent;
    LAMObjectDatum_Nav: Array<LAMObjectDatum> | DeferredContent;
    MarkedJob: MarkedJob | null | DeferredContent;
    MaterialDocItem: Array<MaterialDocItem> | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    Notification: MyNotificationHeader | null | DeferredContent;
    Operations: Array<MyWorkOrderOperation> | DeferredContent;
    OrderMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    OrderType_Nav: OrderType | null | DeferredContent;
    PMMobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    PhaseControl_Nav: Array<WorkOrderPhaseControl> | DeferredContent;
    RelatedNotif_Nav: Array<NotificationHistory> | DeferredContent;
    RelatedWOHistory: Array<WorkOrderHistory> | DeferredContent;
    Route: Array<MyRoute> | DeferredContent;
    UserTimeEntry_Nav: Array<UserTimeEntry> | DeferredContent;
    WCMApplications_Nav: Array<WCMApplicationOrder> | DeferredContent;
    WCMApprovals_Nav: WCMApprovalOrder | null | DeferredContent;
    WOCatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    WODocuments: Array<MyWorkOrderDocument> | DeferredContent;
    WOGeometries: Array<MyWorkOrderGeometry> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOPartners: Array<MyWorkOrderPartner> | DeferredContent;
    WOPriority: Priority | null | DeferredContent;
    WOSales_Nav: MyWorkOrderSales | null | DeferredContent;
    WOTransfer: Array<WorkOrderTransfer> | DeferredContent;
}

type MyWorkOrderHeaderId = string | {OrderId: string};

interface EditableMyWorkOrderHeader extends Pick<MyWorkOrderHeader, "ControllingArea" | "CreationTime" | "MainWorkCenter" | "NotificationNumber" | "AddressNum" | "ReferenceOrder" | "Assembly" | "CostCenter" | "OrderType" | "PlanningPlant" | "Priority" | "BusinessArea" | "ObjectNumber" | "Phase" | "Subphase" | "LAMObjectType" | "LAMTableKey" | "OrderProcessingContext" | "PlannerGroup" | "PriorityType" | "WorkCenterInternalId" | "AccountingIndicator" | "ObjectKey" | "MaintenancePlant" | "MainWorkCenterPlant" | "MaintenanceActivityType" | "ObjectType" | "OrderCategory" | "OrderCurrency" | "OrderDescription">, Partial<Pick<MyWorkOrderHeader, "RequestStartTime" | "RequestEndTime" | "CreationDate" | "HeaderFunctionLocation" | "LastChangeTime" | "HeaderEquipment" | "ScheduledStartTime" | "ScheduledEndTime" | "ScheduledEndDate" | "ScheduledStartDate" | "RequestStartDate" | "DueDate">> {
}

interface MyWorkOrderHeaderLongText {
    NewTextString: string;
    TextString: string;
    ObjectKey: string;
    TextObjType: string;
    TextId: string;
    OrderId: string;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
}

type MyWorkOrderHeaderLongTextId = string | {OrderId: string};

interface EditableMyWorkOrderHeaderLongText extends Pick<MyWorkOrderHeaderLongText, "NewTextString" | "TextString" | "ObjectKey" | "TextObjType" | "TextId"> {
}

interface MyWorkOrderObjectList {
    SubOperationNo: string;
    SerialNum: string;
    NotifNum: string;
    Assembly: string;
    OperationNo: string;
    MaterialNum: string;
    OrderId: string;
    EquipId: string;
    Date: string | null;
    ProcessingInd: string;
    SerialNumTable: string;
    ObjectCounter: number;
    ObjectNum: string;
    ObjectListNum: string;
    ObjectListCounter: string;
    FuncLocIdIntern: string;
    LocAssignment: string;
    ObjectListUsage: string;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | DeferredContent;
    WOSubOperation_Nav: MyWorkOrderSubOperation | DeferredContent;
}

type MyWorkOrderObjectListId = {SubOperationNo: string,OperationNo: string,OrderId: string,ObjectListNum: string,ObjectListCounter: string};

interface EditableMyWorkOrderObjectList extends Pick<MyWorkOrderObjectList, "SubOperationNo" | "SerialNum" | "NotifNum" | "Assembly" | "OperationNo" | "MaterialNum" | "OrderId" | "EquipId" | "ProcessingInd" | "SerialNumTable" | "ObjectCounter" | "ObjectNum" | "ObjectListNum" | "ObjectListCounter" | "FuncLocIdIntern" | "LocAssignment" | "ObjectListUsage">, Partial<Pick<MyWorkOrderObjectList, "Date">> {
}

interface MyWorkOrderOperation {
    StandardTextKey: string;
    SchedEarliestStartTime: string | null;
    MainWorkCenter: string;
    ActivityType: string;
    ControlKey: string;
    Duration: string;
    MaintenancePlant: string;
    NumberOfCapacities: string;
    ObjectType: string;
    SchedLatestStartDate: string | null;
    SchedLatestEndDate: string | null;
    SchedEarliestStartDate: string | null;
    SchedEarliestEndDate: string | null;
    Subphase: string;
    Phase: string;
    ObjectNumber: string;
    LAMTableKey: string;
    LAMObjectType: string;
    ChecklistType: string;
    SchedLatestEndTime: string | null;
    OperationFunctionLocation: string | null;
    OperationShortText: string;
    Work: string;
    WorkCenterInternalId: string;
    OrderId: string;
    OperationEquipment: string | null;
    OperationNo: string;
    NotifNum: string;
    Assembly: string;
    DurationUOM: string;
    OperationCategory: string;
    WorkUnit: string;
    PersonNum: string | null;
    ObjectKey: string;
    MainWorkCenterPlant: string;
    ConstrActivityStartDate: string | null;
    ConstrActivityStartTime: string | null;
    Assembly_Nav: Material | null | DeferredContent;
    ChecklistType_Nav: ChecklistType | DeferredContent;
    Components: Array<MyWorkOrderComponent> | DeferredContent;
    Confirmations: Array<Confirmation> | DeferredContent;
    DigitalSignLink_Nav: Array<DigitalSignatureLink> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    EAMChecklist_Nav: Array<EAMChecklistLink> | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    EquipmentOperation: MyEquipment | null | DeferredContent;
    FSMFormInstance_Nav: Array<FSMFormInstance> | DeferredContent;
    FunctionalLocationOperation: MyFunctionalLocation | null | DeferredContent;
    InspectionPoint_Nav: Array<InspectionPoint> | DeferredContent;
    LAMObjectDatum_Nav: LAMObjectDatum | null | DeferredContent;
    MyWorkOrderOperationCapacityRequirement_: Array<MyWorkOrderOperationCapacityRequirement> | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    OperationLongText: Array<MyWorkOrderOperationLongText> | DeferredContent;
    OperationMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    PhaseControl_Nav: Array<WorkOrderOperationPhaseControl> | DeferredContent;
    RouteStop: Array<MyRouteStop> | DeferredContent;
    RouteTechObjects: Array<MyTechObject> | DeferredContent;
    SubOperations: Array<MyWorkOrderSubOperation> | DeferredContent;
    Tools: Array<MyWorkOrderTool> | DeferredContent;
    UserTimeEntry_Nav: Array<UserTimeEntry> | DeferredContent;
    WOHeader: MyWorkOrderHeader | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOOperationCatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    WOOprDocuments_Nav: Array<MyWorkOrderDocument> | DeferredContent;
    WOTransfer: Array<WorkOrderTransfer> | DeferredContent;
}

type MyWorkOrderOperationId = {OrderId: string,OperationNo: string};

interface EditableMyWorkOrderOperation extends Pick<MyWorkOrderOperation, "StandardTextKey" | "MainWorkCenter" | "ActivityType" | "ControlKey" | "Duration" | "MaintenancePlant" | "NumberOfCapacities" | "ObjectType" | "Subphase" | "Phase" | "ObjectNumber" | "LAMTableKey" | "LAMObjectType" | "ChecklistType" | "OperationShortText" | "Work" | "WorkCenterInternalId" | "OrderId" | "OperationNo" | "NotifNum" | "Assembly" | "DurationUOM" | "OperationCategory" | "WorkUnit" | "ObjectKey" | "MainWorkCenterPlant">, Partial<Pick<MyWorkOrderOperation, "SchedEarliestStartTime" | "SchedLatestStartDate" | "SchedLatestEndDate" | "SchedEarliestStartDate" | "SchedEarliestEndDate" | "SchedLatestEndTime" | "OperationFunctionLocation" | "OperationEquipment" | "PersonNum" | "ConstrActivityStartDate" | "ConstrActivityStartTime">> {
}

interface MyWorkOrderOperationCapacityRequirement {
    CapacityRequirement: string;
    InternalCounter: string;
    CapacityRecordCounter: string;
    RemainingSplit: string;
    CapacityId: string;
    EarliestStrtDate: string | null;
    EarliestStrtTime: string;
    EarliestEndDate: string;
    EarliestEndTime: string;
    OperationRoutingNumber: string;
    RoutingNumberCounter: string;
    ObjectType: string;
    PersonnelNo: string;
    SplitNumber: string;
    Work: string;
    UnitForWork: string;
    NormalDuration: string;
    NormalDurationUnit: string;
    OrderId: string;
    OperationNo: string;
    Employee_Nav: Employee | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
}

type MyWorkOrderOperationCapacityRequirementId = {CapacityRequirement: string,InternalCounter: string,CapacityRecordCounter: string};

interface EditableMyWorkOrderOperationCapacityRequirement extends Pick<MyWorkOrderOperationCapacityRequirement, "CapacityRequirement" | "InternalCounter" | "CapacityRecordCounter" | "RemainingSplit" | "CapacityId" | "EarliestStrtTime" | "EarliestEndDate" | "EarliestEndTime" | "OperationRoutingNumber" | "RoutingNumberCounter" | "ObjectType" | "PersonnelNo" | "SplitNumber" | "Work" | "UnitForWork" | "NormalDuration" | "NormalDurationUnit" | "OrderId" | "OperationNo">, Partial<Pick<MyWorkOrderOperationCapacityRequirement, "EarliestStrtDate">> {
}

interface MyWorkOrderOperationLongText {
    NewTextString: string;
    TextString: string;
    ObjectKey: string;
    TextObjType: string;
    TextId: string;
    OperationNo: string;
    OrderId: string;
    WorkOrderOperation: MyWorkOrderOperation | DeferredContent;
}

type MyWorkOrderOperationLongTextId = {OperationNo: string,OrderId: string};

interface EditableMyWorkOrderOperationLongText extends Pick<MyWorkOrderOperationLongText, "NewTextString" | "TextString" | "ObjectKey" | "TextObjType" | "TextId" | "OperationNo" | "OrderId"> {
}

interface MyWorkOrderPartner {
    ObjectCategory: string;
    ObjectNum: string;
    Counter: string;
    OrderId: string;
    AddressNum: string;
    OldPartner: string;
    NewPartner: string;
    BPNum: string;
    PersonNum: string;
    Partner: string;
    PartnerFunction: string;
    OneTimeAddress: string;
    PersonnelNum: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
}

type MyWorkOrderPartnerId = {Counter: string,OrderId: string,PartnerFunction: string};

interface EditableMyWorkOrderPartner extends Pick<MyWorkOrderPartner, "ObjectCategory" | "ObjectNum" | "Counter" | "OrderId" | "AddressNum" | "OldPartner" | "NewPartner" | "BPNum" | "PersonNum" | "Partner" | "PartnerFunction" | "OneTimeAddress" | "PersonnelNum"> {
}

interface MyWorkOrderSales {
    AccountingIndicator: string;
    ContractItemNum: string;
    Quantity: string;
    CustomerReference: string;
    Division: string;
    DistributionChannel: string;
    SalesGroup: string;
    SalesOrg: string;
    ContractDesc: string;
    ProductDesc: string;
    ObjectNum: string;
    CustomerReferenceDate: string | null;
    ContractDateTo: string | null;
    ContractDateFrom: string | null;
    OrderId: string;
    ServiceProduct: string;
    QuantityUOM: string;
    ServiceContract: string;
    Customer: string;
    Customer_Nav: Customer | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | DeferredContent;
}

type MyWorkOrderSalesId = string | {OrderId: string};

interface EditableMyWorkOrderSales extends Pick<MyWorkOrderSales, "AccountingIndicator" | "ContractItemNum" | "Quantity" | "CustomerReference" | "Division" | "DistributionChannel" | "SalesGroup" | "SalesOrg" | "ContractDesc" | "ProductDesc" | "ObjectNum" | "ServiceProduct" | "QuantityUOM" | "ServiceContract" | "Customer">, Partial<Pick<MyWorkOrderSales, "CustomerReferenceDate" | "ContractDateTo" | "ContractDateFrom">> {
}

interface MyWorkOrderSubOpLongText {
    TextId: string;
    OperationNo: string;
    OrderId: string;
    SubOperationNo: string;
    NewTextString: string;
    TextString: string;
    ObjectKey: string;
    TextObjType: string;
    WorkOrderSubOperation: MyWorkOrderSubOperation | DeferredContent;
}

type MyWorkOrderSubOpLongTextId = {OperationNo: string,OrderId: string,SubOperationNo: string};

interface EditableMyWorkOrderSubOpLongText extends Pick<MyWorkOrderSubOpLongText, "TextId" | "OperationNo" | "OrderId" | "SubOperationNo" | "NewTextString" | "TextString" | "ObjectKey" | "TextObjType"> {
}

interface MyWorkOrderSubOperation {
    StandardTextKey: string;
    OperationShortText: string;
    ObjectType: string;
    WorkCenterInternalId: string;
    MaintenancePlant: string;
    OperationFunctionLocation: string | null;
    ControlKey: string;
    OrderId: string;
    OperationEquipment: string | null;
    OperationNo: string;
    NotifNum: string;
    ObjectKey: string;
    SubOperationNo: string;
    NumberOfCapacities: string;
    Duration: string;
    DurationUOM: string;
    Work: string;
    WorkUnit: string;
    ActivityType: string;
    PersonNum: string;
    MainWorkCenterPlant: string;
    MainWorkCenter: string;
    Confirmations: Array<Confirmation> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    EquipmentSubOperation: MyEquipment | null | DeferredContent;
    FunctionalLocationSubOperation: MyFunctionalLocation | null | DeferredContent;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    SubOpMobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    SubOperationLongText: Array<MyWorkOrderSubOpLongText> | DeferredContent;
    UserTimeEntry_Nav: Array<UserTimeEntry> | DeferredContent;
    WOObjectList_Nav: Array<MyWorkOrderObjectList> | DeferredContent;
    WOSubOperationCatsTimesheet: Array<CatsTimesheet> | DeferredContent;
    WOTransfer: Array<WorkOrderTransfer> | DeferredContent;
    WorkOrderOperation: MyWorkOrderOperation | DeferredContent;
}

type MyWorkOrderSubOperationId = {OrderId: string,OperationNo: string,SubOperationNo: string};

interface EditableMyWorkOrderSubOperation extends Pick<MyWorkOrderSubOperation, "StandardTextKey" | "OperationShortText" | "ObjectType" | "WorkCenterInternalId" | "MaintenancePlant" | "ControlKey" | "OrderId" | "OperationNo" | "NotifNum" | "ObjectKey" | "SubOperationNo" | "NumberOfCapacities" | "Duration" | "DurationUOM" | "Work" | "WorkUnit" | "ActivityType" | "PersonNum" | "MainWorkCenterPlant" | "MainWorkCenter">, Partial<Pick<MyWorkOrderSubOperation, "OperationFunctionLocation" | "OperationEquipment">> {
}

interface MyWorkOrderTool {
    DocumentID: string;
    ItemCounterChar: string;
    UsageValue: string;
    PRTText: string;
    ControlKey: string;
    Quantity: string;
    ItemNum: string;
    ObjectNum: string;
    Duration: string;
    Description: string;
    DocumentPart: string;
    DocumentVersion: string;
    DocumentType: string;
    PRTTool: string;
    PRTPlant: string;
    PRTNumber: string;
    ObjectId: string;
    ObjectType: string;
    DocumentNumber: string;
    ItemCounter: string;
    OrderId: string;
    Equipment: string;
    Material: string;
    OperationNo: string;
    Point: string;
    QuantityUOM: string;
    PRTCategory: string;
    UsageUOM: string;
    PRTDocument: Document | null | DeferredContent;
    PRTEquipment: MyEquipment | null | DeferredContent;
    PRTMaterial: Material | DeferredContent;
    PRTPoint: MeasuringPoint | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | DeferredContent;
    WOToolLongText_Nav: Array<MyWorkOrderToolLongText> | DeferredContent;
}

type MyWorkOrderToolId = {ItemCounter: string,OrderId: string,OperationNo: string};

interface EditableMyWorkOrderTool extends Pick<MyWorkOrderTool, "DocumentID" | "ItemCounterChar" | "UsageValue" | "PRTText" | "ControlKey" | "Quantity" | "ItemNum" | "ObjectNum" | "Duration" | "Description" | "DocumentPart" | "DocumentVersion" | "DocumentType" | "PRTTool" | "PRTPlant" | "PRTNumber" | "ObjectId" | "ObjectType" | "DocumentNumber" | "ItemCounter" | "OrderId" | "Equipment" | "Material" | "OperationNo" | "Point" | "QuantityUOM" | "PRTCategory" | "UsageUOM"> {
}

interface MyWorkOrderToolLongText {
    TextString: string;
    NewTextString: string;
    PRTNo: string;
    ObjectKey: string;
    TextObjectType: string;
    TextId: string;
    ItemCounter: string;
    OrderId: string;
    OperationNo: string;
    WOTool_Nav: MyWorkOrderTool | DeferredContent;
}

type MyWorkOrderToolLongTextId = {ItemCounter: string,OrderId: string,OperationNo: string};

interface EditableMyWorkOrderToolLongText extends Pick<MyWorkOrderToolLongText, "TextString" | "NewTextString" | "PRTNo" | "ObjectKey" | "TextObjectType" | "TextId" | "ItemCounter" | "OrderId" | "OperationNo"> {
}

interface NotifPartnerDetProc {
    MaintainAppointments: string;
    IsUnique: string;
    NotifOrigin: string;
    NotifCategoryDesc: string;
    NotifCategory: string;
    Sequence: number;
    NotifType: string;
    SourceFunction: string;
    PartnerFunction: string;
    PartnerIsMandatory: string;
    PartnerDeterminationProcedure: string;
    PartnerDeterminationDescription: string;
    PartnerDetAtEnd: string;
    OriginTable: string;
    NotifTypeDesc: string;
    NoChangePossible: string;
    NotifType_Nav: NotificationType | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type NotifPartnerDetProcId = {NotifType: string,PartnerFunction: string};

interface EditableNotifPartnerDetProc extends Pick<NotifPartnerDetProc, "MaintainAppointments" | "IsUnique" | "NotifOrigin" | "NotifCategoryDesc" | "NotifCategory" | "Sequence" | "NotifType" | "SourceFunction" | "PartnerFunction" | "PartnerIsMandatory" | "PartnerDeterminationProcedure" | "PartnerDeterminationDescription" | "PartnerDetAtEnd" | "OriginTable" | "NotifTypeDesc" | "NoChangePossible"> {
}

interface NotificationHistory {
    Description: string;
    MalfunctionEndTime: string;
    PM_OBJTY: string;
    PlannerGroup: string;
    PlanningPlant: string;
    WorkCenter: string;
    MainWorkCenter: string;
    NotificationType: string;
    FuncLocIdIntern: string;
    PriorityType: string;
    PersonRespName: string;
    MalfunctionStartTime: string;
    RequiredStartTime: string;
    CompletionTime: string;
    PersonRespNum: string;
    BreakDown: string;
    Priority: string;
    RequiredEndTime: string;
    CompletionDate: string | null;
    MalfunctionEndDate: string | null;
    MalfunctionStartDate: string | null;
    RequiredStartDate: string | null;
    RequiredEndDate: string | null;
    TechObject: string;
    ReferenceType: string;
    OrderId: string;
    EquipId: string;
    NotificationNumber: string;
    Employee_Nav: Employee | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    HistoryLongText_Nav: NotificationHistoryText | DeferredContent;
    HistoryPriority_Nav: Priority | null | DeferredContent;
    NotificationHeader_Nav: MyNotificationHeader | DeferredContent;
    PlannerGroup_Nav: PlannerGroup | DeferredContent;
    RelatedWO_Nav: MyWorkOrderHeader | null | DeferredContent;
    WorkCenter_Nav: WorkCenter | DeferredContent;
}

type NotificationHistoryId = {TechObject: string,ReferenceType: string,NotificationNumber: string};

interface EditableNotificationHistory extends Pick<NotificationHistory, "Description" | "MalfunctionEndTime" | "PM_OBJTY" | "PlannerGroup" | "PlanningPlant" | "WorkCenter" | "MainWorkCenter" | "NotificationType" | "FuncLocIdIntern" | "PriorityType" | "PersonRespName" | "MalfunctionStartTime" | "RequiredStartTime" | "CompletionTime" | "PersonRespNum" | "BreakDown" | "Priority" | "RequiredEndTime" | "TechObject" | "ReferenceType" | "OrderId" | "EquipId" | "NotificationNumber">, Partial<Pick<NotificationHistory, "CompletionDate" | "MalfunctionEndDate" | "MalfunctionStartDate" | "RequiredStartDate" | "RequiredEndDate">> {
}

interface NotificationHistoryText {
    NotificationNumber: string;
    TextString: string;
    ObjectKey: string;
    TextId: string;
    TextObjectType: string;
    NotifHistory_Nav: NotificationHistory | DeferredContent;
}

type NotificationHistoryTextId = string | {NotificationNumber: string};

interface EditableNotificationHistoryText extends Pick<NotificationHistoryText, "TextString" | "ObjectKey" | "TextId" | "TextObjectType"> {
}

interface NotificationProcessingContext {
    ProcessingContext: string;
    Description: string;
    MyNotificationHeader_Nav: Array<MyNotificationHeader> | DeferredContent;
}

type NotificationProcessingContextId = string | {ProcessingContext: string};

interface EditableNotificationProcessingContext extends Pick<NotificationProcessingContext, "Description"> {
}

interface NotificationType {
    EAMOverallStatusProfile: string;
    PriorityType: string;
    CatTypeDefects: string;
    CatalogProfile: string;
    NotifCategory: string;
    CatTypeCauses: string;
    CatTypeTasks: string;
    CatTypeActivities: string;
    CatTypeObjectParts: string;
    CatTypeCoding: string;
    Description: string;
    OrderType: string;
    NotifType: string;
    PartnerDetProc_Nav: Array<NotifPartnerDetProc> | DeferredContent;
}

type NotificationTypeId = string | {NotifType: string};

interface EditableNotificationType extends Pick<NotificationType, "EAMOverallStatusProfile" | "PriorityType" | "CatTypeDefects" | "CatalogProfile" | "NotifCategory" | "CatTypeCauses" | "CatTypeTasks" | "CatTypeActivities" | "CatTypeObjectParts" | "CatTypeCoding" | "Description" | "OrderType"> {
}

interface ObjectFormCategory {
    FuncLocIdIntern: string;
    FormCategoryDesc: string;
    PublishedAssessCount: string;
    UnPublishedAssessCount: string;
    FormCategory: string;
    ObjectId: string;
    EquipId: string;
    EquipmentFormCategory_Nav: MyEquipment | null | DeferredContent;
    FuncLocFormCategory_Nav: MyFunctionalLocation | null | DeferredContent;
}

type ObjectFormCategoryId = {FormCategory: string,ObjectId: string};

interface EditableObjectFormCategory extends Pick<ObjectFormCategory, "FuncLocIdIntern" | "FormCategoryDesc" | "PublishedAssessCount" | "UnPublishedAssessCount" | "FormCategory" | "ObjectId" | "EquipId"> {
}

interface OnDemandObject {
    Action: string;
    ObjectId: string;
    ObjectType: string;
}

type OnDemandObjectId = {ObjectId: string,ObjectType: string};

interface EditableOnDemandObject extends Pick<OnDemandObject, "Action" | "ObjectId" | "ObjectType"> {
}

interface OrderActivityType {
    OrderType: string;
    ActivityType: string;
}

type OrderActivityTypeId = {OrderType: string,ActivityType: string};

interface EditableOrderActivityType extends Pick<OrderActivityType, "OrderType" | "ActivityType"> {
}

interface OrderType {
    IsFlightType: string;
    ShopPaper: string;
    AutObjectListGen: string;
    EAMNotifType: string;
    PlantDescription: string;
    ObjectListAssignment: string;
    InspectionType: string;
    QMNotifType: string;
    UDSelectedSet: string;
    OneQNotifPerLotFlag: string;
    OrderTypeDesc: string;
    ControlKey: string;
    ValauationArea: string;
    ServiceType: string;
    PriorityType: string;
    MaintActType: string;
    PlanningPlant: string;
    OrderType: string;
    UDCodeVersion: string;
    PhaseModelActive: string;
    NotifType: string;
    DocumentType: string;
    StorageCategory: string;
    EAMOverallStatusProfile: string;
    AutChecklistGen: string;
    EAMWorkOrderHeader: Array<MyEAMWorkOrderHeader> | DeferredContent;
    OrderTypePartner_Nav: OrderTypePartner | DeferredContent;
    WorkOrderHeader_Nav: Array<MyWorkOrderHeader> | DeferredContent;
}

type OrderTypeId = {PlanningPlant: string,OrderType: string};

interface EditableOrderType extends Pick<OrderType, "IsFlightType" | "ShopPaper" | "AutObjectListGen" | "EAMNotifType" | "PlantDescription" | "ObjectListAssignment" | "InspectionType" | "QMNotifType" | "UDSelectedSet" | "OneQNotifPerLotFlag" | "OrderTypeDesc" | "ControlKey" | "ValauationArea" | "ServiceType" | "PriorityType" | "MaintActType" | "PlanningPlant" | "OrderType" | "UDCodeVersion" | "PhaseModelActive" | "NotifType" | "DocumentType" | "StorageCategory" | "EAMOverallStatusProfile" | "AutChecklistGen"> {
}

interface OrderTypePartner {
    OrderType: string;
    OrderType_Nav: Array<OrderType> | DeferredContent;
    PartnerDetProc_Nav: Array<PartnerDetProc> | DeferredContent;
}

type OrderTypePartnerId = string | {OrderType: string};

interface EditableOrderTypePartner {
}

interface OutboundDelivery {
    GoodsMvtStatus: string;
    NumPackages: number;
    OverallStatus: string;
    ReceivingPlant: string;
    ShippingConditions: string;
    ShippingPoint: string;
    TotalWeight: string;
    UnloadingPoint: string;
    ActualGoodsMvtDate: string | null;
    DeliveryNum: string;
    DeliveryBlock: string;
    DeliveryDate: string;
    DeliveryPriority: string;
    DeliveryType: string;
    DocumentCategory: string;
    ShipToParty: string;
    Vendor: string;
    WeightUnit: string;
    BlockingStatus_Nav: BlockingStatus | null | DeferredContent;
    Customer_Nav: Customer | null | DeferredContent;
    DeliveryPriority_Nav: DeliveryPriority | null | DeferredContent;
    Items_Nav: Array<OutboundDeliveryItem> | DeferredContent;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
}

type OutboundDeliveryId = string | {DeliveryNum: string};

interface EditableOutboundDelivery extends Pick<OutboundDelivery, "GoodsMvtStatus" | "NumPackages" | "OverallStatus" | "ReceivingPlant" | "ShippingConditions" | "ShippingPoint" | "TotalWeight" | "UnloadingPoint" | "DeliveryBlock" | "DeliveryDate" | "DeliveryPriority" | "DeliveryType" | "DocumentCategory" | "ShipToParty" | "Vendor" | "WeightUnit">, Partial<Pick<OutboundDelivery, "ActualGoodsMvtDate">> {
}

interface OutboundDeliveryBatchSplit {
    Delivery: string;
    Item: string;
    HghLevItmBatch: string;
    Batch: string;
    DeliveryQty: string;
    BaseUnit: string;
}

type OutboundDeliveryBatchSplitId = {Delivery: string,Item: string,HghLevItmBatch: string};

interface EditableOutboundDeliveryBatchSplit extends Pick<OutboundDeliveryBatchSplit, "Delivery" | "Item" | "HghLevItmBatch" | "Batch" | "DeliveryQty" | "BaseUnit"> {
}

interface OutboundDeliveryItem {
    StorageBin: string;
    ValuationType: string;
    Plant: string;
    Quantity: string;
    ReasonForMovement: string;
    StorageLocation: string;
    WMStatus: string;
    DeliveryNum: string;
    DenominatorConvertSKU: string;
    Batch: string;
    PickedDiffQuantity: string | null;
    PickedQuantity: string | null;
    Item: string;
    GoodsMvmtStatus: string;
    ItemCategory: string;
    NumeratorConvertSKU: string;
    MovementType: string;
    ItemGMRelevant: string;
    ItemType: string;
    SalesUnit: string;
    UOM: string;
    Material: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
    OutboundDeliverySerial_Nav: Array<OutboundDeliverySerial> | DeferredContent;
    OutboundDelivery_Nav: OutboundDelivery | DeferredContent;
}

type OutboundDeliveryItemId = {DeliveryNum: string,Item: string};

interface EditableOutboundDeliveryItem extends Pick<OutboundDeliveryItem, "StorageBin" | "ValuationType" | "Plant" | "Quantity" | "ReasonForMovement" | "StorageLocation" | "WMStatus" | "DeliveryNum" | "DenominatorConvertSKU" | "Batch" | "Item" | "GoodsMvmtStatus" | "ItemCategory" | "NumeratorConvertSKU" | "MovementType" | "ItemGMRelevant" | "ItemType" | "SalesUnit" | "UOM" | "Material">, Partial<Pick<OutboundDeliveryItem, "PickedDiffQuantity" | "PickedQuantity">> {
}

interface OutboundDeliverySerial {
    IsDownloaded: string;
    DeliveryNum: string;
    Item: string;
    SerialNumber: string;
    UniversalItemId: string;
    OutboundDeliveryItem_Nav: OutboundDeliveryItem | DeferredContent;
}

type OutboundDeliverySerialId = {DeliveryNum: string,Item: string,SerialNumber: string};

interface EditableOutboundDeliverySerial extends Pick<OutboundDeliverySerial, "IsDownloaded" | "DeliveryNum" | "Item" | "SerialNumber" | "UniversalItemId"> {
}

interface PMAuthorizationGroup {
    AuthGroupText: string;
    AuthorizationGroup: string;
}

type PMAuthorizationGroupId = string | {AuthorizationGroup: string};

interface EditablePMAuthorizationGroup extends Pick<PMAuthorizationGroup, "AuthGroupText"> {
}

interface PMCatalogCode {
    DefectClass: string;
    version: string;
    ValidFromDate: string | null;
    DateCreated: string | null;
    DateChanged: string | null;
    CodeDescription: string;
    CodeGroupDesc: string;
    CodeGroupStatus: string;
    Catalog: string;
    CodeGroup: string;
    Code: string;
    DefectClass_Nav: DefectClass | null | DeferredContent;
    WCMCatalog_Nav: WCMCatalog | null | DeferredContent;
}

type PMCatalogCodeId = {Catalog: string,CodeGroup: string,Code: string};

interface EditablePMCatalogCode extends Pick<PMCatalogCode, "DefectClass" | "version" | "CodeDescription" | "CodeGroupDesc" | "CodeGroupStatus" | "Catalog" | "CodeGroup" | "Code">, Partial<Pick<PMCatalogCode, "ValidFromDate" | "DateCreated" | "DateChanged">> {
}

interface PMCatalogProfile {
    CatalogProfileDesc: string;
    Description: string;
    Status: string;
    CodeGroupStatus: string;
    CatalogClassif: string;
    NotifCategory: string;
    CatalogProfile: string;
    Catalog: string;
    CodeGroup: string;
}

type PMCatalogProfileId = {CatalogProfile: string,Catalog: string,CodeGroup: string};

interface EditablePMCatalogProfile extends Pick<PMCatalogProfile, "CatalogProfileDesc" | "Description" | "Status" | "CodeGroupStatus" | "CatalogClassif" | "NotifCategory" | "CatalogProfile" | "Catalog" | "CodeGroup"> {
}

interface PMMobileStatus {
    Phase: string;
    PhaseDesc: string;
    Subphase: string;
    SubphaseDesc: string;
    BusinessObjectType: string;
    S4ObjectID: string;
    S4ItemNum: string;
    S4ObjectTypeH: string;
    NotifNum: string;
    OperationNo: string;
    SubOperationNo: string;
    WOHeader: string;
    StatusProfile: string;
    RoleType: string;
    StatusAttribute1: string;
    OrderId: string;
    EffectiveTimestamp: string | null;
    SystemStatus: string;
    ObjectType: string | null;
    CarriedOutDate: string | null;
    SystemStatusCode: string;
    UserStatus: string;
    EAMOverallStatus: string | null;
    EAMOverallStatusProfile: string | null;
    UpdateUserGUID: string | null;
    CreateUserGUID: string | null;
    Status: string;
    ReasonCode: string;
    StatusAttribute2: string;
    CreateUserId: string;
    EndTimeCounter: number | null;
    BeginTimeCounter: number | null;
    NotificationRefTime: string;
    SortField: string;
    ItemNum: string;
    TaskNum: string;
    NotificationRefDate: string | null;
    ObjectKey: string;
    MobileStatus: string;
    CarriedOutTime: string;
    CarriedOutBy: string;
    UserStatusCode: string;
    S4RejectionCode: string;
    NotifHeader_Nav: MyNotificationHeader | null | DeferredContent;
    NotifItemTask_Nav: MyNotificationItemTask | null | DeferredContent;
    NotifTask_Nav: MyNotificationTask | null | DeferredContent;
    OverallStatusCfg_Nav: EAMOverallStatusConfig | DeferredContent;
    PMMobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    RejectionReason_Nav: RejectionReason | null | DeferredContent;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    S4ServiceQuotationItem_Nav: S4ServiceQuotationItem | DeferredContent;
    S4ServiceQuotation_Nav: S4ServiceQuotation | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
    WCMDocumentHeader_Nav: WCMDocumentHeader | null | DeferredContent;
    WCMDocumentItem_Nav: WCMDocumentItem | DeferredContent;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    WOHistory_Nav: WorkOrderHistory | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    WOSubOperation_Nav: MyWorkOrderSubOperation | null | DeferredContent;
}

type PMMobileStatusId = string | {ObjectKey: string};

interface EditablePMMobileStatus extends Pick<PMMobileStatus, "Phase" | "PhaseDesc" | "Subphase" | "SubphaseDesc" | "BusinessObjectType" | "S4ObjectID" | "S4ItemNum" | "S4ObjectTypeH" | "NotifNum" | "OperationNo" | "SubOperationNo" | "WOHeader" | "StatusProfile" | "RoleType" | "StatusAttribute1" | "OrderId" | "SystemStatus" | "SystemStatusCode" | "UserStatus" | "Status" | "ReasonCode" | "StatusAttribute2" | "CreateUserId" | "NotificationRefTime" | "SortField" | "ItemNum" | "TaskNum" | "MobileStatus" | "CarriedOutTime" | "CarriedOutBy" | "UserStatusCode" | "S4RejectionCode">, Partial<Pick<PMMobileStatus, "EffectiveTimestamp" | "ObjectType" | "CarriedOutDate" | "EAMOverallStatus" | "EAMOverallStatusProfile" | "UpdateUserGUID" | "CreateUserGUID" | "EndTimeCounter" | "BeginTimeCounter" | "NotificationRefDate">> {
}

interface PMMobileStatusHistory {
    S4ObjectID: string;
    S4ItemNum: string;
    BusinessObjectType: string;
    S4ObjectTypeH: string;
    BeginTimeCounter: number | null;
    CarriedOutBy: string;
    CarriedOutDate: string | null;
    CarriedOutTime: string;
    CreateUserGUID: string | null;
    CreateUserId: string;
    EffectiveTimestamp: string | null;
    EndTimeCounter: number | null;
    ItemNum: string;
    MobileStatus: string;
    StatusAttribute1: string;
    StatusAttribute2: string;
    NotifNum: string;
    NotificationRefDate: string | null;
    NotificationRefTime: string;
    ObjectKey: string;
    ObjectType: string | null;
    OperationNo: string;
    WOHeader: string;
    OrderId: string;
    EAMOverallStatus: string | null;
    EAMOverallStatusProfile: string | null;
    ReasonCode: string;
    RecordNumber: string;
    SortField: string;
    Status: string;
    SubOperationNo: string;
    TaskNum: string;
    UpdateUserGUID: string | null;
    MyWorkOrderHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    MyWorkOrderOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    MyWorkOrderSubOperation_Nav: MyWorkOrderSubOperation | null | DeferredContent;
    PMMobileStatus_Nav: PMMobileStatus | DeferredContent;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type PMMobileStatusHistoryId = {ObjectKey: string,RecordNumber: string};

interface EditablePMMobileStatusHistory extends Pick<PMMobileStatusHistory, "S4ObjectID" | "S4ItemNum" | "BusinessObjectType" | "S4ObjectTypeH" | "CarriedOutBy" | "CarriedOutTime" | "CreateUserId" | "ItemNum" | "MobileStatus" | "StatusAttribute1" | "StatusAttribute2" | "NotifNum" | "NotificationRefTime" | "ObjectKey" | "OperationNo" | "WOHeader" | "OrderId" | "ReasonCode" | "RecordNumber" | "SortField" | "Status" | "SubOperationNo" | "TaskNum">, Partial<Pick<PMMobileStatusHistory, "BeginTimeCounter" | "CarriedOutDate" | "CreateUserGUID" | "EffectiveTimestamp" | "EndTimeCounter" | "NotificationRefDate" | "ObjectType" | "EAMOverallStatus" | "EAMOverallStatusProfile" | "UpdateUserGUID">> {
}

interface PRTCategory {
    PRTCategoryDesc: string;
    PRTCategory: string;
    MyWorkOrderTools_Nav: Array<MyWorkOrderTool> | DeferredContent;
}

type PRTCategoryId = string | {PRTCategory: string};

interface EditablePRTCategory extends Pick<PRTCategory, "PRTCategoryDesc"> {
}

interface PRTControlKey {
    PRTControlKeyDesc: string;
    PRTControlKey: string;
    MyWorkOrderTools_Nav: Array<MyWorkOrderTool> | DeferredContent;
}

type PRTControlKeyId = string | {PRTControlKey: string};

interface EditablePRTControlKey extends Pick<PRTControlKey, "PRTControlKeyDesc"> {
}

interface PartnerDetProc {
    Sequence: number;
    PartnerDeterminationDescription: string | null;
    PartnerDeterminationProcedure: string;
    PartnerIsMandatory: string;
    IsUnique: string | null;
    MaintainAppointments: string | null;
    OriginTable: string | null;
    NoChangePossible: string | null;
    PartnerDetAtEnd: string | null;
    OrderText: string | null;
    OrderType: string;
    SourceFunction: string | null;
    PartnerFunction: string;
    OrderTypePartner_Nav: OrderTypePartner | DeferredContent;
    PartnerFunction_Nav: PartnerFunction | DeferredContent;
}

type PartnerDetProcId = {OrderType: string,PartnerFunction: string};

interface EditablePartnerDetProc extends Pick<PartnerDetProc, "Sequence" | "PartnerDeterminationProcedure" | "PartnerIsMandatory" | "OrderType" | "PartnerFunction">, Partial<Pick<PartnerDetProc, "PartnerDeterminationDescription" | "IsUnique" | "MaintainAppointments" | "OriginTable" | "NoChangePossible" | "PartnerDetAtEnd" | "OrderText" | "SourceFunction">> {
}

interface PartnerFunction {
    Description: string;
    PartnerType: string;
    PartnerFunction: string;
    MyEquipPartner_Nav: Array<MyEquipPartner> | DeferredContent;
    MyFuncLocPartner_Nav: Array<MyFuncLocPartner> | DeferredContent;
    MyNotifPartner_Nav: Array<MyNotificationPartner> | DeferredContent;
    MyWorkOrderPartner_Nav: Array<MyWorkOrderPartner> | DeferredContent;
    NotifPartnerDetProc_Nav: Array<NotifPartnerDetProc> | DeferredContent;
    PartnerDetProc_Nav: Array<PartnerDetProc> | DeferredContent;
    WCMApplicationPartner_Nav: Array<WCMApplicationPartner> | DeferredContent;
    WCMApprovalPartner_Nav: Array<WCMApprovalPartner> | DeferredContent;
    WCMDocumentPartner_Nav: Array<WCMDocumentPartner> | DeferredContent;
}

type PartnerFunctionId = string | {PartnerFunction: string};

interface EditablePartnerFunction extends Pick<PartnerFunction, "Description" | "PartnerType"> {
}

interface PhaseControl {
    Entity: string;
    OrderType: string;
    PhaseControl: string;
    PhaseControlKey: string;
    ProcessPhase: string;
    ProcessSubPhase: string;
}

type PhaseControlId = {Entity: string,OrderType: string,PhaseControl: string,PhaseControlKey: string};

interface EditablePhaseControl extends Pick<PhaseControl, "Entity" | "OrderType" | "PhaseControl" | "PhaseControlKey" | "ProcessPhase" | "ProcessSubPhase"> {
}

interface PhaseControlCode {
    Entity: string;
    OrderType: string;
    PhaseControl: string;
    AuthorizationKey: string;
    BlockingSubPhase: string;
    Description: string;
    EnteringPhase: string;
    EnteringSubPhase: string;
    OvrlStsProfile: string;
    Phase: string;
    SetAutomatically: string;
    StatusProfile: string;
    Userstatus: string;
}

type PhaseControlCodeId = {Entity: string,OrderType: string,PhaseControl: string};

interface EditablePhaseControlCode extends Pick<PhaseControlCode, "Entity" | "OrderType" | "PhaseControl" | "AuthorizationKey" | "BlockingSubPhase" | "Description" | "EnteringPhase" | "EnteringSubPhase" | "OvrlStsProfile" | "Phase" | "SetAutomatically" | "StatusProfile" | "Userstatus"> {
}

interface PhaseControlKey {
    PhaseControlKey: string;
    Description: string;
}

type PhaseControlKeyId = string | {PhaseControlKey: string};

interface EditablePhaseControlKey extends Pick<PhaseControlKey, "Description"> {
}

interface PhaseControlSystemMobileStatusMap {
    Entity: string;
    SystemStatus: string;
    MobileObjectStatus: string;
}

type PhaseControlSystemMobileStatusMapId = {Entity: string,SystemStatus: string,MobileObjectStatus: string};

interface EditablePhaseControlSystemMobileStatusMap extends Pick<PhaseControlSystemMobileStatusMap, "Entity" | "SystemStatus" | "MobileObjectStatus"> {
}

interface PhaseControlSystemStatus {
    Entity: string;
    OrderType: string;
    PhaseControl: string;
    PhaseControlKey: string;
    SystemStatus: string;
    Autocreated: string;
}

type PhaseControlSystemStatusId = {Entity: string,OrderType: string,PhaseControl: string,PhaseControlKey: string,SystemStatus: string};

interface EditablePhaseControlSystemStatus extends Pick<PhaseControlSystemStatus, "Entity" | "OrderType" | "PhaseControl" | "PhaseControlKey" | "SystemStatus" | "Autocreated"> {
}

interface PhysicalInventoryDocHeader {
    PhysInvNo: string;
    PhysInvType: string;
    CountOnCreate: string;
    UpdateCountFlag: string;
    GroupingCriteria: string;
    Plant: string;
    SpecialStock: string;
    DocumentDate: string | null;
    PostingDate: string | null;
    Description: string;
    PhysInvDoc: string;
    FiscalYear: string;
    StorLocation: string;
    PlanCountdate: string | null;
    CountDate: string | null;
    UserName: string;
    PostingBlock: string;
    CountStatus: string;
    AdjustStatus: string;
    Physinventref: string;
    GroupingType: string;
    MyInventoryObject_Nav: MyInventoryObject | null | DeferredContent;
    PhysicalInventoryDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
}

type PhysicalInventoryDocHeaderId = {PhysInvDoc: string,FiscalYear: string};

interface EditablePhysicalInventoryDocHeader extends Pick<PhysicalInventoryDocHeader, "PhysInvNo" | "PhysInvType" | "CountOnCreate" | "UpdateCountFlag" | "GroupingCriteria" | "Plant" | "SpecialStock" | "Description" | "PhysInvDoc" | "FiscalYear" | "StorLocation" | "UserName" | "PostingBlock" | "CountStatus" | "AdjustStatus" | "Physinventref" | "GroupingType">, Partial<Pick<PhysicalInventoryDocHeader, "DocumentDate" | "PostingDate" | "PlanCountdate" | "CountDate">> {
}

interface PhysicalInventoryDocItem {
    StorageBin: string;
    WBSElement: string;
    Salesorditem: string;
    SOrderSchedule: string;
    CountedBy: string;
    CountDate: string | null;
    PhysInvRef: string;
    ItemCounted: string;
    Recount: string;
    Deleted: string;
    BookQuantity: string | null;
    ZeroCount: string;
    BaseQuantity: string | null;
    EntryQuantity: string | null;
    MatDocItem: string;
    DifferenceAmt: string | null;
    SpecialStock: string;
    StockType: string;
    PostingDate: string | null;
    Item: string;
    Plant: string;
    Batch: string;
    PhysInvDoc: string;
    FiscalYear: string;
    ValuationCategory: string;
    ValuationType: string;
    EntryUOM: string;
    MaterialDoc: string;
    MatDocYear: string;
    RecountDoc: string;
    SalesOrder: string;
    Supplier: string;
    Customer: string;
    BaseUOM: string;
    Material: string;
    StorLocation: string;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    MaterialSLoc_Nav: MaterialSLoc | DeferredContent;
    Material_Nav: Material | DeferredContent;
    PhysicalInventoryDocHeader_Nav: PhysicalInventoryDocHeader | DeferredContent;
    PhysicalInventoryDocItemSerial_Nav: Array<PhysicalInventoryDocItemSerial> | DeferredContent;
    PhysicalInventoryStockType_Nav: PhysicalInventoryStockType | DeferredContent;
    ValuationType_Nav: ValuationType | null | DeferredContent;
}

type PhysicalInventoryDocItemId = {Item: string,PhysInvDoc: string,FiscalYear: string};

interface EditablePhysicalInventoryDocItem extends Pick<PhysicalInventoryDocItem, "StorageBin" | "WBSElement" | "Salesorditem" | "SOrderSchedule" | "CountedBy" | "PhysInvRef" | "ItemCounted" | "Recount" | "Deleted" | "ZeroCount" | "MatDocItem" | "SpecialStock" | "StockType" | "Item" | "Plant" | "Batch" | "PhysInvDoc" | "FiscalYear" | "ValuationCategory" | "ValuationType" | "EntryUOM" | "MaterialDoc" | "MatDocYear" | "RecountDoc" | "SalesOrder" | "Supplier" | "Customer" | "BaseUOM" | "Material" | "StorLocation">, Partial<Pick<PhysicalInventoryDocItem, "CountDate" | "BookQuantity" | "BaseQuantity" | "EntryQuantity" | "DifferenceAmt" | "PostingDate">> {
}

interface PhysicalInventoryDocItemSerial {
    Item: string;
    SerialNumber: string;
    PhysInvDoc: string;
    FiscalYear: string;
    UniversalItemId: string;
    PhysicalInventoryDocItem_Nav: PhysicalInventoryDocItem | null | DeferredContent;
}

type PhysicalInventoryDocItemSerialId = {Item: string,SerialNumber: string,PhysInvDoc: string,FiscalYear: string};

interface EditablePhysicalInventoryDocItemSerial extends Pick<PhysicalInventoryDocItemSerial, "Item" | "SerialNumber" | "PhysInvDoc" | "FiscalYear" | "UniversalItemId"> {
}

interface PhysicalInventoryStockType {
    Stocktype: string;
    StockTypeText: string;
    Language: string;
    PhysicalInventoryDocItem_Nav: PhysicalInventoryDocItem | DeferredContent;
}

type PhysicalInventoryStockTypeId = string | {Stocktype: string};

interface EditablePhysicalInventoryStockType extends Pick<PhysicalInventoryStockType, "StockTypeText" | "Language"> {
}

interface PlannerGroup {
    PlannerGroupName: string;
    OrderType: string;
    PlannerGroup: string;
    PlanningPlant: string;
    NotificationHistory_Nav: Array<NotificationHistory> | DeferredContent;
    WorkOrderHistory_Nav: Array<WorkOrderHistory> | DeferredContent;
}

type PlannerGroupId = {PlannerGroup: string,PlanningPlant: string};

interface EditablePlannerGroup extends Pick<PlannerGroup, "PlannerGroupName" | "OrderType" | "PlannerGroup" | "PlanningPlant"> {
}

interface Plant {
    InspPointValSelectedSet: string;
    InspPointValPlant: string;
    InspPointValCodeGroup: string;
    InspPointValCode: string;
    Plant: string;
    PlanningPlant: string;
    Division: string;
    DistributionChannel: string;
    SalesOrganization: string;
    CompanyCode: string;
    ValuationArea: string;
    PlantDescription: string;
    Division_Nav: Division | DeferredContent;
    InspectionLot_Nav: Array<InspectionLot> | DeferredContent;
    ReceivingPoint_Nav: Array<ReceivingPoint> | DeferredContent;
    StorageLocations_Nav: Array<StorageLocation> | DeferredContent;
    UserTrunkAssignment_Nav: Array<UserTrunkAssignment> | DeferredContent;
}

type PlantId = string | {Plant: string};

interface EditablePlant extends Pick<Plant, "InspPointValSelectedSet" | "InspPointValPlant" | "InspPointValCodeGroup" | "InspPointValCode" | "PlanningPlant" | "Division" | "DistributionChannel" | "SalesOrganization" | "CompanyCode" | "ValuationArea" | "PlantDescription"> {
}

interface PrioritizationMap {
    GroupId: string;
    LikelihoodId: string;
    PrioritizationProfileId: string;
    Priority: string;
    CategoryId: string;
    ConsequenceId: string;
}

type PrioritizationMapId = {GroupId: string,LikelihoodId: string,PrioritizationProfileId: string,CategoryId: string,ConsequenceId: string};

interface EditablePrioritizationMap extends Pick<PrioritizationMap, "GroupId" | "LikelihoodId" | "PrioritizationProfileId" | "Priority" | "CategoryId" | "ConsequenceId"> {
}

interface PrioritizationProfile {
    Label: string;
    PrioritizationProfileId: string;
    ConsequenceGroup_Nav: Array<ConsequenceGroup> | DeferredContent;
    PrioritizationProfileLink_Nav: Array<PrioritizationProfileLink> | DeferredContent;
}

type PrioritizationProfileId = string | {PrioritizationProfileId: string};

interface EditablePrioritizationProfile extends Pick<PrioritizationProfile, "Label"> {
}

interface PrioritizationProfileLink {
    PrioritizationProfileID: string;
    Plant: string;
    NotificationType: string;
    PrioritizationProfile_Nav: PrioritizationProfile | null | DeferredContent;
}

type PrioritizationProfileLinkId = {Plant: string,NotificationType: string};

interface EditablePrioritizationProfileLink extends Pick<PrioritizationProfileLink, "PrioritizationProfileID" | "Plant" | "NotificationType"> {
}

interface Priority {
    FinalDueDateDuration: string;
    EndDate: string;
    StartDate: string;
    LanguageKey: string;
    FinalDueDateUoM: string;
    PriorityType: string;
    Priority: string;
    PriorityDescription: string;
    EAMWorkOrderHeader: Array<MyEAMWorkOrderHeader> | DeferredContent;
    NotificationHeaders: Array<MyNotificationHeader> | DeferredContent;
    NotificationHistories_Nav: Array<NotificationHistory> | DeferredContent;
    WorkOrderHeaders: Array<MyWorkOrderHeader> | DeferredContent;
    WorkOrderHistories: Array<WorkOrderHistory> | DeferredContent;
}

type PriorityId = {PriorityType: string,Priority: string};

interface EditablePriority extends Pick<Priority, "FinalDueDateDuration" | "EndDate" | "StartDate" | "LanguageKey" | "FinalDueDateUoM" | "PriorityType" | "Priority" | "PriorityDescription"> {
}

interface ProductStatistic {
    STATSDATE: string;
    PRODUCTNAME: string;
    PRODUCTIONSYSTEM: string;
    SYSTEMINSTANCE: string;
    VALUEDAYTOTAL: string;
    STATSNAME: string;
    STATSCATEGORY: string;
}

type ProductStatisticId = {STATSDATE: string,PRODUCTNAME: string};

interface EditableProductStatistic extends Pick<ProductStatistic, "STATSDATE" | "PRODUCTNAME" | "PRODUCTIONSYSTEM" | "SYSTEMINSTANCE" | "VALUEDAYTOTAL" | "STATSNAME" | "STATSCATEGORY"> {
}

interface ProductionOrderComponent {
    SupplyPlant: string;
    SupplyStorageLocation: string;
    Batch: string;
    SpecialStock: string;
    RequirementDate: string;
    QuantityUnE: string;
    UnitOfEntry: string;
    OrderId: string;
    MovementType: string;
    WithdrawalQuantity: string;
    RequirementQuantity: string;
    RequirementUOM: string;
    RoutingNumber: string;
    OperationNumber: string;
    Counter: string;
    BackFlushIndicator: string;
    StorageBin: string;
    Reservation: string;
    ItemNum: string;
    RecordType: string;
    Completed: string;
    MaterialNum: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
}

type ProductionOrderComponentId = {OrderId: string,Reservation: string,ItemNum: string,RecordType: string};

interface EditableProductionOrderComponent extends Pick<ProductionOrderComponent, "SupplyPlant" | "SupplyStorageLocation" | "Batch" | "SpecialStock" | "RequirementDate" | "QuantityUnE" | "UnitOfEntry" | "OrderId" | "MovementType" | "WithdrawalQuantity" | "RequirementQuantity" | "RequirementUOM" | "RoutingNumber" | "OperationNumber" | "Counter" | "BackFlushIndicator" | "StorageBin" | "Reservation" | "ItemNum" | "RecordType" | "Completed" | "MaterialNum"> {
}

interface ProductionOrderHeader {
    UserStatusCode: string;
    SystemStatus: string;
    ScheduledStartDate: string;
    Reservation: string;
    RoutingNumber: string;
    SystemStatusCode: string;
    UserStatus: string;
    OrderId: string;
    OrderType: string;
    OrderCategory: string;
    EnteredBy: string;
    Description: string;
    CompanyCode: string;
    ProductionPlant: string;
    ObjectNumber: string;
    BasicStartDate: string;
    ProductionOrderComponent_Nav: Array<ProductionOrderComponent> | DeferredContent;
    ProductionOrderItem_Nav: Array<ProductionOrderItem> | DeferredContent;
    ProductionOrderOperation_Nav: Array<ProductionOrderOperation> | DeferredContent;
    ProductionOrderSequence_Nav: Array<ProductionOrderSequence> | DeferredContent;
    ProductionOrderText_Nav: ProductionOrderText | null | DeferredContent;
}

type ProductionOrderHeaderId = string | {OrderId: string};

interface EditableProductionOrderHeader extends Pick<ProductionOrderHeader, "UserStatusCode" | "SystemStatus" | "ScheduledStartDate" | "Reservation" | "RoutingNumber" | "SystemStatusCode" | "UserStatus" | "OrderType" | "OrderCategory" | "EnteredBy" | "Description" | "CompanyCode" | "ProductionPlant" | "ObjectNumber" | "BasicStartDate"> {
}

interface ProductionOrderItem {
    StorageBin: string;
    OrderId: string;
    ItemNum: string;
    OrderQuantity: string;
    OrderUOM: string;
    MaterialNum: string;
    StockType: string;
    ValuationType: string;
    ValuationCategory: string;
    PlanningPlant: string;
    ProductionPlant: string;
    SpecialStock: string;
    Batch: string;
    SerialNoProfile: string;
    DeliveryCompletedFlag: string;
    ReceivedQuantity: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | DeferredContent;
    Material_Nav: Material | DeferredContent;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
    ProductionOrderSerial_Nav: Array<ProductionOrderSerial> | DeferredContent;
}

type ProductionOrderItemId = {OrderId: string,ItemNum: string};

interface EditableProductionOrderItem extends Pick<ProductionOrderItem, "StorageBin" | "OrderId" | "ItemNum" | "OrderQuantity" | "OrderUOM" | "MaterialNum" | "StockType" | "ValuationType" | "ValuationCategory" | "PlanningPlant" | "ProductionPlant" | "SpecialStock" | "Batch" | "SerialNoProfile" | "DeliveryCompletedFlag" | "ReceivedQuantity"> {
}

interface ProductionOrderOperation {
    OrderID: string;
    RoutingNumber: string;
    Counter: string;
    Sequence: string;
    TaskNode: string;
    OperationNumber: string;
    Description: string;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
}

type ProductionOrderOperationId = {OrderID: string,RoutingNumber: string,Counter: string};

interface EditableProductionOrderOperation extends Pick<ProductionOrderOperation, "OrderID" | "RoutingNumber" | "Counter" | "Sequence" | "TaskNode" | "OperationNumber" | "Description"> {
}

interface ProductionOrderSequence {
    OrderID: string;
    RoutingNumber: string;
    Counter: string;
    TaskListType: string;
    Sequence: string;
    SequenceDesc: string;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
}

type ProductionOrderSequenceId = {OrderID: string,RoutingNumber: string,Counter: string};

interface EditableProductionOrderSequence extends Pick<ProductionOrderSequence, "OrderID" | "RoutingNumber" | "Counter" | "TaskListType" | "Sequence" | "SequenceDesc"> {
}

interface ProductionOrderSerial {
    OrderID: string;
    ItemNo: string;
    SerialNumber: string;
    UII: string;
    ProductionOrderItem_Nav: ProductionOrderItem | DeferredContent;
}

type ProductionOrderSerialId = {OrderID: string,ItemNo: string,SerialNumber: string,UII: string};

interface EditableProductionOrderSerial extends Pick<ProductionOrderSerial, "OrderID" | "ItemNo" | "SerialNumber" | "UII"> {
}

interface ProductionOrderText {
    ObjectKey: string;
    TextObjectType: string;
    TextID: string;
    TextString: string;
    NewTextString: string;
    OrderID: string;
    ProductionOrderHeader_Nav: ProductionOrderHeader | DeferredContent;
}

type ProductionOrderTextId = {ObjectKey: string,TextID: string,OrderID: string};

interface EditableProductionOrderText extends Pick<ProductionOrderText, "ObjectKey" | "TextObjectType" | "TextID" | "TextString" | "NewTextString" | "OrderID"> {
}

interface PurchaseGroup {
    PurchasingGroup: string;
    PurchasingGroupDesc: string;
}

type PurchaseGroupId = string | {PurchasingGroup: string};

interface EditablePurchaseGroup extends Pick<PurchaseGroup, "PurchasingGroupDesc"> {
}

interface PurchaseOrderHeader {
    DocumentStatus: string;
    SupplyingPlant: string;
    DocumentType: string;
    DocumentCategory: string;
    PurchaseOrderId: string;
    Vendor: string;
    DocumentDate: string | null;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
    PurchaseOrderHeaderLongText_Nav: Array<PurchaseOrderHeaderLongText> | DeferredContent;
    PurchaseOrderItem_Nav: Array<PurchaseOrderItem> | DeferredContent;
    Vendor_Nav: Vendor | null | DeferredContent;
}

type PurchaseOrderHeaderId = string | {PurchaseOrderId: string};

interface EditablePurchaseOrderHeader extends Pick<PurchaseOrderHeader, "DocumentStatus" | "SupplyingPlant" | "DocumentType" | "DocumentCategory" | "Vendor">, Partial<Pick<PurchaseOrderHeader, "DocumentDate">> {
}

interface PurchaseOrderHeaderLongText {
    TextObjType: string;
    TextId: string;
    ObjectKey: string;
    PurchaseOrderNum: string;
    NewTextString: string;
    TextString: string;
    PurchaseOrder_Nav: PurchaseOrderHeader | DeferredContent;
}

type PurchaseOrderHeaderLongTextId = {TextId: string,ObjectKey: string,PurchaseOrderNum: string};

interface EditablePurchaseOrderHeaderLongText extends Pick<PurchaseOrderHeaderLongText, "TextObjType" | "TextId" | "ObjectKey" | "PurchaseOrderNum" | "NewTextString" | "TextString"> {
}

interface PurchaseOrderItem {
    StorageBin: string;
    GLAccount: string;
    CostCenter: string;
    NetworkActivity: string;
    OverDeliveryTol: string;
    UnlimitedTol: string;
    UnderDeliveryTol: string;
    OrderWBSElement: string;
    WBSElement: string;
    GoodsRecipient: string;
    UnloadingPoint: string;
    Order: string;
    Network: string;
    RemShelfLife: string;
    CRofOrigin: string;
    OpenQuantityBlocked: string;
    OpenQtyValBlocked: string;
    ValuationType: string;
    ValuationCategory: string;
    FinalDeliveryFlag: string;
    ItemNum: string;
    ItemText: string;
    Plant: string;
    StockType: string;
    SupplierMaterialNum: string;
    ReceivedQuantity: string;
    DeliveryCompletedFlag: string;
    OpenQuantity: string;
    PurchaseOrderId: string;
    OrderUOM: string;
    StorageLoc: string;
    MaterialNum: string;
    OrderQuantity: string;
    AcctAssgmtCat: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
    POSerialNumber_Nav: Array<PurchaseOrderSerialNumber> | DeferredContent;
    PurchaseOrderHeader_Nav: PurchaseOrderHeader | DeferredContent;
    ScheduleLine_Nav: Array<ScheduleLine> | DeferredContent;
}

type PurchaseOrderItemId = {ItemNum: string,PurchaseOrderId: string};

interface EditablePurchaseOrderItem extends Pick<PurchaseOrderItem, "StorageBin" | "GLAccount" | "CostCenter" | "NetworkActivity" | "OverDeliveryTol" | "UnlimitedTol" | "UnderDeliveryTol" | "OrderWBSElement" | "WBSElement" | "GoodsRecipient" | "UnloadingPoint" | "Order" | "Network" | "RemShelfLife" | "CRofOrigin" | "OpenQuantityBlocked" | "OpenQtyValBlocked" | "ValuationType" | "ValuationCategory" | "FinalDeliveryFlag" | "ItemNum" | "ItemText" | "Plant" | "StockType" | "SupplierMaterialNum" | "ReceivedQuantity" | "DeliveryCompletedFlag" | "OpenQuantity" | "PurchaseOrderId" | "OrderUOM" | "StorageLoc" | "MaterialNum" | "OrderQuantity" | "AcctAssgmtCat"> {
}

interface PurchaseOrderSerialNumber {
    ItemNumber: string;
    PurchaseOrderId: string;
    SerialNumber: string;
    UniversalItemId: string;
    POItem_Nav: PurchaseOrderItem | DeferredContent;
}

type PurchaseOrderSerialNumberId = {ItemNumber: string,PurchaseOrderId: string,SerialNumber: string};

interface EditablePurchaseOrderSerialNumber extends Pick<PurchaseOrderSerialNumber, "ItemNumber" | "PurchaseOrderId" | "SerialNumber" | "UniversalItemId"> {
}

interface PurchaseOrganization {
    PurchasingOrg: string;
    CompanyCode: string;
    PurchasingOrgDesc: string;
}

type PurchaseOrganizationId = {PurchasingOrg: string,CompanyCode: string};

interface EditablePurchaseOrganization extends Pick<PurchaseOrganization, "PurchasingOrg" | "CompanyCode" | "PurchasingOrgDesc"> {
}

interface PurchaseRequisitionAcctAsgn {
    BusinessArea: string;
    Item: string;
    ScheduleLine: string;
    NetValue: string | null;
    ActivityType: string;
    PurchaseReqItemNo: string;
    Quantity: string | null;
    PurchaseReqNo: string;
    GLAccount: string;
    CostCenter: string;
    SDDocument: string;
    Asset: string;
    AssetSubnumber: string;
    WBSElement: string;
    Network: string;
    Partner: string;
    BusinessProcess: string;
    Order: string;
    Distribution: string;
    COArea: string;
    Sernoaccass: string;
    PurchaseRequisitionItem_Nav: PurchaseRequisitionItem | DeferredContent;
}

type PurchaseRequisitionAcctAsgnId = {PurchaseReqItemNo: string,PurchaseReqNo: string,Sernoaccass: string};

interface EditablePurchaseRequisitionAcctAsgn extends Pick<PurchaseRequisitionAcctAsgn, "BusinessArea" | "Item" | "ScheduleLine" | "ActivityType" | "PurchaseReqItemNo" | "PurchaseReqNo" | "GLAccount" | "CostCenter" | "SDDocument" | "Asset" | "AssetSubnumber" | "WBSElement" | "Network" | "Partner" | "BusinessProcess" | "Order" | "Distribution" | "COArea" | "Sernoaccass">, Partial<Pick<PurchaseRequisitionAcctAsgn, "NetValue" | "Quantity">> {
}

interface PurchaseRequisitionAddress {
    Floor: string;
    RoomNumber: string;
    Country: string;
    Language: string;
    Region: string;
    SearchTerm1: string;
    SearchTerm2: string;
    TimeZone: string;
    TaxJurisdiction: string;
    Notes: string;
    CommMethod: string;
    Telephone: string;
    Extension: string;
    Fax: string;
    Extension1: string;
    Street1: string;
    District1: string;
    PostalCode: string;
    POBoxPostCde: string;
    CompanyPostCd: string;
    POBox: string;
    POBoxCity: string;
    DeliveryDist: string;
    Street: string;
    StreetCode: string;
    StreetAbbrev: string;
    HouseNumber: string;
    Street2: string;
    Street3: string;
    Street5: string;
    Buildingcode: string;
    CheckStatus: string;
    CityCode1: string;
    TransportZone: string;
    Supplement: string;
    EmailAddress: string;
    Street4: string;
    Title: string;
    ISOCode: string;
    LanguageCode: string;
    BuildingCode: string;
    StructureGroup: string;
    PurchaseReqNo: string;
    PurchaseReqItemNo: string;
    AddressNumber: string;
    FormOfAddress: string;
    Name: string;
    Name2: string;
    Name3: string;
    Name4: string;
    COName: string;
    City: string;
    District: string;
    CityCode: string;
    Address_Nav: Address | DeferredContent;
    PurchaseRequisitionItem_Nav: PurchaseRequisitionItem | DeferredContent;
}

type PurchaseRequisitionAddressId = {PurchaseReqNo: string,PurchaseReqItemNo: string,AddressNumber: string};

interface EditablePurchaseRequisitionAddress extends Pick<PurchaseRequisitionAddress, "Floor" | "RoomNumber" | "Country" | "Language" | "Region" | "SearchTerm1" | "SearchTerm2" | "TimeZone" | "TaxJurisdiction" | "Notes" | "CommMethod" | "Telephone" | "Extension" | "Fax" | "Extension1" | "Street1" | "District1" | "PostalCode" | "POBoxPostCde" | "CompanyPostCd" | "POBox" | "POBoxCity" | "DeliveryDist" | "Street" | "StreetCode" | "StreetAbbrev" | "HouseNumber" | "Street2" | "Street3" | "Street5" | "Buildingcode" | "CheckStatus" | "CityCode1" | "TransportZone" | "Supplement" | "EmailAddress" | "Street4" | "Title" | "ISOCode" | "LanguageCode" | "BuildingCode" | "StructureGroup" | "PurchaseReqNo" | "PurchaseReqItemNo" | "AddressNumber" | "FormOfAddress" | "Name" | "Name2" | "Name3" | "Name4" | "COName" | "City" | "District" | "CityCode"> {
}

interface PurchaseRequisitionDocType {
    DocumentType: string;
    Description: string;
    DocCategory: string;
    PurchaseRequisitionItem_Nav: PurchaseRequisitionItem | DeferredContent;
}

type PurchaseRequisitionDocTypeId = {DocumentType: string,DocCategory: string};

interface EditablePurchaseRequisitionDocType extends Pick<PurchaseRequisitionDocType, "DocumentType" | "Description" | "DocCategory"> {
}

interface PurchaseRequisitionHeader {
    PurchaseReqNo: string;
    PurchaseRequisitionItem_Nav: Array<PurchaseRequisitionItem> | DeferredContent;
    PurchaseRequisitionLongText_Nav: Array<PurchaseRequisitionLongText> | DeferredContent;
}

type PurchaseRequisitionHeaderId = string | {PurchaseReqNo: string};

interface EditablePurchaseRequisitionHeader {
}

interface PurchaseRequisitionItem {
    ShortText: string;
    Requisitioner: string;
    Batch: string;
    DeliveryDate: string | null;
    ItemCategory: string;
    MaterialGroup: string;
    Plant: string;
    StorageLocation: string;
    ValuationType: string;
    ValuationPrice: string;
    ValuationPriceUnit: string;
    Currency: string;
    PurchaseOrderNo: string;
    PurchaseOrderItemNo: string;
    PurchaseReqItemNo: string;
    PurchaseReqNo: string;
    DocCategory: string;
    DesiredVendor: string;
    FixedVendor: string;
    Material: string;
    BaseUOM: string;
    AccAsgnCategory: string;
    DocType: string;
    ItemQuantity: string | null;
    PackNo: string;
    PurchaseGroup: string;
    PurchaseOrg: string;
    RequisitionDate: string | null;
    PurchaseRequisitionAcctAsgn_Nav: Array<PurchaseRequisitionAcctAsgn> | DeferredContent;
    PurchaseRequisitionAddress_Nav: PurchaseRequisitionAddress | null | DeferredContent;
    PurchaseRequisitionDocType_Nav: Array<PurchaseRequisitionDocType> | DeferredContent;
    PurchaseRequisitionHeader_Nav: PurchaseRequisitionHeader | null | DeferredContent;
    PurchaseRequisitionLongText_Nav: Array<PurchaseRequisitionLongText> | DeferredContent;
    PurchaseRequisitionServMgmntHdr_Nav: PurchaseRequisitionServMgmntHdr | null | DeferredContent;
    PurchaseRequisitionSrvLimitHdr_Nav: PurchaseRequisitionSrvLimitHdr | null | DeferredContent;
}

type PurchaseRequisitionItemId = {PurchaseReqItemNo: string,PurchaseReqNo: string};

interface EditablePurchaseRequisitionItem extends Pick<PurchaseRequisitionItem, "ShortText" | "Requisitioner" | "Batch" | "ItemCategory" | "MaterialGroup" | "Plant" | "StorageLocation" | "ValuationType" | "ValuationPrice" | "ValuationPriceUnit" | "Currency" | "PurchaseOrderNo" | "PurchaseOrderItemNo" | "PurchaseReqItemNo" | "PurchaseReqNo" | "DocCategory" | "DesiredVendor" | "FixedVendor" | "Material" | "BaseUOM" | "AccAsgnCategory" | "DocType" | "PackNo" | "PurchaseGroup" | "PurchaseOrg">, Partial<Pick<PurchaseRequisitionItem, "DeliveryDate" | "ItemQuantity" | "RequisitionDate">> {
}

interface PurchaseRequisitionLongText {
    ObjectKey: string;
    TextObjType: string;
    TextId: string;
    PurchaseReqNo: string;
    PurchaseReqItemNo: string;
    TextString: string;
    NewTextString: string;
    PurchaseRequisitionHeader_Nav: PurchaseRequisitionHeader | null | DeferredContent;
    PurchaseRequisitionItem_Nav: PurchaseRequisitionItem | DeferredContent;
}

type PurchaseRequisitionLongTextId = {ObjectKey: string,TextId: string,PurchaseReqNo: string,PurchaseReqItemNo: string};

interface EditablePurchaseRequisitionLongText extends Pick<PurchaseRequisitionLongText, "ObjectKey" | "TextObjType" | "TextId" | "PurchaseReqNo" | "PurchaseReqItemNo" | "TextString" | "NewTextString"> {
}

interface PurchaseRequisitionServMgmntHdr {
    Currency: string;
    NetValue: string | null;
    PackageNo: string;
    SDDocument: string;
    UnitForWork: string;
    PurchasingDoc: string;
    DocCategory: string;
    PurchasingDocItem: string;
    InternalObjectNo: string;
    ConditionDocNo: string;
    HighestPackageNo: string;
    ParentPackageNo: string;
    InternalWork: string | null;
    InternalServiceUse: string;
    SDDocumentItem: string;
    DocumentCat: string;
    PurchaseRequisitionItem_Nav: Array<PurchaseRequisitionItem> | DeferredContent;
    PurchaseRequisitionServMgmntItem_Nav: Array<PurchaseRequisitionServMgmntItem> | DeferredContent;
    PurchaseRequisitionSrvAccctAsgn_Nav: Array<PurchaseRequisitionSrvAccctAsgn> | DeferredContent;
}

type PurchaseRequisitionServMgmntHdrId = string | {PackageNo: string};

interface EditablePurchaseRequisitionServMgmntHdr extends Pick<PurchaseRequisitionServMgmntHdr, "Currency" | "SDDocument" | "UnitForWork" | "PurchasingDoc" | "DocCategory" | "PurchasingDocItem" | "InternalObjectNo" | "ConditionDocNo" | "HighestPackageNo" | "ParentPackageNo" | "InternalServiceUse" | "SDDocumentItem" | "DocumentCat">, Partial<Pick<PurchaseRequisitionServMgmntHdr, "NetValue" | "InternalWork">> {
}

interface PurchaseRequisitionServMgmntItem {
    ExternalLineNumber: string;
    PackageNo: string;
    Quantity: string | null;
    NetValue: string | null;
    Activitynumber: string;
    ServiceAssgt: string;
    SubPackageNo: string;
    ServiceType: string;
    ExtServNo: string;
    InternalLineNo: string;
    PurchaseRequisitionServMgmntHdr_Nav: PurchaseRequisitionServMgmntHdr | null | DeferredContent;
}

type PurchaseRequisitionServMgmntItemId = {PackageNo: string,InternalLineNo: string};

interface EditablePurchaseRequisitionServMgmntItem extends Pick<PurchaseRequisitionServMgmntItem, "ExternalLineNumber" | "PackageNo" | "Activitynumber" | "ServiceAssgt" | "SubPackageNo" | "ServiceType" | "ExtServNo" | "InternalLineNo">, Partial<Pick<PurchaseRequisitionServMgmntItem, "Quantity" | "NetValue">> {
}

interface PurchaseRequisitionSrvAccctAsgn {
    SeqNoAccAss: string;
    HighestPackageNo: string;
    Enteredvalue: string;
    InvoiceQuantity: string | null;
    FinalAccAsgn: string;
    FinalAccAsgnQuantity: string | null;
    FinalAccAsgnReason: string;
    Line: string;
    PackageNo: string;
    ActualQuantity: string;
    NetValue: string | null;
    Quantity: string | null;
    SeqNoAA: string;
}

type PurchaseRequisitionSrvAccctAsgnId = {Line: string,PackageNo: string,SeqNoAA: string};

interface EditablePurchaseRequisitionSrvAccctAsgn extends Pick<PurchaseRequisitionSrvAccctAsgn, "SeqNoAccAss" | "HighestPackageNo" | "Enteredvalue" | "FinalAccAsgn" | "FinalAccAsgnReason" | "Line" | "PackageNo" | "ActualQuantity" | "SeqNoAA">, Partial<Pick<PurchaseRequisitionSrvAccctAsgn, "InvoiceQuantity" | "FinalAccAsgnQuantity" | "NetValue" | "Quantity">> {
}

interface PurchaseRequisitionSrvLimitHdr {
    SourcePackageNo: string;
    Currency: string;
    PackageNo: string;
    NoLimit: string;
    OverallLimit: string | null;
    ExpectedValue: string | null;
    ActualValue: string | null;
    ServiceType: string;
    Limit: string | null;
    PurchaseRequisitionItem_Nav: Array<PurchaseRequisitionItem> | DeferredContent;
    PurchaseRequisitionSrvLimitItem_Nav: Array<PurchaseRequisitionSrvLimitItem> | DeferredContent;
}

type PurchaseRequisitionSrvLimitHdrId = string | {PackageNo: string};

interface EditablePurchaseRequisitionSrvLimitHdr extends Pick<PurchaseRequisitionSrvLimitHdr, "SourcePackageNo" | "Currency" | "NoLimit" | "ServiceType">, Partial<Pick<PurchaseRequisitionSrvLimitHdr, "OverallLimit" | "ExpectedValue" | "ActualValue" | "Limit">> {
}

interface PurchaseRequisitionSrvLimitItem {
    PackageNo: string;
    ShortText: string;
    PurchasingDoc: string;
    SubPackageNo: string;
    InternalLineNo: string;
    PurchasingDocItem: string;
    OverallLimit: string | null;
    ActualValue: string | null;
}

type PurchaseRequisitionSrvLimitItemId = {PackageNo: string,InternalLineNo: string};

interface EditablePurchaseRequisitionSrvLimitItem extends Pick<PurchaseRequisitionSrvLimitItem, "PackageNo" | "ShortText" | "PurchasingDoc" | "SubPackageNo" | "InternalLineNo" | "PurchasingDocItem">, Partial<Pick<PurchaseRequisitionSrvLimitItem, "OverallLimit" | "ActualValue">> {
}

interface ReceivingPoint {
    Plant: string;
    SequenceNum: string;
    StorageLoc: string;
    ReceivingPoint: string;
    Plant_Nav: Plant | DeferredContent;
    ShippingPoint_Nav: ShippingPoint | DeferredContent;
}

type ReceivingPointId = {Plant: string,StorageLoc: string,ReceivingPoint: string};

interface EditableReceivingPoint extends Pick<ReceivingPoint, "Plant" | "SequenceNum" | "StorageLoc" | "ReceivingPoint"> {
}

interface Region {
    Region: string;
    Country: string;
    Description: string;
    Addresses_Nav: Array<Address> | DeferredContent;
    Country_Nav: Country | DeferredContent;
}

type RegionId = {Region: string,Country: string};

interface EditableRegion extends Pick<Region, "Region" | "Country" | "Description"> {
}

interface RejectionReason {
    ReasonDescription: string;
    ReasonCode: string;
    PMMobileStatus_Nav: Array<PMMobileStatus> | DeferredContent;
}

type RejectionReasonId = string | {ReasonCode: string};

interface EditableRejectionReason extends Pick<RejectionReason, "ReasonDescription"> {
}

interface ReportTemplate {
    FeatureID: string;
    RelationshipID: string;
    ObjectKey: string;
    DocumentID: string;
    Document_Nav: Document | null | DeferredContent;
}

type ReportTemplateId = {FeatureID: string,DocumentID: string};

interface EditableReportTemplate extends Pick<ReportTemplate, "FeatureID" | "RelationshipID" | "ObjectKey" | "DocumentID"> {
}

interface ReservationHeader {
    ControllingArea: string;
    DocumentStatus: string;
    SalesOrderItem: string | null;
    SalesOrderSchedule: string | null;
    ReceivingPlant: string;
    CostCenter: string;
    PurchaseOrderId: string;
    WBSElement: string;
    Network: string | null;
    SalesOrder: string | null;
    ReservationDate: string | null;
    ReceivingStorageLocation: string;
    ObjType: string;
    ReservationNum: string;
    OrderId: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
    ReservationItem_Nav: Array<ReservationItem> | DeferredContent;
    ScheduleLine_Nav: Array<ScheduleLine> | DeferredContent;
}

type ReservationHeaderId = string | {ReservationNum: string};

interface EditableReservationHeader extends Pick<ReservationHeader, "ControllingArea" | "DocumentStatus" | "ReceivingPlant" | "CostCenter" | "PurchaseOrderId" | "WBSElement" | "ReceivingStorageLocation" | "ObjType" | "OrderId">, Partial<Pick<ReservationHeader, "SalesOrderItem" | "SalesOrderSchedule" | "Network" | "SalesOrder" | "ReservationDate">> {
}

interface ReservationItem {
    DebitCreditIndicator: string;
    UnloadingPoint: string;
    GoodsRecipient: string;
    QuantityUnE: string;
    UnitOfEntry: string;
    Batch: string;
    StorageBin: string;
    ItemNum: string;
    MovementType: string;
    BackFlushIndicator: string;
    OrderOperationNo: string | null;
    RequirementUOM: string;
    MaterialNum: string;
    SalesOrder: string | null;
    WBSElement: string | null;
    GLAccount: string | null;
    BusinessArea: string;
    SalesOrderItem: string | null;
    SalesOrderSchedule: string | null;
    RecordType: string;
    SupplyPlant: string;
    SupplyStorageLocation: string;
    MovementAllowed: string;
    Completed: string;
    AccountAssignmentCategory: string;
    WithdrawalQuantity: string;
    ReservationNum: string;
    RequirementQuantity: string | null;
    RequirementDate: string | null;
    OrderId: string | null;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    ReservationHeader_Nav: ReservationHeader | DeferredContent;
}

type ReservationItemId = {ItemNum: string,RecordType: string,ReservationNum: string};

interface EditableReservationItem extends Pick<ReservationItem, "DebitCreditIndicator" | "UnloadingPoint" | "GoodsRecipient" | "QuantityUnE" | "UnitOfEntry" | "Batch" | "StorageBin" | "ItemNum" | "MovementType" | "BackFlushIndicator" | "RequirementUOM" | "MaterialNum" | "BusinessArea" | "RecordType" | "SupplyPlant" | "SupplyStorageLocation" | "MovementAllowed" | "Completed" | "AccountAssignmentCategory" | "WithdrawalQuantity" | "ReservationNum">, Partial<Pick<ReservationItem, "OrderOperationNo" | "SalesOrder" | "WBSElement" | "GLAccount" | "SalesOrderItem" | "SalesOrderSchedule" | "RequirementQuantity" | "RequirementDate" | "OrderId">> {
}

interface S4BPOrg {
    BusinessPartner: string;
    TransactionType: string;
    OrgId: string;
    OrgType: string;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
}

type S4BPOrgId = {BusinessPartner: string,TransactionType: string,OrgId: string,OrgType: string};

interface EditableS4BPOrg extends Pick<S4BPOrg, "BusinessPartner" | "TransactionType" | "OrgId" | "OrgType"> {
}

interface S4BPRelationship {
    BusinessPartnerFrom: string;
    BusinessPartnerTo: string;
    RelType: string;
    S4BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
}

type S4BPRelationshipId = {BusinessPartnerFrom: string,BusinessPartnerTo: string,RelType: string};

interface EditableS4BPRelationship extends Pick<S4BPRelationship, "BusinessPartnerFrom" | "BusinessPartnerTo" | "RelType"> {
}

interface S4BPRole {
    BusinessPartner: string;
    Role: string;
    RoleType: string;
    S4BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
}

type S4BPRoleId = {BusinessPartner: string,Role: string};

interface EditableS4BPRole extends Pick<S4BPRole, "BusinessPartner" | "Role" | "RoleType"> {
}

interface S4BPSalesArea {
    SalesOfficeShort: string;
    SalesRespOrgShort: string;
    ProcessType: string;
    BusinessPartner: string;
    SalesOrg: string;
    DistributionChannel: string;
    Division: string;
    SalesRespOrg: string;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrgShort: string;
    SalesGroupShort: string;
    DistributionChannel_Nav: DistributionChannel | null | DeferredContent;
    Division_Nav: Division | null | DeferredContent;
    SalesGroup_Nav: SalesGroup | null | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
}

type S4BPSalesAreaId = {ProcessType: string,BusinessPartner: string,SalesOrg: string,DistributionChannel: string,Division: string,SalesRespOrg: string,SalesGroup: string,SalesOffice: string};

interface EditableS4BPSalesArea extends Pick<S4BPSalesArea, "SalesOfficeShort" | "SalesRespOrgShort" | "ProcessType" | "BusinessPartner" | "SalesOrg" | "DistributionChannel" | "Division" | "SalesRespOrg" | "SalesGroup" | "SalesOffice" | "SalesOrgShort" | "SalesGroupShort"> {
}

interface S4BusinessPartner {
    OrgName2: string;
    PersonNum: string;
    UserName: string;
    BPNum: string;
    AddressNum: string;
    BPType: string;
    CostCenter: string;
    FirstName: string;
    FullName: string;
    LastName: string;
    OrgName1: string;
    Vendor: string;
    Customer: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    CrewListItem_Nav: Array<CrewListItem> | DeferredContent;
    Customer_Nav: Customer | null | DeferredContent;
    S4BusinessPartnerLongText_Nav: Array<S4BusinessPartnerLongText> | DeferredContent;
    S4ConfirmationPartner_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    S4Confirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4OrderEmpResp_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4OrderPartner_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
    S4Order_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4QuotationPartner_Nav: Array<S4ServiceQuotationPartner> | DeferredContent;
    S4Request_Nav: Array<S4ServiceRequest> | DeferredContent;
    S4ServiceQuotationBillTo_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceQuotationContact_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceQuotationEmpResp_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceQuotation_Nav: Array<S4ServiceQuotation> | DeferredContent;
}

type S4BusinessPartnerId = string | {BPNum: string};

interface EditableS4BusinessPartner extends Pick<S4BusinessPartner, "OrgName2" | "PersonNum" | "UserName" | "AddressNum" | "BPType" | "CostCenter" | "FirstName" | "FullName" | "LastName" | "OrgName1" | "Vendor" | "Customer"> {
}

interface S4BusinessPartnerLongText {
    ObjectKey: string;
    TextObjType: string;
    TextID: string;
    NewTextString: string;
    BPNum: string;
    LastChangeDate: string | null;
    LastChangeTime: string | null;
    TextString: string;
    S4BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
}

type S4BusinessPartnerLongTextId = {TextID: string,BPNum: string};

interface EditableS4BusinessPartnerLongText extends Pick<S4BusinessPartnerLongText, "ObjectKey" | "TextObjType" | "TextID" | "NewTextString" | "BPNum" | "TextString">, Partial<Pick<S4BusinessPartnerLongText, "LastChangeDate" | "LastChangeTime">> {
}

interface S4ContractDetermination {
    ContractDeterm: string;
    TransactionType: string;
    HeaderAssignRequired: string;
    ItemAssignRequired: string;
}

type S4ContractDeterminationId = string | {TransactionType: string};

interface EditableS4ContractDetermination extends Pick<S4ContractDetermination, "ContractDeterm" | "HeaderAssignRequired" | "ItemAssignRequired"> {
}

interface S4LongTextDetermination {
    Description: string;
    AccessSequence: string;
    TextObject: string;
    TextDeterminationProc: string;
    TextType: string;
    Sequence: string;
    Changes: string;
    TransferType: string;
    Redetermination: string;
    ObligatoryText: string;
}

type S4LongTextDeterminationId = {TextObject: string,TextDeterminationProc: string,TextType: string};

interface EditableS4LongTextDetermination extends Pick<S4LongTextDetermination, "Description" | "AccessSequence" | "TextObject" | "TextDeterminationProc" | "TextType" | "Sequence" | "Changes" | "TransferType" | "Redetermination" | "ObligatoryText"> {
}

interface S4PartnerFunction {
    ObjectType: string;
    PartnerFunction: string;
    FunctionCategory: string;
    Usage: string;
    RelatshpCat: string;
    RelationshpType: string;
    HidePartnerFunc: string;
    Description: string;
    ShortDescription: string;
    S4ConfItemPartner_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    S4ConfirmationPartner_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    S4OrderItemPartner_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
    S4OrderPartner_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
    S4QuotItemPartner_Nav: Array<S4ServiceQuotationPartner> | DeferredContent;
    S4QuotationPartner_Nav: Array<S4ServiceQuotationPartner> | DeferredContent;
}

type S4PartnerFunctionId = {ObjectType: string,PartnerFunction: string};

interface EditableS4PartnerFunction extends Pick<S4PartnerFunction, "ObjectType" | "PartnerFunction" | "FunctionCategory" | "Usage" | "RelatshpCat" | "RelationshpType" | "HidePartnerFunc" | "Description" | "ShortDescription"> {
}

interface S4RejectionReason {
    RejectionReason: string;
    Description: string;
}

type S4RejectionReasonId = string | {RejectionReason: string};

interface EditableS4RejectionReason extends Pick<S4RejectionReason, "Description"> {
}

interface S4ServiceConfirmation {
    PostingDate: string | null;
    WarrantyID: string;
    CreatedBy: string;
    WarrantyDesc: string;
    Urgency: string;
    SoldToParty: string;
    FinalConfirmation: string;
    Status: string;
    ServiceTeam: string;
    ServiceRespOrg: string;
    ServiceOrg: string;
    ServiceEmployee: string;
    SchemaID: string;
    SchemaGUID: string | null;
    SalesRespOrg: string;
    SalesOrg: string;
    SalesOffice: string;
    SalesGroup: string;
    RequestedStart: string | null;
    ObjectID: string;
    ObjectType: string;
    ActivityCategory: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    ContractAccount: string;
    Description: string;
    DistributionChannel: string;
    Division: string;
    DueBy: string | null;
    HeaderGUID: string;
    HeaderGUID32: string;
    Impact: string;
    Priority: string;
    ProcessType: string;
    RequestedEnd: string | null;
    EmployeeResp: string;
    StatusDesc: string;
    Code: string;
    CategoryID: string;
    SubjectProfile: string;
    CatalogType: string;
    CodeGroup: string;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    DistributionChannel_Nav: DistributionChannel | null | DeferredContent;
    Division_Nav: Division | null | DeferredContent;
    Document: Array<S4ServiceConfirmationDocument> | DeferredContent;
    LongText_Nav: Array<S4ServiceConfirmationLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    OrderTransHistory_Nav: Array<S4ServiceOrderTranHistory> | DeferredContent;
    Partners_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    RefObjects_Nav: Array<S4ServiceConfirmationRefObj> | DeferredContent;
    S4ServiceErrorMessage_Nav: Array<S4ServiceErrorMessage> | DeferredContent;
    S4ServiceQuotationTranHistory_Nav: Array<S4ServiceQuotationTranHistory> | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceConfirmationItems_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    ServiceOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
}

type S4ServiceConfirmationId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceConfirmation extends Pick<S4ServiceConfirmation, "WarrantyID" | "CreatedBy" | "WarrantyDesc" | "Urgency" | "SoldToParty" | "FinalConfirmation" | "Status" | "ServiceTeam" | "ServiceRespOrg" | "ServiceOrg" | "ServiceEmployee" | "SchemaID" | "SalesRespOrg" | "SalesOrg" | "SalesOffice" | "SalesGroup" | "ObjectID" | "ObjectType" | "ActivityCategory" | "ContractAccount" | "Description" | "DistributionChannel" | "Division" | "HeaderGUID" | "HeaderGUID32" | "Impact" | "Priority" | "ProcessType" | "EmployeeResp" | "StatusDesc" | "Code" | "CategoryID" | "SubjectProfile" | "CatalogType" | "CodeGroup">, Partial<Pick<S4ServiceConfirmation, "PostingDate" | "SchemaGUID" | "RequestedStart" | "Category1" | "Category2" | "Category3" | "Category4" | "DueBy" | "RequestedEnd">> {
}

interface S4ServiceConfirmationDocument {
    ObjectKey: string;
    RelationshipID: string;
    DocumentID: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RefItemID: string;
    Document: Document | null | DeferredContent;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
}

type S4ServiceConfirmationDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceConfirmationDocument extends Pick<S4ServiceConfirmationDocument, "ObjectKey" | "RelationshipID" | "DocumentID" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectType" | "RefItemID"> {
}

interface S4ServiceConfirmationItem {
    DistributionChannel: string;
    Division: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    AccountingInd: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    ContractAccount: string;
    ContractEnd: string | null;
    ContractID: string;
    ContractItem: string;
    ContractStart: string | null;
    Currency: string;
    DueBy: string | null;
    Duration: string;
    DurationUOM: string;
    ItemCategory: string;
    CategoryID: string;
    StartOfWork: string | null;
    ServiceType: string;
    ValuationType: string;
    WarrantyID: string;
    Amount: string;
    ItemCategoryUsage: string;
    ItemDesc: string;
    ItemGUID: string;
    ItemGUID32: string;
    ItemObjectType: string;
    NetValue: string;
    ProductID: string;
    ProductName: string;
    Quantity: string;
    QuantityUOM: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    ResponseProfile: string;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceProfile: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    SubjectProfile: string;
    CatalogType: string;
    CodeGroup: string;
    Code: string;
    HigherLvlItem: string;
    RefItemID: string;
    AccountingInd_Nav: AcctIndicator | DeferredContent;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    Currency_Nav: Currency | DeferredContent;
    DistributionChannel_Nav: DistributionChannel | null | DeferredContent;
    Division_Nav: Division | null | DeferredContent;
    Document: Array<S4ServiceConfirmationDocument> | DeferredContent;
    LongText_Nav: Array<S4ServiceConfirmationLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    Partner_Nav: Array<S4ServiceConfirmationPartner> | DeferredContent;
    Product_Nav: Material | null | DeferredContent;
    RefObjects_Nav: Array<S4ServiceConfirmationRefObj> | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
    S4ServiceQuotTranHistory_Nav: Array<S4ServiceQuotationTranHistory> | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceItemCategorySchema_Nav: ServiceItemCategorySchema | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    ServiceType_Nav: ServiceType | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    ValuationType_Nav: ServiceValuationType | null | DeferredContent;
}

type S4ServiceConfirmationItemId = {ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceConfirmationItem extends Pick<S4ServiceConfirmationItem, "DistributionChannel" | "Division" | "ItemNo" | "ObjectID" | "ObjectType" | "AccountingInd" | "ContractAccount" | "ContractID" | "ContractItem" | "Currency" | "Duration" | "DurationUOM" | "ItemCategory" | "CategoryID" | "ServiceType" | "ValuationType" | "WarrantyID" | "Amount" | "ItemCategoryUsage" | "ItemDesc" | "ItemGUID" | "ItemGUID32" | "ItemObjectType" | "NetValue" | "ProductID" | "ProductName" | "Quantity" | "QuantityUOM" | "ResponseProfile" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceProfile" | "ServiceRespOrg" | "ServiceTeam" | "SubjectProfile" | "CatalogType" | "CodeGroup" | "Code" | "HigherLvlItem" | "RefItemID">, Partial<Pick<S4ServiceConfirmationItem, "Category1" | "Category2" | "Category3" | "Category4" | "ContractEnd" | "ContractStart" | "DueBy" | "StartOfWork" | "RequestedEnd" | "RequestedStart" | "SchemaGUID">> {
}

interface S4ServiceConfirmationLongText {
    LastChangeDate: string | null;
    LastChangeTime: string | null;
    ItemNo: string;
    ObjectID: string;
    ObjectKey: string;
    ObjectType: string;
    TextID: string;
    HeaderID: string;
    NewTextString: string;
    TextObjType: string;
    TextString: string;
    RefItemID: string;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
}

type S4ServiceConfirmationLongTextId = {ItemNo: string,ObjectID: string,ObjectType: string,TextID: string};

interface EditableS4ServiceConfirmationLongText extends Pick<S4ServiceConfirmationLongText, "ItemNo" | "ObjectID" | "ObjectKey" | "ObjectType" | "TextID" | "HeaderID" | "NewTextString" | "TextObjType" | "TextString" | "RefItemID">, Partial<Pick<S4ServiceConfirmationLongText, "LastChangeDate" | "LastChangeTime">> {
}

interface S4ServiceConfirmationPartner {
    ItemObjectType: string;
    PersonNumber: string;
    Building: string;
    City: string;
    Country: string;
    CountryFax: string;
    CountryMob: string;
    CountryTel: string;
    EMailAddress: string;
    FaxExt: string;
    Fax: string;
    Floor: string;
    HouseNumber: string;
    PostalCode: string;
    Region: string;
    RoomNumber: string;
    Street: string;
    TaxJurisdiction: string;
    TelExt: string;
    Telephone: string;
    CellPhone: string;
    ItemNo: string;
    ObjectID: string;
    PartnerFunction: string;
    PartnerNo: string;
    PrevPartnerFunction: string;
    PrevPartnerNo: string;
    MainPartner: string;
    DisplayType: string;
    PartnerNoType: string;
    AddressNum: string;
    BusinessPartnerID: string;
    HeaderID: string;
    ObjectType: string;
    RefItemID: string;
    BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    S4ItemPartnerFunc_Nav: S4PartnerFunction | null | DeferredContent;
    S4PartnerFunc_Nav: S4PartnerFunction | null | DeferredContent;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
}

type S4ServiceConfirmationPartnerId = {ItemNo: string,ObjectID: string,PartnerFunction: string,PartnerNo: string,PartnerNoType: string,ObjectType: string};

interface EditableS4ServiceConfirmationPartner extends Pick<S4ServiceConfirmationPartner, "ItemObjectType" | "PersonNumber" | "Building" | "City" | "Country" | "CountryFax" | "CountryMob" | "CountryTel" | "EMailAddress" | "FaxExt" | "Fax" | "Floor" | "HouseNumber" | "PostalCode" | "Region" | "RoomNumber" | "Street" | "TaxJurisdiction" | "TelExt" | "Telephone" | "CellPhone" | "ItemNo" | "ObjectID" | "PartnerFunction" | "PartnerNo" | "PrevPartnerFunction" | "PrevPartnerNo" | "MainPartner" | "DisplayType" | "PartnerNoType" | "AddressNum" | "BusinessPartnerID" | "HeaderID" | "ObjectType" | "RefItemID"> {
}

interface S4ServiceConfirmationRefObj {
    Counter: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    EquipID: string | null;
    FLocID: string | null;
    HeaderID: string;
    MainObject: string;
    ProductID: string | null;
    SerialNum: string;
    ReferenceType: string;
    RefItemID: string;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
}

type S4ServiceConfirmationRefObjId = {Counter: string,ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceConfirmationRefObj extends Pick<S4ServiceConfirmationRefObj, "Counter" | "ItemNo" | "ObjectID" | "ObjectType" | "HeaderID" | "MainObject" | "SerialNum" | "ReferenceType" | "RefItemID">, Partial<Pick<S4ServiceConfirmationRefObj, "EquipID" | "FLocID" | "ProductID">> {
}

interface S4ServiceConfirmationRefObjHistory {
    FinalConfirmation: string;
    ObjectType: string;
    ObjectID: string;
    LifeCycleStatus: string;
    TechObject: string;
    ReferenceType: string;
    MainObject: string;
    EquipID: string;
    FLocID: string;
    ProductID: string;
    Priority: string;
    RequestedStart: string | null;
    RequestedEnd: string | null;
    Description: string;
    SoldToParty: string;
    ContactPerson: string;
    PostingDate: string | null;
    LongText_Nav: S4ServiceConfirmationRefObjHistoryText | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
}

type S4ServiceConfirmationRefObjHistoryId = {ObjectType: string,ObjectID: string,TechObject: string,ReferenceType: string};

interface EditableS4ServiceConfirmationRefObjHistory extends Pick<S4ServiceConfirmationRefObjHistory, "FinalConfirmation" | "ObjectType" | "ObjectID" | "LifeCycleStatus" | "TechObject" | "ReferenceType" | "MainObject" | "EquipID" | "FLocID" | "ProductID" | "Priority" | "Description" | "SoldToParty" | "ContactPerson">, Partial<Pick<S4ServiceConfirmationRefObjHistory, "RequestedStart" | "RequestedEnd" | "PostingDate">> {
}

interface S4ServiceConfirmationRefObjHistoryText {
    ObjectKey: string;
    TextObjType: string;
    TextID: string;
    TextString: string;
    ObjectType: string;
    ObjectID: string;
    HeaderID: string;
    S4ConfirmationRefObjHistory_Nav: S4ServiceConfirmationRefObjHistory | DeferredContent;
}

type S4ServiceConfirmationRefObjHistoryTextId = {ObjectType: string,ObjectID: string};

interface EditableS4ServiceConfirmationRefObjHistoryText extends Pick<S4ServiceConfirmationRefObjHistoryText, "ObjectKey" | "TextObjType" | "TextID" | "TextString" | "ObjectType" | "ObjectID" | "HeaderID"> {
}

interface S4ServiceConfirmationTranHistory {
    HeaderObjectType: string;
    RelatedHeaderObjType: string;
    RelatedObjectID: string;
    RelatedObjectType: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RelatedItemNo: string;
    RefItemID: string;
    S4ServiceConfirmationItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceConfirmationTranHistoryId = {RelatedObjectID: string,RelatedObjectType: string,ItemNo: string,ObjectID: string,ObjectType: string,RelatedItemNo: string};

interface EditableS4ServiceConfirmationTranHistory extends Pick<S4ServiceConfirmationTranHistory, "HeaderObjectType" | "RelatedHeaderObjType" | "RelatedObjectID" | "RelatedObjectType" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectType" | "RelatedItemNo" | "RefItemID"> {
}

interface S4ServiceContract {
    StatusDesc: string;
    ServiceOrg: string;
    SalesOrg: string;
    ContractEndDate: string | null;
    ContractStartDate: string | null;
    LifeCycleStatus: string;
    CreatedOn: string | null;
    ContactPers: string;
    EmployeeResp: string;
    ObjectID: string;
    ObjectType: string;
    Description: string;
    SoldToParty: string;
    SalesRespOrg: string;
    ContactPerson_Nav: S4BusinessPartner | DeferredContent;
    ContractItem_Nav: Array<S4ServiceContractItem> | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    Document: Array<S4ServiceContractDocument> | DeferredContent;
    EmpResp_Nav: S4BusinessPartner | DeferredContent;
    LongText_Nav: Array<S4ServiceContractLongText> | DeferredContent;
    RefObj_Nav: Array<S4ServiceContractRefObj> | DeferredContent;
    S4ServiceConfirmationTranHistory_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    S4ServiceContractItem_Nav: Array<S4ServiceContractItem> | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    TranHistory_Nav: Array<S4ServiceContractTranHistory> | DeferredContent;
}

type S4ServiceContractId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceContract extends Pick<S4ServiceContract, "StatusDesc" | "ServiceOrg" | "SalesOrg" | "LifeCycleStatus" | "ContactPers" | "EmployeeResp" | "ObjectID" | "ObjectType" | "Description" | "SoldToParty" | "SalesRespOrg">, Partial<Pick<S4ServiceContract, "ContractEndDate" | "ContractStartDate" | "CreatedOn">> {
}

interface S4ServiceContractDocument {
    ObjectKey: string;
    RelationshipID: string;
    DocumentID: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RefItemID: string;
    Document: Document | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
}

type S4ServiceContractDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceContractDocument extends Pick<S4ServiceContractDocument, "ObjectKey" | "RelationshipID" | "DocumentID" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectType" | "RefItemID"> {
}

interface S4ServiceContractItem {
    ContractItem: string;
    ContractStart: string | null;
    ContractID: string;
    ContractEnd: string | null;
    ContractAccount: string;
    Currency: string;
    DueBy: string | null;
    Duration: string;
    DurationUOM: string;
    ItemCategory: string;
    ItemCategoryUsage: string;
    ItemDesc: string;
    ItemGUID: string;
    ItemGUID32: string;
    ItemObjectType: string;
    NetValue: string;
    ProductID: string;
    ProductName: string;
    Quantity: string;
    QuantityUOM: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    ResponseProfile: string;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceProfile: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    ServiceType: string;
    SubjectProfile: string;
    ValuationType: string;
    WarrantyDesc: string;
    WarrantyID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    AccountingInd: string;
    CatalogType: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    CategoryID: string;
    Code: string;
    CodeGroup: string;
    RefItemID: string;
    AccountingInd_Nav: AcctIndicator | DeferredContent;
    Contract_Nav: S4ServiceContract | DeferredContent;
    Currency_Nav: Currency | DeferredContent;
    Document: Array<S4ServiceContractDocument> | DeferredContent;
    LongText_Nav: Array<S4ServiceContractLongText> | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    RefObj_Nav: Array<S4ServiceContractRefObj> | DeferredContent;
    RespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    S4ServiceConfirmationTranHistory_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceType_Nav: ServiceType | null | DeferredContent;
    TranHistory_Nav: Array<S4ServiceContractTranHistory> | DeferredContent;
}

type S4ServiceContractItemId = {ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceContractItem extends Pick<S4ServiceContractItem, "ContractItem" | "ContractID" | "ContractAccount" | "Currency" | "Duration" | "DurationUOM" | "ItemCategory" | "ItemCategoryUsage" | "ItemDesc" | "ItemGUID" | "ItemGUID32" | "ItemObjectType" | "NetValue" | "ProductID" | "ProductName" | "Quantity" | "QuantityUOM" | "ResponseProfile" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceProfile" | "ServiceRespOrg" | "ServiceTeam" | "ServiceType" | "SubjectProfile" | "ValuationType" | "WarrantyDesc" | "WarrantyID" | "ItemNo" | "ObjectID" | "ObjectType" | "AccountingInd" | "CatalogType" | "CategoryID" | "Code" | "CodeGroup" | "RefItemID">, Partial<Pick<S4ServiceContractItem, "ContractStart" | "ContractEnd" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID" | "Category1" | "Category2" | "Category3" | "Category4">> {
}

interface S4ServiceContractLongText {
    LastChangeDate: string | null;
    LastChangeTime: string | null;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    TextID: string;
    HeaderID: string;
    NewTextString: string;
    ObjectKey: string;
    TextObjType: string;
    TextString: string;
    RefItemID: string;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
}

type S4ServiceContractLongTextId = {ItemNo: string,ObjectID: string,ObjectType: string,TextID: string};

interface EditableS4ServiceContractLongText extends Pick<S4ServiceContractLongText, "ItemNo" | "ObjectID" | "ObjectType" | "TextID" | "HeaderID" | "NewTextString" | "ObjectKey" | "TextObjType" | "TextString" | "RefItemID">, Partial<Pick<S4ServiceContractLongText, "LastChangeDate" | "LastChangeTime">> {
}

interface S4ServiceContractRefObj {
    ReferenceType: string;
    SerialNum: string;
    Counter: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    EquipID: string | null;
    FLocID: string | null;
    HeaderID: string;
    MainObject: string;
    ProductID: string | null;
    RefItemID: string;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
}

type S4ServiceContractRefObjId = {Counter: string,ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceContractRefObj extends Pick<S4ServiceContractRefObj, "ReferenceType" | "SerialNum" | "Counter" | "ItemNo" | "ObjectID" | "ObjectType" | "HeaderID" | "MainObject" | "RefItemID">, Partial<Pick<S4ServiceContractRefObj, "EquipID" | "FLocID" | "ProductID">> {
}

interface S4ServiceContractTranHistory {
    HeaderObjectType: string;
    RelatedHeaderObjType: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RelatedItemNo: string;
    RelatedObjectID: string;
    RelatedObjectType: string;
    HeaderID: string;
    RefItemID: string;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
    S4ServiceItems_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrders_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceContractTranHistoryId = {ItemNo: string,ObjectID: string,ObjectType: string,RelatedItemNo: string,RelatedObjectID: string,RelatedObjectType: string};

interface EditableS4ServiceContractTranHistory extends Pick<S4ServiceContractTranHistory, "HeaderObjectType" | "RelatedHeaderObjType" | "ItemNo" | "ObjectID" | "ObjectType" | "RelatedItemNo" | "RelatedObjectID" | "RelatedObjectType" | "HeaderID" | "RefItemID"> {
}

interface S4ServiceErrorMessage {
    ItemNo: string;
    HeaderID: string;
    MessageType: string;
    ObjectID: string;
    ObjectType: string;
    ObjectGUID: string;
    MessageNumber: string;
    Message: string;
    S4ServiceConfirmation_Nav: S4ServiceConfirmation | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceErrorMessageId = {ItemNo: string,ObjectID: string,ObjectType: string,MessageNumber: string};

interface EditableS4ServiceErrorMessage extends Pick<S4ServiceErrorMessage, "ItemNo" | "HeaderID" | "MessageType" | "ObjectID" | "ObjectType" | "ObjectGUID" | "MessageNumber" | "Message"> {
}

interface S4ServiceItem {
    CrewID: string;
    PlannedStartDate: string | null;
    PlannedEndDate: string | null;
    ObjectID: string;
    ItemCategory: string;
    ItemNo: string;
    RequestedStart: string | null;
    RequestedEnd: string | null;
    ProductName: string;
    Quantity: string;
    Duration: string;
    DurationUOM: string;
    ServiceType: string;
    WarrantyID: string;
    ContractID: string;
    ContractAccount: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    ItemDesc: string;
    ProductID: string;
    ValuationType: string;
    QuantityUOM: string;
    ResponseProfile: string;
    ServiceProfile: string;
    AccountingInd: string;
    WarrantyDesc: string;
    ContractItem: string;
    ContractStart: string | null;
    ItemCategoryUsage: string;
    Currency: string;
    ContractEnd: string | null;
    SubjectProfile: string;
    CatalogType: string;
    CodeGroup: string;
    Code: string;
    Amount: string;
    SchemaID: string;
    SchemaGUID: string | null;
    ItemGUID: string;
    ItemGUID32: string;
    ServiceRespOrg: string;
    ObjectType: string;
    ServiceOrg: string;
    ServiceEmployee: string;
    ServiceTeam: string;
    DueBy: string | null;
    ItemObjectType: string;
    CategoryID: string;
    NetValue: string;
    SalesOrg: string;
    SalesGroup: string;
    SalesOffice: string;
    SalesRespOrg: string;
    HigherLvlItem: string;
    RefItemID: string;
    Plant: string;
    AccountingInd_Nav: AcctIndicator | DeferredContent;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    Currency_Nav: Currency | DeferredContent;
    Document: Array<S4ServiceOrderDocument> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    FSMFormInstance_Nav: Array<FSMFormInstance> | DeferredContent;
    ItemCategory_Nav: ServiceItemCategory | null | DeferredContent;
    LongText_Nav: Array<S4ServiceOrderLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    Partners_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
    Product_Nav: Material | null | DeferredContent;
    RefObjects_Nav: Array<S4ServiceOrderRefObj> | DeferredContent;
    ResponseSchema_Nav: ServiceResponseSchema | null | DeferredContent;
    S4ServiceErrorMessage_Nav: Array<S4ServiceErrorMessage> | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceItemCategorySchema_Nav: ServiceItemCategorySchema | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceProfile_Nav: ServiceAvailabilityProfile | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    ServiceType_Nav: ServiceType | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceOrderTranHistory> | DeferredContent;
    ValuationType_Nav: ServiceValuationType | null | DeferredContent;
}

type S4ServiceItemId = {ObjectID: string,ItemNo: string,ObjectType: string};

interface EditableS4ServiceItem extends Pick<S4ServiceItem, "CrewID" | "ObjectID" | "ItemCategory" | "ItemNo" | "ProductName" | "Quantity" | "Duration" | "DurationUOM" | "ServiceType" | "WarrantyID" | "ContractID" | "ContractAccount" | "ItemDesc" | "ProductID" | "ValuationType" | "QuantityUOM" | "ResponseProfile" | "ServiceProfile" | "AccountingInd" | "WarrantyDesc" | "ContractItem" | "ItemCategoryUsage" | "Currency" | "SubjectProfile" | "CatalogType" | "CodeGroup" | "Code" | "Amount" | "SchemaID" | "ItemGUID" | "ItemGUID32" | "ServiceRespOrg" | "ObjectType" | "ServiceOrg" | "ServiceEmployee" | "ServiceTeam" | "ItemObjectType" | "CategoryID" | "NetValue" | "SalesOrg" | "SalesGroup" | "SalesOffice" | "SalesRespOrg" | "HigherLvlItem" | "RefItemID" | "Plant">, Partial<Pick<S4ServiceItem, "PlannedStartDate" | "PlannedEndDate" | "RequestedStart" | "RequestedEnd" | "Category1" | "Category2" | "Category3" | "Category4" | "ContractStart" | "ContractEnd" | "SchemaGUID" | "DueBy">> {
}

interface S4ServiceOrder {
    Currency: string;
    SoldToParty: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    Description: string;
    RequestedStart: string | null;
    RequestedEnd: string | null;
    DueBy: string | null;
    DistributionChannel: string;
    Division: string;
    SubjectProfile: string;
    CatalogType: string;
    CodeGroup: string;
    Code: string;
    ServiceRespOrg: string;
    Urgency: string;
    Impact: string;
    WarrantyID: string;
    WarrantyDesc: string;
    ServiceEmployee: string;
    SchemaID: string;
    SchemaGUID: string | null;
    HeaderGUID32: string;
    HeaderGUID: string;
    ServiceOrg: string;
    EmployeeResp: string;
    ServiceTeam: string;
    SalesOrg: string;
    SalesGroup: string;
    SalesOffice: string;
    ContractAccount: string;
    CategoryID: string;
    ContactPerson: string;
    BillToParty: string;
    StatusDesc: string;
    SalesRespOrg: string;
    ObjectID: string;
    ObjectType: string;
    ActivityCategory: string;
    ProcessType: string;
    Priority: string;
    BillToParty_Nav: S4BusinessPartner | DeferredContent;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    ContactPerson_Nav: S4BusinessPartner | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    Document: Array<S4ServiceOrderDocument> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    EmpResp_Nav: S4BusinessPartner | DeferredContent;
    LongText_Nav: Array<S4ServiceOrderLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    Partners_Nav: Array<S4ServiceOrderPartner> | DeferredContent;
    Priority_Nav: ServicePriority | null | DeferredContent;
    RefObjects_Nav: Array<S4ServiceOrderRefObj> | DeferredContent;
    S4ServiceConfirmationTranHistory_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    S4ServiceErrorMessage_Nav: Array<S4ServiceErrorMessage> | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceImpact_Nav: ServiceImpact | null | DeferredContent;
    ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    ServiceUrgency_Nav: ServiceUrgency | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceOrderTranHistory> | DeferredContent;
}

type S4ServiceOrderId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceOrder extends Pick<S4ServiceOrder, "Currency" | "SoldToParty" | "Description" | "DistributionChannel" | "Division" | "SubjectProfile" | "CatalogType" | "CodeGroup" | "Code" | "ServiceRespOrg" | "Urgency" | "Impact" | "WarrantyID" | "WarrantyDesc" | "ServiceEmployee" | "SchemaID" | "HeaderGUID32" | "HeaderGUID" | "ServiceOrg" | "EmployeeResp" | "ServiceTeam" | "SalesOrg" | "SalesGroup" | "SalesOffice" | "ContractAccount" | "CategoryID" | "ContactPerson" | "BillToParty" | "StatusDesc" | "SalesRespOrg" | "ObjectID" | "ObjectType" | "ActivityCategory" | "ProcessType" | "Priority">, Partial<Pick<S4ServiceOrder, "Category1" | "Category2" | "Category3" | "Category4" | "RequestedStart" | "RequestedEnd" | "DueBy" | "SchemaGUID">> {
}

interface S4ServiceOrderDocument {
    ObjectKey: string;
    RelationshipID: string;
    DocumentID: string;
    ObjectID: string;
    ItemNo: string;
    HeaderID: string;
    ObjectType: string;
    RefItemID: string;
    Document: Document | null | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceOrderDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceOrderDocument extends Pick<S4ServiceOrderDocument, "ObjectKey" | "RelationshipID" | "DocumentID" | "ObjectID" | "ItemNo" | "HeaderID" | "ObjectType" | "RefItemID"> {
}

interface S4ServiceOrderLongText {
    LastChangeDate: string | null;
    LastChangeTime: string | null;
    TextObjType: string;
    TextID: string;
    HeaderID: string;
    ObjectID: string;
    ItemNo: string;
    NewTextString: string;
    TextString: string;
    ObjectType: string;
    ObjectKey: string;
    RefItemID: string;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceOrderLongTextId = {TextID: string,ObjectID: string,ItemNo: string,ObjectType: string};

interface EditableS4ServiceOrderLongText extends Pick<S4ServiceOrderLongText, "TextObjType" | "TextID" | "HeaderID" | "ObjectID" | "ItemNo" | "NewTextString" | "TextString" | "ObjectType" | "ObjectKey" | "RefItemID">, Partial<Pick<S4ServiceOrderLongText, "LastChangeDate" | "LastChangeTime">> {
}

interface S4ServiceOrderPartner {
    ItemObjectType: string;
    PersonNumber: string;
    City: string;
    Country: string;
    CountryFax: string;
    CountryMob: string;
    CountryTel: string;
    EMailAddress: string;
    FaxExt: string;
    Fax: string;
    HouseNumber: string;
    PostalCode: string;
    Region: string;
    Street: string;
    TaxJurisdiction: string;
    TelExt: string;
    Telephone: string;
    CellPhone: string;
    Building: string;
    Floor: string;
    RoomNumber: string;
    ObjectType: string;
    ItemNo: string;
    ObjectID: string;
    PartnerFunction: string;
    PartnerNo: string;
    PartnerNoType: string;
    HeaderID: string;
    AddressNum: string;
    BusinessPartnerID: string;
    MainPartner: string;
    DisplayType: string;
    PrevPartnerNo: string;
    PrevPartnerFunction: string;
    RefItemID: string;
    BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    S4ItemPartnerFunc_Nav: S4PartnerFunction | null | DeferredContent;
    S4PartnerFunc_Nav: S4PartnerFunction | null | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceOrderPartnerId = {ObjectType: string,ItemNo: string,ObjectID: string,PartnerFunction: string,PartnerNo: string,PartnerNoType: string};

interface EditableS4ServiceOrderPartner extends Pick<S4ServiceOrderPartner, "ItemObjectType" | "PersonNumber" | "City" | "Country" | "CountryFax" | "CountryMob" | "CountryTel" | "EMailAddress" | "FaxExt" | "Fax" | "HouseNumber" | "PostalCode" | "Region" | "Street" | "TaxJurisdiction" | "TelExt" | "Telephone" | "CellPhone" | "Building" | "Floor" | "RoomNumber" | "ObjectType" | "ItemNo" | "ObjectID" | "PartnerFunction" | "PartnerNo" | "PartnerNoType" | "HeaderID" | "AddressNum" | "BusinessPartnerID" | "MainPartner" | "DisplayType" | "PrevPartnerNo" | "PrevPartnerFunction" | "RefItemID"> {
}

interface S4ServiceOrderRefObj {
    ObjectID: string;
    ItemNo: string;
    HeaderID: string;
    MainObject: string;
    Counter: string;
    ProductID: string | null;
    SerialNum: string;
    ObjectType: string;
    FLocID: string | null;
    EquipID: string | null;
    ReferenceType: string;
    RefItemID: string;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
}

type S4ServiceOrderRefObjId = {ObjectID: string,ItemNo: string,Counter: string,ObjectType: string};

interface EditableS4ServiceOrderRefObj extends Pick<S4ServiceOrderRefObj, "ObjectID" | "ItemNo" | "HeaderID" | "MainObject" | "Counter" | "SerialNum" | "ObjectType" | "ReferenceType" | "RefItemID">, Partial<Pick<S4ServiceOrderRefObj, "ProductID" | "FLocID" | "EquipID">> {
}

interface S4ServiceOrderRefObjHistory {
    ObjectType: string;
    ObjectID: string;
    TechObject: string;
    ReferenceType: string;
    ProductID: string;
    EquipID: string;
    FLocID: string;
    LifeCycleStatus: string;
    MainObject: string;
    Priority: string;
    RequestedStart: string | null;
    RequestedEnd: string | null;
    Description: string;
    SoldToParty: string;
    ContactPerson: string;
    PostingDate: string | null;
    LongText_Nav: S4ServiceOrderRefObjHistoryText | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
}

type S4ServiceOrderRefObjHistoryId = {ObjectType: string,ObjectID: string,TechObject: string,ReferenceType: string};

interface EditableS4ServiceOrderRefObjHistory extends Pick<S4ServiceOrderRefObjHistory, "ObjectType" | "ObjectID" | "TechObject" | "ReferenceType" | "ProductID" | "EquipID" | "FLocID" | "LifeCycleStatus" | "MainObject" | "Priority" | "Description" | "SoldToParty" | "ContactPerson">, Partial<Pick<S4ServiceOrderRefObjHistory, "RequestedStart" | "RequestedEnd" | "PostingDate">> {
}

interface S4ServiceOrderRefObjHistoryText {
    ObjectKey: string;
    TextObjType: string;
    TextID: string;
    TextString: string;
    ObjectType: string;
    ObjectID: string;
    HeaderID: string;
    S4OrderRefObjHistory_Nav: S4ServiceOrderRefObjHistory | DeferredContent;
}

type S4ServiceOrderRefObjHistoryTextId = {ObjectType: string,ObjectID: string};

interface EditableS4ServiceOrderRefObjHistoryText extends Pick<S4ServiceOrderRefObjHistoryText, "ObjectKey" | "TextObjType" | "TextID" | "TextString" | "ObjectType" | "ObjectID" | "HeaderID"> {
}

interface S4ServiceOrderTranHistory {
    HeaderObjectType: string;
    RelatedHeaderObjType: string;
    RelatedObjectID: string;
    ObjectType: string;
    RelatedItemNo: string;
    HeaderID: string;
    ObjectID: string;
    ItemNo: string;
    RelatedObjectType: string;
    RefItemID: string;
    S4ServiceConfirmItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirms_Nav: S4ServiceConfirmation | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
    S4ServiceItem_Nav: S4ServiceItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | null | DeferredContent;
}

type S4ServiceOrderTranHistoryId = {RelatedObjectID: string,ObjectType: string,RelatedItemNo: string,ObjectID: string,ItemNo: string,RelatedObjectType: string};

interface EditableS4ServiceOrderTranHistory extends Pick<S4ServiceOrderTranHistory, "HeaderObjectType" | "RelatedHeaderObjType" | "RelatedObjectID" | "ObjectType" | "RelatedItemNo" | "HeaderID" | "ObjectID" | "ItemNo" | "RelatedObjectType" | "RefItemID"> {
}

interface S4ServiceQuotation {
    ObjectID: string;
    ObjectType: string;
    ActivityCategory: string;
    BillToParty: string;
    CatalogType: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    CategoryID: string;
    Code: string;
    CodeGroup: string;
    ContactPerson: string;
    ContractAccount: string;
    Currency: string;
    Description: string;
    DistributionChannel: string;
    Division: string;
    DueBy: string | null;
    EmployeeResp: string;
    HeaderGUID: string;
    HeaderGUID32: string;
    Impact: string;
    Priority: string;
    ProcessType: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    SoldToParty: string;
    StatusDesc: string;
    SubjectProfile: string;
    Urgency: string;
    WarrantyDesc: string;
    WarrantyID: string;
    QuotationStartDateTime: string | null;
    QuotationEndDateTime: string | null;
    GrossValue: string;
    NetValue: string;
    TaxAmount: string;
    ShipmentCosts: string;
    Netwoutfreight: string;
    BillToParty_Nav: S4BusinessPartner | DeferredContent;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    ContactPerson_Nav: S4BusinessPartner | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    Document: Array<S4ServiceQuotationDocument> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    EmpResp_Nav: S4BusinessPartner | DeferredContent;
    LongText_Nav: Array<S4ServiceQuotationLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    Partners_Nav: Array<S4ServiceQuotationPartner> | DeferredContent;
    Priority_Nav: ServicePriority | null | DeferredContent;
    RefObjects_Nav: Array<S4ServiceQuotationRefObj> | DeferredContent;
    S4ServiceConfirmationTranHistory_Nav: Array<S4ServiceConfirmationTranHistory> | DeferredContent;
    S4ServiceErrorMessage_Nav: Array<S4ServiceErrorMessage> | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceImpact_Nav: ServiceImpact | null | DeferredContent;
    ServiceItems_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    ServiceUrgency_Nav: ServiceUrgency | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceQuotationTranHistory> | DeferredContent;
}

type S4ServiceQuotationId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceQuotation extends Pick<S4ServiceQuotation, "ObjectID" | "ObjectType" | "ActivityCategory" | "BillToParty" | "CatalogType" | "CategoryID" | "Code" | "CodeGroup" | "ContactPerson" | "ContractAccount" | "Currency" | "Description" | "DistributionChannel" | "Division" | "EmployeeResp" | "HeaderGUID" | "HeaderGUID32" | "Impact" | "Priority" | "ProcessType" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceRespOrg" | "ServiceTeam" | "SoldToParty" | "StatusDesc" | "SubjectProfile" | "Urgency" | "WarrantyDesc" | "WarrantyID" | "GrossValue" | "NetValue" | "TaxAmount" | "ShipmentCosts" | "Netwoutfreight">, Partial<Pick<S4ServiceQuotation, "Category1" | "Category2" | "Category3" | "Category4" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID" | "QuotationStartDateTime" | "QuotationEndDateTime">> {
}

interface S4ServiceQuotationDocument {
    ObjectKey: string;
    RelationshipID: string;
    DocumentID: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RefItemID: string;
    Document: Document | null | DeferredContent;
    S4ServiceQuotItem_QuotDoc: S4ServiceQuotationItem | DeferredContent;
    S4ServiceQuotation_Nav: S4ServiceQuotation | DeferredContent;
}

type S4ServiceQuotationDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceQuotationDocument extends Pick<S4ServiceQuotationDocument, "ObjectKey" | "RelationshipID" | "DocumentID" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectType" | "RefItemID"> {
}

interface S4ServiceQuotationItem {
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    AccountingInd: string;
    Amount: string;
    CatalogType: string;
    Category1: string | null;
    Category2: string | null;
    Category3: string | null;
    Category4: string | null;
    CategoryID: string;
    Code: string;
    CodeGroup: string;
    ContractAccount: string;
    ContractEnd: string | null;
    ContractID: string;
    ContractItem: string;
    ContractStart: string | null;
    Currency: string;
    DueBy: string | null;
    Duration: string;
    DurationUOM: string;
    ItemCategory: string;
    ItemCategoryUsage: string;
    ItemDesc: string;
    ItemGUID: string;
    ItemGUID32: string;
    ItemObjectType: string;
    NetValue: string;
    ProductID: string;
    ProductName: string;
    Quantity: string;
    QuantityUOM: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    ResponseProfile: string;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID: string | null;
    SchemaID: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    ServiceProfile: string;
    ServiceRespOrg: string;
    ServiceTeam: string;
    ServiceType: string;
    SubjectProfile: string;
    ValuationType: string;
    WarrantyDesc: string;
    WarrantyID: string;
    QuotationStartDateTime: string | null;
    QuotationEndDateTime: string | null;
    ParentGUID: string;
    HigherLvlItem: string;
    RefItemID: string;
    AccountingInd_Nav: AcctIndicator | DeferredContent;
    Category1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_Nav: CategorizationSchema | null | DeferredContent;
    Category4_Nav: CategorizationSchema | null | DeferredContent;
    Currency_Nav: Currency | DeferredContent;
    Document: Array<S4ServiceQuotationDocument> | DeferredContent;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    FSMFormInstance_Nav: Array<FSMFormInstance> | DeferredContent;
    ItemCategory_Nav: ServiceItemCategory | null | DeferredContent;
    LongText_Nav: Array<S4ServiceQuotationLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    Partners_Nav: Array<S4ServiceQuotationPartner> | DeferredContent;
    Product_Nav: Material | null | DeferredContent;
    RefObjects_Nav: Array<S4ServiceQuotationRefObj> | DeferredContent;
    ResponseSchema_Nav: ServiceResponseSchema | null | DeferredContent;
    S4ServiceErrorMessage_Nav: Array<S4ServiceErrorMessage> | DeferredContent;
    S4ServiceQuotation_Nav: S4ServiceQuotation | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceItemCategorySchema_Nav: ServiceItemCategorySchema | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceProfile_Nav: ServiceAvailabilityProfile | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    ServiceType_Nav: ServiceType | null | DeferredContent;
    TransHistories_Nav: Array<S4ServiceQuotationTranHistory> | DeferredContent;
    ValuationType_Nav: ServiceValuationType | null | DeferredContent;
}

type S4ServiceQuotationItemId = {ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceQuotationItem extends Pick<S4ServiceQuotationItem, "ItemNo" | "ObjectID" | "ObjectType" | "AccountingInd" | "Amount" | "CatalogType" | "CategoryID" | "Code" | "CodeGroup" | "ContractAccount" | "ContractID" | "ContractItem" | "Currency" | "Duration" | "DurationUOM" | "ItemCategory" | "ItemCategoryUsage" | "ItemDesc" | "ItemGUID" | "ItemGUID32" | "ItemObjectType" | "NetValue" | "ProductID" | "ProductName" | "Quantity" | "QuantityUOM" | "ResponseProfile" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID" | "ServiceEmployee" | "ServiceOrg" | "ServiceProfile" | "ServiceRespOrg" | "ServiceTeam" | "ServiceType" | "SubjectProfile" | "ValuationType" | "WarrantyDesc" | "WarrantyID" | "ParentGUID" | "HigherLvlItem" | "RefItemID">, Partial<Pick<S4ServiceQuotationItem, "Category1" | "Category2" | "Category3" | "Category4" | "ContractEnd" | "ContractStart" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID" | "QuotationStartDateTime" | "QuotationEndDateTime">> {
}

interface S4ServiceQuotationLongText {
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    TextID: string;
    HeaderID: string;
    LastChangeDate: string | null;
    LastChangeTime: string | null;
    NewTextString: string;
    ObjectKey: string;
    TextObjType: string;
    TextString: string;
    RefItemID: string;
    S4ServiceQuotItem_QuotText_Nav: S4ServiceQuotationItem | DeferredContent;
    S4ServiceQuotation_QuotText_Nav: S4ServiceQuotation | DeferredContent;
}

type S4ServiceQuotationLongTextId = {ItemNo: string,ObjectID: string,ObjectType: string,TextID: string};

interface EditableS4ServiceQuotationLongText extends Pick<S4ServiceQuotationLongText, "ItemNo" | "ObjectID" | "ObjectType" | "TextID" | "HeaderID" | "NewTextString" | "ObjectKey" | "TextObjType" | "TextString" | "RefItemID">, Partial<Pick<S4ServiceQuotationLongText, "LastChangeDate" | "LastChangeTime">> {
}

interface S4ServiceQuotationPartner {
    ItemObjectType: string;
    Building: string;
    CellPhone: string;
    City: string;
    Country: string;
    CountryFax: string;
    CountryMob: string;
    CountryTel: string;
    EMailAddress: string;
    Fax: string;
    FaxExt: string;
    Floor: string;
    HouseNumber: string;
    PersonNumber: string;
    PostalCode: string;
    Region: string;
    RoomNumber: string;
    Street: string;
    TaxJurisdiction: string;
    TelExt: string;
    Telephone: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    PartnerFunction: string;
    PartnerNo: string;
    PartnerNoType: string;
    AddressNum: string;
    BusinessPartnerID: string;
    DisplayType: string;
    HeaderID: string;
    MainPartner: string;
    PrevPartnerFunction: string;
    PrevPartnerNo: string;
    RefItemID: string;
    S4BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    S4ItemPartnerFunc_Nav: S4PartnerFunction | null | DeferredContent;
    S4PartnerFunc_Nav: S4PartnerFunction | null | DeferredContent;
    S4ServiceQuotItem_Nav: S4ServiceQuotationItem | DeferredContent;
    S4ServiceQuotation_Nav: S4ServiceQuotation | DeferredContent;
}

type S4ServiceQuotationPartnerId = {ItemNo: string,ObjectID: string,ObjectType: string,PartnerFunction: string,PartnerNo: string,PartnerNoType: string};

interface EditableS4ServiceQuotationPartner extends Pick<S4ServiceQuotationPartner, "ItemObjectType" | "Building" | "CellPhone" | "City" | "Country" | "CountryFax" | "CountryMob" | "CountryTel" | "EMailAddress" | "Fax" | "FaxExt" | "Floor" | "HouseNumber" | "PersonNumber" | "PostalCode" | "Region" | "RoomNumber" | "Street" | "TaxJurisdiction" | "TelExt" | "Telephone" | "ItemNo" | "ObjectID" | "ObjectType" | "PartnerFunction" | "PartnerNo" | "PartnerNoType" | "AddressNum" | "BusinessPartnerID" | "DisplayType" | "HeaderID" | "MainPartner" | "PrevPartnerFunction" | "PrevPartnerNo" | "RefItemID"> {
}

interface S4ServiceQuotationRefObj {
    Counter: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    EquipID: string | null;
    FLocID: string | null;
    HeaderID: string;
    MainObject: string;
    ProductID: string | null;
    ReferenceType: string;
    SerialNum: string;
    RefItemID: string;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    S4ServiceQuotItem_QuotPartner_Nav: S4ServiceQuotationItem | DeferredContent;
    S4ServiceQuotation_QuotPartner_Nav: S4ServiceQuotation | DeferredContent;
}

type S4ServiceQuotationRefObjId = {Counter: string,ItemNo: string,ObjectID: string,ObjectType: string};

interface EditableS4ServiceQuotationRefObj extends Pick<S4ServiceQuotationRefObj, "Counter" | "ItemNo" | "ObjectID" | "ObjectType" | "HeaderID" | "MainObject" | "ReferenceType" | "SerialNum" | "RefItemID">, Partial<Pick<S4ServiceQuotationRefObj, "EquipID" | "FLocID" | "ProductID">> {
}

interface S4ServiceQuotationRefObjHistory {
    ObjectID: string;
    ObjectType: string;
    ReferenceType: string;
    TechObject: string;
    ContactPerson: string;
    Description: string;
    EquipID: string;
    FLocID: string;
    LifeCycleStatus: string;
    MainObject: string;
    PostingDate: string | null;
    Priority: string;
    ProductID: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    SoldToParty: string;
    LongText_Nav: S4ServiceQuotationRefObjHistoryText | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
}

type S4ServiceQuotationRefObjHistoryId = {ObjectID: string,ObjectType: string,ReferenceType: string,TechObject: string};

interface EditableS4ServiceQuotationRefObjHistory extends Pick<S4ServiceQuotationRefObjHistory, "ObjectID" | "ObjectType" | "ReferenceType" | "TechObject" | "ContactPerson" | "Description" | "EquipID" | "FLocID" | "LifeCycleStatus" | "MainObject" | "Priority" | "ProductID" | "SoldToParty">, Partial<Pick<S4ServiceQuotationRefObjHistory, "PostingDate" | "RequestedEnd" | "RequestedStart">> {
}

interface S4ServiceQuotationRefObjHistoryText {
    ObjectID: string;
    ObjectType: string;
    HeaderID: string;
    ObjectKey: string;
    TextID: string;
    TextObjType: string;
    TextString: string;
    S4QuotRefObjHistory_Nav: S4ServiceQuotationRefObjHistory | DeferredContent;
}

type S4ServiceQuotationRefObjHistoryTextId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceQuotationRefObjHistoryText extends Pick<S4ServiceQuotationRefObjHistoryText, "ObjectID" | "ObjectType" | "HeaderID" | "ObjectKey" | "TextID" | "TextObjType" | "TextString"> {
}

interface S4ServiceQuotationTranHistory {
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    RelatedItemNo: string;
    RelatedObjectID: string;
    RelatedObjectType: string;
    HeaderID: string;
    HeaderObjectType: string;
    RelatedHeaderObjType: string;
    RefItemID: string;
    S4ServiceConfirmItem_Nav: S4ServiceConfirmationItem | DeferredContent;
    S4ServiceConfirms_Nav: S4ServiceConfirmation | null | DeferredContent;
    S4ServiceContractItem_Nav: S4ServiceContractItem | DeferredContent;
    S4ServiceContract_Nav: S4ServiceContract | DeferredContent;
    S4ServiceItem_Nav: S4ServiceQuotationItem | DeferredContent;
    S4ServiceOrder_Nav: S4ServiceQuotation | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | null | DeferredContent;
}

type S4ServiceQuotationTranHistoryId = {ItemNo: string,ObjectID: string,ObjectType: string,RelatedItemNo: string,RelatedObjectID: string,RelatedObjectType: string};

interface EditableS4ServiceQuotationTranHistory extends Pick<S4ServiceQuotationTranHistory, "ItemNo" | "ObjectID" | "ObjectType" | "RelatedItemNo" | "RelatedObjectID" | "RelatedObjectType" | "HeaderID" | "HeaderObjectType" | "RelatedHeaderObjType" | "RefItemID"> {
}

interface S4ServiceRequest {
    ObjectID: string;
    ObjectType: string;
    ActivityCategory: string;
    ReasonCategory1: string | null;
    ReasonCategory2: string | null;
    ReasonCategory3: string | null;
    ReasonCategory4: string | null;
    ContractAccount: string;
    Description: string;
    DistributionChannel: string;
    Division: string;
    DueBy: string | null;
    HeaderGUID: string;
    HeaderGUID32: string;
    Impact: string;
    Priority: string;
    ProcessType: string;
    RequestedEnd: string | null;
    RequestedStart: string | null;
    SalesGroup: string;
    SalesOffice: string;
    SalesOrg: string;
    SalesRespOrg: string;
    SchemaGUID1: string | null;
    SchemaID1: string;
    ServiceEmployee: string;
    ServiceOrg: string;
    StatusDesc: string;
    RecommendedPriority: string;
    SubjCategory1: string | null;
    SubjectProfile1: string;
    SubjectProfile2: string;
    CatalogType1: string;
    CatalogType2: string;
    CodeGroup1: string;
    CodeGroup2: string;
    Code1: string;
    Code2: string;
    SubjCategory2: string | null;
    SubjCategory3: string | null;
    SubjCategory4: string | null;
    ServiceRespOrg: string;
    ServiceTeam: string;
    SoldToParty: string;
    Urgency: string;
    FirstResponseBy: string | null;
    EmployeeResp: string;
    ContactPers: string;
    CategoryID1: string;
    SchemaGUID2: string | null;
    SchemaID2: string;
    CategoryID2: string;
    Category1_1_Nav: CategorizationSchema | null | DeferredContent;
    Category1_2_Nav: CategorizationSchema | null | DeferredContent;
    Category2_1_Nav: CategorizationSchema | null | DeferredContent;
    Category2_2_Nav: CategorizationSchema | null | DeferredContent;
    Category3_1_Nav: CategorizationSchema | null | DeferredContent;
    Category3_2_Nav: CategorizationSchema | null | DeferredContent;
    Category4_1_Nav: CategorizationSchema | null | DeferredContent;
    Category4_2_Nav: CategorizationSchema | null | DeferredContent;
    ContactPerson_Nav: S4BusinessPartner | DeferredContent;
    Customer_Nav: S4BusinessPartner | DeferredContent;
    Document: Array<S4ServiceRequestDocument> | DeferredContent;
    EmpResp_Nav: S4BusinessPartner | DeferredContent;
    Impact_Nav: ServiceImpact | null | DeferredContent;
    LongText_Nav: Array<S4ServiceRequestLongText> | DeferredContent;
    MobileStatusHistory_Nav: Array<PMMobileStatusHistory> | DeferredContent;
    MobileStatus_Nav: PMMobileStatus | null | DeferredContent;
    OrderTransHistory_Nav: Array<S4ServiceOrderTranHistory> | DeferredContent;
    Partners_Nav: Array<S4ServiceRequestPartner> | DeferredContent;
    Priority_Nav: ServicePriority | null | DeferredContent;
    RefObj_Nav: Array<S4ServiceRequestRefObj> | DeferredContent;
    S4ServiceErrorMessage_Nav: Array<S4ServiceErrorMessage> | DeferredContent;
    S4ServiceQuotationTranHistory_Nav: Array<S4ServiceQuotationTranHistory> | DeferredContent;
    SalesOffice_Nav: SalesOffice | null | DeferredContent;
    SalesOrg_Nav: SalesOrg | null | DeferredContent;
    SalesRespOrg_Nav: SalesRespOrg | null | DeferredContent;
    ServiceOrg_Nav: ServiceOrg | null | DeferredContent;
    ServiceRespOrg_Nav: ServiceRespOrg | null | DeferredContent;
    TranHistory_Nav: Array<S4ServiceRequestTranHistory> | DeferredContent;
    Urgency_Nav: ServiceUrgency | null | DeferredContent;
}

type S4ServiceRequestId = {ObjectID: string,ObjectType: string};

interface EditableS4ServiceRequest extends Pick<S4ServiceRequest, "ObjectID" | "ObjectType" | "ActivityCategory" | "ContractAccount" | "Description" | "DistributionChannel" | "Division" | "HeaderGUID" | "HeaderGUID32" | "Impact" | "Priority" | "ProcessType" | "SalesGroup" | "SalesOffice" | "SalesOrg" | "SalesRespOrg" | "SchemaID1" | "ServiceEmployee" | "ServiceOrg" | "StatusDesc" | "RecommendedPriority" | "SubjectProfile1" | "SubjectProfile2" | "CatalogType1" | "CatalogType2" | "CodeGroup1" | "CodeGroup2" | "Code1" | "Code2" | "ServiceRespOrg" | "ServiceTeam" | "SoldToParty" | "Urgency" | "EmployeeResp" | "ContactPers" | "CategoryID1" | "SchemaID2" | "CategoryID2">, Partial<Pick<S4ServiceRequest, "ReasonCategory1" | "ReasonCategory2" | "ReasonCategory3" | "ReasonCategory4" | "DueBy" | "RequestedEnd" | "RequestedStart" | "SchemaGUID1" | "SubjCategory1" | "SubjCategory2" | "SubjCategory3" | "SubjCategory4" | "FirstResponseBy" | "SchemaGUID2">> {
}

interface S4ServiceRequestDocument {
    ObjectKey: string;
    RelationshipID: string;
    DocumentID: string;
    HeaderID: string;
    ItemNo: string;
    ObjectID: string;
    ObjectType: string;
    Document: Document | null | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestDocumentId = {ObjectKey: string,RelationshipID: string};

interface EditableS4ServiceRequestDocument extends Pick<S4ServiceRequestDocument, "ObjectKey" | "RelationshipID" | "DocumentID" | "HeaderID" | "ItemNo" | "ObjectID" | "ObjectType"> {
}

interface S4ServiceRequestLongText {
    LastChangeDate: string | null;
    LastChangeTime: string | null;
    ItemNo: string;
    ObjectID: string;
    ObjectKey: string;
    TextID: string;
    HeaderID: string;
    TextString: string;
    TextObjType: string;
    ObjectType: string;
    NewTextString: string;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestLongTextId = {ItemNo: string,ObjectID: string,TextID: string,ObjectType: string};

interface EditableS4ServiceRequestLongText extends Pick<S4ServiceRequestLongText, "ItemNo" | "ObjectID" | "ObjectKey" | "TextID" | "HeaderID" | "TextString" | "TextObjType" | "ObjectType" | "NewTextString">, Partial<Pick<S4ServiceRequestLongText, "LastChangeDate" | "LastChangeTime">> {
}

interface S4ServiceRequestPartner {
    Building: string;
    CellPhone: string;
    City: string;
    Country: string;
    CountryFax: string;
    CountryMob: string;
    CountryTel: string;
    EMailAddress: string;
    Fax: string;
    FaxExt: string;
    Floor: string;
    HouseNumber: string;
    PartnerNo: string;
    PersonNumber: string;
    PostalCode: string;
    Region: string;
    RoomNumber: string;
    Street: string;
    TaxJurisdiction: string;
    TelExt: string;
    Telephone: string;
    ObjectType: string;
    HeaderID: string;
    BusinessPartnerID: string;
    AddressNum: string;
    PartnerNoType: string;
    PartnerFunction: string;
    ObjectID: string;
    ItemNo: string;
    MainPartner: string;
    PrevPartnerFunction: string;
    PrevPartnerNo: string;
    DisplayType: string;
    BusinessPartner_Nav: S4BusinessPartner | DeferredContent;
    S4PartnerFunction_Nav: S4PartnerFunction | null | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestPartnerId = {PartnerNo: string,ObjectType: string,PartnerNoType: string,PartnerFunction: string,ObjectID: string,ItemNo: string};

interface EditableS4ServiceRequestPartner extends Pick<S4ServiceRequestPartner, "Building" | "CellPhone" | "City" | "Country" | "CountryFax" | "CountryMob" | "CountryTel" | "EMailAddress" | "Fax" | "FaxExt" | "Floor" | "HouseNumber" | "PartnerNo" | "PersonNumber" | "PostalCode" | "Region" | "RoomNumber" | "Street" | "TaxJurisdiction" | "TelExt" | "Telephone" | "ObjectType" | "HeaderID" | "BusinessPartnerID" | "AddressNum" | "PartnerNoType" | "PartnerFunction" | "ObjectID" | "ItemNo" | "MainPartner" | "PrevPartnerFunction" | "PrevPartnerNo" | "DisplayType"> {
}

interface S4ServiceRequestRefObj {
    ObjectType: string;
    ProductID: string | null;
    MainObject: string;
    HeaderID: string;
    FLocID: string | null;
    SerialNum: string;
    EquipID: string | null;
    ObjectID: string;
    ItemNo: string;
    Counter: string;
    ReferenceType: string;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestRefObjId = {ObjectType: string,ObjectID: string,ItemNo: string,Counter: string};

interface EditableS4ServiceRequestRefObj extends Pick<S4ServiceRequestRefObj, "ObjectType" | "MainObject" | "HeaderID" | "SerialNum" | "ObjectID" | "ItemNo" | "Counter" | "ReferenceType">, Partial<Pick<S4ServiceRequestRefObj, "ProductID" | "FLocID" | "EquipID">> {
}

interface S4ServiceRequestRefObjHistory {
    Priority: string;
    RequestedStart: string | null;
    RequestedEnd: string | null;
    Description: string;
    SoldToParty: string;
    ContactPerson: string;
    ObjectType: string;
    ObjectID: string;
    TechObject: string;
    ReferenceType: string;
    MainObject: string;
    EquipID: string;
    FLocID: string;
    ProductID: string;
    LifeCycleStatus: string;
    PostingDate: string | null;
    LongText_Nav: S4ServiceRequestRefObjHistoryText | DeferredContent;
    Material_Nav: Material | null | DeferredContent;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
}

type S4ServiceRequestRefObjHistoryId = {ObjectType: string,ObjectID: string,TechObject: string,ReferenceType: string};

interface EditableS4ServiceRequestRefObjHistory extends Pick<S4ServiceRequestRefObjHistory, "Priority" | "Description" | "SoldToParty" | "ContactPerson" | "ObjectType" | "ObjectID" | "TechObject" | "ReferenceType" | "MainObject" | "EquipID" | "FLocID" | "ProductID" | "LifeCycleStatus">, Partial<Pick<S4ServiceRequestRefObjHistory, "RequestedStart" | "RequestedEnd" | "PostingDate">> {
}

interface S4ServiceRequestRefObjHistoryText {
    ObjectKey: string;
    TextObjType: string;
    TextID: string;
    TextString: string;
    ObjectType: string;
    ObjectID: string;
    HeaderID: string;
    S4RequestRefObjHistory_Nav: S4ServiceRequestRefObjHistory | DeferredContent;
}

type S4ServiceRequestRefObjHistoryTextId = {ObjectType: string,ObjectID: string};

interface EditableS4ServiceRequestRefObjHistoryText extends Pick<S4ServiceRequestRefObjHistoryText, "ObjectKey" | "TextObjType" | "TextID" | "TextString" | "ObjectType" | "ObjectID" | "HeaderID"> {
}

interface S4ServiceRequestTranHistory {
    RelatedObjectID: string;
    RelatedObjectType: string;
    RelatedItemNo: string;
    ObjectID: string;
    ItemNo: string;
    HeaderID: string;
    ObjectType: string;
    S4ServiceOrder_Nav: S4ServiceOrder | DeferredContent;
    S4ServiceRequest_Nav: S4ServiceRequest | DeferredContent;
}

type S4ServiceRequestTranHistoryId = {RelatedObjectID: string,RelatedObjectType: string,RelatedItemNo: string,ObjectID: string,ItemNo: string,ObjectType: string};

interface EditableS4ServiceRequestTranHistory extends Pick<S4ServiceRequestTranHistory, "RelatedObjectID" | "RelatedObjectType" | "RelatedItemNo" | "ObjectID" | "ItemNo" | "HeaderID" | "ObjectType"> {
}

interface SAPUser {
    UserName: string;
    UserId: string;
    AddressNum: string;
    PersonNum: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
}

type SAPUserId = string | {UserId: string};

interface EditableSAPUser extends Pick<SAPUser, "UserName" | "AddressNum" | "PersonNum"> {
}

interface STOScheduleLine {
    ReservationNum: string;
    StockTransportOrderId: string;
    ScheduleLine: string;
    ItemNum: string;
    Batch: string;
    DeliveredQuantity: string;
    DeliveryDate: string;
    IssuedQuantity: string;
    StockTransportOrderItem_Nav: StockTransportOrderItem | DeferredContent;
}

type STOScheduleLineId = {StockTransportOrderId: string,ScheduleLine: string,ItemNum: string};

interface EditableSTOScheduleLine extends Pick<STOScheduleLine, "ReservationNum" | "StockTransportOrderId" | "ScheduleLine" | "ItemNum" | "Batch" | "DeliveredQuantity" | "DeliveryDate" | "IssuedQuantity"> {
}

interface SalesArea {
    SalesOrgUnit: string;
    SalesOrgID: string;
    SalesOffice: string;
    SalesGroup: string;
    Division: string;
    DistributionChannel: string;
}

type SalesAreaId = string | {SalesOrgUnit: string};

interface EditableSalesArea extends Pick<SalesArea, "SalesOrgID" | "SalesOffice" | "SalesGroup" | "Division" | "DistributionChannel"> {
}

interface SalesGroup {
    ShortDescription: string;
    SalesGroup: string;
    Description: string;
    S4BPSalesArea_Nav: Array<S4BPSalesArea> | DeferredContent;
}

type SalesGroupId = string | {SalesGroup: string};

interface EditableSalesGroup extends Pick<SalesGroup, "ShortDescription" | "Description"> {
}

interface SalesOffice {
    ShortDescription: string;
    SalesOffice: string;
    Description: string;
    S4BPSalesArea_Nav: Array<S4BPSalesArea> | DeferredContent;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ServiceItem_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrder_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    S4ServiceQuotation_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type SalesOfficeId = string | {SalesOffice: string};

interface EditableSalesOffice extends Pick<SalesOffice, "ShortDescription" | "Description"> {
}

interface SalesOrg {
    ShortDescription: string;
    SalesOrg: string;
    Description: string;
    S4BPSalesArea_Nav: Array<S4BPSalesArea> | DeferredContent;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    S4ServiceQuotation_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type SalesOrgId = string | {SalesOrg: string};

interface EditableSalesOrg extends Pick<SalesOrg, "ShortDescription" | "Description"> {
}

interface SalesRespOrg {
    ShortDescription: string;
    SalesRespOrg: string;
    Description: string;
    S4BPSalesArea_Nav: Array<S4BPSalesArea> | DeferredContent;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceConfirmation_Nav: Array<S4ServiceConfirmation> | DeferredContent;
    S4ServiceContract_Nav: Array<S4ServiceContract> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    S4ServiceQuotation_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type SalesRespOrgId = string | {SalesRespOrg: string};

interface EditableSalesRespOrg extends Pick<SalesRespOrg, "ShortDescription" | "Description"> {
}

interface ScheduleLine {
    ReservationNum: string;
    PurchaseOrderId: string;
    ItemNum: string;
    Batch: string;
    DeliveredQuantity: string;
    DeliveryDate: string;
    IssuedQuantity: string;
    ScheduleLine: string;
    PurchaseOrderItem_Nav: PurchaseOrderItem | DeferredContent;
    ReservationHeader_Nav: ReservationHeader | DeferredContent;
}

type ScheduleLineId = {PurchaseOrderId: string,ItemNum: string,ScheduleLine: string};

interface EditableScheduleLine extends Pick<ScheduleLine, "ReservationNum" | "PurchaseOrderId" | "ItemNum" | "Batch" | "DeliveredQuantity" | "DeliveryDate" | "IssuedQuantity" | "ScheduleLine"> {
}

interface SearchCondition {
    Name: string;
    Sign: string;
    High: string;
    Low: string;
    Option: string;
    Active: string;
    UserGuid: string;
    RecordNum: string;
    SearchType_Nav: SearchType | null | DeferredContent;
}

type SearchConditionId = {UserGuid: string,RecordNum: string};

interface EditableSearchCondition extends Pick<SearchCondition, "Name" | "Sign" | "High" | "Low" | "Option" | "Active" | "UserGuid" | "RecordNum"> {
}

interface SearchType {
    Name: string;
    SearchCondition_Nav: SearchCondition | null | DeferredContent;
}

type SearchTypeId = string | {Name: string};

interface EditableSearchType {
}

interface ServiceAvailabilityProfile {
    Description: string;
    RuleID: string;
    ServiceProfile: string;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    SeviceItems_Nav: Array<S4ServiceItem> | DeferredContent;
}

type ServiceAvailabilityProfileId = string | {ServiceProfile: string};

interface EditableServiceAvailabilityProfile extends Pick<ServiceAvailabilityProfile, "Description" | "RuleID"> {
}

interface ServiceImpact {
    Impact: string;
    Description: string;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceQuotation_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type ServiceImpactId = string | {Impact: string};

interface EditableServiceImpact extends Pick<ServiceImpact, "Description"> {
}

interface ServiceItemCatDetermine {
    Confirmation: string;
    ResrcePlanning: string;
    TransactionType: string;
    ItemCatGroup: string;
    ItemCatUsage: string;
    Mainitemcat: string;
    ALT_NUM: string;
    ItemCategory: string;
    ObjectType: string;
    Language: string;
    ShortDescription: string;
    ShortDescriptionS: string;
    ShortDescriptionI: string;
    ServiceType: string;
    ValuationType: string;
    SubjectProfile: string;
}

type ServiceItemCatDetermineId = {TransactionType: string,ItemCatGroup: string,Mainitemcat: string,ALT_NUM: string,ObjectType: string};

interface EditableServiceItemCatDetermine extends Pick<ServiceItemCatDetermine, "Confirmation" | "ResrcePlanning" | "TransactionType" | "ItemCatGroup" | "ItemCatUsage" | "Mainitemcat" | "ALT_NUM" | "ItemCategory" | "ObjectType" | "Language" | "ShortDescription" | "ShortDescriptionS" | "ShortDescriptionI" | "ServiceType" | "ValuationType" | "SubjectProfile"> {
}

interface ServiceItemCategory {
    ItemCategory: string;
    Inactive: string;
    TextDetProc: string;
    PartnerDetProc: string;
    StatusProfile: string;
    ObjectType: string;
    ATPProf: string;
    Relevwgtvol: string;
    Structurescope: string;
    OrgDataProf: string;
    Varmatching: string;
    Varmatchact: string;
    DateProfile: string;
    ActionProfile: string;
    CondGroup: string;
    DeliveryGroup: string;
    StatusObjectType: string;
    ConfProc: string;
    TimeRuleName: string;
    CounRuleName: string;
    InspectnRelvnt: string;
    AssignCO: string;
    IncompleteGroup: string;
    FixedDateQty: string;
    IndObject: string;
    Profile: string;
    WoutProduct: string;
    EnhancementProf: string;
    APProcedure: string;
    MandatPredecRef: string;
    FilterID: string;
    ObjRefMand: string;
    DefaultConfig: string;
    SCRelev: string;
    QuantityValueItem: string;
    TerritoryCheck: string;
    Language: string;
    Description: string;
    DescriptionLong: string;
    ShortDescription: string;
    ShortDescriptionLong: string;
    ServiceType: string;
    ValuationType: string;
    SubjectProfile: string;
    ResrcePlanning: string;
    Confirmation: string;
    ReltoCosting: string;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
}

type ServiceItemCategoryId = string | {ItemCategory: string};

interface EditableServiceItemCategory extends Pick<ServiceItemCategory, "Inactive" | "TextDetProc" | "PartnerDetProc" | "StatusProfile" | "ObjectType" | "ATPProf" | "Relevwgtvol" | "Structurescope" | "OrgDataProf" | "Varmatching" | "Varmatchact" | "DateProfile" | "ActionProfile" | "CondGroup" | "DeliveryGroup" | "StatusObjectType" | "ConfProc" | "TimeRuleName" | "CounRuleName" | "InspectnRelvnt" | "AssignCO" | "IncompleteGroup" | "FixedDateQty" | "IndObject" | "Profile" | "WoutProduct" | "EnhancementProf" | "APProcedure" | "MandatPredecRef" | "FilterID" | "ObjRefMand" | "DefaultConfig" | "SCRelev" | "QuantityValueItem" | "TerritoryCheck" | "Language" | "Description" | "DescriptionLong" | "ShortDescription" | "ShortDescriptionLong" | "ServiceType" | "ValuationType" | "SubjectProfile" | "ResrcePlanning" | "Confirmation" | "ReltoCosting"> {
}

interface ServiceItemCategorySchema {
    CatalogTypeDAspectGUID: string;
    CatalogTypeCAspectGUID: string;
    SubjectProfileAspectGUID: string;
    ParentObjectType: string;
    ItemCategory: string;
    S4ServiceConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceItem_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
}

type ServiceItemCategorySchemaId = {ParentObjectType: string,ItemCategory: string};

interface EditableServiceItemCategorySchema extends Pick<ServiceItemCategorySchema, "CatalogTypeDAspectGUID" | "CatalogTypeCAspectGUID" | "SubjectProfileAspectGUID" | "ParentObjectType" | "ItemCategory"> {
}

interface ServiceNoteType {
    ObligatoryText: string;
    AccessSequence: string;
    Redetermination: string;
    TransferType: string;
    Changes: string;
    TransCategory: string;
    Sequence: string;
    TextDetProc: string;
    Description: string;
    TextID: string;
    Textobject: string;
    TransactionType: string;
}

type ServiceNoteTypeId = {TextID: string,Textobject: string,TransactionType: string};

interface EditableServiceNoteType extends Pick<ServiceNoteType, "ObligatoryText" | "AccessSequence" | "Redetermination" | "TransferType" | "Changes" | "TransCategory" | "Sequence" | "TextDetProc" | "Description" | "TextID" | "Textobject" | "TransactionType"> {
}

interface ServiceOrg {
    Description: string;
    ServiceOrg: string;
    ShortDescription: string;
    S4ServiceContractItem_Nav: Array<S4ServiceContractItem> | DeferredContent;
    S4ServiceContract_Nav: Array<S4ServiceContract> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    S4ServiceQuotation_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type ServiceOrgId = string | {ServiceOrg: string};

interface EditableServiceOrg extends Pick<ServiceOrg, "Description" | "ShortDescription"> {
}

interface ServicePriority {
    Priority: string;
    Description: string;
}

type ServicePriorityId = string | {Priority: string};

interface EditableServicePriority extends Pick<ServicePriority, "Description"> {
}

interface ServiceProcessType {
    SubjectProfileAspectGUID: string;
    CatalogTypeCAspectGUID: string;
    CatalogTypeDAspectGUID: string;
    TransCategory: string;
    StatusProfile: string;
    TransactionType: string;
    SubjectProfile: string;
    TransactionType1: string;
    Copyitemno: string;
    Completerefer: string;
    ShortDescription: string;
    Description: string;
}

type ServiceProcessTypeId = {TransCategory: string,TransactionType: string,SubjectProfile: string};

interface EditableServiceProcessType extends Pick<ServiceProcessType, "SubjectProfileAspectGUID" | "CatalogTypeCAspectGUID" | "CatalogTypeDAspectGUID" | "TransCategory" | "StatusProfile" | "TransactionType" | "SubjectProfile" | "TransactionType1" | "Copyitemno" | "Completerefer" | "ShortDescription" | "Description"> {
}

interface ServiceRespOrg {
    ShortDescription: string;
    ServiceRespOrg: string;
    Description: string;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
    S4ServiceQuotation_Nav: Array<S4ServiceQuotation> | DeferredContent;
}

type ServiceRespOrgId = string | {ServiceRespOrg: string};

interface EditableServiceRespOrg extends Pick<ServiceRespOrg, "ShortDescription" | "Description"> {
}

interface ServiceResponseSchema {
    ResponseProf: string;
    Description: string;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
}

type ServiceResponseSchemaId = string | {ResponseProf: string};

interface EditableServiceResponseSchema extends Pick<ServiceResponseSchema, "Description"> {
}

interface ServiceType {
    ServiceType: string;
    ShortDescription: string;
    Description: string;
    S4ConfirmItems_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ContractItems_Nav: Array<S4ServiceContractItem> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
}

type ServiceTypeId = string | {ServiceType: string};

interface EditableServiceType extends Pick<ServiceType, "ShortDescription" | "Description"> {
}

interface ServiceUrgency {
    Urgency: string;
    Description: string;
    S4ServiceOrders_Nav: Array<S4ServiceOrder> | DeferredContent;
    S4ServiceQuotation_Nav: Array<S4ServiceQuotation> | DeferredContent;
    S4ServiceRequest_Nav: Array<S4ServiceRequest> | DeferredContent;
}

type ServiceUrgencyId = string | {Urgency: string};

interface EditableServiceUrgency extends Pick<ServiceUrgency, "Description"> {
}

interface ServiceValuationType {
    Description: string;
    ValuationType: string;
    S4ConfirmationItem_Nav: Array<S4ServiceConfirmationItem> | DeferredContent;
    S4ServiceItems_Nav: Array<S4ServiceItem> | DeferredContent;
    S4ServiceQuotationItem_Nav: Array<S4ServiceQuotationItem> | DeferredContent;
}

type ServiceValuationTypeId = string | {ValuationType: string};

interface EditableServiceValuationType extends Pick<ServiceValuationType, "Description"> {
}

interface ShippingPoint {
    Description: string;
    ShippingPoint: string;
    ReceivingPoint_Nav: Array<ReceivingPoint> | DeferredContent;
}

type ShippingPointId = string | {ShippingPoint: string};

interface EditableShippingPoint extends Pick<ShippingPoint, "Description"> {
}

interface SpecialStockText {
    SpecialStock: string;
    Description: string;
}

type SpecialStockTextId = string | {SpecialStock: string};

interface EditableSpecialStockText extends Pick<SpecialStockText, "Description"> {
}

interface StagingArea {
    StagingAreaText: string;
    DoorNum: string;
    WarehouseNum: string;
    StagingArea: string;
}

type StagingAreaId = {WarehouseNum: string,StagingArea: string};

interface EditableStagingArea extends Pick<StagingArea, "StagingAreaText" | "DoorNum" | "WarehouseNum" | "StagingArea"> {
}

interface StandardTextKey {
    TextKey: string;
    Language: string;
    Description: string;
    LongText: string;
}

type StandardTextKeyId = string | {TextKey: string};

interface EditableStandardTextKey extends Pick<StandardTextKey, "Language" | "Description" | "LongText"> {
}

interface StockTransportOrderHeader {
    Vendor: string;
    SupplyingPlant: string;
    DocumentType: string;
    DocumentStatus: string;
    DocumentCategory: string;
    StockTransportOrderId: string;
    DocumentDate: string | null;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MyInventoryObject_Nav: MyInventoryObject | DeferredContent;
    StockTransportOrderHeaderLongText_Nav: Array<StockTransportOrderHeaderLongText> | DeferredContent;
    StockTransportOrderItem_Nav: Array<StockTransportOrderItem> | DeferredContent;
    Vendor_Nav: Vendor | null | DeferredContent;
}

type StockTransportOrderHeaderId = string | {StockTransportOrderId: string};

interface EditableStockTransportOrderHeader extends Pick<StockTransportOrderHeader, "Vendor" | "SupplyingPlant" | "DocumentType" | "DocumentStatus" | "DocumentCategory">, Partial<Pick<StockTransportOrderHeader, "DocumentDate">> {
}

interface StockTransportOrderHeaderLongText {
    TextId: string;
    ObjectKey: string;
    StockTransportOrderId: string;
    NewTextString: string;
    TextString: string;
    TextObjType: string;
    StockTransportOrderHeader_Nav: StockTransportOrderHeader | DeferredContent;
}

type StockTransportOrderHeaderLongTextId = {TextId: string,ObjectKey: string,StockTransportOrderId: string};

interface EditableStockTransportOrderHeaderLongText extends Pick<StockTransportOrderHeaderLongText, "TextId" | "ObjectKey" | "StockTransportOrderId" | "NewTextString" | "TextString" | "TextObjType"> {
}

interface StockTransportOrderItem {
    StorageBin: string;
    ValuationType: string;
    ValuationCategory: string;
    OrderUOM: string;
    StorageLoc: string;
    FinalDeliveryFlag: string;
    OpenQuantity: string;
    OrderQuantity: string;
    Plant: string;
    ReceivedQuantity: string;
    StockType: string;
    ItemText: string;
    StockTransportOrderId: string;
    MaterialNum: string;
    IssuedQuantity: string;
    DeliveryCompletedFlag: string;
    ItemNum: string;
    SupplierMaterialNum: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialPlant_Nav: MaterialPlant | null | DeferredContent;
    Material_Nav: Material | DeferredContent;
    STOScheduleLine_Nav: Array<STOScheduleLine> | DeferredContent;
    STOSerialNumber_Nav: Array<StockTransportOrderSerialNumber> | DeferredContent;
    StockTransportOrderHeader_Nav: StockTransportOrderHeader | DeferredContent;
}

type StockTransportOrderItemId = {StockTransportOrderId: string,ItemNum: string};

interface EditableStockTransportOrderItem extends Pick<StockTransportOrderItem, "StorageBin" | "ValuationType" | "ValuationCategory" | "OrderUOM" | "StorageLoc" | "FinalDeliveryFlag" | "OpenQuantity" | "OrderQuantity" | "Plant" | "ReceivedQuantity" | "StockType" | "ItemText" | "StockTransportOrderId" | "MaterialNum" | "IssuedQuantity" | "DeliveryCompletedFlag" | "ItemNum" | "SupplierMaterialNum"> {
}

interface StockTransportOrderSerialNumber {
    ItemNumber: string;
    StockTransportOrderId: string;
    SerialNumber: string;
    UniversalItemId: string;
    STOItem_Nav: StockTransportOrderItem | DeferredContent;
}

type StockTransportOrderSerialNumberId = {ItemNumber: string,StockTransportOrderId: string,SerialNumber: string};

interface EditableStockTransportOrderSerialNumber extends Pick<StockTransportOrderSerialNumber, "ItemNumber" | "StockTransportOrderId" | "SerialNumber" | "UniversalItemId"> {
}

interface StorageLocation {
    StorageLocationDesc: string;
    StorageLocation: string;
    Plant: string;
    Plant_Nav: Plant | DeferredContent;
    UserTrunkAssignment_Nav: Array<UserTrunkAssignment> | DeferredContent;
}

type StorageLocationId = {StorageLocation: string,Plant: string};

interface EditableStorageLocation extends Pick<StorageLocation, "StorageLocationDesc" | "StorageLocation" | "Plant"> {
}

interface SurveyAnswer {
    SurveyID: string;
    SurveyVersion: string;
    Language: string;
    Mandatory: string;
    MaxLength: number;
    NodeNum: string;
    NodeNum1: string;
    ReadOnly: string;
    Size: number;
    SurveyAnswer_SurveyDefinition: SurveyDefinition | DeferredContent;
}

type SurveyAnswerId = {SurveyID: string,SurveyVersion: string};

interface EditableSurveyAnswer extends Pick<SurveyAnswer, "SurveyID" | "SurveyVersion" | "Language" | "Mandatory" | "MaxLength" | "NodeNum" | "NodeNum1" | "ReadOnly" | "Size"> {
}

interface SurveyDefinition {
    SurveyID: string;
    SurveyVersion: string;
    Language: string;
    SurveyGUID: string;
    NodeNum: string;
    SurveyNodeType: string;
    SurveyNodeId: string;
    SectionPattern: string;
    RatingFactor: number;
    Style: string;
    Type: string;
    ReadOnly: string;
    SurveyQuestionText: string;
    Selected: string;
    Rating: number;
    MaxLength: number;
    Size: number;
    Mandatory: string;
    TextPosition: string;
    SurveyDef_SurveyList: Array<SurveyList> | DeferredContent;
    SurveyDefinition_SurveyAnswer: Array<SurveyAnswer> | DeferredContent;
    SurveyDefinition_SurveyItem: Array<SurveyItem> | DeferredContent;
    SurveyDefinition_SurveyQuestion: Array<SurveyQuestion> | DeferredContent;
    SurveyDefinition_SurveySection: Array<SurveySection> | DeferredContent;
}

type SurveyDefinitionId = {SurveyID: string,SurveyVersion: string};

interface EditableSurveyDefinition extends Pick<SurveyDefinition, "SurveyID" | "SurveyVersion" | "Language" | "SurveyGUID" | "NodeNum" | "SurveyNodeType" | "SurveyNodeId" | "SectionPattern" | "RatingFactor" | "Style" | "Type" | "ReadOnly" | "SurveyQuestionText" | "Selected" | "Rating" | "MaxLength" | "Size" | "Mandatory" | "TextPosition"> {
}

interface SurveyDetCriteria {
    CriteriaSet: string;
    Category: string;
    Systemstatus: string;
    SalesOrgID: string;
    DistributionChannel: string;
    Division: string;
    TERRITORY: string;
    TARGETGROUP: string;
    ObjectType: string;
    ObjectKey: string;
    Description: string;
}

type SurveyDetCriteriaId = string | {CriteriaSet: string};

interface EditableSurveyDetCriteria extends Pick<SurveyDetCriteria, "Category" | "Systemstatus" | "SalesOrgID" | "DistributionChannel" | "Division" | "TERRITORY" | "TARGETGROUP" | "ObjectType" | "ObjectKey" | "Description"> {
}

interface SurveyDetermination {
    ItemCategory: string;
    QuestionnaireID: string;
    TransactionType: string;
    ValidTo: string | null;
    ValidFrom: string | null;
    Mandatory: string;
    Active: string;
    CriteriaSet: string;
    Language: string;
    ShortDescription: string;
    Determ: string;
    TransCategory: string;
}

type SurveyDeterminationId = {Determ: string,TransCategory: string};

interface EditableSurveyDetermination extends Pick<SurveyDetermination, "ItemCategory" | "QuestionnaireID" | "TransactionType" | "Mandatory" | "Active" | "CriteriaSet" | "Language" | "ShortDescription" | "Determ" | "TransCategory">, Partial<Pick<SurveyDetermination, "ValidTo" | "ValidFrom">> {
}

interface SurveyItem {
    SurveyID: string;
    SurveyVersion: string;
    AnswerId: string;
}

type SurveyItemId = {SurveyID: string,SurveyVersion: string};

interface EditableSurveyItem extends Pick<SurveyItem, "SurveyID" | "SurveyVersion" | "AnswerId"> {
}

interface SurveyList {
    BW: string;
    VersCreation: string;
    Delete: string;
    Change: string;
    Callback: string;
    Callback1: string;
    Public: string;
    ValidFrom: string;
    ValidTo: string;
    SchemaVersion: string;
    Appl: string;
    SurveyValuesGUID: string;
    SurveyVersion1: string;
    TestRanCorrectly: string;
    CreatedOn: string;
    Createdby: string;
    ChangedOn: string;
    Changedby: string;
    TRANSL_EXIST: string;
    Language1: string;
    Status: string;
    ShortDescriptn: string;
    Description: string;
    SurveyQuestionText: string;
    Client: string;
    SurveyID: string;
    SurveyVersion: string;
    SurveyGUID: string;
    Language: string;
    Persistent: string;
    Query: string;
    SurveyList_SurveyDef: SurveyDefinition | DeferredContent;
}

type SurveyListId = {SurveyID: string,SurveyVersion: string};

interface EditableSurveyList extends Pick<SurveyList, "BW" | "VersCreation" | "Delete" | "Change" | "Callback" | "Callback1" | "Public" | "ValidFrom" | "ValidTo" | "SchemaVersion" | "Appl" | "SurveyValuesGUID" | "SurveyVersion1" | "TestRanCorrectly" | "CreatedOn" | "Createdby" | "ChangedOn" | "Changedby" | "TRANSL_EXIST" | "Language1" | "Status" | "ShortDescriptn" | "Description" | "SurveyQuestionText" | "Client" | "SurveyID" | "SurveyVersion" | "SurveyGUID" | "Language" | "Persistent" | "Query"> {
}

interface SurveyQuestion {
    SurveyID: string;
    SurveyVersion: string;
    Language: string;
    SurveyGUID: string;
    NodeNum: string;
    NodeNum1: string;
    SurveyNodeId: string;
    RatingFactor: number;
    SurveyQuestionText: string;
}

type SurveyQuestionId = {SurveyID: string,SurveyVersion: string};

interface EditableSurveyQuestion extends Pick<SurveyQuestion, "SurveyID" | "SurveyVersion" | "Language" | "SurveyGUID" | "NodeNum" | "NodeNum1" | "SurveyNodeId" | "RatingFactor" | "SurveyQuestionText"> {
}

interface SurveySection {
    SurveyID: string;
    SurveyVersion: string;
    Language: string;
    SurveyGUID: string;
    NodeNum: string;
    NodeNum1: string;
    SectionPattern: string;
    SurveyQuestionText: string;
}

type SurveySectionId = {SurveyID: string,SurveyVersion: string};

interface EditableSurveySection extends Pick<SurveySection, "SurveyID" | "SurveyVersion" | "Language" | "SurveyGUID" | "NodeNum" | "NodeNum1" | "SectionPattern" | "SurveyQuestionText"> {
}

interface SystemStatus {
    StatusText: string;
    Status: string;
    SystemStatus: string;
    Language: string;
    MyEquipObjectStatuses_Nav: Array<MyEquipObjectStatus> | DeferredContent;
    MyEquipSystemStatuses_Nav: Array<MyEquipSystemStatus> | DeferredContent;
    MyFuncLocObjectStatuses_Nav: Array<MyFuncLocObjectStatus> | DeferredContent;
    MyFuncLocSystemStatuses_Nav: Array<MyFuncLocSystemStatus> | DeferredContent;
}

type SystemStatusId = string | {SystemStatus: string};

interface EditableSystemStatus extends Pick<SystemStatus, "StatusText" | "Status" | "Language"> {
}

interface UsageUoM {
    Description: string;
    ExternalUoM: string;
    Dimension: string;
    UoM: string;
    Denominator: number;
    Numerator: number;
    DecimalPlaces: number;
}

type UsageUoMId = string | {UoM: string};

interface EditableUsageUoM extends Pick<UsageUoM, "Description" | "ExternalUoM" | "Dimension" | "Denominator" | "Numerator" | "DecimalPlaces"> {
}

interface UserFeature {
    UserPersona: string;
    UserFeature: string;
}

type UserFeatureId = {UserPersona: string,UserFeature: string};

interface EditableUserFeature extends Pick<UserFeature, "UserPersona" | "UserFeature"> {
}

interface UserGeneralInfo {
    SAPUserName: string;
    CPMSRegistrationID: string;
    CPMSUserName: string;
    MobileApp: string;
    UserGuid: string;
}

type UserGeneralInfoId = string | {UserGuid: string};

interface EditableUserGeneralInfo extends Pick<UserGeneralInfo, "SAPUserName" | "CPMSRegistrationID" | "CPMSUserName" | "MobileApp"> {
}

interface UserLocation {
    ObjectGroup: string | null;
    ObjectGroup1: string | null;
    GeometryValFormat: string | null;
    CurrentTimeStamp: string | null;
    MobileObjectStatus: string | null;
    StatusAttribute1: string | null;
    UserGUID: string;
    GeometryValue: string | null;
    StatusAttribute2: string | null;
    ObjectType: string | null;
    ObjectKey: string | null;
}

type UserLocationId = string | {UserGUID: string};

interface EditableUserLocation extends Partial<Pick<UserLocation, "ObjectGroup" | "ObjectGroup1" | "GeometryValFormat" | "CurrentTimeStamp" | "MobileObjectStatus" | "StatusAttribute1" | "GeometryValue" | "StatusAttribute2" | "ObjectType" | "ObjectKey">> {
}

interface UserObjectType {
    Persona: string;
    Object: string;
    Type: string;
}

type UserObjectTypeId = {Persona: string,Object: string,Type: string};

interface EditableUserObjectType extends Pick<UserObjectType, "Persona" | "Object" | "Type"> {
}

interface UserPersona {
    FlagExternal: string;
    PersonaCodeDesc: string;
    FlagStandard: string;
    PersonaCode: string;
    FlagDefault: string;
    UserGUID: string;
    UserPersona: string;
    PersonaType: string;
}

type UserPersonaId = {UserGUID: string,UserPersona: string};

interface EditableUserPersona extends Pick<UserPersona, "FlagExternal" | "PersonaCodeDesc" | "FlagStandard" | "PersonaCode" | "FlagDefault" | "UserGUID" | "UserPersona" | "PersonaType"> {
}

interface UserPreference {
    PreferenceValue: string;
    PreferenceGroup: string;
    PreferenceName: string;
    UserGuid: string;
    RecordId: string;
}

type UserPreferenceId = {UserGuid: string,RecordId: string};

interface EditableUserPreference extends Pick<UserPreference, "PreferenceValue" | "PreferenceGroup" | "PreferenceName" | "UserGuid" | "RecordId"> {
}

interface UserRole {
    UserGuid: string;
    Role: string;
    ObjectType: string;
    UserNameShort: string;
    UserNameLong: string;
    ExternalWorkCenterId: string;
    PositionName: string;
    PositionNameShort: string;
    OrgName: string;
    OrgNameShort: string;
    PersonnelNo: string;
    WorkCenterId: string;
    Plant: string;
    SAPUserId: string;
    PositionOrgId: string;
    OrgId: string;
}

type UserRoleId = {PersonnelNo: string,WorkCenterId: string,Plant: string,SAPUserId: string,PositionOrgId: string,OrgId: string};

interface EditableUserRole extends Pick<UserRole, "UserGuid" | "Role" | "ObjectType" | "UserNameShort" | "UserNameLong" | "ExternalWorkCenterId" | "PositionName" | "PositionNameShort" | "OrgName" | "OrgNameShort" | "PersonnelNo" | "WorkCenterId" | "Plant" | "SAPUserId" | "PositionOrgId" | "OrgId"> {
}

interface UserStatus {
    StatusText: string;
    Status: string;
    UserStatus: string;
    StatusProfile: string;
    Language: string;
    MyEquipUserStatuses_Nav: Array<MyEquipUserStatus> | DeferredContent;
    MyFuncLocUserStatuses_Nav: Array<MyFuncLocUserStatus> | DeferredContent;
}

type UserStatusId = {UserStatus: string,StatusProfile: string};

interface EditableUserStatus extends Pick<UserStatus, "StatusText" | "Status" | "UserStatus" | "StatusProfile" | "Language"> {
}

interface UserSystemInfo {
    SystemSettingValue: string;
    SystemSettingName: string;
    SystemSettingGroup: string;
    UserGuid: string;
    RecordId: string;
}

type UserSystemInfoId = {UserGuid: string,RecordId: string};

interface EditableUserSystemInfo extends Pick<UserSystemInfo, "SystemSettingValue" | "SystemSettingName" | "SystemSettingGroup" | "UserGuid" | "RecordId"> {
}

interface UserTimeEntry {
    OrderId: string;
    OperationNo: string;
    SubOperationNo: string;
    PreferenceGroup: string;
    PreferenceName: string;
    PreferenceValue: string;
    UserId: string;
    RecordId: string;
    UserGUID: string;
    WOHeader_Nav: MyWorkOrderHeader | null | DeferredContent;
    WOOperation_Nav: MyWorkOrderOperation | null | DeferredContent;
    WOSubOperation_Nav: MyWorkOrderSubOperation | DeferredContent;
}

type UserTimeEntryId = {RecordId: string,UserGUID: string};

interface EditableUserTimeEntry extends Pick<UserTimeEntry, "OrderId" | "OperationNo" | "SubOperationNo" | "PreferenceGroup" | "PreferenceName" | "PreferenceValue" | "UserId" | "RecordId" | "UserGUID"> {
}

interface UserTrunkAssignment {
    Active: string;
    AttributeName: string;
    Plant: string;
    StorageLocation: string;
    UserName: string;
    RecordNo: string;
    UserGuid: string;
    Plant_Nav: Plant | null | DeferredContent;
    StorageLocation_Nav: StorageLocation | null | DeferredContent;
}

type UserTrunkAssignmentId = {RecordNo: string,UserGuid: string};

interface EditableUserTrunkAssignment extends Pick<UserTrunkAssignment, "Active" | "AttributeName" | "Plant" | "StorageLocation" | "UserName" | "RecordNo" | "UserGuid"> {
}

interface ValuationType {
    Description: string;
    ValuationArea: string;
    ValuationCategory: string;
    ValuationType: string;
    MaterialDocItem_Nav: Array<MaterialDocItem> | DeferredContent;
    MaterialValuation_Nav: Array<MaterialValuation> | DeferredContent;
    PhysInvDocItem_Nav: Array<PhysicalInventoryDocItem> | DeferredContent;
}

type ValuationTypeId = {ValuationArea: string,ValuationCategory: string,ValuationType: string};

interface EditableValuationType extends Pick<ValuationType, "Description" | "ValuationArea" | "ValuationCategory" | "ValuationType"> {
}

interface VarianceReason {
    Plant: string;
    ReasonText: string;
    VarianceReason: string;
    Confirmations: Array<Confirmation> | DeferredContent;
}

type VarianceReasonId = {Plant: string,VarianceReason: string};

interface EditableVarianceReason extends Pick<VarianceReason, "Plant" | "ReasonText" | "VarianceReason"> {
}

interface Vendor {
    PostingBlock: string;
    PurchaseBlock: string;
    Name1: string;
    AddressNum: string;
    PartnerNum: string;
    Vendor: string;
    Address_Nav: Address | DeferredContent;
    BusinessPartner_Nav: BusinessPartner | DeferredContent;
    PurchaseOrderHeader_Nav: PurchaseOrderHeader | DeferredContent;
    StockTransportOrderHeader_Nav: StockTransportOrderHeader | DeferredContent;
}

type VendorId = string | {Vendor: string};

interface EditableVendor extends Pick<Vendor, "PostingBlock" | "PurchaseBlock" | "Name1" | "AddressNum" | "PartnerNum"> {
}

interface WCMApplication {
    Extension: number;
    OrderId: string | null;
    WCMApproval: string | null;
    ValidFrom: string | null;
    ValidTo: string | null;
    Priority: string;
    FuncLocIdIntern: string;
    EquipId: string;
    TrafficLight: string;
    WorkCenterObjectType: string;
    WorkCenterID: string;
    WCMApplication: string;
    ObjectNumber: string;
    ObjectType: string;
    Usage: string;
    WorkPermitDescr: string;
    PlannerGroup: string;
    PlanningPlant: string;
    ValidFromTime: string;
    ValidToTime: string;
    ActualSystemStatus: string;
    CatalogProfile: string;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    MyEquipments: MyEquipment | null | DeferredContent;
    MyFunctionalLocations: MyFunctionalLocation | null | DeferredContent;
    WCMApplicationAttachments: Array<WCMApplicationAttachment> | DeferredContent;
    WCMApplicationDocuments: Array<WCMApplicationDocument> | DeferredContent;
    WCMApplicationLongtext_Nav: Array<WCMApplicationLongtext> | DeferredContent;
    WCMApplicationOrders: Array<WCMApplicationOrder> | DeferredContent;
    WCMApplicationPartners: Array<WCMApplicationPartner> | DeferredContent;
    WCMApplicationUsages: WCMApplicationUsage | DeferredContent;
    WCMApprovalApplications: Array<WCMApprovalApplication> | DeferredContent;
    WCMApprovalProcesses: Array<WCMApprovalProcess> | DeferredContent;
    WCMCatalogs: Array<WCMCatalog> | DeferredContent;
    WCMRequirements: WCMRequirement | DeferredContent;
    WCMSystemStatuses: Array<WCMSystemStatus> | DeferredContent;
    WCMUserStatuses: Array<WCMUserStatus> | DeferredContent;
    WorkCenters: WorkCenter | DeferredContent;
}

type WCMApplicationId = string | {WCMApplication: string};

interface EditableWCMApplication extends Pick<WCMApplication, "Extension" | "Priority" | "FuncLocIdIntern" | "EquipId" | "TrafficLight" | "WorkCenterObjectType" | "WorkCenterID" | "ObjectNumber" | "ObjectType" | "Usage" | "WorkPermitDescr" | "PlannerGroup" | "PlanningPlant" | "ValidFromTime" | "ValidToTime" | "ActualSystemStatus" | "CatalogProfile">, Partial<Pick<WCMApplication, "OrderId" | "WCMApproval" | "ValidFrom" | "ValidTo">> {
}

interface WCMApplicationAttachment {
    RelationshipID: string;
    ObjectKey: string;
    DocumentID: string;
    WCMApplication: string;
    Document: Document | null | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
}

type WCMApplicationAttachmentId = {RelationshipID: string,ObjectKey: string};

interface EditableWCMApplicationAttachment extends Pick<WCMApplicationAttachment, "RelationshipID" | "ObjectKey" | "DocumentID" | "WCMApplication"> {
}

interface WCMApplicationDocument {
    WCMApplication: string;
    WCMDocument: string;
    WCMApplications: WCMApplication | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMApplicationDocumentId = {WCMApplication: string,WCMDocument: string};

interface EditableWCMApplicationDocument extends Pick<WCMApplicationDocument, "WCMApplication" | "WCMDocument"> {
}

interface WCMApplicationLongtext {
    NewTextString: string;
    TextName: string;
    TextObject: string;
    TextString: string;
    ObjectNumber: string;
    TextType: string;
    Application: string;
    WCMApplication_Nav: WCMApplication | DeferredContent;
}

type WCMApplicationLongtextId = {TextName: string,ObjectNumber: string};

interface EditableWCMApplicationLongtext extends Pick<WCMApplicationLongtext, "NewTextString" | "TextName" | "TextObject" | "TextString" | "ObjectNumber" | "TextType" | "Application"> {
}

interface WCMApplicationOrder {
    WCMApplication: string;
    Order: string;
    MyWorkOrderHeaders: MyWorkOrderHeader | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
}

type WCMApplicationOrderId = {WCMApplication: string,Order: string};

interface EditableWCMApplicationOrder extends Pick<WCMApplicationOrder, "WCMApplication" | "Order"> {
}

interface WCMApplicationPartner {
    ObjectCategory: string;
    PartnerNum: string;
    AddressNumber: string;
    BPNum: string;
    PersonNum: string;
    OldPartner: string;
    PersonnelNum: string;
    AddressExists: string;
    ObjectNumber: string;
    PartnerFunction: string;
    Counter: string;
    WCMApplication: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    BusinessPartner_Nav: BusinessPartner | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
    WCMPartnerFunction_Nav: WCMPartnerFunction | DeferredContent;
}

type WCMApplicationPartnerId = {ObjectNumber: string,PartnerFunction: string,Counter: string};

interface EditableWCMApplicationPartner extends Pick<WCMApplicationPartner, "ObjectCategory" | "PartnerNum" | "AddressNumber" | "BPNum" | "PersonNum" | "OldPartner" | "PersonnelNum" | "AddressExists" | "ObjectNumber" | "PartnerFunction" | "Counter" | "WCMApplication"> {
}

interface WCMApplicationUsage {
    IntNoRange: string;
    ExtNoRange: string;
    ViewProfile: string;
    UsageAutGen: string;
    DescriptUsage: string;
    MaxExtension: number;
    UsageType: string;
    Offset: number;
    Validity: number;
    Extension: number;
    PlanningPlant: string;
    Usage: string;
    WCMApplications: Array<WCMApplication> | DeferredContent;
}

type WCMApplicationUsageId = {PlanningPlant: string,Usage: string};

interface EditableWCMApplicationUsage extends Pick<WCMApplicationUsage, "IntNoRange" | "ExtNoRange" | "ViewProfile" | "UsageAutGen" | "DescriptUsage" | "MaxExtension" | "UsageType" | "Offset" | "Validity" | "Extension" | "PlanningPlant" | "Usage"> {
}

interface WCMApproval {
    CatalogTwoExists: string;
    WCMApplication: string;
    Usage: string;
    ShortText: string;
    LongText: string;
    Delete: string;
    RQTextExists: string;
    CatalogExists: string;
    PlannerGroup: string;
    PlanningPlant: string;
    WorkCenterObjectType: string;
    WorkCenterID: string;
    AuthorizGroup: string;
    ValidFrom: string;
    ValidFrmTime: string;
    ValidTo: string;
    ValidToTime: string;
    OverallCondtn: string;
    RecallTime: string;
    Unit: string;
    Priority: string;
    FuncLoc: string;
    Equipment: string;
    ObjListExists: string;
    Train: string;
    ObjectNumber: string;
    ActualSystemStatus: string;
    WCMApproval: string;
    MyEquipments: MyEquipment | null | DeferredContent;
    MyFunctionalLocations: MyFunctionalLocation | null | DeferredContent;
    WCMApprovalApplications: Array<WCMApprovalApplication> | DeferredContent;
    WCMApprovalAttachments: Array<WCMApprovalAttachment> | DeferredContent;
    WCMApprovalLongtexts: Array<WCMApprovalLongtext> | DeferredContent;
    WCMApprovalOrders: Array<WCMApprovalOrder> | DeferredContent;
    WCMApprovalPartners: Array<WCMApprovalPartner> | DeferredContent;
    WCMSystemStatuses: Array<WCMSystemStatus> | DeferredContent;
    WCMUserStatuses: Array<WCMUserStatus> | DeferredContent;
    WorkCenters: WorkCenter | DeferredContent;
}

type WCMApprovalId = string | {WCMApproval: string};

interface EditableWCMApproval extends Pick<WCMApproval, "CatalogTwoExists" | "WCMApplication" | "Usage" | "ShortText" | "LongText" | "Delete" | "RQTextExists" | "CatalogExists" | "PlannerGroup" | "PlanningPlant" | "WorkCenterObjectType" | "WorkCenterID" | "AuthorizGroup" | "ValidFrom" | "ValidFrmTime" | "ValidTo" | "ValidToTime" | "OverallCondtn" | "RecallTime" | "Unit" | "Priority" | "FuncLoc" | "Equipment" | "ObjListExists" | "Train" | "ObjectNumber" | "ActualSystemStatus"> {
}

interface WCMApprovalApplication {
    WCMApproval: string;
    WCMApplication: string;
    WCMApplications: WCMApplication | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalApplicationId = {WCMApproval: string,WCMApplication: string};

interface EditableWCMApprovalApplication extends Pick<WCMApprovalApplication, "WCMApproval" | "WCMApplication"> {
}

interface WCMApprovalAttachment {
    WCMApproval: string;
    DocumentID: string;
    RelationshipID: string;
    ObjectKey: string;
    Document: Document | null | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalAttachmentId = {RelationshipID: string,ObjectKey: string};

interface EditableWCMApprovalAttachment extends Pick<WCMApprovalAttachment, "WCMApproval" | "DocumentID" | "RelationshipID" | "ObjectKey"> {
}

interface WCMApprovalLongtext {
    NewTextString: string;
    TextObject: string;
    TextString: string;
    ObjectNumber: string;
    TextType: string;
    WCMApproval: string;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalLongtextId = {TextType: string,WCMApproval: string};

interface EditableWCMApprovalLongtext extends Pick<WCMApprovalLongtext, "NewTextString" | "TextObject" | "TextString" | "ObjectNumber" | "TextType" | "WCMApproval"> {
}

interface WCMApprovalOrder {
    Order: string;
    WCMApproval: string;
    MyWorkOrderHeaders: MyWorkOrderHeader | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalOrderId = {Order: string,WCMApproval: string};

interface EditableWCMApprovalOrder extends Pick<WCMApprovalOrder, "Order" | "WCMApproval"> {
}

interface WCMApprovalPartner {
    AddressNumber: string;
    BPNum: string;
    OldPartner: string;
    PersonnelNum: string;
    AddressExists: string;
    PersonNum: string;
    ObjectNumber: string;
    PartnerFunction: string;
    Counter: string;
    ObjectCategory: string;
    PartnerNum: string;
    WCMWorkApproval: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    BusinessPartner_Nav: BusinessPartner | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    PartnerFunctions: PartnerFunction | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
}

type WCMApprovalPartnerId = {ObjectNumber: string,PartnerFunction: string,Counter: string};

interface EditableWCMApprovalPartner extends Pick<WCMApprovalPartner, "AddressNumber" | "BPNum" | "OldPartner" | "PersonnelNum" | "AddressExists" | "PersonNum" | "ObjectNumber" | "PartnerFunction" | "Counter" | "ObjectCategory" | "PartnerNum" | "WCMWorkApproval"> {
}

interface WCMApprovalProcess {
    PermitCategory: string;
    Longtext: string;
    CreatedOn: string | null;
    CreatedBy: string;
    ChangedOn: string | null;
    ChangedBy: string;
    WCMApplication: string;
    WCMDocument: string;
    ObjectNumber: string;
    Counter: string;
    Permit: string;
    IsAuthorized: string;
    WCMApplications: WCMApplication | DeferredContent;
    WCMApprovalProcessLongtexts: WCMApprovalProcessLongtext | DeferredContent;
    WCMApprovalProcessSegments: Array<WCMApprovalProcessSegment> | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMApprovalProcessId = {ObjectNumber: string,Counter: string};

interface EditableWCMApprovalProcess extends Pick<WCMApprovalProcess, "PermitCategory" | "Longtext" | "CreatedBy" | "ChangedBy" | "WCMApplication" | "WCMDocument" | "ObjectNumber" | "Counter" | "Permit" | "IsAuthorized">, Partial<Pick<WCMApprovalProcess, "CreatedOn" | "ChangedOn">> {
}

interface WCMApprovalProcessLongtext {
    TextObject: string;
    TextString: string;
    ObjectNumber: string;
    TextType: string;
    Counter: string;
    WCMApprovalProcess: WCMApprovalProcess | DeferredContent;
}

type WCMApprovalProcessLongtextId = {ObjectNumber: string,Counter: string};

interface EditableWCMApprovalProcessLongtext extends Pick<WCMApprovalProcessLongtext, "TextObject" | "TextString" | "ObjectNumber" | "TextType" | "Counter"> {
}

interface WCMApprovalProcessSegment {
    ObjectNumber: string;
    Counter: string;
    SegmentCounter: string;
    EnteredBy: string;
    CreatedOn: string | null;
    EnteredAt: string | null;
    AppFromDate: string | null;
    AppToDate: string | null;
    AppFromTime: string | null;
    AppToTime: string | null;
    DeactivatedBy: string;
    DeactivatedOn: string | null;
    DeactivatedAt: string | null;
    SegmentInactive: string;
    ApprovedBy: string;
    WCMApprovalProceses: WCMApprovalProcess | DeferredContent;
}

type WCMApprovalProcessSegmentId = {ObjectNumber: string,Counter: string,SegmentCounter: string};

interface EditableWCMApprovalProcessSegment extends Pick<WCMApprovalProcessSegment, "ObjectNumber" | "Counter" | "SegmentCounter" | "EnteredBy" | "DeactivatedBy" | "SegmentInactive" | "ApprovedBy">, Partial<Pick<WCMApprovalProcessSegment, "CreatedOn" | "EnteredAt" | "AppFromDate" | "AppToDate" | "AppFromTime" | "AppToTime" | "DeactivatedOn" | "DeactivatedAt">> {
}

interface WCMCatalog {
    DatabaseAction: string;
    ObjectNumber: string;
    Counter: string;
    Counter1: string;
    Sortfield: string;
    Catalog: string;
    CodeGroup: string;
    Code: string;
    ShortText: string;
    LongText: string;
    Checkbox: string;
    Signature: string;
    Valuation: string;
    Createdby: string;
    Createdon: string | null;
    Createdat: string;
    ChangedBy: string;
    Changedon: string | null;
    LastChangedat: string;
    WCMApplication: string;
    WCMDocumentHeader: string;
    PMCatalogCode: PMCatalogCode | null | DeferredContent;
    WCMApplication_Nav: WCMApplication | null | DeferredContent;
    WCMCatalogLongtext: WCMCatalogLongtext | null | DeferredContent;
    WCMDocumentHeader_Nav: WCMDocumentHeader | null | DeferredContent;
}

type WCMCatalogId = {ObjectNumber: string,Counter: string,Counter1: string};

interface EditableWCMCatalog extends Pick<WCMCatalog, "DatabaseAction" | "ObjectNumber" | "Counter" | "Counter1" | "Sortfield" | "Catalog" | "CodeGroup" | "Code" | "ShortText" | "LongText" | "Checkbox" | "Signature" | "Valuation" | "Createdby" | "Createdat" | "ChangedBy" | "LastChangedat" | "WCMApplication" | "WCMDocumentHeader">, Partial<Pick<WCMCatalog, "Createdon" | "Changedon">> {
}

interface WCMCatalogLongtext {
    TextName: string;
    Textobject: string;
    Item: string;
    Tagcolumn: string;
    TDLINE: string;
    TextID: string;
    TEXT_STRING: string;
    NEW_STRING: string;
    ObjectNumber: string;
    TextID1: string;
    WCDocument: string;
    Item1: string;
    WorkApproval: string;
    Application: string;
    Counter: string;
}

type WCMCatalogLongtextId = {ObjectNumber: string,Counter: string};

interface EditableWCMCatalogLongtext extends Pick<WCMCatalogLongtext, "TextName" | "Textobject" | "Item" | "Tagcolumn" | "TDLINE" | "TextID" | "TEXT_STRING" | "NEW_STRING" | "ObjectNumber" | "TextID1" | "WCDocument" | "Item1" | "WorkApproval" | "Application" | "Counter"> {
}

interface WCMConflictRule {
    Client: string;
    PlanningPlant: string;
    OpGroup: string;
    FirstOpCond: string;
    FirstOpType: string;
    SecondOpCond: string;
    SecondOpType: string;
    MessageType: string;
    Createdby: string;
    Createdon: string | null;
    Createdat: string | null;
}

type WCMConflictRuleId = {PlanningPlant: string,OpGroup: string,FirstOpCond: string,FirstOpType: string,SecondOpCond: string,SecondOpType: string};

interface EditableWCMConflictRule extends Pick<WCMConflictRule, "Client" | "PlanningPlant" | "OpGroup" | "FirstOpCond" | "FirstOpType" | "SecondOpCond" | "SecondOpType" | "MessageType" | "Createdby">, Partial<Pick<WCMConflictRule, "Createdon" | "Createdat">> {
}

interface WCMDocumentHeader {
    IsSelVar: string;
    TimeEF: string | null;
    DateLS: string | null;
    DateEF: string | null;
    TimeES: string | null;
    DateES: string | null;
    TimeLS: string | null;
    DateLF: string | null;
    TimeLF: string | null;
    DatePS: string | null;
    TimePS: string | null;
    FinishTime: string | null;
    Activity: string | null;
    SubnetworkOf: string | null;
    WBSElement: string | null;
    LastChangedat: string | null;
    ChangedOn: string | null;
    ChangedBy: string | null;
    CreatedAt: string | null;
    CreatedOn: string | null;
    CreatedBy: string | null;
    Train: string | null;
    EquipId: string | null;
    ObjListExists: string | null;
    Approvedon: string | null;
    Approvaltime: string | null;
    WCMDocument: string;
    ShortText: string | null;
    PlanningPlant: string | null;
    WorkCenterID: string | null;
    Description: string | null;
    Application: string | null;
    DatePF: string | null;
    TimePF: string | null;
    ActualStartDate: string | null;
    ActualStartTime: string | null;
    ActualFinishDate: string | null;
    ActualFinishTime: string | null;
    RevisionPhase: string | null;
    DocumentLink: string | null;
    StatusProfile: string | null;
    StatusProfileItem: string | null;
    Template: string | null;
    RemarksMt: string | null;
    RemarksOp: string | null;
    OpCardNo: string | null;
    ShiftChief: string | null;
    OTGuardian: string | null;
    OTOperator: string | null;
    OnDutyResponsible: string | null;
    OTStarton: string | null;
    OTEndon: string | null;
    EndTime: string | null;
    ObjectNumber: string | null;
    ObjectType: string | null;
    Usage: string | null;
    LongText: string | null;
    Delete: string | null;
    UGTextExists: string | null;
    TGTextExists: string | null;
    CatalogFirstExists: string | null;
    CatalogSecondExists: string | null;
    WorkCenterObjectType: string | null;
    AuthorizGroup: string | null;
    ValidFromTime: string | null;
    ValidToTime: string | null;
    OverallCondtn: string | null;
    RecallTime: string | null;
    Unit: string | null;
    Priority: string | null;
    FuncLocIdIntern: string | null;
    TrafficLight: string;
    ActualSystemStatus: string;
    PlannerGroup: string | null;
    ValidFromDate: string | null;
    ValidToDate: string | null;
    Basstartdate: string | null;
    StartTime: string | null;
    BasicFinDate: string | null;
    BasicFinTime: string | null;
    SchedStart: string | null;
    SchedStartTime: string | null;
    SchedFinish: string | null;
    Timest: string | null;
    DynamicFormLinkage_Nav: Array<DynamicFormLinkage> | DeferredContent;
    MyEquipments: MyEquipment | null | DeferredContent;
    MyFunctionalLocations: MyFunctionalLocation | null | DeferredContent;
    PMMobileStatus: PMMobileStatus | DeferredContent;
    WCMApplicationDocuments: Array<WCMApplicationDocument> | DeferredContent;
    WCMApprovalProcesses: Array<WCMApprovalProcess> | DeferredContent;
    WCMCatalogs: Array<WCMCatalog> | DeferredContent;
    WCMDocumentHeaderAttachments: Array<WCMDocumentHeaderAttachment> | DeferredContent;
    WCMDocumentHeaderLongtexts: Array<WCMDocumentHeaderLongtext> | DeferredContent;
    WCMDocumentItems: Array<WCMDocumentItem> | DeferredContent;
    WCMDocumentPartners: Array<WCMDocumentPartner> | DeferredContent;
    WCMDocumentUsages: WCMDocumentUsage | DeferredContent;
    WCMSystemStatuses: Array<WCMSystemStatus> | DeferredContent;
    WCMUserStatuses: Array<WCMUserStatus> | DeferredContent;
    WorkCenters: WorkCenter | DeferredContent;
}

type WCMDocumentHeaderId = string | {WCMDocument: string};

interface EditableWCMDocumentHeader extends Pick<WCMDocumentHeader, "IsSelVar" | "TrafficLight" | "ActualSystemStatus">, Partial<Pick<WCMDocumentHeader, "TimeEF" | "DateLS" | "DateEF" | "TimeES" | "DateES" | "TimeLS" | "DateLF" | "TimeLF" | "DatePS" | "TimePS" | "FinishTime" | "Activity" | "SubnetworkOf" | "WBSElement" | "LastChangedat" | "ChangedOn" | "ChangedBy" | "CreatedAt" | "CreatedOn" | "CreatedBy" | "Train" | "EquipId" | "ObjListExists" | "Approvedon" | "Approvaltime" | "ShortText" | "PlanningPlant" | "WorkCenterID" | "Description" | "Application" | "DatePF" | "TimePF" | "ActualStartDate" | "ActualStartTime" | "ActualFinishDate" | "ActualFinishTime" | "RevisionPhase" | "DocumentLink" | "StatusProfile" | "StatusProfileItem" | "Template" | "RemarksMt" | "RemarksOp" | "OpCardNo" | "ShiftChief" | "OTGuardian" | "OTOperator" | "OnDutyResponsible" | "OTStarton" | "OTEndon" | "EndTime" | "ObjectNumber" | "ObjectType" | "Usage" | "LongText" | "Delete" | "UGTextExists" | "TGTextExists" | "CatalogFirstExists" | "CatalogSecondExists" | "WorkCenterObjectType" | "AuthorizGroup" | "ValidFromTime" | "ValidToTime" | "OverallCondtn" | "RecallTime" | "Unit" | "Priority" | "FuncLocIdIntern" | "PlannerGroup" | "ValidFromDate" | "ValidToDate" | "Basstartdate" | "StartTime" | "BasicFinDate" | "BasicFinTime" | "SchedStart" | "SchedStartTime" | "SchedFinish" | "Timest">> {
}

interface WCMDocumentHeaderAttachment {
    RelationshipID: string;
    ObjectKey: string;
    DocumentID: string;
    WCMDocument: string;
    Document: Document | null | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMDocumentHeaderAttachmentId = {RelationshipID: string,ObjectKey: string};

interface EditableWCMDocumentHeaderAttachment extends Pick<WCMDocumentHeaderAttachment, "RelationshipID" | "ObjectKey" | "DocumentID" | "WCMDocument"> {
}

interface WCMDocumentHeaderLongtext {
    NewTextString: string;
    TextObject: string;
    TextString: string;
    ObjectNumber: string;
    TextType: string;
    WCMDocument: string;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMDocumentHeaderLongtextId = {TextType: string,WCMDocument: string};

interface EditableWCMDocumentHeaderLongtext extends Pick<WCMDocumentHeaderLongtext, "NewTextString" | "TextObject" | "TextString" | "ObjectNumber" | "TextType" | "WCMDocument"> {
}

interface WCMDocumentItem {
    IsSelVar: string;
    Client: string | null;
    WCMDocument: string;
    WCMDocumentItem: string;
    ObjectNumber: string | null;
    ItemCategory: string | null;
    Sequence: string | null;
    Predecessor: string | null;
    Successor: string | null;
    TechObject: string | null;
    ItemCategoryCC: string | null;
    ShortText: string | null;
    OpGroup: string | null;
    TaggingStep: string | null;
    TaggingCond: string | null;
    TaggingType: string | null;
    TagSequence: string | null;
    TaggingComment: string | null;
    UntaggingStep: string | null;
    UntagCond: string | null;
    UntaggingType: string | null;
    UntSequence: string | null;
    UntagComment: string | null;
    PhysBlocking: string | null;
    BlockingType: string | null;
    LockNumber: string | null;
    TagRequired: string | null;
    FuncLoc: string | null;
    Equipment: string | null;
    FCODE: string;
    PrintFormatTag: string | null;
    Tag: string | null;
    PrintFormatUntag: string | null;
    TestTag: string | null;
    SwitchingLoc: string | null;
    Location: string | null;
    LongText: string | null;
    DocumentLink: string | null;
    Template: string | null;
    Name: string | null;
    MyEquipments: MyEquipment | null | DeferredContent;
    MyFunctionalLocations: MyFunctionalLocation | null | DeferredContent;
    PMMobileStatus: PMMobileStatus | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
    WCMDocumentItemAttachments: Array<WCMDocumentItemAttachment> | DeferredContent;
    WCMDocumentItemLongtexts: Array<WCMDocumentItemLongtext> | DeferredContent;
    WCMDocumentTechnicalObjects: WCMDocumentTechnicalObject | null | DeferredContent;
    WCMOpGroup_Nav: WCMOpGroup | null | DeferredContent;
    WCMSystemStatuses: Array<WCMSystemStatus> | DeferredContent;
    WCMUserStatuses: Array<WCMUserStatus> | DeferredContent;
}

type WCMDocumentItemId = {WCMDocument: string,WCMDocumentItem: string};

interface EditableWCMDocumentItem extends Pick<WCMDocumentItem, "IsSelVar" | "WCMDocument" | "WCMDocumentItem" | "FCODE">, Partial<Pick<WCMDocumentItem, "Client" | "ObjectNumber" | "ItemCategory" | "Sequence" | "Predecessor" | "Successor" | "TechObject" | "ItemCategoryCC" | "ShortText" | "OpGroup" | "TaggingStep" | "TaggingCond" | "TaggingType" | "TagSequence" | "TaggingComment" | "UntaggingStep" | "UntagCond" | "UntaggingType" | "UntSequence" | "UntagComment" | "PhysBlocking" | "BlockingType" | "LockNumber" | "TagRequired" | "FuncLoc" | "Equipment" | "PrintFormatTag" | "Tag" | "PrintFormatUntag" | "TestTag" | "SwitchingLoc" | "Location" | "LongText" | "DocumentLink" | "Template" | "Name">> {
}

interface WCMDocumentItemAttachment {
    ObjectKey: string;
    WCMDocumentItemObjNr: string;
    RelationshipID: string;
    DocumentID: string;
    WCMDocument: string;
    WCMDocumentItem: string;
    Document: Document | null | DeferredContent;
    WCMDocumentItems: WCMDocumentItem | DeferredContent;
}

type WCMDocumentItemAttachmentId = {ObjectKey: string,RelationshipID: string};

interface EditableWCMDocumentItemAttachment extends Pick<WCMDocumentItemAttachment, "ObjectKey" | "WCMDocumentItemObjNr" | "RelationshipID" | "DocumentID" | "WCMDocument" | "WCMDocumentItem"> {
}

interface WCMDocumentItemLongtext {
    TextObject: string;
    TextString: string;
    ObjectNumber: string;
    TextType: string;
    WCMDocument: string;
    WCMDocumentItem: string;
    WCMDocumentItems: WCMDocumentItem | DeferredContent;
}

type WCMDocumentItemLongtextId = {TextType: string,WCMDocument: string,WCMDocumentItem: string};

interface EditableWCMDocumentItemLongtext extends Pick<WCMDocumentItemLongtext, "TextObject" | "TextString" | "ObjectNumber" | "TextType" | "WCMDocument" | "WCMDocumentItem"> {
}

interface WCMDocumentPartner {
    BPNum: string;
    PersonNum: string;
    PersonnelNum: string;
    AddressExists: string;
    OldPartner: string;
    ObjectNumber: string;
    PartnerFunction: string;
    Counter: string;
    ObjectCategory: string;
    PartnerNum: string;
    AddressNumber: string;
    WCMDocument: string;
    AddressAtWork_Nav: AddressAtWork | DeferredContent;
    Address_Nav: Address | DeferredContent;
    BusinessPartner_Nav: BusinessPartner | DeferredContent;
    Employee_Nav: Employee | DeferredContent;
    PartnerFunctions: PartnerFunction | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMDocumentPartnerId = {ObjectNumber: string,PartnerFunction: string,Counter: string};

interface EditableWCMDocumentPartner extends Pick<WCMDocumentPartner, "BPNum" | "PersonNum" | "PersonnelNum" | "AddressExists" | "OldPartner" | "ObjectNumber" | "PartnerFunction" | "Counter" | "ObjectCategory" | "PartnerNum" | "AddressNumber" | "WCMDocument"> {
}

interface WCMDocumentTechnicalObject {
    TechObjectInternal: string;
    TechObjectExternal: string;
    ItemCategory: string;
    ShortText: string;
    WCMDocumentItems: Array<WCMDocumentItem> | DeferredContent;
}

type WCMDocumentTechnicalObjectId = string | {TechObjectInternal: string};

interface EditableWCMDocumentTechnicalObject extends Pick<WCMDocumentTechnicalObject, "TechObjectExternal" | "ItemCategory" | "ShortText"> {
}

interface WCMDocumentUsage {
    Specification: string;
    OptnProtection: string;
    MultipleTag: string;
    MobProcessing: string;
    Step: string;
    MDTagging: string;
    UsageType: string;
    IntNoRange: string;
    ExtNoRange: string;
    ViewProfile: string;
    UsageAutGen: string;
    Tag: string;
    PrintTag: string;
    UntagTemp: string;
    PrintTestTag: string;
    Untag: string;
    BlockApproval: string;
    BlApprTag: string;
    BlApprTU: string;
    BlAppUntag: string;
    UsageDescription: string;
    Usage: string;
    PlanningPlant: string;
    WCMDocumentHeaders: Array<WCMDocumentHeader> | DeferredContent;
}

type WCMDocumentUsageId = {Usage: string,PlanningPlant: string};

interface EditableWCMDocumentUsage extends Pick<WCMDocumentUsage, "Specification" | "OptnProtection" | "MultipleTag" | "MobProcessing" | "Step" | "MDTagging" | "UsageType" | "IntNoRange" | "ExtNoRange" | "ViewProfile" | "UsageAutGen" | "Tag" | "PrintTag" | "UntagTemp" | "PrintTestTag" | "Untag" | "BlockApproval" | "BlApprTag" | "BlApprTU" | "BlAppUntag" | "UsageDescription" | "Usage" | "PlanningPlant"> {
}

interface WCMItemCategory {
    ItemCategoryCC: string;
    ItemCategory: string;
    ItemCategoryText: string;
}

type WCMItemCategoryId = string | {ItemCategory: string};

interface EditableWCMItemCategory extends Pick<WCMItemCategory, "ItemCategoryCC" | "ItemCategoryText"> {
}

interface WCMModelType {
    WCMModel: string;
    PlanningPlant: string;
}

type WCMModelTypeId = string | {PlanningPlant: string};

interface EditableWCMModelType extends Pick<WCMModelType, "WCMModel"> {
}

interface WCMObject {
    TemplateObjectType: string;
    BlockStatGrp: string;
    Usage: string;
    DisplayDialogBox: string;
    TemplateSubObjectType: string;
    ShortText: string;
    BORObjectType: string;
    CatalogProfile: string;
    ListType2: string;
    Catalog2: string;
    ListType1: string;
    Catalog1: string;
    StatusProfile: string;
    PartnDetProc: string;
    ExtNoRange: string;
    IntNoRange: string;
    ObjectName: string;
    BlAppStatGrp: string;
    Client: string;
    PlanningPlant: string;
    ObjectType: string;
    WCMObjectType: string;
    CanBeCreated: string;
    ChangePossible: string;
    CMRestricted: string;
    Direction: string;
    Create: string;
    Change: string;
    Display: string;
    Choose: string;
    PriorityType: string;
}

type WCMObjectId = {PlanningPlant: string,ObjectType: string,WCMObjectType: string};

interface EditableWCMObject extends Pick<WCMObject, "TemplateObjectType" | "BlockStatGrp" | "Usage" | "DisplayDialogBox" | "TemplateSubObjectType" | "ShortText" | "BORObjectType" | "CatalogProfile" | "ListType2" | "Catalog2" | "ListType1" | "Catalog1" | "StatusProfile" | "PartnDetProc" | "ExtNoRange" | "IntNoRange" | "ObjectName" | "BlAppStatGrp" | "Client" | "PlanningPlant" | "ObjectType" | "WCMObjectType" | "CanBeCreated" | "ChangePossible" | "CMRestricted" | "Direction" | "Create" | "Change" | "Display" | "Choose" | "PriorityType"> {
}

interface WCMObjectApproval {
    PlanningPlant: string;
    ObjectType: string;
    WCMObjectType: string;
    Permit: string;
    HierarchyLevel: string;
    ReltoProcessFlag: string;
    Direction: string;
    CopyAutomaticallyFlag: string;
    AppMandatoryFlag: string;
    RevokeApprovalFlag: string;
    ApprovalStatusFlag: string;
    SysStIssue: string;
    AssgmtRequiredFlag: string;
    IssueAutomaticFlag: string;
    Agent: string;
    UsrStIssue: string;
    RevokingStatGrp: string;
    CopyApprovalsFlag: string;
    ValidityReqd: string;
    Usage: string;
    UsageType: string;
    PermitText: string;
}

type WCMObjectApprovalId = {PlanningPlant: string,ObjectType: string,WCMObjectType: string,Permit: string};

interface EditableWCMObjectApproval extends Pick<WCMObjectApproval, "PlanningPlant" | "ObjectType" | "WCMObjectType" | "Permit" | "HierarchyLevel" | "ReltoProcessFlag" | "Direction" | "CopyAutomaticallyFlag" | "AppMandatoryFlag" | "RevokeApprovalFlag" | "ApprovalStatusFlag" | "SysStIssue" | "AssgmtRequiredFlag" | "IssueAutomaticFlag" | "Agent" | "UsrStIssue" | "RevokingStatGrp" | "CopyApprovalsFlag" | "ValidityReqd" | "Usage" | "UsageType" | "PermitText"> {
}

interface WCMObjectList {
    ObjectNumber: string;
    TechObject: string;
    ItemCategory: string;
    Sortfield: string;
    MyEquipment_Nav: MyEquipment | null | DeferredContent;
    MyFunctionalLocation_Nav: MyFunctionalLocation | null | DeferredContent;
}

type WCMObjectListId = {ObjectNumber: string,TechObject: string,ItemCategory: string};

interface EditableWCMObjectList extends Pick<WCMObjectList, "ObjectNumber" | "TechObject" | "ItemCategory" | "Sortfield"> {
}

interface WCMOpCondition {
    OpCondition: string;
    OpConditionText: string;
}

type WCMOpConditionId = string | {OpCondition: string};

interface EditableWCMOpCondition extends Pick<WCMOpCondition, "OpConditionText"> {
}

interface WCMOpGroup {
    OpGroup: string;
    TextOpGroup: string;
    WCMDocumentItem_Nav: Array<WCMDocumentItem> | DeferredContent;
}

type WCMOpGroupId = string | {OpGroup: string};

interface EditableWCMOpGroup extends Pick<WCMOpGroup, "TextOpGroup"> {
}

interface WCMPartnerFunction {
    PartnerFunction: string;
    PartnerType: string;
    Description: string;
    WCMApplicationPartner_Nav: WCMApplicationPartner | null | DeferredContent;
}

type WCMPartnerFunctionId = string | {PartnerFunction: string};

interface EditableWCMPartnerFunction extends Pick<WCMPartnerFunction, "PartnerType" | "Description"> {
}

interface WCMPermitCategory {
    PermitCategory: string;
    PermitCatText: string;
}

type WCMPermitCategoryId = string | {PermitCategory: string};

interface EditableWCMPermitCategory extends Pick<WCMPermitCategory, "PermitCatText"> {
}

interface WCMPhysicalBlockingType {
    PlanningPlant: string;
    BlockingType: string;
    BlockingTypeText: string;
}

type WCMPhysicalBlockingTypeId = {PlanningPlant: string,BlockingType: string};

interface EditableWCMPhysicalBlockingType extends Pick<WCMPhysicalBlockingType, "PlanningPlant" | "BlockingType" | "BlockingTypeText"> {
}

interface WCMPrintFormatTag {
    ShortText: string;
    PrintFormat: string;
    PrintCategory: string;
    PlanningPlant: string;
}

type WCMPrintFormatTagId = {PrintFormat: string,PrintCategory: string,PlanningPlant: string};

interface EditableWCMPrintFormatTag extends Pick<WCMPrintFormatTag, "ShortText" | "PrintFormat" | "PrintCategory" | "PlanningPlant"> {
}

interface WCMRequirement {
    LiftingOps: string;
    OtherActiv: string;
    Nightwork: string;
    WorkatHeight: string;
    OverheadWork: string;
    Replacement: string;
    Manholes: string;
    CleaningWork: string;
    DemolitionWork: string;
    Ventilation: string;
    WaterSupply: string;
    Work: string;
    SimultanWorks: string;
    RestructWork: string;
    PaintingWork: string;
    Checking: string;
    OtherWork: string;
    Depress: string;
    DrngEmptg: string;
    ClngHCFreeing: string;
    VentgExtraVent: string;
    OilandGas: string;
    Radiation: string;
    RegularInsp: string;
    GasMeas: string;
    Fire: string;
    GuardRadio: string;
    BlockCover: string;
    BarriersSigns: string;
    PA: string;
    LocateEarth: string;
    ReqmtsSea: string;
    ReqmtsHeight: string;
    HSEDatasheet: string;
    JSA: string;
    LockoutTagout: string;
    Explosives: string;
    ExtingMedia: string;
    FireWatch: string;
    ExternalBodies: string;
    Instruction: string;
    Equipment: string;
    InitialList: string;
    SafetyStaff: string;
    More: string;
    SecureInstall: string;
    PressTesting: string;
    OpenSea: string;
    HazardousSubs: string;
    RadioactMatl: string;
    Wells: string;
    ObjectNumber: string;
    HotWorkA: string;
    HotWorkB: string;
    Entry: string;
    Isolation: string;
    CmHnSystems: string;
    WCMApplications: WCMApplication | DeferredContent;
}

type WCMRequirementId = string | {ObjectNumber: string};

interface EditableWCMRequirement extends Pick<WCMRequirement, "LiftingOps" | "OtherActiv" | "Nightwork" | "WorkatHeight" | "OverheadWork" | "Replacement" | "Manholes" | "CleaningWork" | "DemolitionWork" | "Ventilation" | "WaterSupply" | "Work" | "SimultanWorks" | "RestructWork" | "PaintingWork" | "Checking" | "OtherWork" | "Depress" | "DrngEmptg" | "ClngHCFreeing" | "VentgExtraVent" | "OilandGas" | "Radiation" | "RegularInsp" | "GasMeas" | "Fire" | "GuardRadio" | "BlockCover" | "BarriersSigns" | "PA" | "LocateEarth" | "ReqmtsSea" | "ReqmtsHeight" | "HSEDatasheet" | "JSA" | "LockoutTagout" | "Explosives" | "ExtingMedia" | "FireWatch" | "ExternalBodies" | "Instruction" | "Equipment" | "InitialList" | "SafetyStaff" | "More" | "SecureInstall" | "PressTesting" | "OpenSea" | "HazardousSubs" | "RadioactMatl" | "Wells" | "HotWorkA" | "HotWorkB" | "Entry" | "Isolation" | "CmHnSystems"> {
}

interface WCMSwitchingData {
    PlanningPlant: string;
    OpGroup: string;
    TaggingCond: string;
    TaggingType: string;
    UntagCond: string;
    UntaggingType: string;
    PhysBlocking: string;
    TagRequired: string;
    Useas: string;
}

type WCMSwitchingDataId = {PlanningPlant: string,OpGroup: string,TaggingCond: string};

interface EditableWCMSwitchingData extends Pick<WCMSwitchingData, "PlanningPlant" | "OpGroup" | "TaggingCond" | "TaggingType" | "UntagCond" | "UntaggingType" | "PhysBlocking" | "TagRequired" | "Useas"> {
}

interface WCMSystemStatus {
    ChangeNumber: string;
    WCMApproval: string;
    WCMApplication: string;
    WCMDocument: string;
    WCMDocumentItem: string;
    StatusInact: string;
    Position: string;
    Priority: string;
    StatusNumber: string;
    ChangeDate: string | null;
    ChangeTime: string | null;
    ObjectNumber: string;
    ObjectType: string;
    StatusProfile: string;
    Status: string;
    SystemStatuses: SystemStatus | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
    WCMDocumentItems: WCMDocumentItem | DeferredContent;
}

type WCMSystemStatusId = {ChangeNumber: string,ObjectNumber: string,Status: string};

interface EditableWCMSystemStatus extends Pick<WCMSystemStatus, "ChangeNumber" | "WCMApproval" | "WCMApplication" | "WCMDocument" | "WCMDocumentItem" | "StatusInact" | "Position" | "Priority" | "StatusNumber" | "ObjectNumber" | "ObjectType" | "StatusProfile" | "Status">, Partial<Pick<WCMSystemStatus, "ChangeDate" | "ChangeTime">> {
}

interface WCMUserStatus {
    ChangeNumber: string;
    ObjectNumber: string;
    ObjectType: string;
    StatusProfile: string;
    Status: string;
    StatusInact: string;
    Position: string;
    Priority: string;
    StatusNumber: string;
    ChangeDate: string;
    ChangeTime: string;
    WCMApproval: string;
    WCMApplication: string;
    WCMDocument: string;
    WCMDocumentItem: string;
    UserStatus: UserStatus | DeferredContent;
    WCMApplications: WCMApplication | DeferredContent;
    WCMApprovals: WCMApproval | DeferredContent;
    WCMDocumentHeaders: WCMDocumentHeader | DeferredContent;
}

type WCMUserStatusId = {ChangeNumber: string,ObjectNumber: string,StatusProfile: string,Status: string};

interface EditableWCMUserStatus extends Pick<WCMUserStatus, "ChangeNumber" | "ObjectNumber" | "ObjectType" | "StatusProfile" | "Status" | "StatusInact" | "Position" | "Priority" | "StatusNumber" | "ChangeDate" | "ChangeTime" | "WCMApproval" | "WCMApplication" | "WCMDocument" | "WCMDocumentItem"> {
}

interface WCMWorkReqText {
    PlanningPlant: string;
    UsageType: string;
    GroupTitle: string;
    PropertyName: string;
    PropertyLabel: string;
    PropertyVisible: string;
    GroupId: string;
}

type WCMWorkReqTextId = string | {PropertyName: string};

interface EditableWCMWorkReqText extends Pick<WCMWorkReqText, "PlanningPlant" | "UsageType" | "GroupTitle" | "PropertyLabel" | "PropertyVisible" | "GroupId"> {
}

interface WarehouseActivityArea {
    WarehouseNo: string;
    ActivityArea: string;
    Description: string;
}

type WarehouseActivityAreaId = {WarehouseNo: string,ActivityArea: string};

interface EditableWarehouseActivityArea extends Pick<WarehouseActivityArea, "WarehouseNo" | "ActivityArea" | "Description"> {
}

interface WarehouseExceptionCode {
    ProcCategory: string;
    WarehouseNo: string;
    ExceptionCode: string;
    Description: string;
    InternalProcessCode: string;
}

type WarehouseExceptionCodeId = {ProcCategory: string,WarehouseNo: string,ExceptionCode: string};

interface EditableWarehouseExceptionCode extends Pick<WarehouseExceptionCode, "ProcCategory" | "WarehouseNo" | "ExceptionCode" | "Description" | "InternalProcessCode"> {
}

interface WarehouseGoodsReceipt {
    DocumentCat: string;
    DocumentID_Raw: string;
    DocumentID: string;
}

type WarehouseGoodsReceiptId = {DocumentCat: string,DocumentID: string};

interface EditableWarehouseGoodsReceipt extends Pick<WarehouseGoodsReceipt, "DocumentCat" | "DocumentID_Raw" | "DocumentID"> {
}

interface WarehouseInboundDelivery {
    DocID: string;
    DocCategory: string;
    DocumentType: string;
    EWMDeliveryNum: string;
    LEDeliveryNum: string;
    PurchaseOrder: string;
    CompletionStatus: string;
    PackingStatus: string;
    GRStatus: string;
    PlannedDeliveryDate: string | null;
    ManufactOrder: string;
    ASN: string;
    BillOfLading: string;
    Carrier: string;
    Vendor: string;
    WarehouseNum: string;
    DocumentID: string;
    PutawayPlannedStatus: string;
    UnloadingPoint: string;
    CompletionStatusValue: string;
    PackingStatusValue: string;
    GRStatusValue: string;
    PutawayPlannedStatusValue: string;
    MaintenanceOrder: string;
    WarehouseInboundDeliveryItem_Nav: Array<WarehouseInboundDeliveryItem> | DeferredContent;
    WarehouseTask_Nav: Array<WarehouseTask> | DeferredContent;
}

type WarehouseInboundDeliveryId = string | {DocumentID: string};

interface EditableWarehouseInboundDelivery extends Pick<WarehouseInboundDelivery, "DocID" | "DocCategory" | "DocumentType" | "EWMDeliveryNum" | "LEDeliveryNum" | "PurchaseOrder" | "CompletionStatus" | "PackingStatus" | "GRStatus" | "ManufactOrder" | "ASN" | "BillOfLading" | "Carrier" | "Vendor" | "WarehouseNum" | "PutawayPlannedStatus" | "UnloadingPoint" | "CompletionStatusValue" | "PackingStatusValue" | "GRStatusValue" | "PutawayPlannedStatusValue" | "MaintenanceOrder">, Partial<Pick<WarehouseInboundDelivery, "PlannedDeliveryDate">> {
}

interface WarehouseInboundDeliveryItem {
    DocCategory: string;
    DocumentNumber: string;
    ItemNumber: string;
    ItemCategory: string;
    ItemType: string;
    Product: string;
    BatchNumber: string;
    Quantity: string;
    UnitofMeasure: string;
    StockType: string;
    DocumentID: string;
    PackingStatus: string;
    GRStatus: string;
    PutawayPlannedStatus: string;
    DescStockType: string;
    StorageBin: string;
    ProductDescription: string;
    OpenPackableQuantity: string;
    Serialized: string;
    PackingStatusValue: string;
    GRStatusValue: string;
    PutawayPlannedStatusValue: string;
    ItemID: string;
    PackedQuantity: string;
    HandlingUnitItem_Nav: Array<HandlingUnitItem> | DeferredContent;
    SerialNumber_Nav: Array<WarehouseInboundDeliveryItemSerial> | DeferredContent;
    WarehouseInboundDelivery_Nav: WarehouseInboundDelivery | DeferredContent;
    WarehouseTask_Nav: Array<WarehouseTask> | DeferredContent;
}

type WarehouseInboundDeliveryItemId = {DocumentID: string,ItemID: string};

interface EditableWarehouseInboundDeliveryItem extends Pick<WarehouseInboundDeliveryItem, "DocCategory" | "DocumentNumber" | "ItemNumber" | "ItemCategory" | "ItemType" | "Product" | "BatchNumber" | "Quantity" | "UnitofMeasure" | "StockType" | "DocumentID" | "PackingStatus" | "GRStatus" | "PutawayPlannedStatus" | "DescStockType" | "StorageBin" | "ProductDescription" | "OpenPackableQuantity" | "Serialized" | "PackingStatusValue" | "GRStatusValue" | "PutawayPlannedStatusValue" | "ItemID" | "PackedQuantity"> {
}

interface WarehouseInboundDeliveryItemSerial {
    DocumentID: string;
    ItemID: string;
    SerialNumber: string;
    GUIDStock: string;
    SNProcStatus: string;
    HandlingUnit: string;
    WarehouseInboundDeliveryItem_Nav: WarehouseInboundDeliveryItem | DeferredContent;
}

type WarehouseInboundDeliveryItemSerialId = {DocumentID: string,ItemID: string,SerialNumber: string};

interface EditableWarehouseInboundDeliveryItemSerial extends Pick<WarehouseInboundDeliveryItemSerial, "DocumentID" | "ItemID" | "SerialNumber" | "GUIDStock" | "SNProcStatus" | "HandlingUnit"> {
}

interface WarehouseMovementReason {
    WarehouseNo: string;
    MovementReason: string;
    Description: string;
}

type WarehouseMovementReasonId = {WarehouseNo: string,MovementReason: string};

interface EditableWarehouseMovementReason extends Pick<WarehouseMovementReason, "WarehouseNo" | "MovementReason" | "Description"> {
}

interface WarehouseNum {
    WarehouseNo: string;
    Description: string;
}

type WarehouseNumId = string | {WarehouseNo: string};

interface EditableWarehouseNum extends Pick<WarehouseNum, "Description"> {
}

interface WarehouseOrder {
    WOStatus: string;
    WarehouseNo: string;
    ActivityArea: string;
    StorageType: string;
    StorageBin: string;
    CreatedBy: string;
    Resource: string;
    DeliveryDate: string | null;
    TotalWeight: string;
    NetWeight: string;
    Volume: string;
    AssignRSRC: string;
    NoOfWHT: string;
    ReferenceDoc: string;
    WOCreationRule: string;
    Queue: string;
    WOProcessType: string;
    HazardousSubs: string;
    WOCRCategory: string;
    Delivery: string;
    WarehouseOrder: string;
    CreationTime: string;
    UnitofWeight: string;
    VolumeUnit: string;
    Processor: string;
    SplitWO: string;
    CreationDateTimeWH: string;
    UnassignRSRC: string;
    WarehouseOrderPickHU_Nav: Array<WarehousePickHU> | DeferredContent;
    WarehouseOrderQueue_Nav: WarehouseOrderQueue | null | DeferredContent;
    WarehousePhysicalInventory_Nav: Array<WarehousePhysicalInventory> | DeferredContent;
    WarehouseProcessType_Nav: WarehouseProcessType | null | DeferredContent;
    WarehouseResource_Nav: WarehouseResource | null | DeferredContent;
    WarehouseTask_Nav: Array<WarehouseTask> | DeferredContent;
}

type WarehouseOrderId = {WarehouseNo: string,WarehouseOrder: string};

interface EditableWarehouseOrder extends Pick<WarehouseOrder, "WOStatus" | "WarehouseNo" | "ActivityArea" | "StorageType" | "StorageBin" | "CreatedBy" | "Resource" | "TotalWeight" | "NetWeight" | "Volume" | "AssignRSRC" | "NoOfWHT" | "ReferenceDoc" | "WOCreationRule" | "Queue" | "WOProcessType" | "HazardousSubs" | "WOCRCategory" | "Delivery" | "WarehouseOrder" | "CreationTime" | "UnitofWeight" | "VolumeUnit" | "Processor" | "SplitWO" | "CreationDateTimeWH" | "UnassignRSRC">, Partial<Pick<WarehouseOrder, "DeliveryDate">> {
}

interface WarehouseOrderQueue {
    WarehouseNo: string;
    Queue: string;
    QueueText: string;
}

type WarehouseOrderQueueId = {WarehouseNo: string,Queue: string};

interface EditableWarehouseOrderQueue extends Pick<WarehouseOrderQueue, "WarehouseNo" | "Queue" | "QueueText"> {
}

interface WarehousePackagingMaterial {
    PackagingMaterial: string;
    PackagingMaterialDescription: string;
    PackagingMaterialType: string;
    PackagingMaterialTypeDescription: string;
}

type WarehousePackagingMaterialId = string | {PackagingMaterial: string};

interface EditableWarehousePackagingMaterial extends Pick<WarehousePackagingMaterial, "PackagingMaterialDescription" | "PackagingMaterialType" | "PackagingMaterialTypeDescription"> {
}

interface WarehousePhysicalInventory {
    IPODocYear: string;
    DocumentYear: string;
    PIDocumentNo: string;
    WarehouseNo: string;
    GUID: string;
    WarehouseOrder: string;
    ProcessType: string;
    CountStatus: string;
    ActivationStatus: string;
    CountDate: string | null;
    PlannedCountDate: string | null;
    WarehousePhysicalInventoryItem_Nav: Array<WarehousePhysicalInventoryItem> | DeferredContent;
}

type WarehousePhysicalInventoryId = string | {GUID: string};

interface EditableWarehousePhysicalInventory extends Pick<WarehousePhysicalInventory, "IPODocYear" | "DocumentYear" | "PIDocumentNo" | "WarehouseNo" | "WarehouseOrder" | "ProcessType" | "CountStatus" | "ActivationStatus">, Partial<Pick<WarehousePhysicalInventory, "CountDate" | "PlannedCountDate">> {
}

interface WarehousePhysicalInventoryItem {
    EmptyBin: string;
    PIDocumentNo: string;
    DocumentYear: string;
    PhysInvArea: string;
    HUComplCntd: string;
    HUEmpty: string;
    NoHU: string;
    GUID: string;
    ITEM_NO: string;
    PhysInvProcedure: string;
    PIStatus: string;
    ReasonfPhysInv: string;
    UOM: string;
    Quantity: string;
    TableRow: number;
    Version: number;
    LineCategory: string;
    PhysInvPrior: string;
    StorageType: string;
    StorageBin: string;
    ProductID: string;
    ProductDescription: string;
    HandlingUnit: string;
    Batch: string;
    WarehouseOrder: string;
    WarehouseNo: string;
    Serialized: string;
    BookInventory: string;
    BaseUnit: string;
    ZeroCount: string;
    ProcedureDesc: string;
    ReasonDesc: string;
    DisplayQuantity: string;
    CountDatePhysInv: string | null;
    PlannedCountDate: string | null;
    PhysInvAreaDesc: string;
    WarehousePhysicalInventoryItemSerial_Nav: Array<WarehousePhysicalInventoryItemSerial> | DeferredContent;
    WarehousePhysicalInventory_Nav: WarehousePhysicalInventory | DeferredContent;
}

type WarehousePhysicalInventoryItemId = {GUID: string,ITEM_NO: string};

interface EditableWarehousePhysicalInventoryItem extends Pick<WarehousePhysicalInventoryItem, "EmptyBin" | "PIDocumentNo" | "DocumentYear" | "PhysInvArea" | "HUComplCntd" | "HUEmpty" | "NoHU" | "GUID" | "ITEM_NO" | "PhysInvProcedure" | "PIStatus" | "ReasonfPhysInv" | "UOM" | "Quantity" | "TableRow" | "Version" | "LineCategory" | "PhysInvPrior" | "StorageType" | "StorageBin" | "ProductID" | "ProductDescription" | "HandlingUnit" | "Batch" | "WarehouseOrder" | "WarehouseNo" | "Serialized" | "BookInventory" | "BaseUnit" | "ZeroCount" | "ProcedureDesc" | "ReasonDesc" | "DisplayQuantity" | "PhysInvAreaDesc">, Partial<Pick<WarehousePhysicalInventoryItem, "CountDatePhysInv" | "PlannedCountDate">> {
}

interface WarehousePhysicalInventoryItemSerial {
    TableRow: number;
    Version: number;
    LineCategory: string;
    GUID: string;
    ITEM_NO: string;
    SerialNumberStatus: string;
    SerialNumber: string;
    SerSeq: number;
    Selected: string;
    WarehousePhysicalInventoryItem_Nav: WarehousePhysicalInventoryItem | DeferredContent;
}

type WarehousePhysicalInventoryItemSerialId = {GUID: string,ITEM_NO: string,SerialNumber: string};

interface EditableWarehousePhysicalInventoryItemSerial extends Pick<WarehousePhysicalInventoryItemSerial, "TableRow" | "Version" | "LineCategory" | "GUID" | "ITEM_NO" | "SerialNumberStatus" | "SerialNumber" | "SerSeq" | "Selected"> {
}

interface WarehousePhysicalInventoryProcedure {
    PhysInvProcedure: string;
    Language: string;
    Name: string;
}

type WarehousePhysicalInventoryProcedureId = {PhysInvProcedure: string,Language: string};

interface EditableWarehousePhysicalInventoryProcedure extends Pick<WarehousePhysicalInventoryProcedure, "PhysInvProcedure" | "Language" | "Name"> {
}

interface WarehousePickHU {
    HuNoInWho: string;
    HandlingUnit: string;
    WarehouseNo: string;
    WarehouseOrder: string;
    HUType: string;
    HUTypeDescription: string;
    PackMatTypeDescription: string;
    PackMatType: string;
    PackMaterial: string;
    Product: string;
    Resource: string;
    StorageBin: string;
    WarehouseTask: string;
    WarehouseTaskItem: string;
    WTConfPickHU_Nav: Array<WarehouseTaskConfirmation> | DeferredContent;
}

type WarehousePickHUId = {HandlingUnit: string,WarehouseOrder: string};

interface EditableWarehousePickHU extends Pick<WarehousePickHU, "HuNoInWho" | "HandlingUnit" | "WarehouseNo" | "WarehouseOrder" | "HUType" | "HUTypeDescription" | "PackMatTypeDescription" | "PackMatType" | "PackMaterial" | "Product" | "Resource" | "StorageBin" | "WarehouseTask" | "WarehouseTaskItem"> {
}

interface WarehouseProcessCategory {
    ProcCategory: string;
    Description: string;
}

type WarehouseProcessCategoryId = string | {ProcCategory: string};

interface EditableWarehouseProcessCategory extends Pick<WarehouseProcessCategory, "Description"> {
}

interface WarehouseProcessType {
    WarehouseProcessTypeDescription: string;
    WarehouseNo: string;
    WarehouseProcessType: string;
}

type WarehouseProcessTypeId = {WarehouseNo: string,WarehouseProcessType: string};

interface EditableWarehouseProcessType extends Pick<WarehouseProcessType, "WarehouseProcessTypeDescription" | "WarehouseNo" | "WarehouseProcessType"> {
}

interface WarehouseProductUoM {
    Product: string;
    UoM: string;
}

type WarehouseProductUoMId = {Product: string,UoM: string};

interface EditableWarehouseProductUoM extends Pick<WarehouseProductUoM, "Product" | "UoM"> {
}

interface WarehouseResource {
    WarehouseNo: string;
    Resource: string;
    ResourceType: string;
    User: string;
    Queue: string;
    StandardBin: string;
    ResourceGroup: string;
    WarehouseOrder_Nav: Array<WarehouseOrder> | DeferredContent;
}

type WarehouseResourceId = {WarehouseNo: string,Resource: string};

interface EditableWarehouseResource extends Pick<WarehouseResource, "WarehouseNo" | "Resource" | "ResourceType" | "User" | "Queue" | "StandardBin" | "ResourceGroup"> {
}

interface WarehouseStockType {
    WarehouseNumber: string;
    StockType: string;
    AvailabilityGroup: string;
    NonDependentStockType: string;
    Role: string;
}

type WarehouseStockTypeId = {WarehouseNumber: string,StockType: string};

interface EditableWarehouseStockType extends Pick<WarehouseStockType, "WarehouseNumber" | "StockType" | "AvailabilityGroup" | "NonDependentStockType" | "Role"> {
}

interface WarehouseStorageBin {
    WarehouseNo: string;
    StorageBin: string;
    StorageType: string;
    StorageSection: string;
    StorBinType: string;
}

type WarehouseStorageBinId = {WarehouseNo: string,StorageBin: string};

interface EditableWarehouseStorageBin extends Pick<WarehouseStorageBin, "WarehouseNo" | "StorageBin" | "StorageType" | "StorageSection" | "StorBinType"> {
}

interface WarehouseStorageBinType {
    StorageBinType: string;
    WareHouseNo: string;
    StorageBinTypeDescription: string;
}

type WarehouseStorageBinTypeId = {StorageBinType: string,WareHouseNo: string};

interface EditableWarehouseStorageBinType extends Pick<WarehouseStorageBinType, "StorageBinType" | "WareHouseNo" | "StorageBinTypeDescription"> {
}

interface WarehouseStorageSection {
    WarehouseNo: string;
    StorageType: string;
    StorageSection: string;
    PlanActArea: string;
    Description: string;
}

type WarehouseStorageSectionId = {WarehouseNo: string,StorageType: string,StorageSection: string};

interface EditableWarehouseStorageSection extends Pick<WarehouseStorageSection, "WarehouseNo" | "StorageType" | "StorageSection" | "PlanActArea" | "Description"> {
}

interface WarehouseStorageType {
    WarehouseNo: string;
    StorageType: string;
    StorageTypeRole: string;
    StorageBehavior: string;
    Description: string;
}

type WarehouseStorageTypeId = {WarehouseNo: string,StorageType: string};

interface EditableWarehouseStorageType extends Pick<WarehouseStorageType, "WarehouseNo" | "StorageType" | "StorageTypeRole" | "StorageBehavior" | "Description"> {
}

interface WarehouseTask {
    Batch: string;
    LoadingWeight: string;
    LoadingVolume: string;
    WarehouseNo: string;
    WhseProcType: string;
    ProcCategory: string;
    StorageProcess: string;
    CreatedBy: string;
    DestinationBin: string;
    DocumentID: string;
    ActivityArea: string;
    Queue: string;
    Resource: string;
    MovementReason: string;
    SrceStorType: string;
    SrcStorSectn: string;
    DestSection: string;
    ExceptionCode: string;
    ReferenceDoc: string;
    SortSequence: string;
    DestStoreType: string;
    WTStatus: string;
    SourceBin: string;
    BaseQuantity: string;
    Quantity: string;
    BaseUoM: string;
    Delivery: string;
    WeightUnit: string;
    VolumeUnit: string;
    WarehouseTask: string;
    CreationTime: string;
    Product: string;
    SourceHU: string;
    WarehouseOrder: string;
    DestinationHU: string;
    UoM: string;
    ProductDescription: string;
    SkipPickHU: string;
    HUWarehouseTask: string;
    SerialNoRequiredLevel: string;
    EWMOutDel: string;
    EWMOutDelItem: string;
    EWMInbDel: string;
    EWMInbDelItem: string;
    MaintenanceOrder: string;
    MaintOrdItem: string;
    PurOrder: string;
    POItem: string;
    IsBatchEnabled: string;
    DocCategory: string;
    DocumentID_ext: string;
    DocumentItemID_ext: string;
    WarehouseInboundDeliveryItem_Nav: WarehouseInboundDeliveryItem | DeferredContent;
    WarehouseInboundDelivery_Nav: WarehouseInboundDelivery | DeferredContent;
    WarehouseProcessCategory_Nav: WarehouseProcessCategory | null | DeferredContent;
    WarehouseProcessType_Nav: WarehouseProcessType | null | DeferredContent;
    WarehouseTaskConfSerialNumber_Nav: Array<WarehouseTaskConfSerialNumber> | DeferredContent;
    WarehouseTaskConfirmation_Nav: Array<WarehouseTaskConfirmation> | DeferredContent;
    WarehouseTaskSerialNumber_Nav: Array<WarehouseTaskSerialNumber> | DeferredContent;
    WarehouseTaskConfSerialNumber_Nav: Array<WarehouseTaskConfSerialNumber> | DeferredContent;
}

type WarehouseTaskId = {WarehouseNo: string,WarehouseTask: string};

interface EditableWarehouseTask extends Pick<WarehouseTask, "Batch" | "LoadingWeight" | "LoadingVolume" | "WarehouseNo" | "WhseProcType" | "ProcCategory" | "StorageProcess" | "CreatedBy" | "DestinationBin" | "DocumentID" | "ActivityArea" | "Queue" | "Resource" | "MovementReason" | "SrceStorType" | "SrcStorSectn" | "DestSection" | "ExceptionCode" | "ReferenceDoc" | "SortSequence" | "DestStoreType" | "WTStatus" | "SourceBin" | "BaseQuantity" | "Quantity" | "BaseUoM" | "Delivery" | "WeightUnit" | "VolumeUnit" | "WarehouseTask" | "CreationTime" | "Product" | "SourceHU" | "WarehouseOrder" | "DestinationHU" | "UoM" | "ProductDescription" | "SkipPickHU" | "HUWarehouseTask" | "SerialNoRequiredLevel" | "EWMOutDel" | "EWMOutDelItem" | "EWMInbDel" | "EWMInbDelItem" | "MaintenanceOrder" | "MaintOrdItem" | "PurOrder" | "POItem" | "IsBatchEnabled" | "DocCategory" | "DocumentID_ext" | "DocumentItemID_ext"> {
}

interface WarehouseTaskConfSerialNumber {
    WarehouseNo: string;
    UII: string;
    SerialNumber: string;
    WarehouseTask: string;
    Product: string;
    WarehouseTaskItem: string;
    WarehouseTaskConfirmation_Nav: WarehouseTaskConfirmation | DeferredContent;
    WarehouseTask_Nav: WarehouseTask | DeferredContent;
}

type WarehouseTaskConfSerialNumberId = {WarehouseNo: string,SerialNumber: string,WarehouseTask: string,WarehouseTaskItem: string};

interface EditableWarehouseTaskConfSerialNumber extends Pick<WarehouseTaskConfSerialNumber, "WarehouseNo" | "UII" | "SerialNumber" | "WarehouseTask" | "Product" | "WarehouseTaskItem"> {
}

interface WarehouseTaskConfirmation {
    Batch: string;
    WarehouseNo: string;
    DestinationBin: string;
    ActualQuantity: string;
    WithdrawHU: string;
    WithdrawHUManual: string;
    MultiExceptionCodes: string;
    WarehouseTask: string;
    SrcHU: string;
    DestHU: string;
    WarehouseTaskItem: string;
    WarehouseOrder: string;
    WarehousePickHUTaskC_Nav: WarehousePickHU | DeferredContent;
    WarehouseTaskConfSerialNumber_Nav: Array<WarehouseTaskConfSerialNumber> | DeferredContent;
    WarehouseTask_Nav: WarehouseTask | DeferredContent;
}

type WarehouseTaskConfirmationId = {WarehouseNo: string,WarehouseTask: string,WarehouseTaskItem: string};

interface EditableWarehouseTaskConfirmation extends Pick<WarehouseTaskConfirmation, "Batch" | "WarehouseNo" | "DestinationBin" | "ActualQuantity" | "WithdrawHU" | "WithdrawHUManual" | "MultiExceptionCodes" | "WarehouseTask" | "SrcHU" | "DestHU" | "WarehouseTaskItem" | "WarehouseOrder"> {
}

interface WarehouseTaskSerialNumber {
    WarehouseNo: string;
    UII: string;
    WarehouseTask: string;
    SerialNumber: string;
    FromDelivery: string;
    Product: string;
    FromDelivery: string;
    WTSerialNumber_Task_Nav: WarehouseTask | DeferredContent;
}

type WarehouseTaskSerialNumberId = {WarehouseNo: string,WarehouseTask: string,SerialNumber: string};

interface EditableWarehouseTaskSerialNumber extends Pick<WarehouseTaskSerialNumber, "WarehouseNo" | "UII" | "WarehouseTask" | "SerialNumber" | "FromDelivery" | "Product" | "FromDelivery"> {
}

interface WarrantyProfile {
    Description: string;
    WarrantyProfile: string;
}

type WarrantyProfileId = string | {WarrantyProfile: string};

interface EditableWarrantyProfile extends Pick<WarrantyProfile, "Description"> {
}

interface WorkCenter {
    LockedFlag: string;
    WorkCenterName: string;
    ControllingArea: string;
    ReportType: string;
    ReportTypeDesc: string;
    QNotifTypeFlag: string;
    CatalogProfile: string;
    PMEquipFlag: string;
    PMFuncLocFlag: string;
    DefaultActivityType: string;
    ObjectType: string;
    ExternalWorkCenterId: string;
    WorkCenterId: string;
    CostCenter: string;
    PlantId: string;
    WorkCenterDescr: string;
    MyEquipments_Main_Nav: Array<MyEquipment> | DeferredContent;
    MyEquipments_Nav: Array<MyEquipment> | DeferredContent;
    MyFunctionalLocations_Main_Nav: Array<MyFunctionalLocation> | DeferredContent;
    MyFunctionalLocations_Nav: Array<MyFunctionalLocation> | DeferredContent;
    NotificationHistory_Nav: Array<NotificationHistory> | DeferredContent;
    WCMApplication_Nav: Array<WCMApplication> | DeferredContent;
    WCMApproval_Nav: Array<WCMApproval> | DeferredContent;
    WCMDocumentHeader_Nav: Array<WCMDocumentHeader> | DeferredContent;
    WorkOrderHistory_Nav: Array<WorkOrderHistory> | DeferredContent;
}

type WorkCenterId = {ObjectType: string,WorkCenterId: string};

interface EditableWorkCenter extends Pick<WorkCenter, "LockedFlag" | "WorkCenterName" | "ControllingArea" | "ReportType" | "ReportTypeDesc" | "QNotifTypeFlag" | "CatalogProfile" | "PMEquipFlag" | "PMFuncLocFlag" | "DefaultActivityType" | "ObjectType" | "ExternalWorkCenterId" | "WorkCenterId" | "CostCenter" | "PlantId" | "WorkCenterDescr"> {
}

interface WorkOrderHistory {
    PriorityType: string;
    PM_OBJTY: string;
    PlanningPlant: string;
    WorkCenter: string;
    PlannerGroup: string;
    MainWorkCenter: string;
    TechObject: string;
    ObjectNumber: string;
    LongTextExists: string;
    Priority: string;
    PersonsName: string;
    OrderType: string;
    OrderDescription: string;
    FunctionalLocation: string;
    StartDate: string | null;
    EndDate: string | null;
    OrderId: string;
    ReferenceType: string;
    Equipment: string;
    NotifNum: string;
    ReferenceWorkOrder: string;
    PersonalNumber: string;
    Employee_Nav: Employee | DeferredContent;
    Equipment_Nav: MyEquipment | null | DeferredContent;
    FuncLoc_Nav: MyFunctionalLocation | null | DeferredContent;
    HistoryLongText: WorkOrderHistoryText | DeferredContent;
    HistoryPriority: Priority | null | DeferredContent;
    PMMobileStatus_Nav: PMMobileStatus | DeferredContent;
    PlannerGroup_Nav: PlannerGroup | DeferredContent;
    RelatedNotif_Nav: MyNotificationHeader | DeferredContent;
    WorkCenter_Nav: WorkCenter | DeferredContent;
    WorkOrderHeader: MyWorkOrderHeader | DeferredContent;
}

type WorkOrderHistoryId = {TechObject: string,OrderId: string,ReferenceType: string};

interface EditableWorkOrderHistory extends Pick<WorkOrderHistory, "PriorityType" | "PM_OBJTY" | "PlanningPlant" | "WorkCenter" | "PlannerGroup" | "MainWorkCenter" | "TechObject" | "ObjectNumber" | "LongTextExists" | "Priority" | "PersonsName" | "OrderType" | "OrderDescription" | "FunctionalLocation" | "OrderId" | "ReferenceType" | "Equipment" | "NotifNum" | "ReferenceWorkOrder" | "PersonalNumber">, Partial<Pick<WorkOrderHistory, "StartDate" | "EndDate">> {
}

interface WorkOrderHistoryText {
    TextString: string;
    TextObjectType: string;
    ObjectKey: string;
    TextId: string;
    OrderId: string;
    WOHistory: WorkOrderHistory | DeferredContent;
}

type WorkOrderHistoryTextId = string | {OrderId: string};

interface EditableWorkOrderHistoryText extends Pick<WorkOrderHistoryText, "TextString" | "TextObjectType" | "ObjectKey" | "TextId"> {
}

interface WorkOrderOperationPhaseControl {
    IsActive: string;
    OperationNo: string;
    OrderId: string;
    PhaseControl: string;
    SubOperationNo: string;
    AuthorizationKey: string;
    Description: string;
    EntityType: string;
    ObjectNumber: string;
    OrderType: string;
    OvrlStsProfile: string;
    PhaseControlKey: string;
    PlanningPlant: string;
    ProcessPhase: string;
    ProcessSubphase: string;
    SetAutomatically: string;
    StatusProfile: string;
}

type WorkOrderOperationPhaseControlId = {OperationNo: string,OrderId: string,PhaseControl: string,SubOperationNo: string};

interface EditableWorkOrderOperationPhaseControl extends Pick<WorkOrderOperationPhaseControl, "IsActive" | "OperationNo" | "OrderId" | "PhaseControl" | "SubOperationNo" | "AuthorizationKey" | "Description" | "EntityType" | "ObjectNumber" | "OrderType" | "OvrlStsProfile" | "PhaseControlKey" | "PlanningPlant" | "ProcessPhase" | "ProcessSubphase" | "SetAutomatically" | "StatusProfile"> {
}

interface WorkOrderPhaseControl {
    OvrlStsProfile: string;
    OrderType: string;
    ObjectNumber: string;
    EntityType: string;
    Description: string;
    AuthorizationKey: string;
    PhaseControl: string;
    OrderId: string;
    PhaseControlKey: string;
    PhaseControlName: string;
    PlanningPlant: string;
    ProcessPhase: string;
    ProcessSubphase: string;
    SetAutomatically: string;
    StatusProfile: string;
    Userstatus: string;
    IsActive: string;
}

type WorkOrderPhaseControlId = {PhaseControl: string,OrderId: string};

interface EditableWorkOrderPhaseControl extends Pick<WorkOrderPhaseControl, "OvrlStsProfile" | "OrderType" | "ObjectNumber" | "EntityType" | "Description" | "AuthorizationKey" | "PhaseControl" | "OrderId" | "PhaseControlKey" | "PhaseControlName" | "PlanningPlant" | "ProcessPhase" | "ProcessSubphase" | "SetAutomatically" | "StatusProfile" | "Userstatus" | "IsActive"> {
}

interface WorkOrderTransfer {
    OrderId: string;
    OperationNo: string;
    SubOperationNo: string;
    HeaderNotes: string;
    TransferReason: string;
    IsSupervisor: string;
    PlannerGroupTo: string;
    PlannerGroupFrom: string;
    WorkCenterTo: string;
    WorkCenterFrom: string;
    UserTo: string;
    UserFrom: string;
    EmployeeTo: string;
    EmployeeFrom: string;
    EffectiveTimestamp: string | null;
    WOHeader: MyWorkOrderHeader | DeferredContent;
    WOOperation: MyWorkOrderOperation | DeferredContent;
    WOSubOperation: MyWorkOrderSubOperation | DeferredContent;
}

type WorkOrderTransferId = {OrderId: string,OperationNo: string,SubOperationNo: string};

interface EditableWorkOrderTransfer extends Pick<WorkOrderTransfer, "OrderId" | "OperationNo" | "SubOperationNo" | "HeaderNotes" | "TransferReason" | "IsSupervisor" | "PlannerGroupTo" | "PlannerGroupFrom" | "WorkCenterTo" | "WorkCenterFrom" | "UserTo" | "UserFrom" | "EmployeeTo" | "EmployeeFrom">, Partial<Pick<WorkOrderTransfer, "EffectiveTimestamp">> {
}

interface WorkRequestConsequence {
    ConsequenceId: string;
    GroupId: string;
    LeadingConsequence: string;
    LikelihoodId: string;
    PrioritizationProfileId: string;
    CategoryId: string;
    Notification: string;
    MyNotificationHeader_Nav: MyNotificationHeader | null | DeferredContent;
}

type WorkRequestConsequenceId = {CategoryId: string,Notification: string};

interface EditableWorkRequestConsequence extends Pick<WorkRequestConsequence, "ConsequenceId" | "GroupId" | "LeadingConsequence" | "LikelihoodId" | "PrioritizationProfileId" | "CategoryId" | "Notification"> {
}

interface MobileClientSynchronizationSession {
    SessionGUID: string;
    UserGUID: string | null;
    SessionBeginTimeStamp: string | null;
    SessionCloseTimeStamp: string | null;
    CreatedBy: string | null;
}

type MobileClientSynchronizationSessionId = string | {SessionGUID: string};

interface EditableMobileClientSynchronizationSession extends Partial<Pick<MobileClientSynchronizationSession, "UserGUID" | "SessionBeginTimeStamp" | "SessionCloseTimeStamp" | "CreatedBy">> {
}

interface OpenSyncSessionParams {
    SAPProductTechName?: string | null;
    SyncType?: string | null;
}

interface CloseSyncSessionParams {
    SAPProductTechName?: string | null;
    SyncType?: string | null;
}

type DeferredContent = undefined;
