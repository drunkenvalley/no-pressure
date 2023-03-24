import RaiderCard from "./RaiderCard";
import { RaiderIOCharacter } from "./RaidProgression";
import { paramCase } from "change-case";

export interface ProgressionCardProps {
  bosses: number;
  heroic: number;
  image: string;
  mythic: number;
  name: string;
  normal: number;
  raiders: readonly RaiderIOCharacter[];
  reverse?: boolean;
}

const ProgressionCard = ({
  bosses,
  heroic,
  image,
  mythic,
  name,
  normal,
  raiders,
  reverse = false,
}: ProgressionCardProps) => (
  <div className="bg-dark p-4 rounded w-full p-4 my-4 ">
    <div className="flex items-center">
      {!reverse && (
        <img className="h-36 w-full object-cover rounded" src={image} />
      )}
      <div className="w-full">
        <h3 className="text-2xl">{name}</h3>
        <div className="flex w-full items-center justify-evenly mt-2">
          <p className="text-green">
            {normal} / {bosses} Normal
          </p>
          <p className="text-green">
            {heroic} / {bosses} Heroic
          </p>
          <p className="text-green">
            {mythic} / {bosses} Mythic
          </p>
        </div>
      </div>
      {reverse && (
        <img className="h-36 w-full object-cover rounded" src={image} />
      )}
    </div>
    <div className="w-full mt-4">
      <h4 className="text-xl">Raid Leaders</h4>
      {raiders.every((raider) => raider.raid_progression[paramCase(name)]) ? (
        <div className="flex w-full justify-center">
          {raiders.map((raider) => (
            <RaiderCard
              currentRaid={paramCase(name)}
              key={raider.name + raider.realm}
              raider={raider}
            />
          ))}
        </div>
      ) : (
        <p className="text-orange mt-2">No content available.</p>
      )}
    </div>
  </div>
);

export default ProgressionCard;
