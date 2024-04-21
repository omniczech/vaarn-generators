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
  "_NPC_즉석_생성기": NPC,
  "바안의_도서": books,
  "바안의_약물": drugs,
  "바안의_하찮은_신들": gods,
  "행상단": tradeCaravan,
  "발견한_시체": corpse,
  "고급_식사": fineDining,
  "노몬의_건물": buildings,
  "노몬의_상인": merchants,
  "노몬의_귀족_가문": nobleHouse,
  "노몬의_상인_카르텔": tradeCartels,
  "노몬의_도심_성소": urbanShrines,
  "노몬의_투기장_투사들": pitFighters,
  "노몬의_철학자_길드": philosophers,
  "노몬의_범죄자_무리": gang,
  "노몬의_주점": tavern,
};

export default assortedTables;
