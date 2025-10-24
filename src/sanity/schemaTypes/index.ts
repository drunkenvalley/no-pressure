import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blocks/blockContentType";
import { herobannerType } from "./documents/herobannerType";
import { featureType } from "./documents/featureType";
import { homepageType } from "./documents/homepageType";
import { sectionType } from "./documents/sectionType";
import { featureListType } from "./documents/featureListType";

const documentTypes: SchemaTypeDefinition[] = [
  herobannerType,
  featureListType,
  featureType,
  homepageType,
  sectionType,
];

const blockTypes: SchemaTypeDefinition[] = [blockContentType];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documentTypes, ...blockTypes],
};
