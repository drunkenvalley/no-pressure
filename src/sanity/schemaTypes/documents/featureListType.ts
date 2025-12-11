import { defineField, defineType } from "sanity";

export const featureListType = defineType({
  name: "feature_list",
  title: "Feature Lists",
  description:
    "Displays a row of features in a line, or in a column when the viewport is small.",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      title: "Feature Lists",
      type: "array",
      of: [{ type: "reference", to: [{ type: "feature" }] }],
      validation: (rule) => rule.max(3).unique(),
    }),
  ],
});
