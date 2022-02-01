import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Location from "../components/Location";
const Region = () => {
  const [locationCount, setLocationCount] = useState([1, 2, 3, 4]);
  const changeCount = (e) => {
    const i = 1;
    setLocationCount(Array.from({ length: e.target.value }));
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Region</h1>
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
        <p>Choose a dice size for each location (Larger is has more variety)</p>
        {locationCount.map((location) => {
          return <Location key={location} />;
        })}
      </main>
    </div>
  );
};

export default Region;
