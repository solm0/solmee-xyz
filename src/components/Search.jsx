import Fuse from 'fuse.js';
import { useState } from 'react';
import BlogPostWrapper from './BlogPost';

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
	keys: ['frontmatter.title', 'frontmatter.description', 'frontmatter.slug'],
	includeMatches: true,
	minMatchCharLength: 2,
	threshold: 0.5,
};

function Search({ searchList }) {
    // User's input
	const [query, setQuery] = useState('');

    const fuse = new Fuse(searchList, options);

    // Set a limit to the posts: 5
    const posts = fuse
        .search(query)
        .map((result) => result.item)
        .slice(0, 5);
    
    function handleOnSearch({ target = {} }) {
        const { value } = target;
        setQuery(value);
    }

    return (
        <>
            <input type="text" value={query} onChange={handleOnSearch} placeholder="Search posts" />
            {query.length > 1 && (
                <p>
                    Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for '{query}'
                </p>
            )}
            <ul>
                {posts &&
                    posts.map((post) => (
                        <BlogPostWrapper
                            key={post.url}
                            url={post.url}
                            title={post.frontmatter.title}
                            tags={post.frontmatter.tags}
                            date={post.frontmatter.date}
                        />
                    ))}
            </ul>
        </>
    );
}

export default Search;