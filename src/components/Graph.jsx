import ForceGraph2D from 'react-force-graph-2d';
import graphData from '../data/graphData.json'

function MyGraphComponent() {
  const handleNodeClick = (node) => {
    const noteUrl = `/markdowns/${node.id}`;
    window.location.href = noteUrl;
  };

  return (
    <ForceGraph2D
      graphData={graphData}
      width={800}
      height={600}
      backgroundColor='#e4e9e1'
      minZoom={1}
      maxZoom={4}

      linkWidth={1}

      nodeVal={(node) => node.val}
      nodeLabel={() => null}
      onNodeClick={handleNodeClick}
      nodeCanvasObject={(node, ctx, globalScale) => {

        const size = Math.sqrt(node.val) * 5;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
        ctx.fill();

        const fontSize = 12 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.fillStyle = 'grey';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.x, node.y + size + fontSize);
      }}
    />
  );
}

export default MyGraphComponent;