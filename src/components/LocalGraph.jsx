import { useState, useEffect } from 'react';
import Graph from './Graph';
import graphData from '../data/graphData.json';

const LocalGraph = () => {
  const [key, setKey] = useState(Math.random());
  const [fileName, setFileName] = useState('');
  const [filteredGraphData, setFilteredGraphData] = useState({ nodes: [], links: [] });
  const [targetNode, setTargetNode] = useState(null);

  // like global graph...
  const [filteredNodes, setFilteredNodes] = useState([]);

  useEffect(() => {
    const handleModalClose = () => {
      // console.log("close-global-graph event detected, forcing Graph re-render");
      setKey(Math.random());
    };
    
    window.addEventListener("close-global-graph", handleModalClose);

    return () => {
      window.removeEventListener("close-global-graph", handleModalClose);
    };
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    
    const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    const newFileName = normalizedPath.substring(normalizedPath.lastIndexOf('/') + 1);

    setFileName(newFileName);
    setFilteredNodes(graphData.nodes);
    // console.log("FileName Set:", newFileName);
  }, []);

  useEffect(() => {
    if (fileName) {
      const target = graphData.nodes.find(node => node.id === fileName);
      setTargetNode(target);
      setKey(Math.random()); // Trigger re-render on targetNode set
      // console.log("Target Node Set:", target);
      
      if (target) {
        const visibleNodes = new Set([target]);
        const visibleLinks = [];
        const queue = [{ nodeId: fileName, depth: 0 }];

        while (queue.length > 0) {
          const { nodeId, depth } = queue.shift();

          if (depth < 2) {
            graphData.links.forEach(link => {
              if (link.source === nodeId || link.target === nodeId) {
                const neighborId = link.source === nodeId ? link.target : link.source;
                const neighborNode = graphData.nodes.find(node => node.id === neighborId);

                if (neighborNode && !visibleNodes.has(neighborNode)) {
                  visibleNodes.add(neighborNode);
                  queue.push({ nodeId: neighborId, depth: depth + 1 });
                }
                visibleLinks.push(link);
              }
            });
          }
        }

        setFilteredGraphData({
          nodes: Array.from(visibleNodes),
          links: visibleLinks
        });
      } else {
        setFilteredGraphData({ nodes: [], links: [] });
      }
    }
  }, [fileName]);

  return (
    <Graph
      key={key}
      width={300}
      height={300}
      minZoom={2}
      maxZoom={2}
      filteredNodes={filteredNodes}
      graphData={filteredGraphData}
      targetNode={targetNode}
    />
  );
};

export default LocalGraph;