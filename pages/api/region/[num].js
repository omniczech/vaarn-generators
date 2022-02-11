// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { camelize, randomFromArray, rollAllTables } from "../../../data/utils";
import regions from "../../../data/locations/regions";
export default function handler(req, res) {
  let i = 0;
  const locations = [];
  while (i < req.query.num) {
    const type = randomFromArray(regions.locationType);
    const location = {
      type: type,
      rolls: rollAllTables(regions[camelize(type)]),
    };
    locations.push(location);
    i++;
  }
  res.status(200).json({ locations: locations });
}
