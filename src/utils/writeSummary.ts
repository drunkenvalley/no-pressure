/* eslint-disable sort-keys */
import { RioProfile } from "@/interfaces/RaiderIo";

const writeSummary = (raid: RioProfile["raid_progression"][string]) => {
  const priority: Record<string, keyof typeof raid> = {
    N: "normal_bosses_killed",
    H: "heroic_bosses_killed",
    M: "mythic_bosses_killed",
  };

  const summary = Object.entries(priority).reduce(
    (current, [k, n]) =>
      (current = raid[n] ? `${raid[n]}/${raid.total_bosses} ${k}` : current),
    "0/0 N",
  );

  return summary;
};

export default writeSummary;
