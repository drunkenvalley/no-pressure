import { PropsWithChildren } from "react";

export const Paragraph = ({ children }: PropsWithChildren) => (
  <p className="mt-4 text-left max-w-prose">{children}</p>
);
export default Paragraph;
