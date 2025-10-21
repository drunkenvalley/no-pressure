import { defineField, defineType } from "sanity";

export const heroBannerType = defineType({
  name: "herobanner",
  title: "Hero Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "active",
      type: "boolean",
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (rule) => rule.assetRequired(),
    }),
  ],
});
