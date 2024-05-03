/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { DriveItemRequestBuilderNavigationMetadata, DriveItemRequestBuilderRequestsMetadata, type DriveItemRequestBuilder } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /drives
 */
export interface DrivesRequestBuilder extends BaseRequestBuilder<DrivesRequestBuilder> {
    /**
     * Provides operations to manage the collection of drive entities.
     * @param driveId The unique identifier of drive
     * @returns {DriveItemRequestBuilder}
     */
     byDriveId(driveId: string) : DriveItemRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const DrivesRequestBuilderUriTemplate = "{+baseurl}/drives";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DrivesRequestBuilderNavigationMetadata: Record<Exclude<keyof DrivesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDriveId: {
        requestsMetadata: DriveItemRequestBuilderRequestsMetadata,
        navigationMetadata: DriveItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["drive%2Did"],
    },
};
/* tslint:enable */
/* eslint-enable */