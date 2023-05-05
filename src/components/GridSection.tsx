interface Props
  extends React.HTMLProps<HTMLDivElement>,
    React.PropsWithChildren {}

export const GridSection = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={`grid gap-8 md:grid-cols-2 p-4 md:p-0 ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GridSection;
