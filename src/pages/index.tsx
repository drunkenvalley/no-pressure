import About from "@/components/About";
import DiscordResponse from "@/interfaces/DiscordData";
import DiscordWidget from "@/components/Discord/Widget";
import FeatureList from "../components/FeatureList";
import FetchDiscordData from "@/components/FetchDiscord";
import GridSection from "@/components/GridSection";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import RaidProgression from "../components/RaidProgression";
import pagetitle from "@/utils/pagetitle";

export const getStaticProps = async () => {
  const discordData = await FetchDiscordData();

  return {
    props: {
      discordData,
    },
    revalidate: 5 * 60, // 5 minutes
  };
};

interface Props {
  discordData: DiscordResponse;
}

const Home = ({ discordData }: Props) => {
  const title = pagetitle("Home");
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={title} name="twitter:title" />
      </Head>
      <HeroBanner />
      <FeatureList />
      <GridSection id="join-us">
        <About />
        <DiscordWidget value={discordData} />
      </GridSection>
      <RaidProgression />
    </>
  );
};

export default Home;
