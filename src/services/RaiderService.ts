import { prisma } from "@/utils/db";
import { raider } from "@prisma/client";

type character = Omit<raider, "id">;

export default class RaiderService {
  public static async get({
    characterName,
    realm,
  }: character): Promise<raider[]> {
    const characters = await prisma.raider.findMany({
      where: {
        characterName: characterName || undefined,
        realm: realm || undefined,
      },
    });

    return characters;
  }

  public static async post({
    characterName,
    realm,
  }: character): Promise<raider> {
    this.hasCharacter({ characterName, realm });

    const existing = await prisma.raider.findFirst({
      where: { characterName, realm },
    });

    if (existing) {
      return existing;
    }

    return await prisma.raider.create({
      data: {
        characterName,
        realm,
      },
    });
  }

  public static async delete({
    characterName,
    realm,
  }: character): Promise<number> {
    this.hasCharacter({ characterName, realm });

    const result = await prisma.raider.deleteMany({
      where: {
        characterName,
        realm,
      },
    });

    return result.count;
  }

  // internal utils

  private static hasCharacter({
    characterName,
    realm,
  }: character): true | never {
    return characterName && realm
      ? true
      : this.raise("name and realm are required");
  }

  private static raise(reason: string): never {
    throw new Error(reason);
  }
}
