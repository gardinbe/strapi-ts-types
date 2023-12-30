import { ItemData } from "../../../strapi-types";

// Components are always `ItemData`.

export type InfoBlock = ItemData<{
	heading: string;	// text field
	content: string;	// rich text editor field (need to parse as markdown!)
}>;