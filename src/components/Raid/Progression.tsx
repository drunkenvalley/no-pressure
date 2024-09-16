import { IncompleteRioProfile, RioProfile } from "@/interfaces/RaiderIo";
import Link from "@/components/Link";
import Raid from "@/components/Raid/Raid";
import RaiderDbService from "@/services/RaiderDbService";
import RaiderIoService from "@/services/RaiderIoService";

const RaidProgression = async () => {
  const raiders = await RaiderDbService.get();
  const fetchedProfiles = await Promise.all(
    raiders.map(async (raider) => await RaiderIoService.get(raider)),
  );

  const leaders = (
    fetchedProfiles.filter((profile) => !!profile.profile_url) as RioProfile[]
  ).sort((a, b) => a.name.localeCompare(b.name));

  const raids = Object.entries(leaders[0]?.raid_progression).map(
    ([key, value]) => ({ bosses: value.total_bosses, raid: key }),
  );

  // sometimes a character goes missing; this is to help know who
  // rather than them asking why they don't appear
  const missing = (
    fetchedProfiles.filter(
      (profile) => !profile.profile_url,
    ) as IncompleteRioProfile[]
  ).sort((a, b) => a.name?.localeCompare(b.name));

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 lg:rounded-xl" id="raiding">
        <h3 className="mt-2 text-left text-2xl">Raiding</h3>
        <p className="mt-4 text-left text-light/70 max-w-prose">
          Being part of No Pressure need not stop you from enjoying raids. Raids
          are organized by members throughout the week with{" "}
          <Link className="text-gold" href="https://raid-helper.dev/">
            Raid-Helper
          </Link>
          ! Since the start of Dragonflight the community has organized hundreds
          of events, and intending hundreds more.
        </p>
      </div>
      {raids.map((raid) => (
        <Raid key={raid.raid} profiles={leaders} {...raid} />
      ))}
      {(missing.length && (
        <div className="p-3 text-right text-sm ">
          <p>Could not find / resolve characters:</p>
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
