import { defineField, defineType } from "sanity";
import ShinyTextStyle from "@/sanity/schemaTypes/styles/ShinyTextStyle";
import SmallTextStyle from "@/sanity/schemaTypes/styles/SmallTextStyle";

export const aboutType = defineType({
  name: "about",
  title: "'About' section",
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
          styles: [ShinyTextStyle, SmallTextStyle],
        },
      ],
    }),
  ],
});
