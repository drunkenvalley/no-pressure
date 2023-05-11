import NextLink, { LinkProps as TLink } from "next/link";
import { NextRouter, useRouter } from "next/router";
import { PropsWithChildren } from "react";
import React from "react";

type TButton = Omit<React.HTMLProps<HTMLButtonElement>, "type">;

interface IProps {
  className?: string;
  isActive?: boolean;
}

interface BtnProps extends TButton, IProps, PropsWithChildren {}
interface LinkProps extends TLink, IProps, PropsWithChildren {}

/**
 * A reusable link component with animated underline when the link is active.
 *
 * If href is present it uses NextLink, otherwise it uses a button.
 */
const Link = (props: BtnProps | LinkProps) => {
  const {
    children,
    className: extraClassName = "",
    isActive = false,
    onClick: extraOnClick,
    ...rest
  } = props;

  const className = [
    defaultClassName,
    // Non-hover/focus state: no underline unless link is the active nav variant
    isActive ? "bg-[length:100%_0.1em]" : "bg-[length:1em_0.1em]",
    extraClassName,
  ]
    .join(" ")
    .trim();

  const router = useRouter();

  if (props.href) {
    const isExternal = (props.href as string).startsWith("http");
    return (
      <NextLink
        className={className}
        onClick={(e) => {
          onClick(e, router);
          (extraOnClick as React.MouseEventHandler<HTMLAnchorElement>)?.(e);
        }}
        target={isExternal ? "_blank" : undefined}
        {...(rest as LinkProps)}
      >
        {children}
      </NextLink>
    );
  }

  return (
    <button
      className={className}
      onClick={extraOnClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(rest as BtnProps)}
    >
      {children}
    </button>
  );
};

const defaultClassName = `
  outline-offset-2
  cursor-pointer
  relative

  bg-gradient-to-r from-current to-current bg-no-repeat
  hover:bg-[length:100%_0.1em] focus:bg-[length:100%_0.1em]
  bg-[left_top_100%]

  transition-[background-size] duration-300 ease-in-out
`;

const onClick = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  router: NextRouter
) => {
  const target = e.target as HTMLAnchorElement;
  const href = target.href;
  if (!href || href.startsWith("http")) {
    return;
  }

  e.preventDefault();

  if (new URL(href).pathname !== window.location.pathname) {
    return router.push(href);
  }

  const id = href.split("#").pop() as string;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }
};

export default Link;
