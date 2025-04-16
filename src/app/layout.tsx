import "@/styles/globals.scss";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

const meta = {
  description: `Welcome to No Pressure - a community built on enjoying World of Warcraft: Dragonflight together, with no pressure`,
  images: "/images/og.png",
  title: "No Pressure",
  url: "https://no-pressure.eu",
};

export const metadata: Metadata = {
  description: meta.description,
  other: {
    "og:image": meta.images,
    "og:title": meta.title,
    "og:url": "https://no-pressure.eu",
  },
  title: {
    default: meta.title,
    template: `${meta.title} | %s`,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-nunito bg-purple text-gold">
        <link
          href="/images/no-pressure-logo-icon.png"
          rel="icon"
          type="image/svg+xml"
        />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta charSet="UTF-8" />
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
      </body>
    </html>
  );
};

export default RootLayout;
