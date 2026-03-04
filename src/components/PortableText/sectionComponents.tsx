import { PortableTextReactComponents } from "next-sanity";
import { PropsWithChildren } from "react";
import Shinytext from "@/components/Text/Shinytext";
import Small from "@/components/Text/Small";
import Link from "@/components/Text/Link";
import BulletList from "@/components/List/Bullet";
import NumberList from "@/components/List/Number";

type TListItem = "bullet" | "number";
const sectionComponents: Partial<PortableTextReactComponents> | undefined = {
  marks: {
    link: ({ children, value }) => {
      return <Link href={value.href}>{children}</Link>;
    },
    strong: ({ children }) => {
      return <strong className="font-black">{children}</strong>;
    },
  },
  block: {
    normal: ({ children }: PropsWithChildren) => (
      <p className="mt-4 text-left max-w-prose">{children}</p>
    ),
    shiny: (props) => (
      <Shinytext as="p" className="w-full text-xl text-center" {...props} />
    ),
    bullet: ({ children }) => {
      return <li className="bg-gray-50/10">{children}</li>;
    },
    small: ({ children }) => (
      <Small as="p" className="w-full text-center">
        {children}
      </Small>
    ),
  },
  list: ({ children, value }) => {
    const type = value.listItem as TListItem;
    if (type === "number") {
      return <NumberList>{children}</NumberList>;
    }
    return <BulletList>{children}</BulletList>;
  },
  listItem: ({ children }) => {
    return <li className="ps-2">{children}</li>;
  },
};

export default sectionComponents;
