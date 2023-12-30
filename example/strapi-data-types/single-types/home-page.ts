import { PublishableItemData, RequiredCollectionItem } from "../../../strapi-types";
import { User } from "../collections/user";

// Single-types are always `PublishableItemData`.

export type HomePage = PublishableItemData<{
	heading: string;
	users: RequiredCollectionItem<User>;
}>;