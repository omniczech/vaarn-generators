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
    console.log(camelize(gen));
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
                            <b>갈등</b>
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
        <h1>여러가지 생성기</h1>
        <label>
          생성할 것을 골라주십시오:{" "}
          <select onChange={selectGenerator} defaultValue="">
            <option value="">---</option>
            <option>_NPC_즉석_생성기</option>
            <option>바안의_도서</option>
            <option>바안의_약물</option>
            <option>바안의_하찮은_신들</option>
            <option>행상단</option>
            <option>발견한_시체</option>
            <option>한_끼_식사</option>
            <option>노몬의_건물</option>
            <option>노몬의_상인</option>
            <option>노몬의_귀족_가문</option>
            <option>노몬의_상인_카르텔</option>
            <option>노몬의_도심_성소</option>
            <option>노몬의_투기장_투사들</option>
            <option>노몬의_철학자_길드</option>
            <option>노몬의_범죄자_무리</option>
            <option>노몬의_주점</option>
          </select>
        </label>
        <p>
          <label>
            생성 갯수
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
            재생성
          </button>
        </p>
        {content}
      </main>
    </div>
  );
};
export default Assorted;
