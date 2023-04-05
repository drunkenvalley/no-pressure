import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
