import React from "react";
import "./index.css";

function AddIcon(props) {
  return (
    <div
      onClick={props.onAdd}
      className="fa fa-plus-circle"
      style={{
        color: props.plusColor,
        fontSize: "35px",
        marginLeft: props.marginLeft
      }}
    ></div>
  );
}

export default AddIcon;
