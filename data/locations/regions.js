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
    "Ruin",
    "Settlement",
    "Oasis",
    "Holy Place",
    "Wreck",
    "Vault",
    "Landmark",
    "Bandit Camp	",
    "Bounty Hunter's Camp",
    "Lair",
    "Archive",
    "Arcology",
    "Grave",
    "Science-Mystic's Abode",
    "Trade Post",
    "Hegemony Camp",
    "Faa Nomad Camp",
    "Cacklemaw Den",
    "Anomaly",
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
  archive: archive,
  arcology: arcology,
  bountyHuntersCamp: bountyHuntersCamp,
  grave: grave,
  hegemonyCamp: hegemonyCamp,
  holyPlace: holyPlace,
  lair: lair,
  landmark: landmark,
  oasis: oasis,
  ruin: ruin,
  scienceMysticsAbode: scienceMysticsAbode,
  vault: vault,
  wreck: wreck,
};
export default regions;
