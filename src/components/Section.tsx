import { PortableText, PortableTextReactComponents } from "next-sanity";
import Link from "@/components/Text/Link";
import { TypedObject } from "sanity";
import React, { PropsWithChildren } from "react";
import Progress from "@/components/Raid/Progression";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mechanics = {
  progression: Progress,
} as const;

const Section = ({ id, title, content, mechanic }: Props) => {
  const components: Partial<PortableTextReactComponents> | undefined = {
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
      normal: ({ children }: PropsWithChildren) => (
        <p className="mt-4 text-left max-w-prose">{children}</p>
      ),
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="p-4" id={id.current}>
        <h3 className="mt-2 text-left text-2xl text-gold">{title}</h3>
        <PortableText {...components} value={content} />
      </section>
      {mechanic == "progression" && <Progress />}
    </div>
  );
};

export default Section;

interface Props {
  title: string;
  id: { _type: "slug"; current: string };
  content: TypedObject | TypedObject[];
  mechanic?: keyof typeof mechanics;
}
