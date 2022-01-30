import React from "react";
import { connect } from "react-redux";
import CustomeButton from "../custome-button/CustomeButton";
import { addItem } from "../../redux/cart/cartAction";
import "./CollectionsItem.scss";

const CollectionsItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="name">{price}</span>
      </div>
      <CustomeButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomeButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionsItem);
