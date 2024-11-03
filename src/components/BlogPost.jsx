import TagButton from "./TagButton";

function BlogPost({ url, title, tags, date }) {
    const formattedDate = new Date(date).toISOString().slice(0, 10);

    return (
        <>
            <a className="blog-post" href={url}>{title}</a>
            <div>
                {tags &&
                    <div className="tag-button-container">
                        {tags.map((tag, index) => (
                            <TagButton tag={tag} key={index} url={`/tags/${tag}`}/>
                        ))}
                    </div>
                }
                <p className="frontmatter blog-post">{formattedDate}</p>
            </div>
            <hr className="blog-post"></hr>
        </>
    );
}

export default BlogPost;