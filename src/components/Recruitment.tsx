import Link from "next/link";
import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { TypedObject } from "sanity";
import Shinytext from "./Text/Shinytext";
import Small from "./Text/Small";
import { client } from "@/sanity/lib/client";

const components: Partial<PortableTextReactComponents> | undefined = {
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
  linkText: TypedObject | TypedObject[];
}

const Recruitment = async ({ id, content, linkText }: Props) => (
  <article className="bg-dark p-8 lg:p-6 lg:rounded-lg flex flex-col lg:flex-row gap-6">
    <div
      id={id.current}
      className="grow text-left flex flex-row flex-wrap items-center justify-center scroll-mt-32"
    >
      <PortableText components={components} value={content} />
    </div>
    <div className="flex flex-row justify-center items-center">
      <Link
        className="p-4 border text-gold border-gold rounded-md relative flex flex-row gap-3 items-center group"
        href="/invite"
      >
        <Image
          alt="Discord"
          className="h-6 w-6"
          height={24}
          src="/images/no-pressure-logo-icon.png"
          width={24}
        />
        <span className="text-gold outline-offset-2 cursor-pointer relative bg-gradient-to-r from-current to-current bg-no-repeat group-hover:bg-[length:100%_0.1em] group-focus:bg-[length:100%_0.1em] bg-[left_top_100%] transition-[background-size] duration-300 ease-in-out  bg-[length:1em_0.1em]">
          <PortableText value={linkText} />
        </span>
      </Link>
    </div>
  </article>
);

export default Recruitment;
