import { PropsWithChildren } from "react";

interface Props {
  src: string;
  title: string;
}

const Feature = ({
  children,
  src,
  title,
}: Partial<PropsWithChildren<Props>>) => (
  <article className="text-center flex-grow w-px flex flex-col gap-y-3">
    <img className="h-[160px] w-full object-cover rounded" src={src} />
    <section>
      <h2 className="text-2xl">{title && title}</h2>
      <p className="text-green">{children && children}</p>
    </section>
  </article>
);

export default Feature;
