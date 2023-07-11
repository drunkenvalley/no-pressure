import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/db";

/**
 * @swagger
 * /api/raider/read:
 *   get:
 *     summary: Retrieves all raiders/a raider
 *     description: Retrieves all raiders with no parameters or a single raider with characterName and realm.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: characterName
 *         description: Name of the character
 *         in: query
 *         type: string
 *       - name: realm
 *         description: Realm of the character
 *         in: query
 *         type: string
 *     responses:
 *       200:
 *         description: Returns the requested raider/raiders.
 *       400:
 *         description: Invalid request method.
 *       404:
 *         description: Raider not found.
 *       500:
 *         description: An error occurred while retrieving raiders.
 */
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { characterName, realm } = req.query;

  if (req.method === "GET") {
    try {
      if (!!characterName && !!realm) {
        const profiles = await prisma.raider.findMany({
          where: {
            characterName: String(characterName),
            realm: String(realm),
          },
        });

        if (profiles.length) {
          return res.json(profiles[0]);
        } else {
          return res.status(404).json({ error: "Raider not found." });
        }
      } else {
        const profiles = await prisma.raider.findMany();

        return res.json(profiles);
      }
    } catch (e) {
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving raiders." });
    }
  } else {
    return res.status(400).send("Invalid request method. Use GET.");
  }
};

export default handle;
