import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import styles from "../styles/Home.module.css";

import allAncestries from "../data/characters";
import weapons from "../data/equipment/weapons";
import armors from "../data/equipment/armor";
import gears from "../data/equipment/gear";
import exoticas from "../data/equipment/exotica";
import mysticGifts from "../data/equipment/mysticGifts";
import cybernetics from "../data/equipment/cybernetics";

import { randomFromArray, rollAllTables } from "../data/utils";
import ColonRoll from "../components/colonRoll";

const generateAbility = () => {
  const arr = [
    Math.floor(Math.random() * (6 - 1 + 1) + 1),
    Math.floor(Math.random() * (6 - 1 + 1) + 1),
    Math.floor(Math.random() * (6 - 1 + 1) + 1),
  ];
  const min = Math.min.apply(Math, arr);
  return min;
};

const abilities = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intellect",
  "Psyche",
  "Ego",
];

const Characters = () => {
  const { t } = useTranslation("common");
  const [chosenAncestry, setChosenAncestry] = useState("");
  const [manualChosenAncestry, setManualChosenAncestry] = useState("");

  const [stats, setStats] = useState([]);
  const [rollTables, setRollTables] = useState([]);
  const [weapon, setWeapon] = useState([]);
  const [armor, setArmor] = useState([]);
  const [gear, setGear] = useState([]);
  const [exotica, setExotica] = useState([]);
  const [mysticGift, setMysticGift] = useState([]);
  const [cybernetic, setCybernetic] = useState([]);

  useEffect(() => {
    reroll();
  }, []);

  useEffect(() => {
    setRollTables(rollAllTables(chosenAncestry.rolls));
  }, [chosenAncestry]);

  useEffect(() => {
    reroll();
  }, [manualChosenAncestry]);

  const reroll = () => {
    setStats([
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
    ]);
    !manualChosenAncestry
      ? setChosenAncestry(randomFromArray(allAncestries(t)))
      : setChosenAncestry(
          allAncestries(t).filter((ancestry) => {
            console.log(ancestry);
            return ancestry.name === manualChosenAncestry;
          })[0]
        );
    setRollTables(rollAllTables(chosenAncestry.rolls));
    setWeapon(rollAllTables(weapons(t).rolls));
    setArmor(rollAllTables(armors(t).rolls));
    setGear(rollAllTables(gears(t).rolls));
    setExotica(rollAllTables(exoticas(t).rolls));
    setMysticGift(rollAllTables(mysticGifts(t).rolls));
    setCybernetic(rollAllTables(cybernetics(t).rolls));
  };

  console.log(allAncestries(t));
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{t("Character Generator")}</h1>
        <button onClick={reroll}>{t("Roll a new one!")}</button>
        <label>
          {t("Select an Ancestry (--- will choose one at random)")}:{" "}
          <select onChange={(e) => setManualChosenAncestry(e.target.value)}>
            <option value="">---</option>
            <option value="Cacklemaw Exile">{t("Cacklemaw Exile")}</option>
            <option value="Cacogen">{t("Cacogen")}</option>
            <option value="Faa Nomad">{t("Faa Nomad")}</option>
            <option value="Lithling">{t("Lithling")}</option>
            <option value="Mycomorph">{t("Mycomorph")}</option>
            <option value="Newbeast">{t("Newbeast")}</option>
            <option value="Planeyfolk">{t("Planeyfolk")}</option>
            <option value="Synth">{t("Synth")}</option>
            <option value="True-Kin">{t("True-Kin")}</option>
          </select>
        </label>
        <div className={styles.flex}>
          <div>
            <p>
              <b>{t("Ancestry")}:</b> {chosenAncestry.name}
            </p>
            {abilities.map((ability, i) => {
              return (
                <p key={ability}>
                  <b>{ability}</b>: +{stats[i]} <b>{t("Defense")}:</b>{" "}
                  {stats[i] + 10}
                </p>
              );
            })}
          </div>
          <div>
            {rollTables &&
              rollTables.map((table) => {
                return (
                  <ColonRoll
                    key={table.rollName + table.value}
                    rollName={table.rollName}
                    value={table.value}
                  />
                );
              })}
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>{t("Ancestry Description")}</h3>
            <p> {chosenAncestry.description}</p>
          </div>
          <div>
            <h3>{t("Special Abilities")}</h3>
            {chosenAncestry.special &&
              chosenAncestry.special.map((special) => {
                return <p key={special}>{special}</p>;
              })}
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>{t("Starting Equipment")}</h3>
            {weapon?.length && (
              <ColonRoll
                rollName={t("Weapon")}
                value={
                  weapon[0].value +
                  " " +
                  weapon[1].value +
                  "-" +
                  weapon[2].value
                }
              />
            )}
            {armor?.length && (
              <ColonRoll
                rollName={t("Armor")}
                value={armor[0].value + ", " + armor[1].value}
              />
            )}
            {gear?.length && (
              <ColonRoll
                rollName={t("Gear")}
                value={gear[0].value + ", " + gear[1].value}
              />
            )}
          </div>
          <div>
            <h3>Extra Gifts</h3>
            {exotica?.length && (
              <ColonRoll rollName={t("Exotica")} value={exotica[0].value} />
            )}
            <p>
              <em>Choose one of the two below</em>
            </p>
            {mysticGift?.length && (
              <ColonRoll
                rollName="Mystical Gift"
                value={
                  "You have the gift of " +
                  mysticGift[1].value +
                  ". You gained this power " +
                  mysticGift[0].value
                }
              />
            )}
            {cybernetic?.length && (
              <ColonRoll
                rollName="Cybernetic"
                value={
                  cybernetic[0].value[0] +
                  " - " +
                  cybernetic[0].value[1] +
                  " - " +
                  cybernetic[0].value[2]
                }
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Characters;
