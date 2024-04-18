import { useState, useEffect } from "react";
import regions from "../data/locations/regions";
import { randomFromArray, rollAllTables, camelize } from "../data/utils";
import ConcatRoll from "./concatRoll";
import styles from "./Location.module.css";

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
    refresher();
  }, [locationType, refresh]);
  const refresher = () => {
    if (locationType && regions[camelize(locationType)]) {
      setDetails(rollAllTables(regions[camelize(locationType)]));
    } else {
      setDetails([]);
    }
  };
  const roll = () => {
    setLocationType(randomFromArray(regions.locationType));
  };

  return (
    <div className={styles.location}>
      <h3>
        {number} {locationType}
      </h3>
      {details && (
        <>
          <p>
            {details.map((answer) => (
              <ConcatRoll
                key={answer.value}
                rollName={answer.rollName}
                value={answer.value}
              />
            ))}
          </p>
          <div>
            <button onClick={refresher}>세부사항 재굴림</button>
            <button onClick={roll}>장소 재굴림</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Location;
