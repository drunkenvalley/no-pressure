const envWidgetId = process.env.NEXT_PUBLIC_DISCORD_WIDGET_ID as string;

const Discord = ({
  className = "",
  sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
  src = `https://discord.com/widget?id=${envWidgetId}&theme=dark`,
  title = "Preview of No Pressure community Discord",
  ...rest
}: React.HTMLProps<HTMLIFrameElement>) => {
  return (
    <iframe
      className={`w-full h-full min-h-[500px] ${className}`.trim()}
      sandbox={sandbox}
      src={src}
      title={title}
      {...rest}
    />
  );
};

export default Discord;
