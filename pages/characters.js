import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import allAncestries from "../data/characters";

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
	}, []);

	useEffect(() => {
		setRollTables(rollAllTables(chosenAncestry.rolls));
	}, [chosenAncestry]);

    const reroll=()=>{
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
    }

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>Character Generator</h1>
                <button onClick={reroll}>Roll a new one!</button>
				<p>
					<b>Ancestry:</b> {chosenAncestry.name}
				</p>
				<p>
					Description: <em>{chosenAncestry.description}</em>
				</p>
				{abilities.map((ability, i) => {
					return (
						<p key={ability}>
							<b>{ability}</b>: +{stats[i]} <b>Defense:</b> {stats[i] + 10}
						</p>
					);
				})}
				<p>
					<b>Special Abilities</b>
				</p>
				{chosenAncestry.special &&
					chosenAncestry.special.map((special) => {
						return <p key={special}>{special}</p>;
					})}
				{rollTables &&
					rollTables.map((table) => {
						return (
							<p key={table.rollName}>
								{table.rollName}: {table.value}
							</p>
						);
					})}
			</main>
		</div>
	);
};

export default Characters;
