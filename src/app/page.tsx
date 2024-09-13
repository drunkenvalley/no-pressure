import About from "@/components/About";
import DiscordWidget from "@/components/Discord/Widget";
import FeatureList from "@/components/FeatureList";
import GridSection from "@/components/GridSection";
import RaidProgression from "@/components/Raid/RaidProgression";
import fetchDiscordData from "@/components/FetchDiscord";

const Page = async () => {
  const discordData = await fetchDiscordData();

  return (
    <>
      <FeatureList />
      <GridSection id="join-us">
        <About />
        <DiscordWidget value={discordData} />
      </GridSection>
      <RaidProgression />
    </>
  );
};
export default Page;