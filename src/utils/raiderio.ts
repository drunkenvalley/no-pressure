import { useCallback, useEffect, useMemo, useState } from "react";
import { RaiderIOCharacter } from "@/components/RaidProgression";

export const generateMaxTotalFor = (
  raiders: RaiderIOCharacter[],
  raid: string,
  type: "normal" | "heroic" | "mythic"
) => {
  if (raiders.some((raider) => raider.raid_progression[raid])) {
    return Math.max(
      ...raiders.map(
        (raider) => raider.raid_progression[raid][`${type}_bosses_killed`]
      )
    );
  }

  return 0;
};

export type FetchRaiderIoProfileOptions = {
  realm: string;
  characterName: string;
};

export const fetchRaiderIoProfile = async (
  options: FetchRaiderIoProfileOptions
) => {
  const { characterName, realm } = options;

  const res = await fetch(
    `https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${characterName}&fields=guild,raid_progression`
  );

  const json = (await res.json()) as RaiderIOCharacter;

  return json;
};

export type FetchRaiderIoProfilesOptions = {
  raiders: Array<FetchRaiderIoProfileOptions>;
};

export const fetchRaiderIoProfiles = async (
  options: FetchRaiderIoProfilesOptions
) => {
  try {
    const { raiders } = options;
    return Promise.all(
      raiders.map(
        async (raider) =>
          await fetchRaiderIoProfile({
            characterName: raider.characterName,
            realm: raider.realm,
          })
      )
    );
  } catch (e) {
    return null;
  }
};

export const useRaiders = (options: FetchRaiderIoProfilesOptions) => {
  const { raiders: inputRaiders } = options;
  const [loading, setLoading] = useState<boolean>(false);
  const [raiders, setRaiders] = useState<Array<RaiderIOCharacter> | null>(null);

  const refetchRaiders = useCallback(
    async (characters: FetchRaiderIoProfilesOptions["raiders"]) => {
      setLoading(true);

      const fetchedRaiders = await fetchRaiderIoProfiles({
        raiders: characters.map((character) => ({
          characterName: character.characterName,
          realm: character.realm,
        })),
      });

      const filteredRaiders = fetchedRaiders?.filter(
        (raider) => !!raider?.name
      );

      if (filteredRaiders?.length) {
        setRaiders(filteredRaiders);
      }

      setLoading(false);
    },
    []
  );

  const raids = useMemo(() => {
    if (!raiders) {
      return null;
    }

    return [
      {
        bosses:
          raiders[0].raid_progression["aberrus-the-shadowed-crucible"]
            .total_bosses,
        heroic: generateMaxTotalFor(
          raiders,
          "aberrus-the-shadowed-crucible",
          "heroic"
        ),
        image: "/raids/aberrus.png",
        mythic: generateMaxTotalFor(
          raiders,
          "aberrus-the-shadowed-crucible",
          "mythic"
        ),
        name: "Aberrus, the Shadowed Crucible",
        normal: generateMaxTotalFor(
          raiders,
          "aberrus-the-shadowed-crucible",
          "normal"
        ),
        raiders,
      },
      {
        bosses:
          raiders[0].raid_progression["vault-of-the-incarnates"].total_bosses,
        heroic: generateMaxTotalFor(
          raiders,
          "vault-of-the-incarnates",
          "heroic"
        ),
        image: "/raids/voti.png",
        mythic: generateMaxTotalFor(
          raiders,
          "vault-of-the-incarnates",
          "mythic"
        ),
        name: "Vault of the Incarnates",
        normal: generateMaxTotalFor(
          raiders,
          "vault-of-the-incarnates",
          "normal"
        ),
        raiders,
      },
    ];
  }, [raiders]);

  useEffect(() => {
    refetchRaiders(inputRaiders);
  }, [inputRaiders]);

  return { loading, raiders, raids, refetchRaiders };
};
