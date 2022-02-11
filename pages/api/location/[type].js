// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { camelize, randomFromArray, rollAllTables } from "../../../data/utils";
import regions from "../../../data/locations/regions";
export default function handler(req, res) {
  if (!req.query.type in regions) {
    res.status(400).json({ error: "Bad request" });
  } else {
    const rolls = rollAllTables(regions[camelize(req.query.type)]);
    const description = rolls.reduce((reducer, roll) => {
      return reducer + roll.rollName + " " + roll.value;
    }, "");
    res.status(200).json({ type: req.query.type, description: description });
  }
}
