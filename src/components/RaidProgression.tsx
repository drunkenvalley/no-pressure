import ProgressionCard, { ProgressionCardProps } from "./ProgressionCard";
import { useEffect, useState } from "react";
import shadowedCrucible from "@/assets/raid-placeholder.png";
import vaultOfTheIncarnates from "@/assets/voti-800px.png";

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

  const characters = [
    { name: "Bruxy", realm: "Silvermoon" },
    { name: "Hyrrvorð", realm: "Wrathbringer" },
    { name: "Liquidora", realm: "Silvermoon" },
    { name: "Luciferaél", realm: "Draenor" },
    { name: "Nista", realm: "Twisting Nether" },
    { name: "Sevattar", realm: "Outland" },
    { name: "Tabibrave", realm: "Defias Brotherhood" },
    { name: "Thoggo", realm: "Ragnaros" },
    { name: "Villish", realm: "Silvermoon" },
    { name: "Xamona", realm: "Turalyon" },
  ];

  const fetchRaiders = async () => {
    const fetchedRaiders = await Promise.all(
      characters.map(async (character) => {
        const response = await fetch(
          `https://raider.io/api/v1/characters/profile?region=eu&realm=${character.realm}&name=${character.name}&fields=guild,raid_progression`
        );

        return response.json();
      })
    );

    setRaiders(fetchedRaiders);
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
      image: shadowedCrucible,
      mythic: generateMaxTotalFor("aberrus-the-shadowed-crucible", "mythic"),
      name: "Aberrus, the Shadowed Crucible",
      normal: generateMaxTotalFor("aberrus-the-shadowed-crucible", "normal"),
      raiders,
    },
    {
      bosses: 8,
      heroic: generateMaxTotalFor("vault-of-the-incarnates", "heroic"),
      image: vaultOfTheIncarnates,
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
    <section id="raid-progression">
      <h2 className="text-2xl">Raid Progression</h2>
      <p className="text-orange mb-8">
        See how far we&apos;ve made it this tier!
      </p>
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
