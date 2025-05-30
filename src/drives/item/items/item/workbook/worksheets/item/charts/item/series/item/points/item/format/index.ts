/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookChartPointFormatFromDiscriminatorValue, serializeWorkbookChartPointFormat, type WorkbookChartPointFormat } from '../../../../../../../../../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { FillRequestBuilderNavigationMetadata, FillRequestBuilderRequestsMetadata, type FillRequestBuilder } from './fill/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the format property of the microsoft.graph.workbookChartPoint entity.
 */
export interface FormatRequestBuilder extends BaseRequestBuilder<FormatRequestBuilder> {
    /**
     * Provides operations to manage the fill property of the microsoft.graph.workbookChartPointFormat entity.
     */
    get fill(): FillRequestBuilder;
    /**
     * Delete navigation property format for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The format properties of the chart point. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartPointFormat>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FormatRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookChartPointFormat | undefined>;
    /**
     * Update the navigation property format in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartPointFormat>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookChartPointFormat, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookChartPointFormat | undefined>;
    /**
     * Delete navigation property format for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The format properties of the chart point. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FormatRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property format in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookChartPointFormat, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The format properties of the chart point. Read-only.
 */
export interface FormatRequestBuilderGetQueryParameters {
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
export const FormatRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/series/{workbookChartSeries%2Did}/points/{workbookChartPoint%2Did}/format{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FormatRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const FormatRequestBuilderNavigationMetadata: Record<Exclude<keyof FormatRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    fill: {
        requestsMetadata: FillRequestBuilderRequestsMetadata,
        navigationMetadata: FillRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FormatRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: FormatRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: FormatRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartPointFormatFromDiscriminatorValue,
        queryParametersMapper: FormatRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FormatRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartPointFormatFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookChartPointFormat,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
