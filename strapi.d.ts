export type StrapiResponse<T = {}> = StrapiPublishableItem<T> //response is a generic item, containing items within it

export type StrapiItem<T> = {
	data: {
		id: number,
		attributes: {
			createdAt: string,
			updatedAt: string
		} & T
	},
	meta: {}
}

export type StrapiPublishableItem<T = {}> = StrapiItem<{
	publishedAt: string
} & T>

export type StrapiImage = { //not a publishable item!
	name: string,
	alternativeText: string | null,
	caption: string | null,
	width: number,
	height: number,
	formats: {
		thumbnail: StrapiImageFormat,
		small: StrapiImageFormat & { width: 500 },
		medium: StrapiImageFormat & { width: 750 },
		large: StrapiImageFormat & { width: 1000 }
	}
	hash: string,
	ext: string,
	mime: string,
	size: string,
	url: string,
	previewUrl: string | null,
	provider: string,
	provider_metadata: string | null,
	createdAt: string,
	updatedAt: string
}

export type StrapiImageFormat = {
	name: string,
	hash: string,
	ext: string,
	mime: string,
	path: string | null,
	width: number,
	height: number,
	size: number,
	url: string
}
