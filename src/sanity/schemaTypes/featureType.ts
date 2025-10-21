import { defineField, defineType } from "sanity";

export const featureType = defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (rule) => rule.required().assetRequired(),
    }),
    defineField({
      name: "alt",
      title: "Description",
      description: `Describe in brief the image contents, such as "hero banner picturing the heroic cast of the game in front of a haunting villain"`,
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
});
