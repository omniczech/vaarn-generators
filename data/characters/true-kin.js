const trueKin = (t) => {
  return {
    name: t("True-Kin"),
    description: t(
      "The true-kin sealed themselves inside hidden arcologies when the Great Collapse came, and in this fashion they preserved their bodies from the degradations that afflicted those left living upon the surface. The true-kin have fanatically kept their bloodlines free of mutation and parasitic nanomachinery, and closely guard their mastery of the ancients’ technology. The societies they built inside their secluded arcologies were hierarchical and caste-based; traditions the true-kin have carried with them into their re-colonisation of the surface world and establishment of the New Hegemony."
    ),
    special: [
      t(
        "Pure of Blood - Do not roll mutations during character creation. You gain Advantage on reaction rolls when you encounter other true-kin. You lose this bonus if you ever become visibly mutated."
      ),

      t(
        "Inheritor - Whenever you encounter pre-Collapse security systems, or guard synths, there is a 50% chance that they will recognise you as their master."
      ),
    ],
    rolls: [
      {
        name: t("Name"),
        options: [
          t("Benjoe"),
          t("Leif"),
          t("Xurm"),
          t("Kazor"),
          t("Essana"),
          t("Calista"),
          t("Jinny"),
          t("Vela"),
          t("Leksei"),
          t("Ippash"),
          t("Lagad"),
          t("Myli"),
          t("Nirid"),
          t("Ardel"),
          t("Senefer"),
          t("Pharmon"),
          t("Mesu"),
          t("Lenta"),
          t("Goza"),
          t("Babl"),
        ],
      },
      {
        name: t("Caste"),
        options: [
          t("Servitor (labourer caste)"),
          t("Servitor (labourer caste)"),
          t("Servitor (labourer caste)"),
          t("Servitor (labourer caste)"),
          t("Freeholder (merchant caste)"),
          t("Freeholder (merchant caste)"),
          t("Freeholder (merchant caste)"),
          t("Freeholder (merchant caste)"),
          t("Freeholder (merchant caste)"),
          t("Optimate (administrator caste)"),
          t("Optimate (administrator caste)"),
          t("Optimate (administrator caste)"),
          t("Optimate (administrator caste)"),
          t("Optimate (administrator caste)"),
          t("Armiger (warrior caste)"),
          t("Armiger (warrior caste)"),
          t("Armiger (warrior caste)"),
          t("Exultant (sacred aristocracy)"),
          t("Exultant (sacred aristocracy)"),
          t("Exultant (sacred aristocracy)"),
        ],
      },
      {
        name: t("Demeanour"),
        options: [
          t("Amused"),
          t("Bitter"),
          t("Morbid"),
          t("Bony"),
          t("Cheerful"),
          t("Cruel"),
          t("Flamboyant"),
          t("Glowering"),
          t("Impish"),
          t("Lanky"),
          t("Patrician"),
          t("Reckless"),
          t("Rough"),
          t("Rude"),
          t("Sly"),
          t("Sour"),
          t("Stoic"),
          t("Foolish"),
          t("Warm"),
          t("Wolfish"),
        ],
      },
      {
        name: t("Distinct Feature"),
        options: [
          t("Ritual Scars"),
          t("Face Tattoos"),
          t("Slave Brand"),
          t("Heavy Jewellery"),
          t("Synthetic Limb"),
          t("Strange Voice"),
          t("Clone Brand"),
          t("Limp"),
          t("Strange Pet"),
          t("Lacquered Teeth"),
          t("Burn Scars"),
          t("Octarine Eyes"),
          t("Dyed Skin"),
          t("Golden Teeth"),
          t("Silver Tongue"),
          t("Missing Limb"),
          t("Missing Eye"),
          t("Religious Apparel"),
          t("Synthetic Eyes"),
          t("Visibly Diseased"),
        ],
      },
      {
        name: t("Body"),
        options: [
          t("Tall"),
          t("Short"),
          t("Frail"),
          t("Muscular"),
          t("Fat"),
          t("Thin"),
          t("Skeletal"),
          t("Hunched"),
          t("Lopsided"),
          t("Lithe"),
          t("Gnarled"),
          t("Squat"),
          t("Bloated"),
          t("Gangly"),
          t("Child-like"),
          t("Tanned"),
          t("Gigantic"),
          t("Wiry"),
          t("Cyborg"),
          t("Injured"),
        ],
      },
      {
        name: t("Face"),
        options: [
          t("Sallow"),
          t("Lively"),
          t("Cruel"),
          t("Wrinkled"),
          t("Scarred"),
          t("Frowning"),
          t("Pale"),
          t("Greasy"),
          t("Wide"),
          t("Narrow"),
          t("Sharp"),
          t("Hungry"),
          t("Haunted"),
          t("Jolly"),
          t("Round"),
          t("Mournful"),
          t("Child-like"),
          t("Peaceful"),
          t("Sleepy"),
          t("Branded"),
        ],
      },
      {
        name: t("Hair"),
        options: [
          t("Black"),
          t("Brown"),
          t("Red"),
          t("Blonde"),
          t("Grey"),
          t("White"),
          t("Shaved"),
          t("Topknot"),
          t("Green"),
          t("Orange"),
          t("Glowing"),
          t("Fungus"),
          t("Purple"),
          t("Yellow"),
          t("Wispy"),
          t("Burnt"),
          t("Braided"),
          t("Greasy"),
          t("Matted"),
          t("Long"),
        ],
      },
      {
        name: t("Attire"),
        options: [
          t("Rags"),
          t("Animal Skins"),
          t("Rough Tunic"),
          t("Nomad Attire"),
          t("Worker's Attire"),
          t("Herdsman's Attire"),
          t("Slave Clothing"),
          t("Exultant's Livery"),
          t("Shabby Attire"),
          t("Colourful Attire"),
          t("Priest's Robes"),
          t("Clerk's Uniform"),
          t("Hegemony Garb"),
          t("Soldier's Clothing"),
          t("Flamboyant Attire"),
          t("Musician's Attire"),
          t("Veiled Attire"),
          t("Armiger's Clothing"),
          t("Exultant's Clothing"),
          t("Expensive Clothing"),
        ],
      },
    ],
  };
};

export default trueKin;
