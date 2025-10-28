import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blocks/blockContentType";
import { herobannerType } from "./documents/herobannerType";
import { featureType } from "./documents/featureType";
import { sectionType } from "./documents/sectionType";
import { featureListType } from "./documents/featureListType";
import { recruitmentType } from "./documents/recruitmentType";
import { pageType } from "./documents/pageType";

const documentTypes: SchemaTypeDefinition[] = [
  featureListType,
  featureType,
  herobannerType,
  pageType,
  recruitmentType,
  sectionType,
];

const blockTypes: SchemaTypeDefinition[] = [blockContentType];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documentTypes, ...blockTypes],
};
