// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import { camelize, randomFromArray, rollAllTables } from "../../../data/utils";
import regions from "../../../data/locations/regions";
function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
export default async function handler(req, res) {
  await cors(req, res);
  const type = randomFromArray(regions.locationType);
  const rolls = rollAllTables(regions[camelize(type)]);
  const description = rolls.reduce((reducer, roll) => {
    return reducer + roll.rollName + " " + roll.value;
  }, "");
  res.status(200).json({ type: type, description: description });
}
