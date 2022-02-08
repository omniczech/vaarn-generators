import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";
import styles from "./MapGenerator.module.css";

const MapGenerator = ({ nodesInput }) => {
  const nodes = nodesInput.map((node, i) => {
    return { id: i + 1, label: (i + 1).toString() };
  });

  const array = nodesInput.map((node, i) => {
    return i + 1;
  });

  const result = array.flatMap((v, i) => array.slice(i + 1).map((w) => [v, w]));

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getOccurrence = (array, value) => {
    var count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  };

  const result2 = array.reduce((reducer, currentNode) => {
    console.log(currentNode);
    const holding = [];
    const numConnect = randomIntFromInterval(1, 3);

    const countConnect = getOccurrence(reducer.flat(), currentNode);
    if (countConnect < numConnect) {
      let i = countConnect;
      while (i < numConnect) {
        const numD6 = randomIntFromInterval(1, 3);
        const distance = randomIntFromInterval(1 * numD6, 6 * numD6);
        const newEdge = [
          currentNode,
          randomIntFromInterval(currentNode + 1, array.length),
          distance.toString(),
        ].sort();
        holding.push(newEdge);
        i++;
      }
    }
    return reducer.concat(holding);
  }, []);

  console.log(result2);

  const edges = result2.map((node, i) => {
    return { from: node[0], to: node[1], label: node[2] + " days of travel" };
  });

  const visJsRef = useRef(null);
  useEffect(() => {
    const network =
      visJsRef.current &&
      new Network(
        visJsRef.current,
        {
          nodes,
          edges,
        },
        {}
      );
    // Use `network` here to configure events, etc
  }, [visJsRef, nodes, edges]);

  return <div className={styles.map} ref={visJsRef} />;
};

export default MapGenerator;
