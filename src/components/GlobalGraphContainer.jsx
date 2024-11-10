import { useState } from 'react';
import GlobalGraph from './GlobalGraph';
import { loadNotes } from '../scripts/loadNotes';

const TagButtonContainer = () => {
  const allPosts = loadNotes();
  const tags = [...new Set(allPosts.map((post) => post.tags).flat())];
  const [activeTags, setActiveTags] = useState([]);

  const handleToggle = (tag) => {
    setActiveTags((prevActiveTags) =>
      prevActiveTags.includes(tag)
        ? prevActiveTags.filter((t) => t !== tag) // Remove tag if already active
        : [...prevActiveTags, tag]                // Add tag if not active
    );
  };

  return (
    <div>
      <GlobalGraph client:only />
      <p className="graph-caption">Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan</p>
      <div className="graph-tags">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag-button ${activeTags.includes(tag) ? 'active' : 'inactive'}`}
            onClick={() => handleToggle(tag)}
          >
            <div>{tag}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagButtonContainer;