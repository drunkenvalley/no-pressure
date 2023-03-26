import React, { useState } from "react";

type LinkProps = React.HTMLProps<HTMLAnchorElement> & {
  href?: string;
  onClick?: () => void;
};

const Link = (props: LinkProps) => {
  const { href, onClick, children } = props;
  const [active, setActive] = useState<boolean>(false);

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

    ${
      active
        ? "after:right-0 after:opacity-1"
        : "after:right-full after:opacity-0"
    }`.trim();

  return (
    <a
      className={className}
      href={href}
      onBlur={() => setActive(false)}
      onClick={onClick}
      onFocus={() => setActive(true)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {children}
    </a>
  );
};

export default Link;
