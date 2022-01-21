import React from "react";
import CustomeButton from "../custome-button/CustomeButton";
import "./CartDropDown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomeButton>GO TO CHECKOUT</CustomeButton>
      </div>
    </div>
  );
};

export default CartDropDown;
