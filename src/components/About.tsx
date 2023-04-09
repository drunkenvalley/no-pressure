import Image from "./Image";
import Link from "./Link";
import NextLink from "next/link";

interface Props extends React.HTMLProps<HTMLDivElement> {
  inviteLink?: string;
  wowMadeEasy?: string;
}

const envInviteLink = process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK as string;

export const About = ({
  className = "",
  inviteLink = envInviteLink,
  wowMadeEasy = "https://www.wowmadeeasy.com/",
  ...rest
}: Props) => (
  <div
    className={`w-full h-full bg-gradient-to-b from-purple via-purple to-blue/25 bg-[length:150%_100%] bg-center flex flex-col gap-8 p-8 md:p-12 rounded-lg ${className}`.trim()}
    {...rest}
  >
    <article className="text-left text-yellow-400 flex flex-col gap-6">
      <p>
        <strong className="font-bold text-center text-yellow-400">
          No Pressure
        </strong>{" "}
        started with a Reddit post that read:{" "}
        <Link
          className="text-green"
          href="https://www.reddit.com/r/wow/comments/zqzmhx/now_for_eu_community_for_players_too_nervous_to/"
        >
          NOW FOR EU: Community for Players Too Nervous to Try Dungeons
        </Link>
      </p>
      <p>
        This is the basis for our community&apos;s ethos — to enable players to
        enjoy{" "}
        <Link
          className="text-green"
          href="https://dragonflight.blizzard.com/en-us/"
        >
          World of Warcraft: Dragonflight
        </Link>{" "}
        together without stress from players. To have fun and learn together,
        and do content of every difficulty level.
      </p>
      <p>
        Join us today and find out what it&apos;s like to play with a no
        pressure community. If you&apos;re in the US check out{" "}
        <Link className="text-green" href={wowMadeEasy}>
          WoW Made Easy
        </Link>{" "}
        - the original that inspired No Pressure.
      </p>
    </article>
    <NextLink
      className={`
      p-8 drop-shadow-lg rounded-lg gap-8
      bg-gradient-to-b from-dark via-dark to-blue/25 bg-[length:100%_200%] bg-top hover:bg-center focus:bg-center
      border-b-4 border-transparent hover:border-gold focus:border-gold
      aspect-[16/9]
      flex flex-col items-center justify-center
      transition-all duration-300
      `}
      href={inviteLink}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        alt="Frostwolf pup"
        className="w-16 h-16 rounded-full"
        height={64}
        src="/frostwolfpup.jpg"
        width={64}
      />
      <div className="flex flex-col align-center">
        <h3 className="text-xl mb-1">No Pressure Community</h3>
        <p className="text-green">Join us</p>
      </div>
    </NextLink>
  </div>
);

export default About;
