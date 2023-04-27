import Discord from "../components/Discord";
import FeatureList from "../components/FeatureList";
import Head from "next/head";
import RaidProgression from "../components/RaidProgression";
import pagetitle from "@/utils/pagetitle";

const Home = () => {
  const title = pagetitle("Home");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={title} name="twitter:title" />
      </Head>
      <FeatureList />
      <Discord />
      <RaidProgression />
    </>
  );
};

export default Home;
