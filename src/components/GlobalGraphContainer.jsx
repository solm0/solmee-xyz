import { useState, useEffect } from 'react';
import GlobalGraph from './GlobalGraph';
import { loadNotes } from '../scripts/loadNotes';

const TagButtonContainer = () => {
  const allPosts = loadNotes();
  const tags = [...new Set(allPosts.map((post) => post.tags).flat())];
  const [activeTags, setActiveTags] = useState([]);
  const [filteredPostUrls, setFilteredPostUrls] = useState([]);

  const handleToggle = (tag) => {
    setActiveTags((prevActiveTags) =>
      prevActiveTags.includes(tag)
        ? prevActiveTags.filter((t) => t !== tag) // Remove tag if already active
        : [...prevActiveTags, tag]                // Add tag if not active
    );
  };

  const handleClear = () => {
    setActiveTags([]);
  };

  useEffect(() => {
    if (activeTags.length > 0) {
      const filteredPosts = allPosts.filter(post =>
        activeTags.every(tag => post.tags.includes(tag))
      );
      const filteredPostUrls = filteredPosts.map(post => {
        const segments = post.url.split('/');
        return segments.pop();
      });
      
      setFilteredPostUrls(filteredPostUrls);
      console.log(filteredPostUrls)
    } else {
      setFilteredPostUrls(allPosts.map(post => post.url.split('/').pop()));
    }
  }, [activeTags]);

  return (
    <div>
      <GlobalGraph filteredPostUrls={filteredPostUrls} client:only="react" />
      <p className="graph-caption">Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan</p>
      <p className='graph-tags-caption'>Filter by tags</p>
      <div className="graph-tags">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag-button ${activeTags.includes(tag) ? 'active' : 'inactive'} ${tag === 'error' ? 'error' : ''}`}
            onClick={() => handleToggle(tag)}
          >
            <div>{tag}</div> 
          </button>
        ))}
      </div>
      <button
        id="clearButton"
        className="clear-button"
        type="button"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
};

export default TagButtonContainer;