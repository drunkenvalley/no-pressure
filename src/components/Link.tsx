import NextLink from "next/link";
import React from "react";

type LinkVariantProps = React.HTMLProps<HTMLAnchorElement> & {
  variant?: "link";
  href: string;
};
type NavVariantProps = React.HTMLProps<HTMLLIElement> & {
  isActive: boolean;
  variant: "nav";
  onClick: () => void;
};
type Props = LinkVariantProps | NavVariantProps;

/**
 * A reusable link component with animated underline when the link is active.
 *
 * Has two variants:
 *  1. "link" (default): renders a <Link> component with hover/focus styling.
 *  2. "nav": renders a <button> with an onClick callback. Active state styling
 *     is handled by an isActive prop, rather than directly by hover/focus.
 */
const Link = (props: Props) => {
  const { variant, children } = props;

  const getActiveStyle = (): string => `
  ${
    // Non-hover/focus state: no underline unless link is the active nav variant
    variant === "nav" && props.isActive
      ? "after:right-0 after:opacity-100"
      : "after:right-full after:opacity-0"
  }

  hover:after:right-0
  focus:after:right-0

  hover:after:opacity-100
  focus:after:opacity-100
`;

  const className = `
    cursor-pointer
    relative

    after:block
    after:absolute
    after:border
    after:h-px
    after:top-full
    after:left-0
    after:transition-all
    after:duration-300

    ${getActiveStyle()}
  `.trim();

  let element: JSX.Element;
  switch (variant) {
    case "nav": {
      element = (
        <button className={className} onClick={props.onClick}>
          {children}
        </button>
      );
      break;
    }
    default: {
      element = (
        <NextLink className={className} href={props.href as string}>
          {children}
        </NextLink>
      );
    }
  }

  return element;
};

export default Link;
