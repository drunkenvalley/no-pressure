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
      <a href={raider.profile_url} rel="noreferrer" target="_blank">
        <img className="h-16 w-16 m-4" src={raider.thumbnail_url} />
        <h5 className="text-sm">{raider.name}</h5>
        <p className="text-xs mt-1">{raid.summary}</p>
        <p className="text-xs mt-1">
          {raid.normal_bosses_killed} / {raid.heroic_bosses_killed} /{" "}
          {raid.mythic_bosses_killed}
        </p>
      </a>
    </div>
  );
};

export default RaiderCard;
