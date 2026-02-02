import { PortableTextReactComponents } from "next-sanity";
import { PropsWithChildren } from "react";
import Shinytext from "@/components/Text/Shinytext";
import Small from "@/components/Text/Small";
import Link from "@/components/Text/Link";

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
    small: ({ children }) => (
      <Small as="p" className="w-full text-center">
        {children}
      </Small>
    ),
  },
};

export default sectionComponents;
