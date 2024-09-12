import { useCallback, useEffect, useMemo, useState } from "react";
import { kebabCase as paramCase } from "change-case";

export const generateMaxTotalFor = (
  raiders: RioProfile[],
  raid: string,
  type: "normal" | "heroic" | "mythic",
) => {
  if (raiders.some((raider) => raider.raid_progression[raid])) {
    return Math.max(
      ...raiders.map(
        (raider) => raider.raid_progression[raid][`${type}_bosses_killed`],
      ),
    );
  }

  return 0;
};

export const fetchRioProfile = async ({
  characterName,
  realm,
}: FetchRioProfileOptions) => {
  realm = paramCase(realm.replace("'", ""));
  try {
    const res = await fetch(
      `https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${characterName}&fields=guild,raid_progression`,
    );

    const json = (await res.json()) as RioProfile;
    return json;
  } catch (e) {
    return null;
  }
};

export const fetchRioProfiles = async ({
  raiders,
}: FetchRioProfilesOptions) => {
  return Promise.all(raiders.map(fetchRioProfile)).then((r) =>
    r.filter((c) => !!c?.name),
  ) as Promise<RioProfile[]>;
};

export const useRaiders = (options: FetchRioProfilesOptions) => {
  const { raiders: inputRaiders } = options;
  const [loading, setLoading] = useState<boolean>(false);
  const [raiders, setRaiders] = useState<Array<RioProfile> | null>(null);

  const refetchRaiders = useCallback(
    async (characters: FetchRioProfilesOptions["raiders"]) => {
      setLoading(true);

      const fetchedRaiders = await fetchRioProfiles({
        raiders: characters.map((character) => ({
          characterName: character.characterName,
          realm: character.realm,
        })),
      });

      setRaiders(fetchedRaiders);

      setLoading(false);
    },
    [],
  );

  const raids = useMemo(() => {
    return buildRaids(raiders);
  }, [raiders]);

  useEffect(() => {
    refetchRaiders(inputRaiders);
  }, [inputRaiders]);

  return { loading, raiders, raids, refetchRaiders };
};

export const buildRaids = (raiders: RioProfile[] | null) => {
  if (!raiders?.length) {
    return null;
  }

  return [
    {
      bosses:
        raiders[0].raid_progression["nerubar-palace"]?.total_bosses ?? null,
      heroic: generateMaxTotalFor(raiders, "nerubar-palace", "heroic"),
      image: "/raids/nerubar-palace.png",
      mythic: generateMaxTotalFor(raiders, "nerubar-palace", "mythic"),
      name: "Nerub'ar Palace",
      normal: generateMaxTotalFor(raiders, "nerubar-palace", "normal"),
      raiders,
    },
  ];
};

export type RioProfile = {
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

export type FetchRioProfileOptions = {
  realm: string;
  characterName: string;
};

export type FetchRioProfilesOptions = {
  raiders: Array<FetchRioProfileOptions>;
};

export type Raid = {
  bosses: number;
  heroic: number;
  image: string;
  mythic: number;
  name: string;
  normal: number;
  raiders: RioProfile[];
};
