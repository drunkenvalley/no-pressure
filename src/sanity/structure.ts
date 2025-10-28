import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("page").title("Pages"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["page", "feature"].includes(item.getId()!),
      ),
    ]);
