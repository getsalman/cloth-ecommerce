import React from "react";
import "./CollectionsItem.scss";

const CollectionsItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="name">{price}</span>
      </div>
    </div>
  );
};

export default CollectionsItem;
