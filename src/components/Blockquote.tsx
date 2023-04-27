import { PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLQuoteElement>> {
  cite?: JSX.Element;
}

const Blockquote = ({ cite, children, className }: Props) => {
  return (
    <figure
      className={`flex flex-col gap-4 border border-l-8 p-8 ${className}`.trim()}
    >
      <blockquote className="flex flex-col gap-4">{children}</blockquote>
      {cite && (
        <figcaption className="flex flex-row items-center gap-2">
          — {cite}
        </figcaption>
      )}
    </figure>
  );
};

export default Blockquote;
