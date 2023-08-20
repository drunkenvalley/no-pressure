import { useEffect, useState } from "react";
import Image from "@/components/Image";
import Link from "@/components/Link";
import { useRouter } from "next/router";

const Nav = ({ navItems }: { navItems: Record<string, string>[] }) => {
  const router = useRouter();

  const [visibleNavItems, setVisibleNavItems] = useState<string[]>([]);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const observedNavItems = (entry: IntersectionObserverEntry) => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      return setVisibleNavItems((items) => [...items, id]);
    }
    return setVisibleNavItems((items) => items.filter((item) => item !== id));
  };

  // typeof window === 'undefined' when component is being rendered on the server.
  // node env doesn't have IntersectionObserver, so we have to account for it not being available
  const observer = (typeof window !== "undefined" &&
    new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          observedNavItems(entry);
        });
      },
      {
        threshold: 0.85,
      }
    )) as IntersectionObserver;
  // observer is currently only used inside useEffect, which never runs on the server.
  // that means we're safe to do "as ..." on the whole thing, and the browser/node discrepancy ends here

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

  const navItemEls = navItems.map(({ name, id }) => (
    <li className="mx-4" key={id}>
      <Link
        href={`/#${id}`}
        isActive={activeNavItem === id}
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
              if (router.pathname === "/") {
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
