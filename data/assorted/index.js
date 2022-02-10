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

const assortedTables = {
  quickNPCGenerator: NPC,
  booksOfVaarn: books,
  drugsOfVaarn: drugs,
  pettyGodsOfVaarn: gods,
  tradeCaravan: tradeCaravan,
  youFoundACorpse: corpse,
  fineDining: fineDining,
  gnomonCityBuildings: buildings,
  gnomonCityMerchants: merchants,
  gnomonNobleHouses: nobleHouse,
  gnomonTradeCartels: tradeCartels,
  gnomonUrbanShrines: urbanShrines,
  gnomonPitFighters: pitFighters,
  gnomonPhilosophersGuild: philosophers,
  gnomonGangOfCriminals: gang,
  gnomonTavern: tavern,
};

export default assortedTables;
