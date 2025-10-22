import { ComponentProps } from "react";
import About from "@/components/About";
import FeatureList from "@/components/FeatureList";
import HeroBanner from "@/components/HeroBanner";
import RaidProgression from "@/components/Raid/Progression";
import Feature from "@/components/Feature";
import { client } from "@/sanity/lib/client";

export const revalidate = 1800;

const Page = async () => {
  const { herobanner, features } = await client.fetch(`
    *[_type=="homepage"][0]{
      "herobanner": {
        "alt": herobanner->alt,
      "src": herobanner->image.asset->url
      },
      "features": features[]->{
        _id,
        alt,
        content,
        "src": image.asset->url,
        title,
      }
    }`);

  return (
    <main className="w-full max-w-full md:max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
      <HeroBanner {...herobanner} />
      <FeatureList>
        {features.map(
          (feature: ComponentProps<typeof Feature> & { _id: string }) => (
            <Feature key={feature._id} {...feature} />
          ),
        )}
      </FeatureList>
      <About />
      <RaidProgression />
    </main>
  );
};
export default Page;
