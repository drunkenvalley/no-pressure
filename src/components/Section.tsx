import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";
import Progress from "@/components/Raid/Progression";
import sectionComponents from "./PortableText/sectionComponents";

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
  return (
    <div className="flex flex-col gap-4">
      <section className="p-4  scroll-mt-32" id={id.current}>
        <h3 className="mt-2 text-left text-2xl text-gold">{title}</h3>
        <PortableText components={sectionComponents} value={content} />
      </section>
      {mechanic == "progression" && <Progress />}
    </div>
  );
};

export default Section;
