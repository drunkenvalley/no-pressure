import { NextApiRequest, NextApiResponse } from "next";

const withAuthorization = (
  handle: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (
      !req.headers.authorization ||
      process.env.API_KEY !==
        Buffer.from(req.headers.authorization.split(" ")[1], "base64")
          .toString()
          .split(":")[1]
    ) {
      return res.status(401).json({ error: "Unauthorized." });
    }

    handle(req, res);
  };
};

export default withAuthorization;
