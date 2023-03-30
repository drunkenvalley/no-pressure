import Image from "./Image";
import NextLink from "next/link";
import { RaiderIOCharacter } from "./RaidProgression";

const RaiderCard = ({
  currentRaid,
  raider,
}: {
  currentRaid: string;
  raider: RaiderIOCharacter;
}) => {
  const raid = raider.raid_progression[currentRaid];

  return (
    <div>
      <NextLink href={raider.profile_url} rel="noreferrer" target="_blank">
        <Image
          alt={raider.name}
          className="w-16 h-16"
          height={64}
          src={raider.thumbnail_url}
          width={64}
        />
        <h5 className="text-sm mt-2.5">{raider.name}</h5>
        <p className="text-xs">{raid.summary}</p>
        <p className="text-xs">
          {raid.normal_bosses_killed} / {raid.heroic_bosses_killed} /{" "}
          {raid.mythic_bosses_killed}
        </p>
      </NextLink>
    </div>
  );
};

export default RaiderCard;
