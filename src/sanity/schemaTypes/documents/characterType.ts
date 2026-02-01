import { defineField, defineType } from "sanity";
import characterSearch from "@/sanity/schemaTypes/inputs/characterSearch";

export const characterType = defineType({
  name: "character",
  title: "Characters",
  description: "Retrieve a character from Raider.io",
  type: "document",
  fields: [
    defineField({
      name: "character_name",
      title: "Character name",
      type: "string",
      components: {
        input: characterSearch,
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
