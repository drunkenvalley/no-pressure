import { buildRaids, fetchRioProfiles } from "@/utils/raiderio";
import About from "@/components/About";
import ConstructionSite from "@/components/Construction";
import DiscordWidget from "@/components/Discord/Widget";
import FeatureList from "@/components/FeatureList";
import GridSection from "@/components/GridSection";
import Head from "next/head";
import { InferGetStaticPropsType } from "next/types";
import fetchDiscordData from "@/components/FetchDiscord";
import pagetitle from "@/utils/pagetitle";
import { prisma } from "@/utils/db";

const Home = ({
  discordData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = pagetitle("Home");
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={title} name="twitter:title" />
      </Head>
      <FeatureList />
      <GridSection id="join-us">
        <About />
        <DiscordWidget value={discordData} />
      </GridSection>
      <ConstructionSite />
    </>
  );
};

export const getStaticProps = async () => {
  const discordData = await fetchDiscordData();
  const raiders = await prisma.raider.findMany();
  const uniqueRaiders = raiders.filter(
    (r, i) =>
      i ===
      raiders.findIndex(
        (rr) => rr.characterName === r.characterName && rr.realm === r.realm,
      ),
  );
  const rioProfiles = await fetchRioProfiles({ raiders: uniqueRaiders });
  const raids = buildRaids(rioProfiles);

  return {
    props: {
      discordData,
      raids,
    },
    revalidate: 5 * 60, // 5 minutes
  };
};

export default Home;
