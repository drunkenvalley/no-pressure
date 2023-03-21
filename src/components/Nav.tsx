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

  return (
    <nav className="flex w-full justify-around">
      <img
        className="cursor-pointer"
        src={logo}
        onClick={() => scrollToView("#home")}
      />
      <ul className="flex items-center">
        {navItems.map(({ name, selector }) => (
          <li
            className="mx-4 cursor-pointer"
            onClick={() => scrollToView(selector)}
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
