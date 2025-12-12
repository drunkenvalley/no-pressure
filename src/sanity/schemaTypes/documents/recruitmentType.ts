import { defineField, defineType } from "sanity";
import ShinyTextStyle from "../styles/ShinyTextStyle";
import SmallTextStyle from "../styles/SmallTextStyle";

export const recruitmentType = defineType({
  name: "recruitment",
  title: "Recruitment Banners",
  type: "document",
  fields: [
    defineField({
      name: "title",
      description: "Only shown in studio",
      type: "string",
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
    defineField({
      name: "linkText",
      title: "Link text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],
});
