const harpy = (t) => {
  return {
    name: t("Harpy"),
    description: t(
      "They are the fulfillment of humanity’s oldest and fondest wish: that we might join the birds we envy in the unbounded blue of the depths above. Despite forsaking the ground they have renounced none of their ancestors’ pride and the creatures are famed for their mercurial tempers and capacity to hold a grudge. The harpies of Ostriel are shaped like predatory birds with vibrantly coloured feathers, possessed of the visages and metacarpi of pale, aristocratic humans. Their clawed feet are as dextrous as any hand, and they are known as expert archers."
    ),
    special: [
      t(
        "Hollow Bones - you take double damage from crushing or bludgeoning attack"
      ),
      t(
        "Flight - you have powerful wings and can fly freely. You can carry another human-sized character aloft, so long as you have five or more empty item slots"
      ),
      t(
        "Ancestral Enemy - when you encounter characters from Sargattea, all reaction or persuasion rolls are made with Disadvantage."
      ),
    ],
    rolls: [
      {
        name: t("Body"),
        options: [
          t("Lanky"),
          t("Hunched"),
          t("Slender"),
          t("Plump"),
          t("Sinuous"),
          t("Bony"),
          t("Robust"),
          t("Imposing"),
          t("Delicate"),
          t("Aged"),
          t("Muscular"),
          t("Angular"),
          t("Wiry"),
          t("Claw-Scarred"),
          t("Elegant"),
          t("Round"),
          t("Dainty"),
          t("Towering"),
          t("Stooped"),
          t("Tiny"),
        ],
      },
      {
        name: t("Face"),
        options: [
          t("Sly"),
          t("Powdered"),
          t("Pale"),
          t("Ritually Tattooed"),
          t("Sculpted"),
          t("Young"),
          t("Harsh"),
          t("Blank"),
          t("Bashful"),
          t("Ancient"),
          t("Beguiling"),
          t("Tranquil"),
          t("Sharp"),
          t("One-Eyed"),
          t("Glowering"),
          t("Languid"),
          t("Concealed"),
          t("Enticing"),
          t("Jewelled"),
          t("Hungry"),
        ],
      },
      {
        name: t("Plumage"),
        options: [
          t("Thundercloud Blue"),
          t("Simmering Orange"),
          t("Purple and Teal"),
          t("Mist Grey"),
          t("Regal Blue"),
          t("Gory Red"),
          t("Emerald Green"),
          t("Gold and Yellow"),
          t("Iridescent Silver"),
          t("Olive Drab"),
          t("Scar White"),
          t("Indigo and Scarlet"),
          t("Raw Umber"),
          t("Dusk Pink"),
          t("Bottle Green"),
          t("Burgundy"),
          t("Lustrous Black"),
          t("Turquoise"),
          t("Powder Blue"),
          t("Warning Yellow"),
        ],
      },
      {
        name: t("Feet"),
        options: [
          t("Child-like"),
          t("Elegant"),
          t("Tattooed Palms"),
          t("Extravagantly Jewelled"),
          t("Recently Injured"),
          t("Always Gloved"),
          t("Missing Fingers"),
          t("Ancient Battle Scars"),
          t("Victory Bangles"),
          t("Gnarled"),
          t("Malformed, Clumsy"),
          t("Gilded Talons"),
          t("Huge, Unclipped Talons"),
          t("Soft and Perfumed"),
          t("Once Badly Burned"),
          t("Swollen"),
          t("Palms Dyed Black"),
          t("Knuckle Warts"),
          t("Bear Shameful Brand"),
          t("Skeletal"),
        ],
      },
      {
        name: t("Name"),
        options: [
          t("Khazri"),
          t("Sarma"),
          t("Barguzin"),
          t("Kali"),
          t("Amihan"),
          t("Habagat"),
          t("Rashaba"),
          t("Simoon"),
          t("Alize"),
          t("Karabura"),
          t("Coromue"),
          t("Foehn"),
          t("Bise"),
          t("Kosava"),
          t("Ostro"),
          t("Mistral"),
          t("Vendavel"),
          t("Bora"),
          t("Xlok"),
          t("Zonda"),
        ],
      },
      {
        name: t("Roost Sigil"),
        options: [
          t("Broken Tower"),
          t("Hanged Man"),
          t("Ailing Moon"),
          t("Red Talons"),
          t("Bitter Wind"),
          t("Barbed Arrow"),
          t("Empty Goblet"),
          t("Regal Moon"),
          t("Crowned Eye"),
          t("Falling Star"),
          t("Gilded Talons"),
          t("Pale Blossom"),
          t("Scornful Sun"),
          t("Ouroboros"),
          t("Mad Eye"),
          t("Hollow Crown"),
          t("Sacred Blade"),
          t("Green Star"),
          t("Bloody Tongue"),
          t("Rising Moon"),
        ],
      },
      {
        name: t("Demeanour"),
        options: [
          t("Abrasive"),
          t("Callous"),
          t("Cynical"),
          t("Devious"),
          t("Fanatical"),
          t("Foolish"),
          t("Greedy"),
          t("Haughty"),
          t("Impulsive"),
          t("Jealous"),
          t("Melodramatic"),
          t("Morbid"),
          t("Obsessive"),
          t("Paranoid"),
          t("Pessimistic"),
          t("Pretentious"),
          t("Resentful"),
          t("Superstitious"),
          t("Vain"),
          t("Volatile"),
        ],
      },
      {
        name: t("Your Grudge"),
        options: [
          t("Great-grandmother Executed Unjustly"),
          t("Passed over for Prestigious Office"),
          t("Spurned by Potential Spouse"),
          t("Mother Killed in Battle with Sargatteans"),
          t("Treated Dishonourably by Twin Sister"),
          t("Mother Assassinated by Krypteia Agent"),
          t("Snubbed by the Queen Beyond the Sky"),
          t("Punished for the Failings of Another"),
          t("Given Inadequate Gift at Wedding"),
          t("Absurd Grievance; Only Matters to You"),
        ],
      },
    ],
  };
};

export default harpy;
