import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import allAncestries from "../data/characters";
import weapons from "../data/equipment/weapons.json";
import armors from "../data/equipment/armor.json";
import gears from "../data/equipment/gear.json";

import randomFromArray from "../data/utils";

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

const rollAllTables = (rolls) => {
  if (!rolls) {
    return null;
  }
  return rolls.map((roll) => {
    return { rollName: roll.name, value: randomFromArray(roll.options) };
  });
};

const Characters = () => {
  const [chosenAncestry, setChosenAncestry] = useState("");

  const [stats, setStats] = useState([]);
  const [rollTables, setRollTables] = useState([]);
  const [weapon, setWeapon] = useState([]);
  const [armor, setArmor] = useState([]);
  const [gear, setGear] = useState([]);

  useEffect(() => {
    setStats([
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
    ]);
    setChosenAncestry(randomFromArray(allAncestries));
    setWeapon(rollAllTables(weapons.rolls));
    setArmor(rollAllTables(armors.rolls));
    setGear(rollAllTables(gears.rolls));
  }, []);

  useEffect(() => {
    setRollTables(rollAllTables(chosenAncestry.rolls));
  }, [chosenAncestry]);

  const reroll = () => {
    setStats([
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
    ]);
    setChosenAncestry(randomFromArray(allAncestries));

    setRollTables(rollAllTables(chosenAncestry.rolls));
    setWeapon(rollAllTables(weapons.rolls));
    setArmor(rollAllTables(armors.rolls));
    setGear(rollAllTables(gears.rolls));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Character Generator</h1>
        <button onClick={reroll}>Roll a new one!</button>
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
                  <p key={table.rollName}>
                    <b>{table.rollName}: </b>
                    {table.value}
                  </p>
                );
              })}
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <p>
              <b>Description:</b> {chosenAncestry.description}
            </p>
          </div>
          <div>
            <p>
              <b>Special Abilities</b>
            </p>
            {chosenAncestry.special &&
              chosenAncestry.special.map((special) => {
                return <p key={special}>{special}</p>;
              })}
          </div>
        </div>
        <h3>Starting Equipment</h3>
        <p>
          <b>Weapon: </b>
          {weapon.length && (
            <span>
              {weapon[0].value} {weapon[1].value} - {weapon[2].value}
            </span>
          )}
        </p>
        <p>
          <b>Armor: </b>
          {armor.length && (
            <span>
              {armor[0].value} {armor[1].value}
            </span>
          )}
        </p>
        <p>
          <b>Gear: </b>
          {gear.length && (
            <span>
              {gear[0].value}, {gear[1].value}
            </span>
          )}
        </p>
      </main>
    </div>
  );
};

export default Characters;
