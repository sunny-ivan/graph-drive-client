/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveRecipientFromDiscriminatorValue, createPermissionFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeDriveRecipient, serializePermission, type BaseCollectionPaginationCountResponse, type DriveRecipient, type Permission } from '../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {InvitePostRequestBody}
 */
export function createInvitePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoInvitePostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {InvitePostResponse}
 */
export function createInvitePostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoInvitePostResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoInvitePostRequestBody(invitePostRequestBody: Partial<InvitePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationDateTime": n => { invitePostRequestBody.expirationDateTime = n.getStringValue(); },
        "message": n => { invitePostRequestBody.message = n.getStringValue(); },
        "password": n => { invitePostRequestBody.password = n.getStringValue(); },
        "recipients": n => { invitePostRequestBody.recipients = n.getCollectionOfObjectValues<DriveRecipient>(createDriveRecipientFromDiscriminatorValue); },
        "requireSignIn": n => { invitePostRequestBody.requireSignIn = n.getBooleanValue(); },
        "retainInheritedPermissions": n => { invitePostRequestBody.retainInheritedPermissions = n.getBooleanValue(); },
        "roles": n => { invitePostRequestBody.roles = n.getCollectionOfPrimitiveValues<string>(); },
        "sendInvitation": n => { invitePostRequestBody.sendInvitation = n.getBooleanValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoInvitePostResponse(invitePostResponse: Partial<InvitePostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(invitePostResponse),
        "value": n => { invitePostResponse.value = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); },
    }
}
export interface InvitePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The expirationDateTime property
     */
    expirationDateTime?: string;
    /**
     * The message property
     */
    message?: string;
    /**
     * The password property
     */
    password?: string;
    /**
     * The recipients property
     */
    recipients?: DriveRecipient[];
    /**
     * The requireSignIn property
     */
    requireSignIn?: boolean;
    /**
     * The retainInheritedPermissions property
     */
    retainInheritedPermissions?: boolean;
    /**
     * The roles property
     */
    roles?: string[];
    /**
     * The sendInvitation property
     */
    sendInvitation?: boolean;
}
export interface InvitePostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Permission[];
}
/**
 * Provides operations to call the invite method.
 */
export interface InviteRequestBuilder extends BaseRequestBuilder<InviteRequestBuilder> {
    /**
     * Sends a sharing invitation for a driveItem.A sharing invitation provides permissions to the recipients and optionally sends them an email with a sharing link.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<InvitePostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-invite?view=graph-rest-1.0|Find more info here}
     */
     post(body: InvitePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<InvitePostResponse | undefined>;
    /**
     * Sends a sharing invitation for a driveItem.A sharing invitation provides permissions to the recipients and optionally sends them an email with a sharing link.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: InvitePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeInvitePostRequestBody(writer: SerializationWriter, invitePostRequestBody: Partial<InvitePostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("expirationDateTime", invitePostRequestBody.expirationDateTime);
    writer.writeStringValue("message", invitePostRequestBody.message);
    writer.writeStringValue("password", invitePostRequestBody.password);
    writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", invitePostRequestBody.recipients, serializeDriveRecipient);
    writer.writeBooleanValue("requireSignIn", invitePostRequestBody.requireSignIn);
    writer.writeBooleanValue("retainInheritedPermissions", invitePostRequestBody.retainInheritedPermissions);
    writer.writeCollectionOfPrimitiveValues<string>("roles", invitePostRequestBody.roles);
    writer.writeBooleanValue("sendInvitation", invitePostRequestBody.sendInvitation);
    writer.writeAdditionalData(invitePostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeInvitePostResponse(writer: SerializationWriter, invitePostResponse: Partial<InvitePostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, invitePostResponse)
    writer.writeCollectionOfObjectValues<Permission>("value", invitePostResponse.value, serializePermission);
}
/**
 * Uri template for the request builder.
 */
export const InviteRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/invite";
/**
 * Metadata for all the requests in the request builder.
 */
export const InviteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: InviteRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createInvitePostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeInvitePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */