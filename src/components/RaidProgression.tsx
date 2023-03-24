import ProgressionCard, { ProgressionCardProps } from "./ProgressionCard";
import { useEffect, useState } from "react";
import shadowedCrucible from "@/assets/raid-placeholder.png";
import vaultOfTheIncarnates from "@/assets/voti-800px.png";

// This component will rely on data from the API to display the current raid progression.
// It's still undecided where we'll get the data from, but it will likely be from the google sheet.
// Raid portraits we can look into a Warcraft Logs API or something similar.

type RaiderIOCharacter = {
  name: string;
  profile_url: string;
  thumbnail_url: string;
  raid_progression: {
    "vault-of-the-incarnates": {
      heroic_bosses_killed: number;
      mythic_bosses_killed: number;
      normal_bosses_killed: number;
      summary: string;
    };
  };
};

export type Raider = {
  heroic: number;
  mythic: number;
  name: string;
  normal: number;
  profile: string;
  realm: string;
  summary: string;
  thumbnail: string;
};

const RaidProgression = () => {
  const [raiders, setRaiders] = useState<readonly Raider[]>([]);
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

  const fetchRaidProgressionForCharacter = async ({
    name,
    realm,
  }: (typeof characters)[number]) => {
    const response = await fetch(
      `https://raider.io/api/v1/characters/profile?region=eu&realm=${encodeURI(
        realm
      )}&name=${encodeURI(name)}&fields=raid_progression`
    );
    const data: RaiderIOCharacter = await response.json();

    const raider: Raider = {
      heroic:
        data.raid_progression["vault-of-the-incarnates"].heroic_bosses_killed,
      mythic:
        data.raid_progression["vault-of-the-incarnates"].mythic_bosses_killed,
      name,
      normal:
        data.raid_progression["vault-of-the-incarnates"].normal_bosses_killed,
      profile: data.profile_url,
      realm,
      summary: data.raid_progression["vault-of-the-incarnates"].summary,
      thumbnail: data.thumbnail_url,
    };

    return raider;
  };

  useEffect(() => {
    const resolvedCharacters: Raider[] = [];

    for (const character of characters) {
      fetchRaidProgressionForCharacter(character).then((raider) => {
        resolvedCharacters.push(raider);
      });
    }

    setRaiders(resolvedCharacters);
  }, []);

  const raids: readonly ProgressionCardProps[] = [
    {
      bosses: 8,
      image: shadowedCrucible,
      name: "Aberrus, the Shadowed Crucible",
      raiders,
    },
    {
      bosses: 8,
      heroic: 8,
      image: vaultOfTheIncarnates,
      mythic: 3,
      name: "Vault of the Incarnates",
      normal: 8,
      raiders,
    },
  ];

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
