import Image from "@/components/Image";
import { PropsWithChildren } from "react";

const Feature = ({ children, src, title }: PropsWithChildren<Props>) => (
  <article className="text-center flex-grow w-full flex flex-col gap-y-3">
    <Image
      alt={title}
      className="w-full h-[160px] object-cover rounded"
      height={160}
      responsive
      src={src}
      width={{ lg: 167, md: 167, sm: 283 }}
    />
    <section>
      <h2 className="text-2xl">{title && title}</h2>
      <p className="text-green">{children && children}</p>
    </section>
  </article>
);

interface Props {
  src: string;
  title: string;
}

export default Feature;
