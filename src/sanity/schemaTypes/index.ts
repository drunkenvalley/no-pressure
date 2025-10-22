import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { herobannerType } from "./herobannerType";
import { featureType } from "./featureType";
import { homepageType } from "./homepageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    herobannerType,
    featureType,
    homepageType
  ],
};
