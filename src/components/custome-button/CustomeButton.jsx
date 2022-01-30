import React from "react";
import "./CustomeButton.scss";

const CustomeButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomeButton;
