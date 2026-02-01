import Link from "@/components/Text/Link";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { TypedObject } from "sanity";
import Shinytext from "./Text/Shinytext";
import Small from "./Text/Small";

const components: Partial<PortableTextReactComponents> | undefined = {
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

interface Props {
  title: string;
  id: { _type: "slug"; current: string };
  content: TypedObject | TypedObject[];
}

export const About = ({ id, content }: Props) => (
  <div
    className="max-w-full h-full bg-gradient-to-b from-purple via-purple to-blue/25 bg-[length:150%_100%] bg-center flex flex-col gap-8 p-8 md:p-12 rounded-lg"
    id={id.current}
  >
    <article className="text-left flex flex-col gap-6">
      <PortableText components={components} value={content} />
    </article>
  </div>
);

export default About;
