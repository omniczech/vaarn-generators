import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import regions from "../data/locations/regions";
import { randomFromArray, rollAllTables, camelize } from "../data/utils";
import ConcatRoll from "./concatRoll";
import styles from "./Location.module.css";

const Location = ({ number, refresh }) => {
  const { t } = useTranslation("common");
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
    if (locationType && regions(t, camelize(locationType))) {
      setDetails(rollAllTables(regions(t, camelize(locationType))));
    } else {
      setDetails([]);
    }
  };
  console.log(regions(t, "locationType"));
  const roll = () => {
    setLocationType(randomFromArray(regions(t, "locationType")));
  };

  return (
    <div className={styles.location}>
      <h3>
        {number} {t(locationType)}
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
            <button onClick={refresher}>Reroll details</button>
            <button onClick={roll}>Reroll location</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Location;
