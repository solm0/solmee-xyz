import { useState } from 'react';

const TagButton = ({ tag }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={`tag-button ${isActive ? 'active' : 'inactive'}`} onClick={handleClick}>
      <div>{tag}</div>
    </button>
  );
};

export default TagButton;