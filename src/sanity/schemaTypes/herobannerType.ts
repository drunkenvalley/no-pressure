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
      name: "url",
      title: "URL",
      type: "image",
      validation: (rule) => rule.assetRequired(),
    }),
  ],
});
