/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookWorksheetFromDiscriminatorValue, serializeWorkbookWorksheet, type WorkbookWorksheet } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { CellWithRowWithColumnRequestBuilderRequestsMetadata, type CellWithRowWithColumnRequestBuilder } from './cellWithRowWithColumn/';
// @ts-ignore
import { ChartsRequestBuilderNavigationMetadata, ChartsRequestBuilderRequestsMetadata, type ChartsRequestBuilder } from './charts/';
// @ts-ignore
import { NamesRequestBuilderNavigationMetadata, NamesRequestBuilderRequestsMetadata, type NamesRequestBuilder } from './names/';
// @ts-ignore
import { PivotTablesRequestBuilderNavigationMetadata, PivotTablesRequestBuilderRequestsMetadata, type PivotTablesRequestBuilder } from './pivotTables/';
// @ts-ignore
import { ProtectionRequestBuilderNavigationMetadata, ProtectionRequestBuilderRequestsMetadata, type ProtectionRequestBuilder } from './protection/';
// @ts-ignore
import { RangeRequestBuilderRequestsMetadata, type RangeRequestBuilder } from './range/';
// @ts-ignore
import { RangeWithAddressRequestBuilderRequestsMetadata, type RangeWithAddressRequestBuilder } from './rangeWithAddress/';
// @ts-ignore
import { TablesRequestBuilderNavigationMetadata, TablesRequestBuilderRequestsMetadata, type TablesRequestBuilder } from './tables/';
// @ts-ignore
import { type UsedRangeRequestBuilder, UsedRangeRequestBuilderRequestsMetadata } from './usedRange/';
// @ts-ignore
import { type UsedRangeWithValuesOnlyRequestBuilder, UsedRangeWithValuesOnlyRequestBuilderRequestsMetadata } from './usedRangeWithValuesOnly/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the worksheets property of the microsoft.graph.workbook entity.
 */
export interface WorkbookWorksheetItemRequestBuilder extends BaseRequestBuilder<WorkbookWorksheetItemRequestBuilder> {
    /**
     * Provides operations to manage the charts property of the microsoft.graph.workbookWorksheet entity.
     */
    get charts(): ChartsRequestBuilder;
    /**
     * Provides operations to manage the names property of the microsoft.graph.workbookWorksheet entity.
     */
    get names(): NamesRequestBuilder;
    /**
     * Provides operations to manage the pivotTables property of the microsoft.graph.workbookWorksheet entity.
     */
    get pivotTables(): PivotTablesRequestBuilder;
    /**
     * Provides operations to manage the protection property of the microsoft.graph.workbookWorksheet entity.
     */
    get protection(): ProtectionRequestBuilder;
    /**
     * Provides operations to call the range method.
     */
    get range(): RangeRequestBuilder;
    /**
     * Provides operations to manage the tables property of the microsoft.graph.workbookWorksheet entity.
     */
    get tables(): TablesRequestBuilder;
    /**
     * Provides operations to call the usedRange method.
     */
    get usedRange(): UsedRangeRequestBuilder;
    /**
     * Provides operations to call the cell method.
     * @param column Usage: column={column}
     * @param row Usage: row={row}
     * @returns {CellWithRowWithColumnRequestBuilder}
     */
     cellWithRowWithColumn(column: number | undefined, row: number | undefined) : CellWithRowWithColumnRequestBuilder;
    /**
     * Delete navigation property worksheets for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookWorksheet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WorkbookWorksheetItemRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookWorksheet | undefined>;
    /**
     * Update the navigation property worksheets in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookWorksheet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookWorksheet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookWorksheet | undefined>;
    /**
     * Provides operations to call the range method.
     * @param address Usage: address='{address}'
     * @returns {RangeWithAddressRequestBuilder}
     */
     rangeWithAddress(address: string | undefined) : RangeWithAddressRequestBuilder;
    /**
     * Delete navigation property worksheets for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents a collection of worksheets associated with the workbook. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WorkbookWorksheetItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property worksheets in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookWorksheet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Provides operations to call the usedRange method.
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     * @returns {UsedRangeWithValuesOnlyRequestBuilder}
     */
     usedRangeWithValuesOnly(valuesOnly: boolean | undefined) : UsedRangeWithValuesOnlyRequestBuilder;
}
/**
 * Represents a collection of worksheets associated with the workbook. Read-only.
 */
export interface WorkbookWorksheetItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const WorkbookWorksheetItemRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WorkbookWorksheetItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WorkbookWorksheetItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WorkbookWorksheetItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    cellWithRowWithColumn: {
        requestsMetadata: CellWithRowWithColumnRequestBuilderRequestsMetadata,
    },
    rangeWithAddress: {
        requestsMetadata: RangeWithAddressRequestBuilderRequestsMetadata,
    },
    usedRangeWithValuesOnly: {
        requestsMetadata: UsedRangeWithValuesOnlyRequestBuilderRequestsMetadata,
    },
    charts: {
        requestsMetadata: ChartsRequestBuilderRequestsMetadata,
        navigationMetadata: ChartsRequestBuilderNavigationMetadata,
    },
    names: {
        requestsMetadata: NamesRequestBuilderRequestsMetadata,
        navigationMetadata: NamesRequestBuilderNavigationMetadata,
    },
    pivotTables: {
        requestsMetadata: PivotTablesRequestBuilderRequestsMetadata,
        navigationMetadata: PivotTablesRequestBuilderNavigationMetadata,
    },
    protection: {
        requestsMetadata: ProtectionRequestBuilderRequestsMetadata,
        navigationMetadata: ProtectionRequestBuilderNavigationMetadata,
    },
    range: {
        requestsMetadata: RangeRequestBuilderRequestsMetadata,
    },
    tables: {
        requestsMetadata: TablesRequestBuilderRequestsMetadata,
        navigationMetadata: TablesRequestBuilderNavigationMetadata,
    },
    usedRange: {
        requestsMetadata: UsedRangeRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WorkbookWorksheetItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WorkbookWorksheetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WorkbookWorksheetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookWorksheetFromDiscriminatorValue,
        queryParametersMapper: WorkbookWorksheetItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: WorkbookWorksheetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookWorksheetFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookWorksheet,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */