import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import allAncestries from "../data/characters";
import weapons from "../data/equipment/weapons.json";
import armors from "../data/equipment/armor.json";
import gears from "../data/equipment/gear.json";
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
      ? setChosenAncestry(randomFromArray(allAncestries))
      : setChosenAncestry(
          allAncestries.filter((ancestry) => {
            return ancestry.name === manualChosenAncestry;
          })[0]
        );
    setRollTables(rollAllTables(chosenAncestry.rolls));
    setWeapon(rollAllTables(weapons.rolls));
    setArmor(rollAllTables(armors.rolls));
    setGear(rollAllTables(gears.rolls));
    setExotica(rollAllTables(exoticas.rolls));
    setMysticGift(rollAllTables(mysticGifts.rolls));
    setCybernetic(rollAllTables(cybernetics.rolls));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Character Generator</h1>
        <button onClick={reroll}>Roll a new one!</button>
        <label>
          Select an Ancestry (--- will choose one at random):{" "}
          <select onChange={(e) => setManualChosenAncestry(e.target.value)}>
            <option value="">---</option>
            <option value="Cacklemaw Exile">Cacklemaw Exile</option>
            <option value="Cacogen">Cacogen</option>
            <option value="Faa Nomad">Faa Nomad</option>
            <option value="Lithling">Lithling</option>
            <option value="Mycomorph">Mycomorph</option>
            <option value="Newbeast">Newbeast</option>
            <option value="Planeyfolk">Planeyfolk</option>
            <option value="Synth">Synth</option>
            <option value="True-Kin">True-Kin</option>
          </select>
        </label>
        <div className={styles.flex}>
          <div>
            <p>
              <b>Ancestry:</b> {chosenAncestry.name}
            </p>
            {abilities.map((ability, i) => {
              return (
                <p key={ability}>
                  <b>{ability}</b>: +{stats[i]} <b>Defense:</b> {stats[i] + 10}
                </p>
              );
            })}
          </div>
          <div>
            {rollTables &&
              rollTables.map((table) => {
                return (
                  <ColonRoll rollName={table.rollName} value={table.value} />
                );
              })}
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>Ancestry Description</h3>
            <p> {chosenAncestry.description}</p>
          </div>
          <div>
            <h3>Special Abilities</h3>
            {chosenAncestry.special &&
              chosenAncestry.special.map((special) => {
                return <p key={special}>{special}</p>;
              })}
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>Starting Equipment</h3>
            {weapon.length && (
              <ColonRoll
                rollName="Weapon"
                value={
                  weapon[0].value +
                  " " +
                  weapon[1].value +
                  "-" +
                  weapon[2].value
                }
              />
            )}
            {armor.length && (
              <ColonRoll
                rollName="Armor"
                value={armor[0].value + ", " + armor[1].value}
              />
            )}
            {gear.length && (
              <ColonRoll
                rollName="Gear"
                value={gear[0].value + ", " + gear[1].value}
              />
            )}
          </div>
          <div>
            <h3>Extra Gifts</h3>
            {exotica.length && (
              <ColonRoll rollName="Exotica" value={exotica[0].value} />
            )}
            <p>
              <em>Choose one of the two below</em>
            </p>
            {mysticGift.length && (
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
            {cybernetic.length && (
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
