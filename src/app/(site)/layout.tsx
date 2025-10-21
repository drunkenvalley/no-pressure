import "@/styles/globals.scss";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Nav from "@/components/Nav";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav
        navItems={[
          { id: "home", name: "Home" },
          { id: "join-us", name: "Join us" },
          { id: "raiding", name: "Raiding" },
        ]}
      />
      <main className="w-full max-w-full md:max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
        <HeroBanner />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
