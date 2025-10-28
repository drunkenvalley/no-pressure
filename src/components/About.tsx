import Link from "@/components/Text/Link";

export const About = ({
  className = "",
  ...rest
}: React.HTMLProps<HTMLDivElement>) => (
  <div
    className={`max-w-full h-full bg-gradient-to-b from-purple via-purple to-blue/25 bg-[length:150%_100%] bg-center flex flex-col gap-8 p-8 md:p-12 rounded-lg ${className}`.trim()}
    {...rest}
  >
    <article className="text-left flex flex-col gap-6">
      <p>
        <strong className="font-bold text-center">No Pressure</strong> started
        with a Reddit post that read:{" "}
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
);

export default About;
