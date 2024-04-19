import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import locationStyles from "../components/Location.module.css";
import Location from "../components/Location";
import { randomFromArray } from "../data/utils";
import regions from "../data/locations/regions";
import MapGenerator from "../components/MapGenerator";
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
        " " + 
        randomFromArray(regions.genericStorySeeds.npcB) +
        " " +
        randomFromArray(regions.genericStorySeeds.wants) +
        " 원함"+        
        ". 한편, " +
        randomFromArray(regions.genericStorySeeds.complication) +
        "라는 문제또한 남아있음" 
    );
    setRefresh(refresh + 1);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>지역</h1>
        <label>
          장소의 갯수{" "}
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
            또다른 지역 생성하기 (모든 내용이 재생성됩니다)
          </button>
        </p>
        <p>
          <b>지형:</b> {landscape}
        </p>
        <p>
          <b>지명의 유래:</b> {namesake}
        </p>
        <p>
          <b>스토리 시드:</b> {storySeed}
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
