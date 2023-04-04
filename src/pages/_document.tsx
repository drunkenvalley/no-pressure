import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link href="/images/frostwolfpup.jpg" rel="icon" type="image/svg+xml" />
        <meta
          content="Welcome to the No Pressure Community - a community built on enjoying World of Warcraft: Dragonflight together with no pressure"
          name="description"
        />
        <meta content="https://no-pressure.eu/" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="No Pressure Community" property="og:title" />
        <meta
          content="Welcome to the No Pressure Community - a community built on enjoying World of Warcraft: Dragonflight together with no pressure"
          property="og:description"
        />
        <meta
          content="https://no-pressure.eu/images/og.jpg"
          property="og:image"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="drunkenvalley.github.io" property="twitter:domain" />
        <meta content="https://no-pressure.eu/" property="twitter:url" />
        <meta content="No Pressure Community" name="twitter:title" />
        <meta
          content="Welcome to the No Pressure Community - a community built on enjoying World of Warcraft: Dragonflight together with no pressure"
          name="twitter:description"
        />
        <meta
          content="https://no-pressure.eu/images/og.jpg"
          name="twitter:image"
        />
      </Head>
      <body className="font-nunito bg-purple text-gold">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
