import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/db";
import withAuthorization from "@/utils/withAuthorization";

/**
 * @swagger
 * /api/raider/delete:
 *   delete:
 *     summary: Deletes an existing raider
 *     description: Deletes an existing raider.
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
 *         description: Raider successfully deleted.
 *       400:
 *         description: Invalid request method.
 *       500:
 *         description: An error occurred while deleting the raider.
 */
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { characterName, realm } = req.body;

  if (req.method === "DELETE") {
    try {
      await prisma.raider.deleteMany({
        where: {
          characterName,
          realm,
        },
      });

      return res.json({ message: "Raider successfully deleted." });
    } catch (e) {
      return res
        .status(500)
        .json({ error: "An error occurred while deleting the raider." });
    }
  } else {
    return res
      .status(400)
      .json({ error: "Invalid request method. Use DELETE." });
  }
};

export default withAuthorization(handle);
