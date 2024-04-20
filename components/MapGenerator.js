import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import { rollNdX, randomIntFromInterval } from "../data/utils";
import styles from "./MapGenerator.module.css";

const MapGenerator = ({ nodesInput, refresh }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [localRefresh, setLocalRefresh] = useState(0);
  const generateNodesAndEdges = () => {
    setNodes(
      nodesInput.map((node, i) => {
        return {
          id: i + 1,
          label: (i + 1).toString(),
          color: "#0d184d",
          font: { color: "#fff" },
          shape: "box",
          shapeProperties: { borderRadius: 2 },
          widthConstraint: { minimum: 25 },
        };
      })
    );
    const array = nodesInput.map((node, i) => {
      return i + 1;
    });

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
        const distance = rollNdX(numD6, 6);
        return {
          from: node[0],
          to: node[1],
          label: distance + " 일",
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
      new Network(
        visJsRef.current,
        {
          autoresize: true,
          nodes: {
            color: {
              border: "#fff",
              background: "#97C2FC",
              highlight: {
                border: "#2B7CE9",
                background: "#D2E5FF",
              },
              hover: {
                border: "#000",
                background: "#D2E5FF",
              },
            },
          },
          nodes,
          edges,
        },
        {}
      );
    // Use `network` here to configure events, etc
  }, [visJsRef, nodes, edges]);

  return (
    <div className={styles["map-container"]}>
      <div className={styles.map} ref={visJsRef} />
      <button onClick={localRefresher}>맵 재생성</button>
    </div>
  );
};

export default MapGenerator;
