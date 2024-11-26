import { useState, useEffect } from 'react';
import Graph from './Graph';
import graphData from '../data/graphData.json';

const GlobalGraph = ({ filteredPostUrls }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [filteredNodes, setFilteredNodes] = useState([]);

  useEffect(() => {
    // console.log("Updated filteredPostUrls:", filteredPostUrls);

    const filteredNodes = graphData.nodes.filter((node) =>
      filteredPostUrls.includes(node.id)
    );

    setFilteredNodes(filteredNodes);
    // console.log("Filtered nodes:", filteredNodes);
  }, [filteredPostUrls, graphData.nodes]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Graph
      graphData={graphData}
      width={dimensions.width}
      height={dimensions.height}
      minZoom={1}
      maxZoom={5}
      filteredNodes={filteredNodes}
    />
  );
};

export default GlobalGraph;