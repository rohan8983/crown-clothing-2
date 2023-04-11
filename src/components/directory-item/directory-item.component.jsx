import "./directory-item.style.scss";
import { Link, useParams } from "react-router-dom";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <Link to={`shop/${title}`}> */}
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default DirectoryItem;
