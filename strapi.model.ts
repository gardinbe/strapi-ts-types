export declare namespace Strapi {
	type RequestParams = {
		populate: number | string,
		[key: string]: any
	}

	type Response<T = {}> = PublishableItem<T> //response is a generic item, containing items within it

	type Item<T> = {
		data: {
			id: number,
			attributes: {
				createdAt: string,
				updatedAt: string
			} & T
		},
		meta: {}
	}

	type PublishableItem<T = {}> = Item<{
		publishedAt: string
	} & T>

	type Image = { //not a publishable item!
		name: string,
		alternativeText: string | null,
		caption: string | null,
		width: number,
		height: number,
		formats: {
			thumbnail: ImageFormat,
			small: ImageFormat & { width: 500 },
			medium: ImageFormat & { width: 750 },
			large: ImageFormat & { width: 1000 }
		}
		hash: string,
		ext: string,
		mime: string,
		size: string,
		url: string,
		previewUrl: string | null,
		provider: string,
		provider_metadata: string | null
	}

	type ImageFormat = {
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
}
