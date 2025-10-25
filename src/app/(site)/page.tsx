import About from "@/components/About";
import FeatureList from "@/components/FeatureList";
import HeroBanner from "@/components/HeroBanner";
import Feature from "@/components/Feature";
import { client } from "@/sanity/lib/client";
import Section from "@/components/Section";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { ComponentProps } from "react";

export const revalidate = 1800;

const Page = async () => {
  const { herobanner, sections } = await client.fetch(`
    *[_type=="homepage"][0]
    {
      "herobanner": {
        "alt": herobanner->alt,
      "src": herobanner->image.asset->url
      },
      "sections": sections[]->{
        ...,
        "features": features[]->{
          _id,
          alt,
          content,
          title,
          "src": image.asset->url
        }
      },
    }
`);

  const components: Partial<PortableTextReactComponents> | undefined = {
    types: {
      feature_list: ({ value }) => {
        return (
          <FeatureList>
            {value.features.map(
              ({
                _id,
                ...feature
              }: ComponentProps<typeof Feature> & { _id: string }) => (
                <Feature key={_id} {...feature} />
              ),
            )}
          </FeatureList>
        );
      },
      section: ({ value }) => <Section {...value} />,
    },
  };

  return (
    <main className="w-full max-w-full md:max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
      <HeroBanner {...herobanner} />
      <About />
      <PortableText components={components} value={sections} />
    </main>
  );
};
export default Page;
