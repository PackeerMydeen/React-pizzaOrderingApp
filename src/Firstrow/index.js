import React, { Fragment } from "react";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import SubIcon from "../SubIcon";
import AddIcon from "../AddIcon";

export default function Firstrow(props) {
  return (
    <Fragment>
      <div className="Row-wrapper">
        <div className="pizza-wrapper">
          <div
            className="fa fa-birthday-cake"
            style={{ fontSize: props.iconSize, color: "#1f50b1" }}
          ></div>
          <div
            className="size-wrapper"
            style={{ color: "#1f50b1", fontSize: "25px" }}
          >
            {props.pizzaSize}
          </div>
        </div>
        <div className="iconNumber-wrapper">
          <div>
            <SubIcon
              minusColor={"#1f50b1"}
              marginLeft={props.subLeft}
              onSub={() => props.onSub(props.pizzaSize)}
            />
          </div>
          <div className="num-wrapper">{props.count}</div>
          <div>
            <AddIcon
              plusColor={"#ec4375"}
              marginLeft={props.addLeft}
              onAdd={() => props.onAdd(props.pizzaSize)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
