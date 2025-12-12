import "@/styles/globals.scss";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav
        navItems={[
          { id: "home", name: "Home" },
          { id: "join-discord", name: "Join us" },
          { id: "raiding", name: "Raiding" },
        ]}
      />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
