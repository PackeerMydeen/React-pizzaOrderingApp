import React from "react";
import "./index.css";
import "font-awesome/css/font-awesome.css";

function SubIcon(props) {
  return (
    <div
      onClick={props.onSub}
      className="fa fa-minus-circle subicon"
      style={{
        color: props.minusColor,
        fontSize: "35px",
        marginLeft: props.marginLeft
      }}
    ></div>
  );
}

export default SubIcon;
