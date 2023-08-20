import ProgressionCard from "@/components/ProgressionCard";
import { Raid } from "@/utils/raiderio";

const RaidProgression = ({ raids }: { raids: Raid[] | null }) => {
  return (
    <section className="flex flex-col gap-8" id="raid-progression">
      <div>
        <h2 className="text-2xl">Raid Progression</h2>
        <p className="text-orange">See how far we&apos;ve made it this tier!</p>
      </div>
      {raids?.map(({ image, name, ...props }, index) => (
        <ProgressionCard
          image={image}
          key={name}
          name={name}
          reverse={index % 2 === 0}
          {...props}
        />
      ))}
    </section>
  );
};

export default RaidProgression;
