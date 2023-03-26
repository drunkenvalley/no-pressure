import React from "react";

type LinkVariantProps = React.HTMLProps<HTMLAnchorElement> & {
  isActive: boolean;
  variant?: "link";
  href: string;
  setIsActive: (newValue: boolean) => void;
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
 *  1. "link" (default): renders an <a> tag and calls a setIsActive callback
 *     when the link is (un)focused and (un)hovered.
 *  2. "nav": renders a <li> tag with an onClick callback. Has no inherent
 *     hover/focus behaviour.
 */
const Link = (props: Props) => {
  const { isActive, variant, children } = props;

  const className = `
    ${variant === "nav" ? "mx-4" : null}
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

    ${
      isActive
        ? "after:right-0 after:opacity-1"
        : "after:right-full after:opacity-0"
    }`.trim();

  const Tag = variant === "nav" ? "li" : "a";
  const returnProps = {
    className,
    ...(variant === "nav" && {
      onClick: props.onClick,
    }),
    ...(variant !== "nav" && {
      href: props.href,
      onBlur: () => props.setIsActive(false),
      onFocus: () => props.setIsActive(true),
      onMouseEnter: () => props.setIsActive(true),
      onMouseLeave: () => props.setIsActive(false),
    }),
  };

  return <Tag {...returnProps}>{children}</Tag>;
};

export default Link;
