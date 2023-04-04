import Image from "./Image";
import Link from "./Link";
import NextLink from "next/link";

const Discord = () => {
  const wowMadeEasy = "https://www.wowmadeeasy.com/";

  const discordInviteLink = process.env
    .NEXT_PUBLIC_DISCORD_INVITE_LINK as string;
  const discordWidgetId = process.env.NEXT_PUBLIC_DISCORD_WIDGET_ID as string;

  return (
    <div className="grid gap-8 md:grid-cols-2 p-4 md:p-0" id="join-us">
      <div className="w-full h-full bg-gradient-to-b from-purple to-blue/25 flex flex-col gap-8 p-8 md:p-12 rounded-lg">
        <article className="text-left text-yellow-400 flex flex-col gap-6">
          <p>
            <strong className="font-bold text-center text-yellow-400">
              No Pressure
            </strong>{" "}
            began on reddit as a post with the opening pitch{" "}
            <Link
              className="text-green"
              href="https://www.reddit.com/r/wow/comments/zqzmhx/now_for_eu_community_for_players_too_nervous_to/"
            >
              NOW FOR EU: Community for Players Too Nervous to Try Dungeons
            </Link>
            .
          </p>
          <p>
            This is the foundation of the ethos of the community - to enable
            players to enjoy{" "}
            <Link
              className="text-green"
              href="https://dragonflight.blizzard.com/en-us/"
            >
              World of Warcraft: Dragonflight
            </Link>{" "}
            together, without pressure from others to perform. To relax and
            enjoy the show together.
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
            p-8 drop-shadow-lg rounded-lg gap-6
            bg-gradient-to-b from-dark via-dark to-blue/25 bg-[length:100%_200%] bg-top hover:bg-center
            border-b-4 border-transparent hover:border-gold focus:border-gold
            flex flex-col items-center justify-evenly
            transition-all duration-300
          `}
          href={discordInviteLink}
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
            <h3 className="text-xl mb-4">No Pressure Community</h3>
            <p className="text-green">Join us</p>
          </div>
        </NextLink>
      </div>
      <iframe
        className="w-full h-full min-h-[500px]"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        src={`https://discord.com/widget?id=${discordWidgetId}&theme=dark`}
      />
    </div>
  );
};

export default Discord;
