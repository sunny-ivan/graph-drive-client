/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookTableFromDiscriminatorValue, type WorkbookTable } from '../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { ClearFiltersRequestBuilderRequestsMetadata, type ClearFiltersRequestBuilder } from './clearFilters/';
// @ts-ignore
import { ColumnsRequestBuilderRequestsMetadata, type ColumnsRequestBuilder } from './columns/';
// @ts-ignore
import { ConvertToRangeRequestBuilderRequestsMetadata, type ConvertToRangeRequestBuilder } from './convertToRange/';
// @ts-ignore
import { DataBodyRangeRequestBuilderRequestsMetadata, type DataBodyRangeRequestBuilder } from './dataBodyRange/';
// @ts-ignore
import { HeaderRowRangeRequestBuilderRequestsMetadata, type HeaderRowRangeRequestBuilder } from './headerRowRange/';
// @ts-ignore
import { RangeRequestBuilderRequestsMetadata, type RangeRequestBuilder } from './range/';
// @ts-ignore
import { ReapplyFiltersRequestBuilderRequestsMetadata, type ReapplyFiltersRequestBuilder } from './reapplyFilters/';
// @ts-ignore
import { RowsRequestBuilderRequestsMetadata, type RowsRequestBuilder } from './rows/';
// @ts-ignore
import { SortRequestBuilderRequestsMetadata, type SortRequestBuilder } from './sort/';
// @ts-ignore
import { TotalRowRangeRequestBuilderRequestsMetadata, type TotalRowRangeRequestBuilder } from './totalRowRange/';
// @ts-ignore
import { type WorksheetRequestBuilder, WorksheetRequestBuilderRequestsMetadata } from './worksheet/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the itemAt method.
 */
export interface ItemAtWithIndexRequestBuilder extends BaseRequestBuilder<ItemAtWithIndexRequestBuilder> {
    /**
     * Provides operations to call the clearFilters method.
     */
    get clearFilters(): ClearFiltersRequestBuilder;
    /**
     * Provides operations to manage the columns property of the microsoft.graph.workbookTable entity.
     */
    get columns(): ColumnsRequestBuilder;
    /**
     * Provides operations to call the convertToRange method.
     */
    get convertToRange(): ConvertToRangeRequestBuilder;
    /**
     * Provides operations to call the dataBodyRange method.
     */
    get dataBodyRange(): DataBodyRangeRequestBuilder;
    /**
     * Provides operations to call the headerRowRange method.
     */
    get headerRowRange(): HeaderRowRangeRequestBuilder;
    /**
     * Provides operations to call the range method.
     */
    get range(): RangeRequestBuilder;
    /**
     * Provides operations to call the reapplyFilters method.
     */
    get reapplyFilters(): ReapplyFiltersRequestBuilder;
    /**
     * Provides operations to manage the rows property of the microsoft.graph.workbookTable entity.
     */
    get rows(): RowsRequestBuilder;
    /**
     * Provides operations to manage the sort property of the microsoft.graph.workbookTable entity.
     */
    get sort(): SortRequestBuilder;
    /**
     * Provides operations to call the totalRowRange method.
     */
    get totalRowRange(): TotalRowRangeRequestBuilder;
    /**
     * Provides operations to manage the worksheet property of the microsoft.graph.workbookTable entity.
     */
    get worksheet(): WorksheetRequestBuilder;
    /**
     * Invoke function itemAt
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookTable>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookTable | undefined>;
    /**
     * Invoke function itemAt
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ItemAtWithIndexRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/itemAt(index={index})";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ItemAtWithIndexRequestBuilderNavigationMetadata: Record<Exclude<keyof ItemAtWithIndexRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    clearFilters: {
        requestsMetadata: ClearFiltersRequestBuilderRequestsMetadata,
    },
    columns: {
        requestsMetadata: ColumnsRequestBuilderRequestsMetadata,
    },
    convertToRange: {
        requestsMetadata: ConvertToRangeRequestBuilderRequestsMetadata,
    },
    dataBodyRange: {
        requestsMetadata: DataBodyRangeRequestBuilderRequestsMetadata,
    },
    headerRowRange: {
        requestsMetadata: HeaderRowRangeRequestBuilderRequestsMetadata,
    },
    range: {
        requestsMetadata: RangeRequestBuilderRequestsMetadata,
    },
    reapplyFilters: {
        requestsMetadata: ReapplyFiltersRequestBuilderRequestsMetadata,
    },
    rows: {
        requestsMetadata: RowsRequestBuilderRequestsMetadata,
    },
    sort: {
        requestsMetadata: SortRequestBuilderRequestsMetadata,
    },
    totalRowRange: {
        requestsMetadata: TotalRowRangeRequestBuilderRequestsMetadata,
    },
    worksheet: {
        requestsMetadata: WorksheetRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ItemAtWithIndexRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ItemAtWithIndexRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookTableFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
