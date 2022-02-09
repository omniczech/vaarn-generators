import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import styles from "./MapGenerator.module.css";

const MapGenerator = ({ nodesInput, refresh }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [localRefresh, setLocalRefresh] = useState(0);
  const generateNodesAndEdges = () => {
    setNodes(
      nodesInput.map((node, i) => {
        return { id: i + 1, label: (i + 1).toString() };
      })
    );
    const array = nodesInput.map((node, i) => {
      return i + 1;
    });

    const randomIntFromInterval = (min, max) => {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getOccurrence = (array, value) => {
      var count = 0;
      array.forEach((v) => v === value && count++);
      return count;
    };

    const compareNumbers = (a, b) => {
      return a - b;
    };

    const result2 = array.reduce((reducer, currentNode) => {
      console.log(currentNode);
      const holding = [];
      const numConnect = randomIntFromInterval(2, 3);

      const countConnect = getOccurrence(reducer.flat(), currentNode);
      if (countConnect < numConnect) {
        let i = countConnect;
        while (i < numConnect) {
          const randDest = randomIntFromInterval(1, array.length);
          const newEdge = [currentNode, randDest].sort(compareNumbers);
          console.log(
            newEdge,
            reducer,
            reducer.includes(newEdge),
            holding,
            holding.includes(newEdge)
          );
          if (randDest !== currentNode && !reducer.includes(newEdge)) {
            holding.push(newEdge);
          }
          i++;
        }
      }
      return reducer.concat(holding);
    }, []);
    const resultEdges = Array.from(
      new Set(result2.map(JSON.stringify)),
      JSON.parse
    );
    setEdges(
      resultEdges.map((node, i) => {
        const numD6 = randomIntFromInterval(1, 3);
        const distance = randomIntFromInterval(1 * numD6, 6 * numD6);
        return {
          from: node[0],
          to: node[1],
          label: distance + " days",
        };
      })
    );
  };
  useEffect(() => {
    generateNodesAndEdges();
  }, []);
  useEffect(() => {
    generateNodesAndEdges();
  }, [refresh]);
  useEffect(() => {
    generateNodesAndEdges();
  }, [nodesInput]);
  useEffect(() => {
    generateNodesAndEdges();
  }, [localRefresh]);

  const localRefresher = () => {
    setLocalRefresh(localRefresh + 1);
  };

  const visJsRef = useRef(null);
  useEffect(() => {
    const network =
      visJsRef.current &&
      new Network(visJsRef.current, { autoresize: true, nodes, edges }, {});
    // Use `network` here to configure events, etc
  }, [visJsRef, nodes, edges]);

  return (
    <>
      <button onClick={localRefresher}>Regenerate map</button>
      <div className={styles.map} ref={visJsRef} />
    </>
  );
};

export default MapGenerator;
