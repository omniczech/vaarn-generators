const armor = (t) => {
  return {
    name: t(t("Armor")),
    rolls: [
      {
        name: t("quality"),
        options: [
          t("Shabby"),
          t("Decadent"),
          t("Ancestral"),
          t("Quicksilver"),
          t("Nano-weave"),
          t("Spiny"),
          t("Dazzling"),
          t("Tarnished"),
          t("Indigo"),
          t("Golden"),
          t("Symbiotic"),
          t("Biomechanical"),
          t("Occult"),
          t("Fungal"),
          t("Translucent"),
          t("Gaudy"),
          t("Sacred"),
          t("Iridescent"),
          t("Crystalline"),
          t("Ornate"),
        ],
      },
      {
        name: t("type"),
        options: [
          t("Desert Robes (1 slot, Armor 11)"),
          t("Desert Robes (1 slot, Armor 11)"),
          t(
            "Hazard Wrap (2 slots, Armor 12) Immunity from Radiation and Toxins"
          ),
          t(
            "Hazard Wrap (2 slots, Armor 12) Immunity from Radiation and Toxins"
          ),
          t("War Shirt (2 slots, Armor 12)"),
          t("War Shirt (2 slots, Armor 12)"),
          t("War Shirt (2 slots, Armor 12)"),
          t("War Shirt (2 slots, Armor 12)"),
          t("Brigandine (3 slots, Armor 13)"),
          t("Brigandine (3 slots, Armor 13)"),
          t("Brigandine (3 slots, Armor 13)"),
          t("Brigandine (3 slots, Armor 13)"),
          t("Brigandine (3 slots, Armor 13)"),
          t("Curiass (4 slots, Armor 14)"),
          t("Curiass (4 slots, Armor 14)"),
          t("Curiass (4 slots, Armor 14)"),
          t("Chain-mail (5 slots, Armor 15)"),
          t("Chain-mail (5 slots, Armor 15)"),
          t("Plate Armor (6 slots, Armor 16) Disadvantage to swim or climb"),
          t("Plate Armor (6 slots, Armor 16) Disadvantage to swim or climb"),
        ],
      },
    ],
  };
};

export default armor;
