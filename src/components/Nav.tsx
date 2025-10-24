"use client";

import { useState } from "react";
import Image from "@/components/Image";
import Link from "@/components/Link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Nav = ({ navItems }: { navItems: Record<string, string>[] }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItemEls = navItems.map(({ name, id }) => (
    <li className="mx-4" key={id}>
      <Link
        href={`/#${id}`}
        onClick={() => {
          setShowMobileMenu(false);
        }}
      >
        {name}
      </Link>
    </li>
  ));
  return (
    <>
      <div className="absolute" id="start">
        {/* position: absolute removes it from the visual flow, while still intersecting with viewport */}
      </div>
      <header
        className="fixed top-0 p-4 pr-12 lg:px-0 z-10 max-w-none w-full bg-purple/80 backdrop-blur-sm"
        id="navbar"
      >
        <nav
          className="max-w-5xl mx-auto flex justify-between items-center"
          id="nav"
        >
          <Image
            alt="No Pressure logo"
            className="cursor-pointer"
            height={64}
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ behavior: "smooth", top: 0 });
                setShowMobileMenu(false);
              } else {
                router.push("/");
              }
            }}
            src={"/no-pressure-logo-text.png"}
            width={291}
          />
          {navItems.length ? (
            <div
              className="md:hidden flex flex-col justify-between h-4 cursor-pointer"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div className="w-4 h-0.5 rounded-sm bg-gold" key={i} />
                ))}
            </div>
          ) : null}
          <ul className="hidden md:flex items-center">{navItemEls}</ul>
        </nav>
        <ul
          className={`flex flex-col items-center justify-evenly md:hidden overflow-hidden ease-in duration-300 ${
            showMobileMenu ? "h-96" : "h-0"
          }`.trim()}
        >
          {navItemEls}
        </ul>
      </header>
    </>
  );
};

export default Nav;
