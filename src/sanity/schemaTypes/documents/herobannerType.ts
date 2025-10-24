import { defineField, defineType } from "sanity";

export const herobannerType = defineType({
  name: "herobanner",
  title: "Hero Banners",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "active",
      description: "Whether this is the currently active hero banner.",
      type: "boolean",
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
  initialValue: {
    active: false,
  },
});
