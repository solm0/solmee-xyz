

const handleClick = () => {
    window.location.href='/?openModal=globalGraph'
}

const NoteTagButton = ({ tag }) => {
    return (
      <button onClick={handleClick} className="tag-button">
        {tag}
      </button>
    );
  };
  
  export default NoteTagButton;