import React from "react";
import CollectionsItem from "../collection-item/CollectionsItem";
import "./CollectionsPreview.scss";

const CollectionsPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionsItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
