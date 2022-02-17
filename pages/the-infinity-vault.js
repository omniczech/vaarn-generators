import { useEffect, useState } from "react";
import ColonRoll from "../components/colonRoll";
import infinityVault from "../data/infinity";
import { randomFromArray } from "../data/utils";
import styles from "../styles/Infinity.module.css";

const TheInfinityVault = () => {
  const [locations, setlocations] = useState([
    [
      {
        name: "Entrance",
        description: "",
        detail: randomFromArray(infinityVault.details),
        detailB: randomFromArray(infinityVault.detailsB),
      },
    ],
  ]);

  const [depth, setDepth] = useState(0);
  const [distance, setDistance] = useState(0);
  //initial load
  useEffect(() => {}, []);
  useEffect(() => {
    if (!locations[depth][distance].name) {
      const temp = locations.map((layer, i) => {
        if (i === depth) {
          return layer.map((location, i) => {
            if (i === distance) {
              return {
                name: randomFromArray(infinityVault.roomTypes),
                description: "",
                detail: randomFromArray(infinityVault.details),
                detailB: randomFromArray(infinityVault.detailsB),
              };
            } else {
              return location;
            }
          });
        } else {
          return layer;
        }
      });
      setlocations(temp);
    }
  }, [distance, depth]);
  const deeper = () => {
    if (depth + 1 === locations.length) {
      setlocations(
        locations.concat([
          locations[0].map((room) => {
            return [];
          }),
        ])
      );
    }
    setDepth(depth + 1);
  };
  const backTheWayWeCame = () => {
    if (depth >= 1) {
      setDepth(depth - 1);
    }
  };
  const west = () => {
    if (distance >= 1) {
      setDistance(distance - 1);
    }
  };
  const east = () => {
    if (distance + 1 === locations[0].length) {
      const remap = locations.map((location) => {
        return location.concat([[]]);
      });
      setlocations(remap);
      setDistance(distance + 1);
    } else {
      setDistance(distance + 1);
    }
  };
  const chooseLocation = (i, j) => {
    setDepth(i);
    setDistance(j);
  };
  const currentLocation = locations[depth][distance];
  return (
    <main className={styles.main}>
      <h1>The Infinity Vault</h1>
      {/* <button>More info</button> */}
      <div className={styles.flex}>
        <div>
          {locations.map((layer, i) => {
            return (
              <div className={styles.layer} key={"layer" + i}>
                Layer {i + 1}
                {layer.length &&
                  layer.map((location, j) => {
                    const current = i === depth && j === distance;
                    return (
                      <div
                        className={current ? styles.current : styles.location}
                        key={"room" + i + j}
                        onClick={() => {
                          chooseLocation(i, j);
                        }}
                      >
                        {location.name}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
        <div>
          {currentLocation && (
            <>
              <h3>Details</h3>
              <p>
                <b>{currentLocation.name}</b>
              </p>
              <ColonRoll rollName="Detail A" value={currentLocation.detail} />
              <ColonRoll rollName="Detail B" value={currentLocation.detailB} />
            </>
          )}
        </div>
        <div className={styles.controls}>
          <p>
            <b>Controls</b>
          </p>
          <p>
            <button onClick={backTheWayWeCame}>North</button>
            {/* <button>New path back the way we came</button> */}
          </p>
          <p>
            <button onClick={west}>West</button>
            <button onClick={east}>East</button>
          </p>
          <p>
            <button onClick={deeper}>South</button>
            {/* <button onClick={deeperNewPath}>Deeper new path</button> */}
          </p>
        </div>
      </div>
    </main>
  );
};
export default TheInfinityVault;
