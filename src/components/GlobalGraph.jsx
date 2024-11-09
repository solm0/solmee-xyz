import { useState, useEffect } from 'react';
import Graph from './Graph.jsx';
import graphData from '../data/graphData.json';

const GlobalGraph = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [key, setKey] = useState(Math.random()); // Unique key to force re-render

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleModalClose = () => {
      setKey(Math.random()); // Update key to re-render Graph
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("close-global-graph", handleModalClose); // Listen for custom event

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("close-global-graph", handleModalClose);
    };
  }, []);

  return (
    <Graph
      key={key} // Unique key for re-rendering Graph
      graphData={graphData}
      width={dimensions.width}
      height={dimensions.height}
      minZoom={1}
      maxZoom={5}
    />
  );
};

export default GlobalGraph;