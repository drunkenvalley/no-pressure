import Image from "next/image";

const Feature = ({ alt, content, src, title }: Props) => (
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
      <p>{content && content}</p>
    </section>
  </article>
);

interface Props {
  alt: string;
  content: string;
  src: string;
  title: string;
}

export default Feature;
