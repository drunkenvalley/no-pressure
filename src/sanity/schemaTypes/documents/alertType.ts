import { defineField, defineType } from "sanity";
import ShinyTextStyle from "../styles/ShinyTextStyle";
import SmallTextStyle from "../styles/SmallTextStyle";
import { Icon } from "@/components/Alert";

export const alertType = defineType({
  name: "alert",
  title: "Alert",
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
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: Icon.map((i) => ({ title: i, value: i })),
      },
    }),
  ],
});
