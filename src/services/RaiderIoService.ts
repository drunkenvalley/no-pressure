import { IncompleteRioProfile, RioProfile } from "@/interfaces/RaiderIo";
import { raider } from "@prisma/client";

type character = Omit<raider, "id">;

export default class RaiderIoService {
  public static async get({
    characterName,
    realm,
  }: character): Promise<RioProfile | IncompleteRioProfile> {
    try {
      const response = await fetch(
        `https://raider.io/api/v1/characters/profile?region=eu&realm=${realm}&name=${characterName}&fields=guild,raid_progression`,
      );
      if (response.status !== 200) {
        throw "Not found";
      }
      const json = (await response.json()) as RioProfile;
      return json;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      const missing: IncompleteRioProfile = {
        name: characterName,
        realm: realm,
      };
      return missing;
    }
  }
}
