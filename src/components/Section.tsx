import { PortableText, PortableTextReactComponents } from "next-sanity";
import Link from "@/components/Text/Link";
import { TypedObject } from "sanity";
import React, { PropsWithChildren } from "react";
import Progress from "@/components/Raid/Progression";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mechanics = {
  progression: Progress,
} as const;

interface Props {
  title: string;
  id: { _type: "slug"; current: string };
  content: TypedObject | TypedObject[];
  mechanic?: keyof typeof mechanics;
}

const Section = ({ id, title, content, mechanic }: Props) => {
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
      normal: ({ children }: PropsWithChildren) => (
        <p className="mt-4 text-left max-w-prose">{children}</p>
      ),
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="p-4  scroll-mt-32" id={id.current}>
        <h3 className="mt-2 text-left text-2xl text-gold"> {title}</h3>
        <PortableText
          components={components}
          value={content}
          onMissingComponent={(e) => console.warn(e)}
        />
      </section>
      {mechanic == "progression" && <Progress />}
    </div>
  );
};

export default Section;
