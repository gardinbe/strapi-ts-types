# strapi-ts-types
A straight forward typing scheme for the Strapi API. Used to quickly type up requests and responses.

### Implementation example

```typescript
export type AboutResponse = StrapiResponse<AboutResponseData>

export type AboutResponseData = {
	title: string;
	description: string;
	info_blocks: StrapiBaseItemData<InfoBlock>[]; //repeated component
	image: StrapiItem<StrapiImageData>;
}

type InfoBlock = {
	title: string;
	description: string;
}

const response = await getFromStrapi<AboutResponse>("about");
//where `getFromStrapi()` calls the Strapi API
```
