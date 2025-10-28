import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: `How the page title appears in the address bar.`,
      type: "slug",
      options: {
        source: "title",
      },
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
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "section" },
            { type: "feature_list" },
            { type: "recruitment" },
          ],
        },
      ],
      validation: (rule) => rule.unique(),
    }),
  ],
});
