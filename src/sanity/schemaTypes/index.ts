import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blocks/blockContentType";
import { categoryType } from "./documents/categoryType";
import { postType } from "./documents/postType";
import { authorType } from "./documents/authorType";
import { herobannerType } from "./documents/herobannerType";
import { featureType } from "./documents/featureType";
import { homepageType } from "./documents/homepageType";
import { sectionType } from "./documents/sectionType";

const documentTypes: SchemaTypeDefinition[] = [
  categoryType,
  postType,
  authorType,
  herobannerType,
  featureType,
  homepageType,
  sectionType,
];

const blockTypes: SchemaTypeDefinition[] = [blockContentType];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documentTypes, ...blockTypes],
};
