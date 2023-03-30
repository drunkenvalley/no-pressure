import Image from "next/image";
import Link from "./Link";
import NextLink from "next/link";

const Discord = () => {
  const wowMadeEasy = "https://www.wowmadeeasy.com/";

  const discordInviteLink = process.env
    .NEXT_PUBLIC_DISCORD_INVITE_LINK as string;
  const discordWidgetId = process.env.NEXT_PUBLIC_DISCORD_WIDGET_ID as string;

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center center w-full gap-8 px-4 lg:px-0 my-4 scroll-mt-[136px]"
      id="join-us"
    >
      <div className="w-full border border-blue rounded py-16 px-4 md:px-16 flex justify-center items-center gap-y-8 min-h-[500px]">
        <div className="w-[400px] mx-auto">
          <p className="text-yellow-400">
            <strong className="font-bold text-center text-yellow-400">
              No Pressure
            </strong>{" "}
            started as a European counterpart to{" "}
            <Link href={wowMadeEasy}>WoW Made Easy</Link> - a community built on
            enjoying Dragonflight together, with no pressure
          </p>
          <div className="my-4 p-8 border-blue border rounded-xl flex items-center justify-evenly gap-6">
            <Image
              alt="Frost wolf pup"
              className="w-16 h-16 rounded-full"
              height={64}
              src={"/inv_pet_frostwolfpup.jpg"}
              width={64}
            />
            <div className="flex flex-col align-center">
              <h3 className="text-xl mb-4">No Pressure Community</h3>
              <NextLink
                className="hover:bg-green ease-in-out duration-300 bg-blue rounded p-3 join-us cursor-pointer"
                href={discordInviteLink}
                rel="noreferrer"
                target="_blank"
              >
                Join us
              </NextLink>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="w-full md:w-[500px] h-[500px] flex-shrink-0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        src={`https://discord.com/widget?id=${discordWidgetId}&theme=dark`}
      />
    </div>
  );
};

export default Discord;
