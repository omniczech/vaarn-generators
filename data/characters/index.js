import cacklemaw from "./cacklemaw";
import cacogen from "./cacogen";
import faa from "./faaNomad";
import lithling from "./lithling";
import mycomorph from "./mycomorph";
import newbeast from "./newbeast";
import planeyfolk from "./planeyfolk";
import synth from "./synths";
import truekin from "./true-kin";
import wallborn from "./wallborn";
import harpy from "./harpy";
import stratosfolk from "./stratosfolk";

const allAncestries = (t) => {
  return [
    cacklemaw(t),
    cacogen(t),
    faa(t),
    lithling(t),
    mycomorph(t),
    planeyfolk(t),
    newbeast(t),
    synth(t),
    truekin(t),
    wallborn(t),
    harpy(t),
    stratosfolk(t),
  ];
};

export default allAncestries;
