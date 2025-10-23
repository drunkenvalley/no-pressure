import { PortableText, PortableTextReactComponents } from "next-sanity";
import Link from "@/components/Link";
import { TypedObject } from "sanity";
import Paragraph from "./Paragraph";

interface Props {
  title: string;
  content: TypedObject | TypedObject[];
}

const Section = ({ title, content }: Props) => {
  const textBlockComponents: Partial<PortableTextReactComponents> | undefined = {
    marks: {
      link: ({ children, value }) => {
        return <Link href={value.href}>{children}</Link>;
      },
      strong: ({ children }) => {
        return <strong className="font-black">{children}</strong>;
      },
      p: ({ children }) => (
        <p className="mt-4 text-left max-w-prose">{children}</p>
      ),
    },
    block: {
      normal: Paragraph,
    },
  };

  return (
    <div className="flex flex-col gap-4">
        <div className="p-4">
            <h3 className="mt-2 text-left text-2xl text-gold">{title}</h3>
            <PortableText components={textBlockComponents} value={content} />
        </div>
    </div>
  );
};

export default Section;
