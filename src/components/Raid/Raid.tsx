import ImageWithFallback from "../ImageWithFallback";
import { Literals } from "@/interfaces/Literals";
import Raiders from "./Raiders";
import { RioProfile } from "@/interfaces/RaiderIo";
import Shinytext from "../Shinytext";
import { capitalCase } from "change-case";
import raidnames from "./raidnames.json";

type Props = {
  bosses: number;
  raid: string;
  profiles: RioProfile[];
};
const availableDifficulties = ["normal", "heroic", "mythic"] as const;

const Raid = ({ bosses, raid, profiles }: Props) => {
  const filteredProfiles = profiles.filter((profile) => {
    const prog = profile.raid_progression[raid];
    return (
      prog.normal_bosses_killed ||
      prog.heroic_bosses_killed ||
      prog.mythic_bosses_killed
    );
  });

  const getProg = (difficulty: Literals<typeof availableDifficulties>) => {
    return Math.max(
      ...filteredProfiles.map(
        (profile) =>
          profile.raid_progression[raid][`${difficulty}_bosses_killed`],
      ),
    );
  };
  const difficulties = availableDifficulties.map((key) => ({
    name: capitalCase(key),
    prog: getProg(key),
  }));

  return (
    <>
      <div className="bg-dark lg:rounded-lg relative w-full overflow-hidden flex flex-col justify-end text-left shadow-xl">
        <ImageWithFallback
          alt=""
          className="object-cover"
          fallbackSrc="/images/raids/placeholder.png"
          fill={true}
          src={`/images/raids/${raid}.png`}
        />
        <div className="relative p-4 pt-32 bg-gradient-to-r from-dark/50 via-dark/30 to-dark/10">
          <div className="my-4 mx-1">
            <Shinytext as="h3" className="text-3xl">
              {(raidnames as Record<string, string>)[raid] ?? capitalCase(raid)}
            </Shinytext>
            <div className="flex flex-row gap-4">
              {difficulties.map(({ prog, name }) => (
                <Shinytext key={name}>
                  {name}: {prog}/{bosses}
                </Shinytext>
              ))}
            </div>
          </div>

          <Raiders filter={raid} profiles={filteredProfiles} />
        </div>
      </div>
    </>
  );
};

export default Raid;
