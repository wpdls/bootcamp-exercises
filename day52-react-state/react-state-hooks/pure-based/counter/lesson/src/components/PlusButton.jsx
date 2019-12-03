import React from "react";

const PlusButton = props => {
  return (
    <button
      name="checkbox"
      type="checkbox"
      onClick={props.onPlusButtonClick}
    >+</button>
  );
};

export default PlusButton
