import ForceGraph2D from 'react-force-graph-2d';
import { GRAPHSTYLE } from '../scripts/graphStyle';
import { useState, useEffect, useRef } from 'react';

const loadCustomFont = async () => {
  const font = new FontFace("IBM", "url(/fonts/ibm-plex.woff2)");
  await font.load();
  document.fonts.add(font);
};

loadCustomFont();

const Graph = ({
  width,
  height,
  minZoom,
  maxZoom,
  graphData = { nodes: [], links: [] },
  targetNode,
  filteredNodes
}) => {
  const [hoveredNode, setHoveredNode ] = useState(null);
  const [depth1Nodes, setDepth1Nodes] = useState(new Set());
  const graphRef = useRef();

  // useEffect(() => {
  //   console.log("Filtered nodes:", filteredNodes);
  // }, [filteredNodes]);

  useEffect(() => {
    if (graphRef.current && targetNode) {
      const timeout = setTimeout(() => {
        // console.log("Centering node using timeout:", targetNode);
        graphRef.current.centerAt(targetNode.x, targetNode.y, 1000);
      }, 1000); // Adjust the timeout duration as needed
  
      return () => clearTimeout(timeout); // Cleanup timeout on unmount or re-run
    }
  }, [targetNode]);

  const handleNodeHover = (node) => {
    setHoveredNode(node);

    if (node) {
      const neighbors = new Set();

      graphData.links?.forEach((link) => {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;

        if (sourceId === node.id) {
          neighbors.add(targetId);
        } else if (targetId === node.id) {
          neighbors.add(sourceId);
        }
      });

      setDepth1Nodes(neighbors);
    } else {
      setDepth1Nodes(new Set());
    }
  };

  const handleNodeClick = (node) => {
    const noteUrl = `/markdowns/${node.id}`;
    window.location.href = noteUrl;
  };

  useEffect(() => {
    window.setHoveredNode = (nodeId) => {
      const node = graphData.nodes.find((n) => n.id === nodeId);
      setHoveredNode(node || null);
    };
    return () => {
      delete window.setHoveredNode; // Clean up when component unmounts
    };
  }, [graphData.nodes]); // Ensure graphData.nodes is accessible in the effect

useEffect(() => {
  console.log("Updated hoveredNode:", hoveredNode);
}, [hoveredNode]);

  return (
    <ForceGraph2D
      ref={graphRef}
      key={`${width}-${height}-${minZoom}-${maxZoom}`}
      graphData={graphData}
      width={width}
      height={height}
      minZoom={minZoom}
      maxZoom={maxZoom}
      
      nodeLabel={() => null}
      onNodeClick={handleNodeClick}
      onNodeHover={handleNodeHover}
      nodeCanvasObject={(node, ctx, globalScale) => {

        const size = Math.sqrt(node.val) * 2;

        const filteredNodeIds = new Set(filteredNodes?.map((n) => n.id));

        let nodeColor;

        switch (node.type) {
          case 'notes':
            nodeColor = GRAPHSTYLE.notesColor;
            break;
          case 'logbooks':
            nodeColor = GRAPHSTYLE.logbooksColor;
            break;
          case 'works':
            nodeColor = GRAPHSTYLE.worksColor;
            break;
          default:
            nodeColor = GRAPHSTYLE.grayColor2;
        }

        if (targetNode && node.id === targetNode.id) {
            // Background circle
          ctx.fillStyle = GRAPHSTYLE.backgroundColor;
          ctx.beginPath();
          ctx.arc(node.x, node.y, size + 2, 0, 2 * Math.PI, false);
          ctx.fill();

          ctx.strokeStyle = nodeColor;
          ctx.lineWidth = 1 / globalScale;
          ctx.beginPath();
          ctx.arc(node.x, node.y, size + 2, 0, 2 * Math.PI, false);
          ctx.stroke();
        }

        if (filteredNodeIds.has(node.id)) {
          if (hoveredNode) {
            if (node === hoveredNode) {
              ctx.fillStyle = nodeColor;
            } else if (depth1Nodes.has(node.id)) {
              ctx.fillStyle = GRAPHSTYLE.grayColor4;
            } else {
              ctx.fillStyle = GRAPHSTYLE.grayColor1;
            }
          } else {
            ctx.fillStyle = nodeColor;
          }
        } else {
          ctx.fillStyle = GRAPHSTYLE.grayColor1;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
        ctx.fill();

        const fontSize = GRAPHSTYLE.fontSize / globalScale;
        ctx.font = `${fontSize}px 'IBM', Sans-Serif`;

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

        const filteredNodeIds = new Set(filteredNodes?.map((n) => n.id));

        if (filteredNodeIds.has(link.source.id) && filteredNodeIds.has(link.target.id)) {
          if (hoveredNode) {
            const isDirectlyConnected = (link.source.id === hoveredNode.id || link.target.id === hoveredNode.id);
        
            if (isDirectlyConnected) {
              ctx.strokeStyle = GRAPHSTYLE.grayColor4; // Direct connection color
            } else {
              ctx.strokeStyle = GRAPHSTYLE.grayColor1; // Indirect connection color
            }
          } else {
            ctx.strokeStyle = GRAPHSTYLE.grayColor4; // No hovered node, default color for valid links
          }
        } else {
          ctx.strokeStyle = GRAPHSTYLE.grayColor1; // Links where one or both nodes are not in filteredNodeIds
        }

        ctx.beginPath();
        ctx.moveTo(link.source.x, link.source.y);
        ctx.lineTo(link.target.x, link.target.y);
        ctx.stroke();

        const arrowLength = 2;
        const arrowRelPos = 0.9;

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

export default Graph;