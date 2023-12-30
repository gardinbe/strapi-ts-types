# strapi-ts-types

## What is this?

An easy-to-use typing scheme for Strapi's API.

Used to quickly and effectively type up requests and responses.

If you want to use it, just copy and paste the entire `/strapi-types` folder into your project, and import from there.

## An example

Please [see the example here](example).

```typescript
import { Collection, SingleType, StrapiRequestParams, StrapiResponse } from "../strapi-types";
import { User } from "./strapi-data-types";
import { HomePage } from "./strapi-data-types/single-types/home-page";
declare const qs: any; //https://www.npmjs.com/package/qs

// This file is an example of how you could write `fetch()` functions to return
// typed Strapi data.



const STRAPI_HOST = "http://my-strapi-hostname"



/**
 * Make a fetch request to strapi.
 * @param endpoint Target endpoint
 * @param params Request parameters
 * @returns Response data
 */
const strapiFetch = async <TData extends StrapiResponse>(
	endpoint: string,
	params?: StrapiRequestParams
) => {
	const response = await fetch(`${STRAPI_HOST}/api/${endpoint}`, qs.stringify(params));

	if (!response.ok)
		throw new Error("Response was not ok");

	return await response.json() as TData;
}



// Using the populate-deep plugin: https://www.npmjs.com/package/strapi-plugin-populate-deep

/**
 * Get the home page data from Strapi.
 * @returns Home page data
 */
export const getHomePage = async () => {
	return (await
		strapiFetch<SingleType<HomePage>>("home-page", { populate: "deep" })
	).data;
};



/**
 * Get all the users from Strapi.
 * @returns All users' data
 */
export const getAllUsers = async () => {
	return (await
		strapiFetch<Collection<User>>("users", { populate: "deep" })
	).data;
};



/**
 * Get a single user by their `id` from Strapi.
 * @param id User id
 * @returns User data
 */
export const getUser = async (id: string | number) => {
	return (await
		strapiFetch<SingleType<User>>(`users/${id}`, { populate: "deep" })
	).data;
};
```