import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import classNames from "classnames";
import ColonRoll from "../components/colonRoll";
import infinityVault from "../data/infinity";
import { randomFromArray } from "../data/utils";
import styles from "../styles/Infinity.module.css";

const TheInfinityVault = () => {
  const exitString =
    "An Exit - This room has a door to the outside world, players can exit from the vault if they so choose";
  const initState = [
    [
      {
        name: "Entrance",
        description: "",
        detail: "Flooded with sand",
        detailB: exitString,
        visited: true,
      },
    ],
  ];
  const [locations, setlocations] = useState(initState);
  const [depth, setDepth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [entrance, setEntrance] = useState([0, 0]);
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
                visited: true,
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
  }, [distance, depth, locations]);
  const south = () => {
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
  const north = () => {
    if (depth >= 1) {
      setDepth(depth - 1);
    } else {
      const arrayLength = locations[0].length;
      const newLayer = locations[0].map((location) => {
        return {};
      });
      setlocations([newLayer].concat(locations));
      setEntrance([entrance[0] + 1, entrance[1]]);
    }
  };
  const west = () => {
    if (distance >= 1) {
      setDistance(distance - 1);
    } else {
      const remap = locations.map((location) => {
        return [[]].concat(location);
      });
      setlocations(remap);
      setEntrance([entrance[0], entrance[1] + 1]);
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

  const resetVault = () => {
    setDepth(0);
    setDistance(0);
    setEntrance([0, 0]);
    setlocations(initState);
  };
  const chooseLocation = (i, j) => {
    setDepth(i);
    setDistance(j);
  };
  const currentLocation = locations[depth][distance];
  const currentCoords = [depth, distance];
  const distanceFromEntrance = (current) => {
    const distArray = [
      Math.abs(current[0] - entrance[0]),
      Math.abs(current[1] - entrance[1]),
    ];
    return Math.max(...distArray);
  };
  return (
    <main className={styles.main}>
      <h1>The Infinity Vault</h1>
      {/* <button>More info</button> */}
      <div className={styles.flex}>
        <div className={styles.map}>
          {locations.map((layer, i) => {
            return (
              <div className={styles.layer} key={"layer" + i}>
                <p>Layer {i + 1}</p>
                {layer.length &&
                  layer.map((location, j) => {
                    const current = i === depth && j === distance;
                    const isEntrance =
                      (i === entrance[0] && j === entrance[1]) ||
                      location.detailB === exitString;
                    const hasUp = location.name && !i === 0;
                    const hasDown =
                      location.name &&
                      !(i === locations.length - 1) &&
                      locations[i + 1][j].name;
                    const hasLeft =
                      location.name && !(j === 0) && locations[i][j - 1].name;
                    const hasRight =
                      location.name &&
                      !(j === locations[0].length - 1) &&
                      locations[i][j + 1].name;
                    console.log(i, locations.length, hasDown);
                    return (
                      <div
                        className={classNames([`${styles.location}`], {
                          [`${styles.entrance}`]: isEntrance,
                          [`${styles.current}`]: current,
                          [`${styles.visited}`]: location.visited,
                        })}
                        key={"room" + i + j}
                        onClick={() => {
                          chooseLocation(i, j);
                        }}
                      >
                        {location.visited && (
                          <p>
                            {i},{j} {location.detailB === exitString && "¤"}
                          </p>
                        )}
                        {/* {location.name} */}
                        {hasUp && (
                          <div
                            className={classNames(styles.up, styles.hallway)}
                          />
                        )}
                        {hasLeft && (
                          <div
                            className={classNames(styles.left, styles.hallway)}
                          />
                        )}
                        {hasRight && (
                          <div
                            className={classNames(styles.right, styles.hallway)}
                          />
                        )}
                        {hasDown && (
                          <div
                            className={classNames(styles.down, styles.hallway)}
                          />
                        )}
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
              <p>{infinityVault.descriptions[currentLocation.name]}</p>
              <ColonRoll rollName="Detail A" value={currentLocation.detail} />
              <ColonRoll rollName="Detail B" value={currentLocation.detailB} />
            </>
          )}
        </div>
      </div>
      <Draggable>
        <div className={styles.controls}>
          <p>
            <b>Controls</b>
          </p>
          <p>
            <button onClick={resetVault}>Reset</button>
          </p>
          <p>
            <button onClick={north}>⇑</button>
            {/* <button>New path back the way we came</button> */}
          </p>
          <p>
            <button onClick={west}>⇐</button>
            <button onClick={east}>⇒</button>
          </p>
          <p>
            <button onClick={south}>⇓</button>
            {/* <button onClick={deeperNewPath}>Deeper new path</button> */}
          </p>
        </div>
      </Draggable>
    </main>
  );
};
export default TheInfinityVault;
