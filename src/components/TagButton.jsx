import '../styles/global.css';

function TagButton({ tag, url }) {
    return (
        <div className="tag-button">
            <a href={url}>{tag}</a>
        </div>
    );
}

export default TagButton;