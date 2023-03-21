import { useEffect, useState } from "react";
import axios from "axios";

// TODO: This file needs splitting into their own files respectively
// TODO: We could do with looking to make a reusable component for a card

const Dungoneer = () => (
  <div>
    <span>
      <h1 className="text-4xl font-bold text-center">Dungoneer!</h1>
      <p className="text-xl text-center">Group with No Pressure</p>
    </span>
  </div>
);

const Raider = () => (
  <div>
    <h1 className="text-4xl font-bold text-center">Raid with us!</h1>
    <p className="text-xl text-center">Croushing with No Pressure</p>
  </div>
);

export const Discord = () => {
  const wowMadeEasy = "https://www.wowmadeeasy.com/";
  // const discord = "https://discord.com/invite/7WQ8qrsm9g";

  return (
    <div className=" center justify-center items-center">
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

const Progression = () => <></>;

export const FetchUserCount = () => {
  const [userCount, setUserCount] = useState(0);
  const server = "7WQ8qrsm9g";

  useEffect(() => {
    axios
      .get(
        `https://discord.com/api/v9/invites/${server}?with_counts=true&with_expiration=true`
      )
      .then((res) => {
        setUserCount(res.data.approximate_member_count);
      });
  }, []);

  return (
    <div className="grid gap-4 grid-cols-3">
      <span>
        <h1 className="text-4xl font-bold text-center">Meet people!</h1>
        <p className="text-xl text-center">Relax with {userCount} people.</p>
      </span>
      <Dungoneer />
      <Raider />
      <Progression />
    </div>
  );
};
