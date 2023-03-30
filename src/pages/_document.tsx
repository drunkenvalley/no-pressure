import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link
          href="/inv_pet_frostwolfpup.jpg"
          rel="icon"
          type="image/svg+xml"
        />
        <meta
          content="No Pressure - a community built on enjoying Dragonflight together, with no pressure"
          name="description"
        />
        <meta content="https://no-pressure.eu/" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="No Pressure" property="og:title" />
        <meta
          content="No Pressure - a community built on enjoying Dragonflight together, with no pressure"
          property="og:description"
        />
        <meta
          content="https://no-pressure.eu/inv_pet_frostwolfpup.jpg"
          property="og:image"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="drunkenvalley.github.io" property="twitter:domain" />
        <meta content="https://no-pressure.eu/" property="twitter:url" />
        <meta content="No Pressure" name="twitter:title" />
        <meta
          content="No Pressure - a community built on enjoying Dragonflight together, with no pressure"
          name="twitter:description"
        />
        <meta
          content="https://no-pressure.eu/inv_pet_frostwolfpup.jpg"
          name="twitter:image"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
