import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/db";
import withAuthorization from "@/utils/withAuthorization";

/**
 * @swagger
 * /api/raider/create:
 *   post:
 *     summary: Creates a new raider
 *     description: Creates a new raider. Returns the created raider.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: characterName
 *         description: Name of the character
 *         in: body
 *         required: true
 *         type: string
 *       - name: realm
 *         description: Realm of the character
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created raider. Returns the created raider.
 *       400:
 *         description: Invalid request method.
 *       500:
 *         description: An error occurred while creating the raider.
 */
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { characterName, realm } = req.body;

  if (req.method === "POST") {
    try {
      const profile = await prisma.raider.create({
        data: {
          characterName,
          realm,
        },
      });

      return res.json(profile);
    } catch (e) {
      return res
        .status(500)
        .json({ error: "An error occurred while creating the raider." });
    }
  } else {
    return res.status(400).json({ error: "Invalid request method. Use POST." });
  }
};

export default withAuthorization(handle);
