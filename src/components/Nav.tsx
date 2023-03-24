import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo-ipsum-nav.svg";

const Nav = () => {
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

  const startRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (id === startRef.current?.id) {
          return handleStart(entry);
        }
        // Any other intersection handlers can be added here
      });
    },
    {
      threshold: 1,
    }
  );

  const [navHasBackground, setNavHasBackground] = useState(false);
  const handleStart = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      return setNavHasBackground(false);
    }
    return setNavHasBackground(true);
  };

  useEffect(() => {
    observer.observe(startRef.current as HTMLDivElement);
  }, []);

  return (
    <>
      <div className="absolute" id="start" ref={startRef}>
        {/* position: absolute removes it from the visual flow, while still intersecting with viewport */}
      </div>
      <header
        className={`sticky top-0 py-8 z-10 max-w-none w-full ml-[50%] translate-x-[-50%] ${
          navHasBackground &&
          "bg-purple/80 ease-in duration-300 backdrop-blur-sm"
        }`}
        id="navbar"
      >
        <nav className="max-w-5xl mx-auto flex justify-between" id="nav">
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
    </>
  );
};

export default Nav;
