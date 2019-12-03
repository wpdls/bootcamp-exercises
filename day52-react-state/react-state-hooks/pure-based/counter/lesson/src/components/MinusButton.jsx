import React from "react";

const MinusButton = props => {
  return (
    <button
      name="checkbox"
      type="checkbox"
      onClick={props.onMinusButtonClick}
    >-</button>
  );
};

export default MinusButton
