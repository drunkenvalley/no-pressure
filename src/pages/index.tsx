import Discord from "../components/Discord";
import FeatureList from "../components/FeatureList";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Nav from "../components/Nav";
import RaidProgression from "../components/RaidProgression";

const Home = () => {
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
        <Discord />
        <RaidProgression />
      </main>
    </>
  );
};

export default Home;
