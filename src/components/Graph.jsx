import { useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import graphData from '../data/graphData.json'
import { GRAPHSTYLE } from '../scripts/config';

function MyGraphComponent() {
  const [hoveredNode, setHoveredNode ] = useState(null);
  const [depth1Nodes, setDepth1Nodes] = useState(new Set());

  const handleNodeHover = (node) => {
    setHoveredNode(node);

    if (node) {
      // Find depth 1 neighbors of the hovered node
      const neighbors = new Set();

      // Check each link to find neighbors
      graphData.links.forEach((link) => {
        // Ensure link.source and link.target match the node’s ID format
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;

        if (sourceId === node.id) {
          neighbors.add(targetId);
        } else if (targetId === node.id) {
          neighbors.add(sourceId);
        }
      });

      // Update depth1Nodes with neighbors
      setDepth1Nodes(neighbors);
    } else {
      setDepth1Nodes(new Set());
    }
  };

  const handleNodeClick = (node) => {
    const noteUrl = `/markdowns/${node.id}`;
    window.location.href = noteUrl;
  };

  return (
    <ForceGraph2D
      graphData={graphData}
      width={800}
      height={600}
      minZoom={1}
      maxZoom={5}

      nodeLabel={() => null}
      onNodeClick={handleNodeClick}
      onNodeHover={handleNodeHover}
      nodeCanvasObject={(node, ctx, globalScale) => {

        const size = Math.sqrt(node.val) * 2;

        if (hoveredNode) {
          if (node === hoveredNode) {
            ctx.fillStyle = node.color;
          } else if (depth1Nodes.has(node.id)) {
            ctx.fillStyle = GRAPHSTYLE.grayColor4;
          } else {
            ctx.fillStyle = GRAPHSTYLE.grayColor2;
          }
        } else {
          ctx.fillStyle = node.color;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
        ctx.fill();

        const fontSize = GRAPHSTYLE.fontSize / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;

        if (node === hoveredNode) {
          ctx.fillStyle = GRAPHSTYLE.textColor;
        } else if (depth1Nodes.has(node.id)) {
          ctx.fillStyle = GRAPHSTYLE.grayColor4;
        } else {
          ctx.fillStyle = 'transparent';
        }

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.x, node.y + size + fontSize);
      }}

      linkCanvasObject={(link, ctx, globalScale) => {
        ctx.lineWidth = 0.5 / globalScale;

        if (hoveredNode) {
          const isDirectlyConected = (link.source.id === hoveredNode.id || link.target.id === hoveredNode.id);

          if (isDirectlyConected) {
            ctx.strokeStyle = GRAPHSTYLE.grayColor4;
            ctx.lineWidth = 1 / globalScale;
          } else {
            ctx.strokeStyle = GRAPHSTYLE.grayColor2;
          }
        } else {
          ctx.strokeStyle = GRAPHSTYLE.grayColor4;
        }

        ctx.beginPath();
        ctx.moveTo(link.source.x, link.source.y);
        ctx.lineTo(link.target.x, link.target.y);
        ctx.stroke();

        const arrowLength = 2;
        const arrowRelPos = 0.94;

        const dx = link.target.x - link.source.x;
        const dy = link.target.y - link.source.y;
        const angle = Math.atan2(dy, dx);
        const offsetX = link.source.x + dx * arrowRelPos;
        const offsetY = link.source.y + dy * arrowRelPos;

        ctx.beginPath();
        ctx.moveTo(
          offsetX - arrowLength * Math.cos(angle - Math.PI / 6),
          offsetY - arrowLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(offsetX, offsetY);
        ctx.lineTo(
          offsetX - arrowLength * Math.cos(angle + Math.PI / 6),
          offsetY - arrowLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.fillStyle = ctx.strokeStyle; // Match arrow color to link color
        ctx.fill();
      }}
    />
  );
} 

export default MyGraphComponent;