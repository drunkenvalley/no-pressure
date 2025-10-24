"use client";

import NextLink, { LinkProps as TLink } from "next/link";
import { PropsWithChildren } from "react";
import React from "react";
import { useRouter } from "next/navigation";

/**
 * A reusable link component with animated underline when the link is active.
 *
 * If href is present it uses NextLink, otherwise it uses a button.
 */
const Link = (props: BtnProps | LinkProps) => {
  const {
    children,
    className: additionalClassNames = "",
    onClick,
    ...rest
  } = props;

  const className = [
    `
    text-gold
    outline-offset-2
    cursor-pointer
    relative

    bg-gradient-to-r from-current to-current bg-no-repeat
    bg-[length:1em_0.1em] hover:bg-[length:100%_0.1em] focus:bg-[length:100%_0.1em]
    bg-[left_top_100%]

    transition-[background-size] duration-300 ease-in-out
  `,
    additionalClassNames,
  ]
    .join(" ")
    .trim();

  const router = useRouter();

  const scrollToView = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const anchorFn = onClick as React.MouseEventHandler<HTMLAnchorElement>;

    const target = event?.target as HTMLAnchorElement;
    const href = target?.href;
    const url = new URL(href);

    if (href && url?.pathname !== window.location.pathname) {
      return router.push(href);
    }

    const id = target?.href?.split("#").pop() ?? "";
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }

    if (anchorFn) {
      anchorFn(event);
    }
  };

  if (props.href) {
    const anchorProps = rest as LinkProps;
    return (
      <NextLink className={className} onClick={scrollToView} {...anchorProps}>
        {children}
      </NextLink>
    );
  }

  const buttonProps = rest as BtnProps;
  const buttonFn = onClick as React.MouseEventHandler<HTMLButtonElement>;
  return (
    <button className={className} onClick={buttonFn} {...buttonProps}>
      {children}
    </button>
  );
};

type TButton = Omit<React.HTMLProps<HTMLButtonElement>, "type">;

interface IProps {
  className?: string;
  isActive?: boolean;
}

interface BtnProps extends TButton, IProps, PropsWithChildren {}
interface LinkProps extends TLink, IProps, PropsWithChildren {}

export default Link;
