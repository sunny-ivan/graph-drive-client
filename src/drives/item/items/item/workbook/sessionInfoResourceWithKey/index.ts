/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookSessionInfoFromDiscriminatorValue, type WorkbookSessionInfo } from '../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the sessionInfoResource method.
 */
export interface SessionInfoResourceWithKeyRequestBuilder extends BaseRequestBuilder<SessionInfoResourceWithKeyRequestBuilder> {
    /**
     * Invoke function sessionInfoResource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookSessionInfo>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookSessionInfo | undefined>;
    /**
     * Invoke function sessionInfoResource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const SessionInfoResourceWithKeyRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/sessionInfoResource(key='{key}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const SessionInfoResourceWithKeyRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SessionInfoResourceWithKeyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookSessionInfoFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
