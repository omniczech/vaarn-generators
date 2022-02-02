import { useState, useEffect } from "react";
import regions from "../data/locations/regions";
import { randomFromArray, rollAllTables, camelize } from "../data/utils";

const Location = ({ number, refresh }) => {
	const [locationType, setLocationType] = useState("");
	const [details, setDetails] = useState([]);
	useEffect(() => {
		roll();
	}, []);
	useEffect(() => {
		roll();
	}, [refresh]);
	useEffect(() => {
		if (locationType && regions[camelize(locationType)]) {
			setDetails(rollAllTables(regions[camelize(locationType)]));
		} else {
			setDetails([]);
		}
	}, [locationType, refresh]);
	const roll = () => {
		setLocationType(randomFromArray(regions.locationType));
	};

	return (
		<>
			<h3>
				{number} {locationType}
			</h3>
			{details && (
				<p>
					{details.map((answer) => (
						<>
							{answer.rollName} {answer.value}
						</>
					))}
				</p>
			)}
		</>
	);
};

export default Location;
