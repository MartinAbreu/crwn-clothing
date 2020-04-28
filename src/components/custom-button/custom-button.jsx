import React from "react";

import "./custom-button.scss";

const CustomButton = ({ googleBtn, children, ...otherProps }) => (
  <button
    className={`${googleBtn ? "googleButtonStyle" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
