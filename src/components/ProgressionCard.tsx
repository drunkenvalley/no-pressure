import Image from "./Image";
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
  <div className="bg-dark p-4 rounded w-full">
    <div
      className={`flex items-center flex-col md:flex-row${
        reverse ? "-reverse" : ""
      } gap-y-6 md:gap-0`}
    >
      <Image
        alt={name}
        className="w-full md:w-inherit h-36 object-cover rounded md:flex-1"
        height={144}
        responsive
        src={image}
        width={{ lg: 496, md: 496, sm: 735 }}
      />
      <div className="md:flex-1 mt-4 md:mt-0">
        <h3 className="text-2xl">{name}</h3>
        <div className="flex w-full items-center justify-evenly gap-x-6">
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
    </div>
    <div className="w-full mt-4">
      <h4 className="text-xl">Raid Leaders</h4>
      {raiders.every((raider) => raider.raid_progression[paramCase(name)]) ? (
        <div className="flex w-full justify-center gap-4 flex-wrap mt-4">
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
