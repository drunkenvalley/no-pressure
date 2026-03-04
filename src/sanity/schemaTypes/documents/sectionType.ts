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
      name: "id",
      title: "Identifier",
      description: `Enables linking directly to it ala "https://example.com/#id" to directly bring a user to this section.`,
      type: "slug",
      options: {
        source: "title",
      },
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
      title: "Mechanism",
      type: "string",
      options: {
        list: [
          {
            title: "Raid progression",
            value: "progression",
          },
        ],
      },
    }),
  ],
});
