import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/Home.module.css";
import locationStyles from "../components/Location.module.css";
import Location from "../components/Location";
import { randomFromArray } from "../data/utils";
import regions from "../data/locations/regions";
import MapGenerator from "../components/MapGenerator";
const Region = () => {
  const { t } = useTranslation("common");
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
    setLandscape(randomFromArray(regions(t, "landscape")));
    setNamesake(randomFromArray(regions(t, "namesake")));
    setStorySeed(
      randomFromArray(regions(t, "genericStorySeeds").npcA) +
        " wants to " +
        randomFromArray(regions(t, "genericStorySeeds").wants) +
        " " +
        randomFromArray(regions(t, "genericStorySeeds").npcB) +
        ". However, there is a complication in the form of " +
        randomFromArray(regions(t, "genericStorySeeds").complication)
    );
    setRefresh(refresh + 1);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{t("Region")}</h1>
        <label>
          {t("Number of locations")}{" "}
          <input
            type="number"
            min={4}
            max={40}
            defaultValue={4}
            onChange={changeCount}
          />
        </label>
        <p>
          <button onClick={roll}>
            {t("Roll another Region (Regenerates all content)")}
          </button>
        </p>
        <p>
          <b>{t("Landscape")}:</b> {landscape}
        </p>
        <p>
          <b>{t("The region was named after")}:</b> {namesake}
        </p>
        <p>
          <b>{t("Story Seed")}:</b> {storySeed}
        </p>
        {/* <p>Choose a dice size for each location (Larger is has more variety)</p> */}
        <MapGenerator nodesInput={locationCount} refresh={refresh} />
        <div className={locationStyles.locationcontainer}>
          {locationCount.map((location, i) => {
            return <Location key={i} number={i + 1} refresh={refresh} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default Region;
