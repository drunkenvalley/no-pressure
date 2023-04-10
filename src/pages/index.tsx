import About from "@/components/About";
import DiscordResponse from "@/interfaces/DiscordData";
import DiscordWidget from "@/components/Discord/Widget";
import FeatureList from "../components/FeatureList";
import FetchDiscordData from "@/components/FetchDiscord";
import GridSection from "@/components/GridSection";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Nav from "../components/Nav";
import RaidProgression from "../components/RaidProgression";

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
  return (
    <>
      <Head>
        <title>No Pressure Community</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <Nav
        navItems={[
          { id: "home", name: "Home" },
          { id: "join-us", name: "Join us" },
          { id: "raid-progression", name: "Raid Progression" },
        ]}
      />
      <main className="max-w-full md:max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
        <HeroBanner />
        <FeatureList />
        <GridSection id="join-us">
          <About inviteLink={discordData.instant_invite} />
          <DiscordWidget value={discordData} />
        </GridSection>
        <RaidProgression />
      </main>
    </>
  );
};

export default Home;
