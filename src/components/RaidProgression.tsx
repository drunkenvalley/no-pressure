import ProgressionCard, { ProgressionCardProps } from "./ProgressionCard";
import shadowedCrucible from "@/assets/raid-placeholder.png";
import vaultOfTheIncarnates from "@/assets/voti-800px.png";

// This component will rely on data from the API to display the current raid progression.
// It's still undecided where we'll get the data from, but it will likely be from the google sheet.
// Raid portraits we can look into a Warcraft Logs API or something similar.

const RaidProgression = () => {
  const raids: readonly ProgressionCardProps[] = [
    {
      bosses: 8,
      image: shadowedCrucible,
      name: "Aberrus, the Shadowed Crucible",
    },
    {
      bosses: 8,
      heroic: 8,
      image: vaultOfTheIncarnates,
      mythic: 2,
      name: "Vault of the Incarnates",
      normal: 8,
    },
  ];

  return (
    <section id="raid-progression">
      <h2 className="text-2xl">Raid Progression</h2>
      <p className="text-orange mb-8">
        See how far we&apos;ve made it this tier!
      </p>
      {raids.map(({ image, ...props }) => (
        <ProgressionCard image={image} key={image} {...props} />
      ))}
    </section>
  );
};

export default RaidProgression;
