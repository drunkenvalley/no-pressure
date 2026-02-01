import { PortableTextReactComponents } from "next-sanity";
import Shinytext from "@/components/Text/Shinytext";
import Small from "@/components/Text/Small";
import Link from "@/components/Text/Link";

const textComponents: Partial<PortableTextReactComponents> | undefined = {
  marks: {
    link: ({ children, value }) => {
      return <Link href={value.href}>{children}</Link>;
    },
    strong: ({ children }) => {
      return <strong className="font-black">{children}</strong>;
    },
  },
  block: {
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

export default textComponents;
