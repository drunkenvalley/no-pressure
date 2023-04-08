import ProgressionCard, { ProgressionCardProps } from "./ProgressionCard";
import { useEffect, useState } from "react";
import characters from "@/data/raiders.json";

export type RaiderIOCharacter = {
  name: string;
  profile_url: string;
  thumbnail_url: string;
  raid_progression: {
    [raid: string]: {
      heroic_bosses_killed: number;
      mythic_bosses_killed: number;
      normal_bosses_killed: number;
      summary: string;
    };
  };
  realm: string;
};

const RaidProgression = () => {
  const [raiders, setRaiders] = useState<readonly RaiderIOCharacter[]>([]);

  const fetchRaiders = () => {
    Promise.all(
      characters.map((character) =>
        fetch(
          `https://raider.io/api/v1/characters/profile?region=eu&realm=${character.realm}&name=${character.name}&fields=guild,raid_progression`
        ).then((r) => r.json())
      )
    ).then((raiders) => setRaiders(raiders));
  };

  const generateMaxTotalFor = (
    raid: string,
    type: "normal" | "heroic" | "mythic"
  ) => {
    if (raiders.some((raider) => raider.raid_progression[raid])) {
      return Math.max(
        ...raiders.map(
          (raider) => raider.raid_progression[raid][`${type}_bosses_killed`]
        )
      );
    }

    return 0;
  };

  const raids: readonly ProgressionCardProps[] = [
    {
      bosses: 8,
      heroic: generateMaxTotalFor("aberrus-the-shadowed-crucible", "heroic"),
      image: "/raids/placeholder.png",
      mythic: generateMaxTotalFor("aberrus-the-shadowed-crucible", "mythic"),
      name: "Aberrus, the Shadowed Crucible",
      normal: generateMaxTotalFor("aberrus-the-shadowed-crucible", "normal"),
      raiders,
    },
    {
      bosses: 8,
      heroic: generateMaxTotalFor("vault-of-the-incarnates", "heroic"),
      image: "/raids/voti.png",
      mythic: generateMaxTotalFor("vault-of-the-incarnates", "mythic"),
      name: "Vault of the Incarnates",
      normal: generateMaxTotalFor("vault-of-the-incarnates", "normal"),
      raiders,
    },
  ];

  useEffect(() => {
    fetchRaiders();
  }, []);

  return (
    <section className="flex flex-col gap-8" id="raid-progression">
      <div>
        <h2 className="text-2xl">Raid Progression</h2>
        <p className="text-orange">See how far we&apos;ve made it this tier!</p>
      </div>
      {raids.map(({ image, ...props }, index) => (
        <ProgressionCard
          image={image}
          key={image}
          reverse={index % 2 === 0}
          {...props}
        />
      ))}
    </section>
  );
};

export default RaidProgression;
