import Fuse from 'fuse.js';
import { useState } from 'react';
import BlogPost from './BlogPost';

// Configs fuse.js
const options = {
	keys: ['frontmatter.title', 'frontmatter.rawContent', 'frontmatter.description'],
	includeMatches: true,
	minMatchCharLength: 2,
	threshold: 0.5,
};

function Search({ searchList }) {
    // User's input
	const [query, setQuery] = useState('');

    const fuse = new Fuse(searchList, options);

    // Set a limit to the posts: 10
    const posts = fuse
        .search(query)
        .map((result) => result.item)
        .slice(0, 10);
    
    function handleOnSearch({ target = {} }) {
        const { value } = target;
        setQuery(value);
    }

    {console.log("searchList:", searchList);}

    return (
        <>
            <input type="text" value={query} onChange={handleOnSearch} placeholder="Search posts" />
            <div className='search-result-container'>
                {query.length > 1 && (
                    <p>
                        Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for '{query}'
                        <br/>* 본문은 아직 검색 안됨
                    </p>
                )}
                <ul>
                    {posts &&
                        posts.map((post) => (
                            <BlogPost
                                key={post.url}
                                url={post.url}
                                title={post.frontmatter.title}
                                tags={post.frontmatter.tags}
                                date={post.frontmatter.date}
                            />
                        ))}
                </ul>
            </div>
            
        </>
    );
}

export default Search;