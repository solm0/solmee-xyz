import { useState, useEffect } from 'react';
import Graph from './Graph';
import graphData from '../data/graphData.json';

const GlobalGraph = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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
    />
  );
};

export default GlobalGraph;