/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookRangeFromDiscriminatorValue, type WorkbookRange } from '../../../../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the intersection method.
 */
export interface IntersectionWithAnotherRangeRequestBuilder extends BaseRequestBuilder<IntersectionWithAnotherRangeRequestBuilder> {
    /**
     * Invoke function intersection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookRange>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookRange | undefined>;
    /**
     * Invoke function intersection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const IntersectionWithAnotherRangeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}/range()/intersection(anotherRange='{anotherRange}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const IntersectionWithAnotherRangeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: IntersectionWithAnotherRangeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookRangeFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
