import { PropsWithChildren } from "react";

interface AboutProps {
  id: string;
}

export const About = ({ id, children }: PropsWithChildren<AboutProps>) => (
  <div
    className="max-w-full h-full bg-gradient-to-b from-purple via-purple to-blue/25 bg-[length:150%_100%] bg-center flex flex-col gap-8 p-8 md:p-12 rounded-lg"
    id={id}
  >
    <article className="text-left flex flex-col gap-6">
      {children && children}
    </article>
  </div>
);

export default About;
