import books from "./books";
import buildings from "./buildings";
import corpse from "./corpse";
import drugs from "./drugs";
import fineDining from "./fineDining";
import gang from "./gang";
import merchants from "./merchants";
import nobleHouse from "./nobleHouse";
import NPC from "./npc";
import gods from "./pettyGods";
import philosophers from "./philsophers";
import pitFighters from "./pitFighters";
import tavern from "./tavern";
import tradeCaravan from "./tradeCaravan";
import tradeCartels from "./tradeCartels";
import urbanShrines from "./urbanShrines";

const assortedTables = (t, name) => {
  const lookup = {
    quickNPCGenerator: NPC(t),
    booksOfVaarn: books(t),
    drugsOfVaarn: drugs(t),
    pettyGodsOfVaarn: gods(t),
    tradeCaravan: tradeCaravan(t),
    youFoundACorpse: corpse(t),
    fineDining: fineDining(t),
    gnomonCityBuildings: buildings(t),
    gnomonCityMerchants: merchants(t),
    gnomonNobleHouses: nobleHouse(t),
    gnomonTradeCartels: tradeCartels(t),
    gnomonUrbanShrines: urbanShrines(t),
    gnomonPitFighters: pitFighters(t),
    gnomonPhilosophersGuild: philosophers(t),
    gnomonGangOfCriminals: gang(t),
    gnomonTavern: tavern(t),
  };
  return lookup[name];
};

export default assortedTables;
