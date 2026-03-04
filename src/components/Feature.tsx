import { PortableText, PortableTextReactComponents } from "next-sanity";
import Image from "next/image";
import { TypedObject } from "sanity";
import UserCount from "./Discord/UserCount";

const Feature = ({ alt, content, src, title }: Props) => {
  const components: Partial<PortableTextReactComponents> | undefined = {
    marks: {
      discordUserCount: () => <UserCount />,
    },
  };

  return (
    <article className="text-center flex-grow w-full flex flex-col gap-y-3">
      <div className="w-full h-[160px] relative">
        <Image
          alt={alt}
          className="w-full h-full top-0 left-0 object-cover rounded"
          fill
          src={src}
          unoptimized
        />
      </div>
      <section>
        <h2 className="text-2xl text-gold">{title && title}</h2>
        <PortableText components={components} value={content} />
      </section>
    </article>
  );
};

interface Props {
  alt: string;
  content: TypedObject | TypedObject[];
  src: string;
  title: string;
}

export default Feature;
