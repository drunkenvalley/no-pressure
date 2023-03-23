import logo from "@/assets/logo-ipsum-nav.svg";

const Discord = () => {
  const wowMadeEasy = "https://www.wowmadeeasy.com/";
  const discordInviteLink = import.meta.env.VITE_DISCORD_INVITE_LINK;
  const discordWidgetId = import.meta.env.VITE_DISCORD_WIDGET_ID;

  return (
    <div
      className="center justify-center w-full py-16 scroll-mt-[136px] flex gap-y-8"
      id="join-us"
    >
      <div className="border border-blue rounded mr-4">
        <label className="text-2xl font-bold text-center text-yellow-400">
          No Pressure{" "}
        </label>
        <label className="text-yellow-400">
          started as a European counterpart to
        </label>
        <br></br>
        <label>
          <a className="text-yellow-200" href={wowMadeEasy}>
            WoW Made Easy
          </a>
        </label>
        <label className="text-yellow-400">
          {" "}
          - a community built on enjoying.
        </label>
        <p className="text-yellow-400">
          Dragonflight together, without the pressure
        </p>
        <div className="my-4 w-[500px] h-[185px] border-blue border rounded flex items-center justify-evenly">
          <img src={logo} />
          <div className="flex flex-col">
            <h3 className="text-xl mb-4">No Pressure Community</h3>
            <a
              className="hover:bg-green ease-in-out duration-300 bg-blue rounded py-2 px-16 join-us cursor-pointer"
              href={discordInviteLink}
              rel="noreferrer"
              target="_blank"
            >
              Join us
            </a>
          </div>
        </div>
      </div>
      <iframe
        className="ml-4"
        height="500"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        src={`https://discord.com/widget?id=${discordWidgetId}&theme=dark`}
        width="500"
      />
    </div>
  );
};

export default Discord;
