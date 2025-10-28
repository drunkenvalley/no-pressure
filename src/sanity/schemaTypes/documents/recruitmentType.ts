import { defineType } from "sanity";
import ShinyTextStyle from "../styles/ShinyTextStyle";
import SmallTextStyle from "../styles/SmallTextStyle";

export const recruitmentType = defineType({
  name: "recruitment",
  title: "Recruitment Banners",
  type: "document",
  fields: [
    {
      name: "title",
      description: "Only shown in studio",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [ShinyTextStyle, SmallTextStyle],
        },
      ],
    },
    {
      name: "linkText",
      title: "Link text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
});
