import { IncompleteRioProfile, RioProfile } from "@/interfaces/RaiderIo";
import RaidLeader from "./RaidLeader";
import RaiderDbService from "@/services/RaiderDbService";
import RaiderIoService from "@/services/RaiderIoService";

const RaidProgression = async () => {
  const raiders = await RaiderDbService.get();
  const fetchedProfiles = await Promise.all(
    raiders.map(
      async ({ characterName, realm }) =>
        await RaiderIoService.get({
          characterName: characterName,
          realm: realm,
        }),
    ),
  );
  const leaders = (
    fetchedProfiles.filter((profile) => !!profile.profile_url) as RioProfile[]
  ).sort((a, b) => a.name.localeCompare(b.name));

  // sometimes a character goes missing; this is to help know who
  // rather than them asking why they don't appear
  const missing = (
    fetchedProfiles.filter(
      (profile) => !profile.profile_url,
    ) as IncompleteRioProfile[]
  ).sort((a, b) => a.name?.localeCompare(b.name));

  return (
    <div className="flex flex-col gap-2">
      <div className="p-3">
        <h3 className="text-left text-2xl">Raid leaders</h3>
        <p className="text-left text-orange">
          These are the characters used for measuring raid progress.
        </p>
      </div>
      <RaidLeader profiles={leaders} />
      {(missing.length && (
        <div className="p-3 text-right text-sm ">
          <p>We could not resolve these:</p>
          <ul className="list-disc flex flex-row justify-end gap-5 pl-4 text-light/70">
            {missing.map((profile) => (
              <li key={`${profile.name}-${profile.realm}`}>
                {profile.name}-{profile.realm}
              </li>
            ))}
          </ul>
        </div>
      )) ||
        undefined}
    </div>
  );
};
export default RaidProgression;
