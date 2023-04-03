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
        <img className="h-16 w-16" src={raider.thumbnail_url} />
        <h5 className="text-sm mt-2.5">{raider.name}</h5>
        <p className="text-xs">{raid.summary}</p>
        <p className="text-xs text-green">
          {raid.normal_bosses_killed} / {raid.heroic_bosses_killed} /{" "}
          {raid.mythic_bosses_killed}
        </p>
      </a>
    </div>
  );
};

export default RaiderCard;
