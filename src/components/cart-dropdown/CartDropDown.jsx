import React from "react";
import { connect } from "react-redux";
import CustomeButton from "../custome-button/CustomeButton";
import CartItem from "../cart-item/CartItem";
import "./CartDropDown.scss";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomeButton>GO TO CHECKOUT</CustomeButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
