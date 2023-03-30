import Image from "next/image";
import { PropsWithChildren } from "react";

interface Props {
  src: string;
  title: string;
}

const Feature = ({ children, src, title }: PropsWithChildren<Props>) => (
  <article className="text-center flex-grow w-full flex flex-col gap-y-3">
    <Image
      alt={title}
      className="w-full h-[160px] object-cover rounded"
      height={160}
      src={src}
      width={700}
    />
    <section>
      <h2 className="text-2xl">{title && title}</h2>
      <p className="text-green">{children && children}</p>
    </section>
  </article>
);

export default Feature;
