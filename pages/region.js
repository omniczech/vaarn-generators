import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Location from "../components/Location";
import { randomFromArray } from "../data/utils";
import regions from "../data/locations/regions";
const Region = () => {
	const [locationCount, setLocationCount] = useState(["", "", "", ""]);
	const [landscape, setLandscape] = useState("");
	const [namesake, setNamesake] = useState("");
	const [refresh, setRefresh] = useState(0);
	const [storySeed, setStorySeed] = useState("");
	const changeCount = (e) => {
		setLocationCount(Array.from({ length: e.target.value }));
	};
	useEffect(() => {
		roll();
	}, []);
	const roll = () => {
		setLandscape(randomFromArray(regions.landscape));
		setNamesake(randomFromArray(regions.namesake));
		setStorySeed(
			randomFromArray(regions.genericStorySeeds.npcA) +
				" wants to " +
				randomFromArray(regions.genericStorySeeds.wants) +
				" " +
				randomFromArray(regions.genericStorySeeds.npcB) +
				". However, there is a complication in the form of " +
				randomFromArray(regions.genericStorySeeds.complication)
		);
		setRefresh(refresh + 1);
	};
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>Region</h1>
				<button onClick={roll}>Roll another one</button>
				<p>
					<b>Landscape:</b> {landscape}
				</p>
				<p>The region was named after {namesake}</p>
				<p>
					<b>Story Seed:</b> {storySeed}
				</p>
				<label>
					Number of locations{" "}
					<select onChange={changeCount}>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
				</label>
				{/* <p>Choose a dice size for each location (Larger is has more variety)</p> */}
				{locationCount.map((location, i) => {
					return <Location key={i} number={i + 1} refresh={refresh} />;
				})}
			</main>
		</div>
	);
};

export default Region;
