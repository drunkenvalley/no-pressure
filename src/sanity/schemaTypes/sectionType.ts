import { defineField, defineType } from "sanity";

export const sectionType = defineType({
  name: "section",
  title: "Sections",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "mechanic",
      type: "reference",
      to: { type: "block" },
    }),
  ],
});
