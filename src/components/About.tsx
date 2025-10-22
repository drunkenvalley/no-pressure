import NextLink from "next/link";
import Image from "next/image";
import Link from "@/components/Link";
import Shinytext from "@/components/Shinytext";

export const About = ({
  className = "",
  ...rest
}: React.HTMLProps<HTMLDivElement>) => (
  <>
  <div
    className={`max-w-full h-full bg-gradient-to-b from-purple via-purple to-blue/25 bg-[length:150%_100%] bg-center flex flex-col gap-8 p-8 md:p-12 rounded-lg ${className}`.trim()}
    {...rest}
  >
    <article className="text-left flex flex-col gap-6">
      <p>
        <strong className="font-bold text-center">
          No Pressure
        </strong>{" "}
        started with a Reddit post that read:{" "}
        <Link href="https://www.reddit.com/r/wow/comments/zqzmhx/now_for_eu_community_for_players_too_nervous_to/">
          NOW FOR EU: Community for Players Too Nervous to Try Dungeons
        </Link>
      </p>
      <p>
        This is the basis for our community&apos;s ethos — to enable players to
        enjoy{" "}
        <Link href="https://worldofwarcraft.blizzard.com/en-gb/">
          World of Warcraft
        </Link>{" "}
        together without stress from players. To have fun and learn together,
        and do content of every difficulty level.
      </p>
    </article>
  </div>
  <article className="bg-dark p-8 lg:p-6 rounded-md flex flex-col lg:flex-row gap-6">
        <div className="grow text-left flex flex-row flex-wrap items-center justify-center">
          <Shinytext as="p" className="w-full text-center text-xl">
            Scared to touch &quot;Join queue&quot; in LFG? We won&apos;t bite.
          </Shinytext>
          <p className="text-xs">Unless we&apos;re playing Feral Druid.</p>
        </div>
        <div className="flex flex-row justify-center items-center">
        <NextLink className="p-4 border text-gold border-gold rounded-md relative flex flex-row gap-3 items-center" href="/invite">  
          <Image
            alt="Discord"
            className="h-6 w-6"
            height={24}
            src="/images/no-pressure-logo-icon.png"
            width={24}
          />
          <span>
            Join our <strong className="font-bold">Discord</strong> today!
          </span>
        </NextLink>
        </div>
      </article>
  </>
);

export default About;
