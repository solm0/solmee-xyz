import ForceGraph2D from 'react-force-graph-2d';
import myData from '../data/graphData.json'

function MyGraphComponent() {

  return (
    <ForceGraph2D
      graphData={myData}
      width={800}
      height={600}
      backgroundColor='#e4e9e1'
      nodeVal={(node) => node.val}
      nodeLabel={() => null}
      minZoom={1}
      maxZoom={4}
      linkWidth={1}
      nodeCanvasObject={(node, ctx, globalScale) => {

        const size = Math.sqrt(node.val) * 5;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
        ctx.fill();

        const fontSize = 12 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.fillStyle = 'transparent';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.x, node.y + size + fontSize); // Adjust Y for center-align below node
      }}
    />
  );
}

export default MyGraphComponent;