import { AtLeast } from "./AtLeast";

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

export type IncompleteRioProfile = AtLeast<RioProfile, "name" | "realm">;
