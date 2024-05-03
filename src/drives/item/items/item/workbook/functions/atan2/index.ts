/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface Atan2PostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The xNum property
     */
    xNum?: Json;
    /**
     * The yNum property
     */
    yNum?: Json;
}
/**
 * Provides operations to call the atan2 method.
 */
export interface Atan2RequestBuilder extends BaseRequestBuilder<Atan2RequestBuilder> {
    /**
     * Invoke action atan2
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Atan2PostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action atan2
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Atan2PostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Atan2PostRequestBody}
 */
export function createAtan2PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAtan2PostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAtan2PostRequestBody(atan2PostRequestBody: Partial<Atan2PostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "xNum": n => { atan2PostRequestBody.xNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yNum": n => { atan2PostRequestBody.yNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAtan2PostRequestBody(writer: SerializationWriter, atan2PostRequestBody: Partial<Atan2PostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("xNum", atan2PostRequestBody.xNum, serializeJson);
    writer.writeObjectValue<Json>("yNum", atan2PostRequestBody.yNum, serializeJson);
    writer.writeAdditionalData(atan2PostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Atan2RequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/atan2";
/**
 * Metadata for all the requests in the request builder.
 */
export const Atan2RequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Atan2RequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAtan2PostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */