import { HTMLAttributes, PropsWithChildren } from "react";

const Strong = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) => {
  const style = ["font-bold", className].join(" ");
  return (
    <strong className={style} {...props}>
      {children}
    </strong>
  );
};

export default Strong;
