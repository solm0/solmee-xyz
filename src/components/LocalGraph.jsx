import { useState, useEffect } from 'react';
import Graph from './Graph';
import graphData from '../data/graphData.json';
import { GRAPHSTYLE } from '../scripts/graphStyle';

const LocalGraph = () => {
  const [key, setKey] = useState(Math.random());
  const [fileName, setFileName] = useState('');
  const [filteredGraphData, setFilteredGraphData] = useState({ nodes: [], links: [] });

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
    setFileName(path.substring(path.lastIndexOf('/') + 1));
  }, []);

  useEffect(() => {
    const targetNode = graphData.nodes.find(node => node.id === fileName);

    if (targetNode) {
      const visibleNodes = new Set([targetNode]);
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
  }, [fileName]);

  return (
    <Graph
      key={key}
      width={300}
      height={300}
      minZoom={2}
      maxZoom={2}
      graphData={filteredGraphData}
      nodeCanvasObject={(node, ctx, globalScale) => {
        const size = Math.sqrt(node.val) * 2; // Set the size of each node circle
        ctx.fillStyle = node.color || GRAPHSTYLE.nodeColor; // Set fill color for the node
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
        ctx.fill();

        // Set the text fill color here
        const fontSize = GRAPHSTYLE.fontSize / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.fillStyle = GRAPHSTYLE.textColor; // Set the text color
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.x, node.y + size + fontSize);
      }}
    />
  );
};

export default LocalGraph;