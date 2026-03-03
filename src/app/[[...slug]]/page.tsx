import HeroBanner from "@/components/HeroBanner";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import pageComponents from "@/components/PortableText/pageComponents";

export const revalidate = 1800;

interface PageProps {
  // we want to catch both "/", "/index", and "/other-page"
  params: Promise<{ slug: string[] }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const page = slug?.length ? slug[0] : "index";

  const sanityData = await client.fetch(`
    *[_type=="page" && slug.current =="${page}"][0]
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
  if (!sanityData) {
    notFound();
  }

  const { herobanner, sections } = sanityData;

  return (
    <main className="w-full max-w-full md:max-w-5xl mx-auto flex flex-col gap-y-8 pb-8 pt-24">
      <HeroBanner {...herobanner} />
      <PortableText components={pageComponents} value={sections} />
    </main>
  );
};
export default Page;
