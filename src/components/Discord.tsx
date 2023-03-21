const Discord = () => {
  const wowMadeEasy = "https://www.wowmadeeasy.com/";
  // const discord = "https://discord.com/invite/7WQ8qrsm9g";

  return (
    <div
      id="join-us"
      className="center justify-center items-center w-full border border-blue rounded p-16"
    >
      <label className="text-2xl font-bold text-center text-yellow-400">
        No Pressure{" "}
      </label>
      <label className="text-yellow-400">
        started as a European counterpart to
      </label>
      <br></br>
      <label>
        <a href={wowMadeEasy} className="text-yellow-200">
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
    </div>
  );
};

export default Discord;
