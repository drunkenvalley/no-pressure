import Link from "./Link";
import logo from "@/assets/inv_pet_frostwolfpup.jpg";

const Discord = () => {
  const wowMadeEasy = "https://www.wowmadeeasy.com/";
  const discordInviteLink = import.meta.env.VITE_DISCORD_INVITE_LINK;
  const discordWidgetId = import.meta.env.VITE_DISCORD_WIDGET_ID;

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
            <img className="rounded-full" src={logo} />
            <div className="flex flex-col align-center">
              <h3 className="text-xl mb-4">No Pressure Community</h3>
              <a
                className="hover:bg-green ease-in-out duration-300 bg-blue rounded p-3 join-us cursor-pointer"
                href={discordInviteLink}
                rel="noreferrer"
                target="_blank"
              >
                Join us
              </a>
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
