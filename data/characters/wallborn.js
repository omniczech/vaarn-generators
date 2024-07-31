const wallborn = (t) => {
  return {
    name: t("Wallborn"),
    description: t(
      "The Great Collapse came not all at once but in compounding ripples and eddies, wiping some pockets of humanity away and ushering others into new environs just as the wind carries a storm-stripped leaf hither and thither. Mankind has always sought walls for protection in times of strife and so a great diaspora fled towards the mightiest rampart to be found on the surface of the Urth. Their children’s children reside there still, finding sanctuary in the bowels of a colossal machine whose purpose is no longer understood."
    ),
    special: [
      t(
        "Climber - you have a climbing mutation which suits a vertiginous life. You automatically succeed at climbs that would challenge the average human. You can make seemingly impossible climbs with a successful DEX save."
      ),
      t(
        "Ancestral Enemy - take note of your family background and your allegiance to Sargattea or Ostriel. When you encounter characters from the rival city, all reaction or persuasion rolls are made with Disadvantage"
      ),
    ],
    rolls: [
      {
        name: t("Family"),
        options: [
          t("Nobleborn of Sargattea"),
          t("Sargattean Artisans"),
          t("Vineyard owners, loyal to Sargattea"),
          t("Fisherfolk, loyal to Sargattea"),
          t("Beetle farmers, loyal to Sargattea"),
          t("Temple keepers, loyal to Ostriel"),
          t("Zeppelin builders, loyal to Ostriel"),
          t("High-Wall Herdsmen, loyal to Ostriel"),
          t("Sargattean Exiles, loyal to Ostriel"),
          t("Harpy’s Servants, loyal to Ostriel"),
        ],
      },
      {
        name: t("Body"),
        options: [
          t("Burly"),
          t("Tall"),
          t("Angular"),
          t("Slender"),
          t("Curvy"),
          t("Lopsided"),
          t("Scarred"),
          t("Hunched"),
          t("Compact"),
          t("Dainty"),
          t("Emaciated"),
          t("Flabby"),
          t("Graceful"),
          t("Hulking"),
          t("Lithe"),
          t("Muscular"),
          t("Paunchy"),
          t("Tattooed"),
          t("Slinky"),
          t("Aged"),
        ],
      },
      {
        name: t("Face"),
        options: [
          t("Swollen"),
          t("Leathery"),
          t("Pale"),
          t("Friendly"),
          t("Cold"),
          t("Gaunt"),
          t("Harsh"),
          t("Expressionless"),
          t("Careworn"),
          t("Youthful"),
          t("Branded"),
          t("Tranquil"),
          t("Round"),
          t("Glowering"),
          t("Jovial"),
          t("Forgettable"),
          t("Haggard"),
          t("Bejewelled"),
          t("Alluring"),
          t("Withered"),
        ],
      },
      {
        name: t("Climbing Mutation"),
        options: [
          t("A monkey-like tail and prehensile feet"),
          t("Gecko-like pads on your feet and hands"),
          t("Biotech grappling hooks mounted in wrists"),
          t("Gliding membranes between arms and legs"),
          t("Long, triple-jointed arms used to brachiate like a gibbon"),
        ],
      },
      {
        name: t("Name"),
        options: [
          t("Lakspur"),
          t("Corabellia"),
          t("Ambrose"),
          t("Elice"),
          t("Melizabel"),
          t("Raphan"),
          t("Jillie"),
          t("Flimgray"),
          t("Weaves"),
          t("Byerson"),
          t("Chapuri"),
          t("Zenzo"),
          t("Impatis"),
          t("Blandwash"),
          t("Santhe"),
          t("Neous"),
          t("Lameltart"),
          t("Marjorge"),
          t("Clotfish"),
          t("Valena"),
        ],
      },
      {
        name: t("Attire"),
        options: [
          t("Cheap"),
          t("Ill-fitted"),
          t("Ragged"),
          t("Gaudy"),
          t("Singed"),
          t("Practical"),
          t("Flowing"),
          t("Military"),
          t("Drab"),
          t("Bohemian"),
          t("Religious"),
          t("Fashionable"),
          t("Outrageous"),
          t("Demure"),
          t("Masked"),
          t("Veiled"),
          t("Expensive"),
          t("Outdated"),
          t("Jewelled"),
          t("Iridescent"),
        ],
      },
      {
        name: t("Demeanour"),
        options: [
          t("Abrasive"),
          t("Curious"),
          t("Cynical"),
          t("Decadent"),
          t("Dignified"),
          t("Erratic"),
          t("Frivolous"),
          t("Idealistic"),
          t("Melancholy"),
          t("Optimistic"),
          t("Passionate"),
          t("Patriotic"),
          t("Selfish"),
          t("Sentimental"),
          t("Sly"),
          t("Timid"),
          t("Treacherous"),
          t("Unhurried"),
          t("Volatile"),
          t("Zealous"),
        ],
      },
      {
        name: t("Quirk"),
        options: [
          t("Heavy Smoker"),
          t("Afraid of the Sky"),
          t("Carries a Bad Luck Charm"),
          t("Missing Front Teeth"),
          t("Terrible Cook"),
          t("Insomniac"),
          t("Widely Considered A Liar"),
          t("Six Vengeful Ex-Spouses"),
          t("Loved by Beetles"),
          t("Founded Unusual Business"),
          t("Compulsive Gambler"),
          t("Excellent Cook"),
          t("Plagued by Nightmares"),
          t("Once Fell Off the Wall"),
          t("Missing Fingers"),
          t("Dislikes Children"),
          t("Beautiful Singing Voice"),
          t("Related to Infamous Traitor"),
          t("Origami Expert"),
          t("Allergic to Hard Work"),
        ],
      },
    ],
  };
};

export default wallborn;