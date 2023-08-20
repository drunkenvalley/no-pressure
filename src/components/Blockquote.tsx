import { PropsWithChildren, ReactNode } from "react";

const Blockquote = ({
  cite = "",
  children,
  className,
  snapshot = "",
}: Props) => {
  return (
    <figure
      className={`flex flex-col gap-4 border border-l-8 p-8 bg-dark ${className}`.trim()}
    >
      <blockquote className="flex flex-col gap-4">{children}</blockquote>
      {cite && (
        <figcaption className="flex flex-col md:flex-row gap-2">
          <span className="place-self-start">— {cite}</span>
          <small className="flex-grow text-right text-gold/50 place-self-end">
            {snapshot}
          </small>
        </figcaption>
      )}
    </figure>
  );
};

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLQuoteElement>> {
  cite?: ReactNode;
  snapshot?: ReactNode;
}

export default Blockquote;
