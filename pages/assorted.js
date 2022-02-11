import { useState, useEffect } from "react";
import { camelize, rollAllTables, rollNdX } from "../data/utils";
import assortedTables from "../data/assorted";
import styles from "../styles/Home.module.css";
import ColonRoll from "../components/colonRoll";
const Assorted = () => {
  const [generator, setGenerator] = useState("");
  const [numberOf, setNumberOf] = useState(1);
  const [refresher, setRefresher] = useState(1);
  const [entries, setEntries] = useState([]);
  const selectGenerator = (e) => {
    setGenerator(e.target.value);
  };
  const selectNumberOf = (e) => {
    setNumberOf(e.target.value);
  };
  useEffect(() => {
    if (!generator || !numberOf) {
      setEntries([]);
    } else {
      generateEntries(numberOf, generator);
    }
  }, [numberOf, generator, refresher]);
  const generateEntries = (qty, gen) => {
    let i = 0;
    let holder = [];
    while (i < qty) {
      holder.push(rollAllTables(assortedTables[camelize(gen)]));
      i++;
    }
    setEntries(holder);
  };
  const content = (
    <div>
      {!generator || !numberOf ? null : (
        <>
          <h2>
            {numberOf}x {generator}
          </h2>
          <div className={styles.cardcontainer}>
            {entries.map((entry, i) => {
              return (
                <div key={i} className={styles.card}>
                  {entry.map((attr) => {
                    return (
                      <>
                        {attr.rollName === "NPC A" && (
                          <p className={styles["divider-above"]}>
                            <b>Conflict</b>
                          </p>
                        )}
                        <ColonRoll
                          rollName={attr.rollName}
                          value={attr.value}
                        />
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>{" "}
        </>
      )}
    </div>
  );
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Assorted generators</h1>
        <label>
          Choose an object to generate:{" "}
          <select onChange={selectGenerator} defaultValue="">
            <option value="">---</option>
            <option>Quick NPC Generator</option>
            <option>Books of Vaarn</option>
            <option>Drugs of Vaarn</option>
            <option>Petty Gods of Vaarn</option>
            <option>Trade Caravan</option>
            <option>You Found a Corpse</option>
            <option>Fine Dining</option>
            <option>Gnomon - City Buildings</option>
            <option>Gnomon - City Merchants</option>
            <option>Gnomon - Noble Houses</option>
            <option>Gnomon - Trade Cartels</option>
            <option>Gnomon - Urban Shrines</option>
            <option>Gnomon - Pit Fighters</option>
            <option>Gnomon - Philosopher&apos; s guild</option>
            <option>Gnomon - Gang of Criminals</option>
            <option>Gnomon - Tavern</option>
          </select>
        </label>
        <p>
          <label>
            How many to generate
            <input
              type="number"
              min={1}
              defaultValue={1}
              onChange={selectNumberOf}
            ></input>
          </label>
        </p>
        <p>
          <button
            onClick={() => {
              setRefresher(refresher + 1);
            }}
          >
            Regenerate
          </button>
        </p>
        {content}
      </main>
    </div>
  );
};
export default Assorted;
