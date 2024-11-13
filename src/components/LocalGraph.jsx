import { useState, useEffect } from 'react';
import Graph from './Graph';
import graphData from '../data/graphData.json';
import { GRAPHSTYLE } from '../scripts/graphStyle';

const LocalGraph = () => {
  const [key, setKey] = useState(Math.random());
  const [fileName, setFileName] = useState('');
  const [filteredGraphData, setFilteredGraphData] = useState({ nodes: [], links: [] });
  const [targetNode, setTargetNode] = useState(null);

  // like global graph...
  const [filteredNodes, setFilteredNodes] = useState([]);

  useEffect(() => {
    const handleModalClose = () => {
      console.log("close-global-graph event detected, forcing Graph re-render");
      setKey(Math.random());
    };
    
    window.addEventListener("close-global-graph", handleModalClose);

    return () => {
      window.removeEventListener("close-global-graph", handleModalClose);
    };
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const newFileName = path.substring(path.lastIndexOf('/') + 1);
    setFileName(newFileName);
    setFilteredNodes(graphData.nodes);
    console.log("FileName Set:", newFileName);
  }, []);

  useEffect(() => {
    if (fileName) {
      const target = graphData.nodes.find(node => node.id === fileName);
      setTargetNode(target);
      setKey(Math.random()); // Trigger re-render on targetNode set
      console.log("Target Node Set:", target);
      
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
      nodeCanvasObject={(node, ctx, globalScale) => {
        const size = Math.sqrt(node.val) * 2;
        ctx.fillStyle = node.color || GRAPHSTYLE.nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
        ctx.fill();

        const fontSize = GRAPHSTYLE.fontSize / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.fillStyle = GRAPHSTYLE.textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.x, node.y + size + fontSize);
      }}
    />
  );
};

export default LocalGraph;