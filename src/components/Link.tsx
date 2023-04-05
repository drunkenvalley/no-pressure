import NextLink from "next/link";
import React from "react";

type LinkVariantProps = React.HTMLProps<HTMLAnchorElement> & {
  href: string;
  variant?: "link";
};
type NavVariantProps = React.HTMLProps<HTMLLIElement> & {
  isActive: boolean;
  onClick: () => void;
  variant: "nav";
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
  const { children, className: additionalClassNames = "", variant } = props;

  const getActiveStyle = (): string => `
  ${
    // Non-hover/focus state: no underline unless link is the active nav variant
    variant === "nav" && props.isActive
      ? "bg-[length:100%_0.1em]"
      : "bg-[length:1em_0.1em]"
  }
`;

  const className = [
    `
    outline-offset-2
    cursor-pointer
    relative

    bg-gradient-to-r from-current to-current bg-no-repeat
    hover:bg-[length:100%_0.1em] focus:bg-[length:100%_0.1em]
    bg-[left_top_100%]

    transition-[background-size] duration-300 ease-in-out

    ${getActiveStyle()}
  `,
    additionalClassNames,
  ]
    .join(" ")
    .trim();

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
