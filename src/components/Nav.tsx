import { useEffect, useState } from "react";
import logo from "@/assets/logo-ipsum-nav.svg";

const Nav = () => {
  const [navHasBackground, setNavHasBackground] = useState(false);

  const navItems = [
    { name: "Home", selector: "#home" },
    { name: "Join us", selector: "#join-us" },
    { name: "Raid progression", selector: "#raid-progression" },
    { name: "Bruxy's Corner", selector: "#corner" },
  ] as const;

  const scrollToView = (selector: (typeof navItems)[number]["selector"]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const applyBackground = () => {
    const navDimensionsInPixels = 76;
    if (window.scrollY >= navDimensionsInPixels) {
      setNavHasBackground(true);
    } else {
      setNavHasBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", applyBackground);
    return () => window.removeEventListener("scroll", applyBackground);
  }, []);

  return (
    <header
      className={`sticky top-0 py-4 z-10 max-w-none w-[100vw] ml-[50%] translate-x-[-50%] ${
        navHasBackground && "bg-purple/80 ease-in duration-300 backdrop-blur-sm"
      }`}
      id="navbar"
    >
      <nav className="flex justify-around" id="nav">
        <img
          className="cursor-pointer"
          onClick={() => scrollToView("#home")}
          src={logo}
        />
        <ul className="flex items-center">
          {navItems.map(({ name, selector }) => (
            <li
              className="mx-4 cursor-pointer"
              key={selector.replace("#", "")}
              onClick={() => scrollToView(selector)}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
