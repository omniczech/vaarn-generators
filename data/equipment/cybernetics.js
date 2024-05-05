const cybernetics = (t) => {
  return {
    rolls: [
      {
        name: t("cyber"),
        options: [
          [
            t("Air Current Microsensor"),
            t("PSY"),
            t(
              "You suffer no navigation or combat penalties from blindness or darkness."
            ),
          ],
          [
            t("Alluring Fakeface"),
            t("EGO"),
            t("You are extraordinarily beautiful. +2 to EGO."),
          ],
          [
            t("Autoglot HeadBank"),
            t("INT"),
            t("+2 to INT. You understand all languages."),
          ],
          [t("Backup Heart", "CON", "+2 to CON. +5 max HP.")],
          [
            t(
              "Carbide Knucklebones",
              "STR",
              "Your bare fists deal d8+2 damage."
            ),
          ],
          [
            t("Cyberliver"),
            t("CON"),
            t("You gain immunity to all poisons. You cannot get drunk."),
          ],
          [
            t("Dazzleskin Filaments"),
            t("CON"),
            t(
              "You are immune to energy weapons. Disadvantage when trying to hide."
            ),
          ],
          [
            t("Dopamine Synthesizer"),
            t("EGO"),
            t("+2 to EGO. You are immune to fear"),
            t(" panic"),
            t(" and embarrassment."),
          ],
          [
            t("Dorsal Jump-pack"),
            t("DEX"),
            t(
              "You have hover-jets mounted on your back. You fly slowly and loudly."
            ),
          ],
          [
            t("Ferrosteel Exo-Skeleton"),
            t("STR"),
            t(
              "Add +2 to Armour and STR. Subtract -2 from DEX. You cannot swim."
            ),
          ],
          [
            t("Finger Syringe"),
            t("DEX"),
            t(
              "One finger is a hidden injector. You can load it with any tonic or poison."
            ),
          ],
          [
            t("Hydraulic Biceps"),
            t("STR"),
            t("+2 to STR. Add STR bonus to weapon damage."),
          ],
          [
            t("Hyper-elastic Tendons"),
            t("DEX"),
            t("+2 to DEX. You can jump like a frog."),
          ],
          [
            t("Merciless Cybereyes"),
            t("DEX"),
            t("+2 to DEX. Add DEX bonus to ranged weapon damage."),
          ],
          [
            t("Mercurial Fakeface"),
            t("EGO"),
            t("Your face can alter its features and colour at will."),
          ],
          [
            t("Sub-dermal Ceramic Plating"),
            t("CON"),
            t("+2 to Armour. Cannot be removed."),
          ],
          [
            t("Sub-dermal Insulation"),
            t("CON"),
            t("Immunity to all damage from flames"),
            t(" cold"),
            t(" and electricity. Cannot be removed."),
          ],
          [
            t("Tactical Bioscanner"),
            t("PSY"),
            t("You know the Armour"),
            t(" Hit Points"),
            t(" and Morale of any Biological creature."),
          ],
          [
            t("Tactical Technoscanner"),
            t("INT"),
            t("You know the Armour"),
            t(" Hit Points"),
            t(" and Morale of any Synthetic creature."),
          ],
          [
            t("Trauma-Response Rig"),
            t("CON"),
            t(
              "Make a CON save to ignore the results of Wound rolls. Works once per day."
            ),
          ],
        ],
      },
    ],
  };
};

export default cybernetics;