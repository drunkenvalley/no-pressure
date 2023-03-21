import logo from "../../assets/logo-ipsum-nav.svg";

export const Nav = () => {
  const navItems = [
    { name: "Home", selector: "#home" },
    { name: "Join us", selector: "#join-us" },
    { name: "Raid progression", selector: "#raid-progression" },
    { name: "Bruxy's Corner", selector: "#corner" },
  ] as const;

  const scrollToView = (selector: typeof navItems[number]["selector"]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex sticky top-0 w-full justify-around">
      <img src={logo} />
      <ul className="flex">
        {navItems.map(({ name, selector }) => (
          <li
            className="mx-4 my-2 cursor-pointer"
            onClick={() => scrollToView(selector)}
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
