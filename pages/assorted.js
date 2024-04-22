import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { camelize, rollAllTables, rollNdX } from "../data/utils";
import assortedTables from "../data/assorted";
import styles from "../styles/Home.module.css";
import ColonRoll from "../components/colonRoll";
const Assorted = () => {
  const [generator, setGenerator] = useState("");
  const [numberOf, setNumberOf] = useState(1);
  const [refresher, setRefresher] = useState(1);
  const [entries, setEntries] = useState([]);
  const { t } = useTranslation("common");
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
      holder.push(rollAllTables(assortedTables(t, camelize(gen))));
      i++;
    }
    setEntries(holder);
  };
  const content = (
    <div>
      {!generator || !numberOf ? null : (
        <>
          <h2>
            {numberOf}x {t(generator)}
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
        <h1>{t("Assorted generators")}</h1>
        <label>
          {t("Choose an object to generate")}{" "}
          <select onChange={selectGenerator} defaultValue="">
            <option value="">---</option>
            <option value="Quick NPC Generator">
              {t("Quick NPC Generator")}
            </option>
            <option value="Books of Vaarn">{t("Books of Vaarn")}</option>
            <option value="Drugs of Vaarn">{t("Drugs of Vaarn")}</option>
            <option value="Petty Gods of Vaarn">
              {t("Petty Gods of Vaarn")}
            </option>
            <option value="Trade Caravan">{t("Trade Caravan")}</option>
            <option value="You Found a Corpse">
              {t("You Found a Corpse")}
            </option>
            <option value="Fine Dining">{t("Fine Dining")}</option>
            <option value="Gnomon - City Buildings">
              {t("Gnomon - City Buildings")}
            </option>
            <option value="Gnomon - City Merchants">
              {t("Gnomon - City Merchants")}
            </option>
            <option value="Gnomon - Noble Houses">
              {t("Gnomon - Noble Houses")}
            </option>
            <option value="Gnomon - Trade Cartels">
              {t("Gnomon - Trade Cartels")}
            </option>
            <option value="Gnomon - Urban Shrines">
              {t("Gnomon - Urban Shrines")}
            </option>
            <option value="Gnomon - Pit Fighters">
              {t("Gnomon - Pit Fighters")}
            </option>
            <option value="Gnomon - Philosophers guild">
              {t("Gnomon - Philosophers guild")}
            </option>
            <option value="Gnomon - Gang of Criminals">
              {t("Gnomon - Gang of Criminals")}
            </option>
            <option value="Gnomon - Tavern">{t("Gnomon - Tavern")}</option>
          </select>
        </label>
        <p>
          <label>
            {t("How many to generate")}
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
            {t("Regenerate")}
          </button>
        </p>
        {content}
      </main>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], null, ["en", "ko"])),
    },
  };
}

export default Assorted;
