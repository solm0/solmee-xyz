import TagButton from "./TagButton";

function BlogPost({ url, title, tags, date }) {
    return (
        <>
            <a class="blog-post" href={url}>{title}</a>
            <div>
                {tags &&
                    <div className="tag-button-container">
                        {tags.map((tag) => <TagButton tag={tag} url={`/tags/${tag}`}/>)}
                    </div>
                }
                <p className="frontmatter blog-post">{date}</p>
            </div>
            <hr className="blog-post"></hr>
        </>
    );
}

export default BlogPost;