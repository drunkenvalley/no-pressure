import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "herobanner",
      title: "Hero banner",
      type: "reference",
      to: [{ type: "herobanner" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      title: "Feature List",
      type: "array",
      of: [{ type: "reference", to: [{ type: "feature" }] }],
      validation: (rule) => rule.max(3).unique(),
    }),
  ],
});
