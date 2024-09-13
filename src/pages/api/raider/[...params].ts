import { NextApiRequest, NextApiResponse } from "next";
import { KeysOf } from "@/interfaces/Helpers";
import RaiderDbService from "@/services/RaiderDbService";
import withAuthorization from "@/utils/withAuthorization";

type ServiceMethod = Exclude<KeysOf<typeof RaiderDbService>, "prototype">;

/**
 * @swagger
 * /api/raider/{realm}/{characterName}:
 *   get:
 *     summary: Retrieves raider with characterName and realm.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: realm
 *         description: Realm of the character
 *         in: path
 *         required: true
 *         type: string
 *       - name: characterName
 *         description: Name of the character
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns the requested raider/raiders.
 *       401:
 *         description: Unauthorized.
 *   post:
 *     summary: Add a new raider with characterName and realm.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: realm
 *         description: Realm of the character
 *         in: path
 *         required: true
 *         type: string
 *       - name: characterName
 *         description: Name of the character
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Created raider successfully.
 *       400:
 *         description: Bad request, likely missing character name or realm.
 *       401:
 *         description: Unauthorized.
 *   delete:
 *     summary: Deletes a raider with characterName and realm.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: realm
 *         description: Realm of the character
 *         in: path
 *         required: true
 *         type: string
 *       - name: characterName
 *         description: Name of the character
 *         in: path
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
    const data = await RaiderDbService[method as ServiceMethod]({
      characterName,
      realm,
    });

    return res.json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
};

export default withAuthorization(raiderApi);
