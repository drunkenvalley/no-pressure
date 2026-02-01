import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("page").title("Pages"),
      S.listItem()
        .title("Page elements")
        .child(
          S.list()
            .title("Page elements")
            .items([
              ...S.documentTypeListItems().filter(
                (item) =>
                  item.getId() &&
                  !["page", "character", "feature"].includes(item.getId()!),
              ),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem("character").title("Characters"),
    ]);
