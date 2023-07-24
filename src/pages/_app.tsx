import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Head from "next/head";
import HeroBanner from "@/components/HeroBanner";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();

  const description = `Welcome to No Pressure - a community built on enjoying World of Warcraft: Dragonflight together, with no pressure`;
  const img = "https://no-pressure.eu/images/og.png";
  const domain = "https://no-pressure.eu";
  const url = `${domain}${asPath}`;
  return (
    <>
      <Head>
        <link
          href="/images/no-pressure-logo-icon.png"
          rel="icon"
          type="image/svg+xml"
        />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={description} name="twitter:description" />
        <meta content={img} property="og:image" />
        <meta content={img} name="twitter:image" />
        <meta content={domain} property="twitter:domain" />
        <meta content={url} property="og:url" />
        <meta content={url} property="twitter:url" />
        <meta content="website" property="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta charSet="UTF-8" />
      </Head>
      <Nav
        navItems={[
          { id: "home", name: "Home" },
          { id: "join-us", name: "Join us" },
          { id: "raid-progression", name: "Raid Progression" },
        ]}
      />
      <main className="w-full max-w-full md:max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
        <HeroBanner />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default App;
