// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { camelize, randomFromArray, rollAllTables } from "../../../data/utils";
import regions from "../../../data/locations/regions";
export default function handler(req, res) {
  const type = randomFromArray(regions.locationType);
  const rolls = rollAllTables(regions[camelize(type)]);
  const description = rolls.reduce((reducer, roll) => {
    return reducer + roll.rollName + " " + roll.value;
  }, "");
  res.status(200).json({ type: type, description: description });
}
