import DirectoryItem from "../directory-item/directory-item.component";

import "../directory/directory.style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem {...category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
