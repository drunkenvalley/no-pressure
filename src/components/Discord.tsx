const Discord = () => {
  const wowMadeEasy = "https://www.wowmadeeasy.com/";
  // const discord = "https://discord.com/invite/7WQ8qrsm9g";

  return (
    <div
      className="center justify-center items-center w-full border border-blue rounded p-16"
      id="join-us"
    >
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
      <iframe
        height="500"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        src="https://discord.com/widget?id=1055487463734386739&theme=dark"
        width="350"
      ></iframe>
    </div>
  );
};

export default Discord;
