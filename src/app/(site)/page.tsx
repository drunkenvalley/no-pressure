import About from "@/components/About";
import DiscordWidget from "@/components/Discord/Widget";
import FeatureList from "@/components/FeatureList";
import GridSection from "@/components/GridSection";
import HeroBanner from "@/components/HeroBanner";
import RaidProgression from "@/components/Raid/Progression";
import fetchDiscordData from "@/components/FetchDiscord";
import { client } from "@/sanity/lib/client";

export const revalidate = 1800;

const Page = async () => {
  const discordData = await fetchDiscordData();
  const herobanner = await client.fetch(
    `*[_type=="herobanner" && active][0]{alt, "src": image.asset->url}`,
  );

  return (
    <main className="w-full max-w-full md:max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
      <HeroBanner {...herobanner} />
      <FeatureList />
      <GridSection id="join-us">
        <About />
        <DiscordWidget value={discordData} />
      </GridSection>
      <RaidProgression />
    </main>
  );
};
export default Page;
