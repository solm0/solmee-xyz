import { useState, useEffect } from 'react';
import GlobalGraph from './GlobalGraph';
import { loadNotes } from '../scripts/loadNotes';

const TagButtonContainer = () => {
  const allPosts = loadNotes();

  const groupA = ['domain', 'error', 'css', 'vercel', 'firebase', 'porkbun', 'cloudflare', 'astro', 'react', 'javascript', 'html'];

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
      // console.log(filteredPostUrls);
    } else {
      setFilteredPostUrls(allPosts.map(post => post.url.split('/').pop()));
    }
  }, [activeTags]);

  const groupATags = tags.filter((tag) => groupA.includes(tag));
  const ungroupedTags = tags.filter((tag) => !groupA.includes(tag));

  return (
    <>
      <GlobalGraph filteredPostUrls={filteredPostUrls} client:only="react" />
      <div className='graph-tags-container'>
        <div className='graph-tags-caption'>Filter by tags</div>
        <div className="graph-tags ungrouped">
          {ungroupedTags.map((tag) => (
            <button
              key={tag}
              className={`tag-button ${activeTags.includes(tag) ? 'active' : 'inactive'}`}
              onClick={() => handleToggle(tag)}
            >
              <div>{tag}</div> 
            </button>
          ))}
        </div>
        <div className="graph-tags group-a">
          {groupATags.map((tag) => (
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

      <div className="graph-caption">
        Left-click: pan<br />
        Mouse-wheel: zoom<br />
      </div>

      <button
        id="clearButton"
        className="clear-button"
        type="button"
        onClick={handleClear}
      >
        Clear
      </button>
    </>
  );
};

export default TagButtonContainer;