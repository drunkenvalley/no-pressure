import { ElementType, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

const Small = ({
  as: Tag = "small",
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  const style = ["text-xs", className].join(" ");
  return (
    <Tag className={style} {...props}>
      {children}
    </Tag>
  );
};

export default Small;
