import ForceGraph2D from 'react-force-graph-2d';
import myData from '../data/myData.json'

function MyGraphComponent() {
    return (
      <ForceGraph2D
        graphData={myData}
      />
    );
  }
  
  export default MyGraphComponent;