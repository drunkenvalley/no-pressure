import { useEffect, useState } from "react";
import logo from "@/assets/inv_pet_frostwolfpup.jpg";

const Nav = () => {
  const navItems = [
    { id: "home", name: "Home" },
    { id: "join-us", name: "Join us" },
    { id: "raid-progression", name: "Raid Progression" },
    { id: "corner", name: "Bruxy's Corner" },
  ] as const;

  const scrollToView = (id: (typeof navItems)[number]["id"]) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [navHasBackground, setNavHasBackground] = useState(false);
  const [visibleNavItems, setVisibleNavItems] = useState<string[]>([]);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  const observedStart = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      return setNavHasBackground(false);
    }
    return setNavHasBackground(true);
  };
  const observedNavItems = (entry: IntersectionObserverEntry) => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      return setVisibleNavItems((items) => [...items, id]);
    }
    return setVisibleNavItems((items) => items.filter((item) => item !== id));
  };

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (id === "start") {
          return observedStart(entry);
        }
        observedNavItems(entry);
      });
    },
    {
      threshold: 0.85,
    }
  );

  // This effect is to observe the start and nav items
  useEffect(() => {
    observer.observe(document.getElementById("start") as HTMLDivElement);
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
  }, []);

  // This effect is to update the active nav item when the visible nav items change
  // Thanks to https://stackoverflow.com/a/64664382/104380
  useEffect(() => {
    return setActiveNavItem(
      navItems.find(({ id }) => visibleNavItems.includes(id))?.id || null
    );
  }, [visibleNavItems]);

  return (
    <>
      <div className="absolute" id="start">
        {/* position: absolute removes it from the visual flow, while still intersecting with viewport */}
      </div>
      <header
        className={`sticky top-0 py-8 z-10 max-w-none w-full ml-[50%] translate-x-[-50%] ${
          navHasBackground
            ? "bg-purple/80 ease-in duration-300 backdrop-blur-sm"
            : ""
        }`.trim()}
        id="navbar"
      >
        <nav className="max-w-5xl mx-auto flex justify-between" id="nav">
          <img
            className="cursor-pointer rounded-full"
            onClick={() => scrollToView("home")}
            src={logo}
          />
          <ul className="flex items-center">
            {navItems.map(({ name, id }) => (
              <li
                className={`mx-4 cursor-pointer relative before:block before:absolute before:border before:h-px before:top-full before:left-0 before:transition-all before:duration-300 ${
                  activeNavItem === id
                    ? "before:right-0 before:opacity-1"
                    : "before:right-full before:opacity-0"
                }`.trim()}
                key={id}
                onClick={() => scrollToView(id)}
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
