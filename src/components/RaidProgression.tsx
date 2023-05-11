import ProgressionCard from "./ProgressionCard";
import characters from "@/data/raiders.json";
import { useRaiders } from "@/utils/raiderio";

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
      total_bosses: number;
    };
  };
  realm: string;
};

const RaidProgression = () => {
  const { loading, raids } = useRaiders({ raiders: characters });

  return (
    <section className="flex flex-col gap-8" id="raid-progression">
      <div>
        <h2 className="text-2xl">Raid Progression</h2>
        <p className="text-orange">See how far we&apos;ve made it this tier!</p>
      </div>
      {raids && !loading && (
        <>
          {raids.map(({ image, name, ...props }, index) => (
            <ProgressionCard
              image={image}
              key={name}
              name={name}
              reverse={index % 2 === 0}
              {...props}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default RaidProgression;
