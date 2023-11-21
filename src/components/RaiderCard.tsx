import Image from "@/components/Image";
import NextLink from "next/link";
import { RioProfile } from "@/utils/raiderio";

const RaiderCard = ({
  currentRaid,
  raider,
}: {
  currentRaid: string;
  raider: RioProfile;
}) => {
  const raid = raider.raid_progression[currentRaid];

  if (
    !raid.normal_bosses_killed &&
    !raid.heroic_bosses_killed &&
    !raid.mythic_bosses_killed
  ) {
    return null;
  }

  return (
    <div>
      <NextLink
        className="flex-col items-center justify-center flex"
        href={raider.profile_url}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          alt={raider.name}
          className="w-16 h-16"
          height={64}
          src={raider.thumbnail_url}
          width={64}
        />
        <h5 className="text-sm mt-2.5">{raider.name}</h5>
        <p className="text-xs">{raid.summary}</p>
        <p className="text-xs text-green">
          {raid.normal_bosses_killed} / {raid.heroic_bosses_killed} /{" "}
          {raid.mythic_bosses_killed}
        </p>
      </NextLink>
    </div>
  );
};

export default RaiderCard;
