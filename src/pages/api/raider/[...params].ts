import { NextApiRequest, NextApiResponse } from "next";
import { KeysOf } from "@/interfaces/Helpers";
import RaiderService from "@/services/RaiderService";
import withAuthorization from "@/utils/withAuthorization";

type ServiceMethod = Exclude<KeysOf<typeof RaiderService>, "prototype">;

/**
 * @swagger
 * /api/raider/{realm}/{characterName}:
 *   get:
 *     summary: Retrieves all raiders/a raider
 *     description: Retrieves all raiders with no parameters or a single raider with characterName and realm.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: realm
 *         description: Realm of the character
 *         in: query
 *         type: string
 *       - name: characterName
 *         description: Name of the character
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
 *   post:
 *     summary: Creates a new raider
 *     description: Creates a new raider. Returns the created raider.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: realm
 *         description: Realm of the character
 *         in: body
 *         required: true
 *         type: string
 *       - name: characterName
 *         description: Name of the character
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created raider. Returns the created raider.
 *       400:
 *         description: Bad request, likely missing character name or realm.
 *   delete:
 *     summary: Deletes an existing raider
 *     description: Deletes an existing raider.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: realm
 *         description: Realm of the character
 *         in: body
 *         required: true
 *         type: string
 *       - name: characterName
 *         description: Name of the character
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Raider successfully deleted.
 *       400:
 *         description: Bad request, likely missing character name or realm.
 *       401:
 *         description: Unauthorized.
 */
const raiderApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = (req.method?.toLowerCase() ?? "get") as ServiceMethod;
  const { params } = req.query;
  const [realm = "", characterName = ""] = params as string[];

  try {
    const data = await RaiderService[method as ServiceMethod]({
      characterName,
      realm,
    });

    return res.json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
};

export default withAuthorization(raiderApi);
