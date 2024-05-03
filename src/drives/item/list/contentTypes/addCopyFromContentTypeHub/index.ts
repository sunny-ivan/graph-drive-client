/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createContentTypeFromDiscriminatorValue, serializeContentType, type ContentType } from '../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AddCopyFromContentTypeHubPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The contentTypeId property
     */
    contentTypeId?: string;
}
/**
 * Provides operations to call the addCopyFromContentTypeHub method.
 */
export interface AddCopyFromContentTypeHubRequestBuilder extends BaseRequestBuilder<AddCopyFromContentTypeHubRequestBuilder> {
    /**
     * Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a 'push everywhere' to 'pull as needed' approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see contentType: getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ContentType>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/contenttype-addcopyfromcontenttypehub?view=graph-rest-1.0|Find more info here}
     */
     post(body: AddCopyFromContentTypeHubPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ContentType | undefined>;
    /**
     * Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a 'push everywhere' to 'pull as needed' approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see contentType: getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AddCopyFromContentTypeHubPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AddCopyFromContentTypeHubPostRequestBody}
 */
export function createAddCopyFromContentTypeHubPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddCopyFromContentTypeHubPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAddCopyFromContentTypeHubPostRequestBody(addCopyFromContentTypeHubPostRequestBody: Partial<AddCopyFromContentTypeHubPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contentTypeId": n => { addCopyFromContentTypeHubPostRequestBody.contentTypeId = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAddCopyFromContentTypeHubPostRequestBody(writer: SerializationWriter, addCopyFromContentTypeHubPostRequestBody: Partial<AddCopyFromContentTypeHubPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("contentTypeId", addCopyFromContentTypeHubPostRequestBody.contentTypeId);
    writer.writeAdditionalData(addCopyFromContentTypeHubPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const AddCopyFromContentTypeHubRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/contentTypes/addCopyFromContentTypeHub";
/**
 * Metadata for all the requests in the request builder.
 */
export const AddCopyFromContentTypeHubRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AddCopyFromContentTypeHubRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createContentTypeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAddCopyFromContentTypeHubPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */