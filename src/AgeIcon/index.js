import React, { Fragment } from "react";
import "./index.css";

function AgeIcon(props) {
  return (
    <Fragment>
      <div className="age-wrapper">
        <div
          className={props.icon}
          style={{ color: props.colour, fontSize: "25px" }}
        ></div>
        <div
          className="agetype-wrapper"
          style={{ color: props.colour, fontSize: "25px" }}
        >
          {props.ageType}
        </div>
      </div>
    </Fragment>
  );
}

export default AgeIcon;
