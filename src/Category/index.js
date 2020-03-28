import React, { Fragment } from "react";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import SubIcon from "../SubIcon";
import AddIcon from "../AddIcon";
import AgeIcon from "../AgeIcon";

function Category(props) {
  return (
    <div className="category-wrapper">
      <AgeIcon
        icon={props.userIcon}
        ageType={props.userValue}
        colour={"#1f50b1"}
      />
      <div className="icons-wrapper">
        <SubIcon
          minusColor={"#1f50b1"}
          marginLeft={props.leftVal}
          onSub={() => props.onSub(props.userValue)}
        />
        <div
          className="number-wrapper"
          style={{
            color: "#1f50b1",
            fontSize: "25px",
            marginLeft: props.numLeft
          }}
        >
          {props.pplCount}
        </div>
        <AddIcon
          plusColor={"#ec4375"}
          marginLeft={props.numLeftp}
          onAdd={() => props.onAdd(props.userValue)}
        />
      </div>
    </div>
  );
}

export default Category;
