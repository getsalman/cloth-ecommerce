import React from "react";
import "./CustomeButton.scss";

const CustomeButton = ({ children, ...otherProps }) => {
  console.log("--->", children);
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomeButton;
