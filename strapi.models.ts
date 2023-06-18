/**
 * Request parameters used when querying the API.
 */
export type StrapiRequestParams = {
	populate: number | string;
	[key: string]: unknown; //todo
}

/**
 * Response received when querying the API.
 */
export type StrapiResponse<T = object> = StrapiItem<StrapiPublishableItemData<T>> //response is a generic item, containing items within it



/* Item types */


/**
 * A base item. Contains item data within it.
 */
export type StrapiItem<T extends StrapiBaseItemData | StrapiItemData | StrapiPublishableItemData> = {
	data: T;
	meta: object;
}

/**
 * A base collection item. Contains item data within it.
 */
export type StrapiCollectionItem<T extends StrapiBaseItemData | StrapiItemData | StrapiPublishableItemData> = {
	data: T[];
}



/* Item data types */


/**
 * Base item data. Only contains an ID alongside any custom properties.
 * 
 * Used for repeated components.
 */
export type StrapiBaseItemData<T = object> = T & {
	id: number;
}

/**
 * Standard item data. Contains an ID as well as attributes.
 */
export type StrapiItemData<T = object> = {
	id: number;
	attributes: T & {
		createdAt: string;
		updatedAt: string;
	};
}

/**
 * Publishable item data. Same as StandardItemData, but also contains the `publishedAt` property.
 */
export type StrapiPublishableItemData<T = object> = StrapiItemData<T & {
	publishedAt: string;
}>



/* Common item data types */

/**
 * Image data. Contains several properties about an image, including the one or more formats available.
 * 
 * An image may or may not have larger formats available: it depends on its size.
 */
export type StrapiImageData = StrapiItemData<{ //image is a standard, not a publishable item!
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: {
		thumbnail: StrapiImageFormat;
		small: StrapiImageFormat<500>;
		medium?: StrapiImageFormat<750>;
		large?: StrapiImageFormat<1000>;
	};
	hash: string;
	ext: string;
	mime: string;
	size: string;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: string | null;
}>

export type StrapiImageFormat<width = number> = {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: string | null;
	width: width;
	height: number;
	size: number;
	url: string;
}
