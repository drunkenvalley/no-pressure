import { UserCountPreview } from "@/components/Discord/UserCount";
import { defineField, defineType } from "sanity";

export const featureType = defineType({
  name: "feature",
  title: "Features",
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
          marks: {
            decorators: [
              {
                title: "Discord User Count",
                value: "discordUserCount",
                component: UserCountPreview,
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "alt",
      title: "Description",
      description: `Describe in brief the image contents, such as "hero banner picturing the heroic cast of the game in front of a haunting villain"`,
      type: "text",
      hidden: ({ document }) => !document?.image,
    }),
  ],
  initialValue: {
    alt: "",
  },
});
