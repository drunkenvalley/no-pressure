import Discord from "../components/Discord";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Nav from "../components/Nav";
import RaidProgression from "../components/RaidProgression";

const Home = () => {
  return (
    <>
      <Head>
        <title>No Pressure</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <div className="App font-nunito h-full bg-purple text-gold overflow-x-clip">
        <Nav />
        <main className="max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
          <HeroBanner />
          <FeatureList />
          <Discord />
          <RaidProgression />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
