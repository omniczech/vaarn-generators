import Cors from "cors";
import { camelize, randomFromArray, rollAllTables } from "../../../data/utils";
import assortedTables from "../../../data/assorted";
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
  const generatorName = camelize(
    "gnomon " + req.query.type.split("-").join(" ")
  );
  if (!generatorName in assortedTables) {
    res.status(400).json({ error: "Bad request" });
  } else {
    const rolls = rollAllTables(assortedTables[generatorName]);
    const hash = [];
    res.status(200).json({
      data: rolls.map((roll) => {
        const chosenIndex = assortedTables[generatorName]
          .filter((q) => {
            return q.name === roll.rollName;
          })[0]
          .options.indexOf(roll.value)
          .toString(26);
        hash.push(chosenIndex);

        return roll;
      }),
      hash: hash.join(""),
    });
  }
}
