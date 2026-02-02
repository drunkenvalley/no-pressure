import { ElementType, FC, HTMLAttributes } from "react";

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

const Shinytext: FC<ComponentProps> = ({
  as: Tag = "p",
  children,
  className,
}) => {
  return (
    <Tag className={["relative", className].join(" ")}>
      <span className="absolute text-dark [text-shadow:_0_0_4px_rgb(0_0_0_/_100%)] select-none">
        {(children && children) || undefined}
      </span>
      <span className="relative bg-gradient-to-b from-gold via-gold to-orange text-transparent bg-clip-text">
        {(children && children) || undefined}
      </span>
    </Tag>
  );
};

export default Shinytext;
