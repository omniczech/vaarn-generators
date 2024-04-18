import lair from "./lair";
import archive from "./archive";
import bountyHuntersCamp from "./bountyHuntersCamp";
import landmark from "./landmark";
import vault from "./vault";
import ruin from "./ruin";
import oasis from "./oasis";
import holyPlace from "./holyPlace";
import wreck from "./wreck";
import arcology from "./arcology";
import grave from "./grave";
import scienceMysticsAbode from "./scienceMysticsAbode";
import hegemonyCamp from "./hegemonyCamp";
import cacklemawDen from "./cacklemawDen";
import anomaly from "./anomaly";
import settlement from "./settlement";
import faaNomadCamp from "./faaNomadCamp";
import banditCamp from "./banditCamp";
import tradePost from "./tradePost";
const regions = {
  landscape: [
    "Featureless Sands",
    "Hard Rocky Plain",
    "Dried-up River",
    "Mesas",
    "Single Mountain",
    "Toxic River",
    "Crystal Growths",
    "Abandoned City",
    "Mountainous",
    "Salt Pan",
    "Dried-up Lake",
    "Towering Monoliths",
    "Low Hills",
    "Toxic Lake",
    "Fungal Forest",
    "Windswept Plateau",
    "Winding Canyons",
    "Cactus Fields",
    "Garbage-strewn Wastes",
    "Riddled with Caves",
  ],
  namesake: [
    "a Famous Resident",
    "the Local Wildlife",
    "a Natural Wonder",
    "a Natural Hazard",
    "a Famous Monster",
    "a Long-Dead Settlement",
    "a Forgotten Religion",
    "a Natural Resource",
    "the Local Weather",
    "something No Longer Understood",
  ],
  locationType: [
    "폐허",
    "정착지",
    "오아시스",
    "성지",
    "난파된 차량",
    "볼트",
    "랜드마크",
    "도적 야영지",
    "현상금 사냥꾼 야영지",
    "보금자리",
    "기록 보관소",
    "아콜로지",
    "무덤가",
    "과학 신비주의자들의 거주지",
    "교역소",
    "신정부 야영지",
    "파아 유목민 야영지",
    "캐클모 둥지",
    "이상현상",
  ],
  hazards: [
    "Bandits Control the Road",
    "Hunting Ground of Chromavore",
    "Prowled by Argent Shepherd",
    "Sandworm Spawning Grounds",
    "Very Windy; Guaranteed Sandstorms",
    "Roving Cult Searching for Converts",
    "Malfunctioning Synths Demand a Toll",
    "Road Watched by Cacklemaw Clan",
    "Warring Faa Nomads",
    "Unexploded Landmines",
  ],
  genericStorySeeds: {
    npcA: [
      "A village elder",
      "A Faa warrior",
      "A blind oracle",
      "A sly bandit",
      "An Uptight synth",
      "A cacogen artist",
      "A hegemony tax collector",
      "A water Prospector",
      "A titan cultist",
      "A spice merchant",
      "A pedantic heretic",
      "An escaped slave",
      "A sin eater",
      "A retired gladiator",
      "A tiny cacogen",
      "An amorous new-beast",
      "An exorcist",
      "A monkey breeder",
      "A wandering Musician",
      "A clone catcher",
    ],
    wants: [
      "impress",
      "marry",
      "betray",
      "collect debt from",
      "punish",
      "locate",
      "abduct",
      "divorce",
      "cure sickness of",
      "discredit",
    ],
    npcB: [
      "a village fool",
      "a bandit king",
      "a tomb prospector",
      "a wealthy merchant",
      "a famous bounty Hunter",
      "an astronomer",
      "a relic thief",
      "a boastful soldier",
      "a camel jockey",
      "a jealous widow",
      "a hedonistic poet",
      "a cruel inquisitor",
      "a naive philosopher",
      "a beautiful sniper",
      "an enormous cacogen",
      "an alchemist",
      "a synth surgeon",
      "a possessed barber",
      "a card cheat",
      "a wealthy layabout",
    ],
    complication: [
      "sandstorms",
      "a hungry alzabo",
      "a packbeast stampede",
      "some drunken bandits",
      "a pointless local war",
      "a Faa Nomad wedding",
      "a family curse",
      "an impostor",
      "an unrequited love",
      "a deadly duel",
      "some psychic children",
      "a murderious clone",
      "a carnivorous tree",
      "a malfunctioning AI",
      "a poisoned harvest",
      "a secret cult",
      "a rigged chariot race",
      "a mistaken identity",
      "blackmail",
      "psychedelic visions",
    ],
  },
  anomaly: anomaly,
  archive: archive,
  arcology: arcology,
  banditCamp: banditCamp,
  bountyHuntersCamp: bountyHuntersCamp,
  cacklemawDen: cacklemawDen,
  faaNomadCamp: faaNomadCamp,
  grave: grave,
  hegemonyCamp: hegemonyCamp,
  holyPlace: holyPlace,
  lair: lair,
  landmark: landmark,
  oasis: oasis,
  ruin: ruin,
  scienceMysticsAbode: scienceMysticsAbode,
  settlement: settlement,
  tradePost: tradePost,
  vault: vault,
  wreck: wreck,
};
export default regions;
