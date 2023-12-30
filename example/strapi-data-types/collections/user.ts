import { Item, PublishableItemData, Image } from "../../../strapi-types";
import { InfoBlock } from "../components/info-block";

// Collection items are always `PublishableItemData`.

export type User = PublishableItemData<{
	username: string			// text field
	email: string;				// text field
	firstname: string;			// text field
	middlename: string;			// text field
	surname: string;			// text field			
	photo: Item<Image>;			// image item
	info_blocks: InfoBlock[];	// repeated component
}>;