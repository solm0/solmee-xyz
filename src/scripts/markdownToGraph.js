import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; 

const inputDir = path.resolve('src/pages/markdowns');
const outputDir = path.resolve('src/data');
const outputFile = path.join(outputDir, 'graphData.json');

const graphData = { nodes: [], links: [] };
const nodeMap = new Map();

fs.mkdirSync(outputDir, { recursive: true });

// First pass: Create nodes without links
const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.md'));

files.forEach(file => {
    const filePath = path.join(inputDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    const id = file.replace('.md', '').toLowerCase();

  // Add node if it doesn't already exist
    if (!nodeMap.has(id)) {
        const node = { id, name: data.alias || data.aliases[0] || id, type: data.type, val: 1 };
        graphData.nodes.push(node);
        nodeMap.set(id, node);
        console.log(`Created node: ${id} from file ${file}`);
    }
});

// Second pass: Add links based on the parsed links in each file
files.forEach(file => {
    const filePath = path.join(inputDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: markdownContent } = matter(content);

    const sourceId = file.replace('.md', '').toLowerCase();
    const linkRegex = /\[\[\s*([^\|\]]+)\s*(\|[^\]]+)?\]\]/g;
    let match;

    while ((match = linkRegex.exec(markdownContent)) !== null) {
        const targetId = match[1].trim().toLowerCase();

        // Add link only if the target node exists in nodeMap
        if (nodeMap.has(targetId)) {
            graphData.links.push({ source: sourceId, target: targetId });
            nodeMap.get(sourceId).val += 1;
            console.log(`Link created: ${sourceId} -> ${targetId}`);
        } else {
            console.log(`Unresolved link target: '${targetId}' in file: ${file}`);
        }
    }
});

fs.writeFileSync(outputFile, JSON.stringify(graphData, null, 2));
console.log(`Graph data has been saved to ${outputFile}`);