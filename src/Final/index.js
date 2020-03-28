import React, { Component, Fragment } from "react";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import Firstrow from "../Firstrow";
import Category from "../Category";
//import fontawesome from "@fortawesome/fontawesome";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//import { faCircle as fasCircle } from "@fortawesome/fontawesome-free-solid";
//import { faCircle as farCircle } from "@fortawesome/fontawesome-free-regular";

export default class Final extends Component {
  state = {
    adultCount: 1,
    childrenCount: 0,
    totalCount: 200,
    smallCount: 0,
    mediumCount: 1,
    largeCount: 0
  };
  onAddition = pizzaSize => {
    let {
      smallCount,
      mediumCount,
      largeCount,
      adultCount,
      childrenCount,
      totalCount
    } = this.state;
    if (totalCount >= 1000) {
      alert("order limit exceeded");
    } else {
      if (pizzaSize === "SMALL") {
        smallCount++;
        childrenCount++;
        totalCount = totalCount + 150;
      } else if (pizzaSize === "MEDIUM") {
        mediumCount++;
        adultCount++;
        totalCount = totalCount + 200;
      } else if (pizzaSize === "LARGE") {
        largeCount++;
        adultCount = adultCount + 2;
        totalCount = totalCount + 300;
      } else if (pizzaSize === "ADULTS") {
        adultCount++;
        largeCount++;
        totalCount = totalCount + 300;
      } else if (pizzaSize === "CHILDREN") {
        childrenCount++;
        smallCount++;
        totalCount = totalCount + 150;
      }
    }
    if (mediumCount >= 2) {
      largeCount++;
      mediumCount = mediumCount - 2;
      totalCount = totalCount - 400;
      totalCount = totalCount + 300;
    }
    if (smallCount >= 2) {
      mediumCount++;
      smallCount = smallCount - 2;
      totalCount = totalCount - 300;
      totalCount = totalCount + 200;
    }
    this.setState({
      smallCount: smallCount,
      mediumCount: mediumCount,
      largeCount: largeCount,
      childrenCount: childrenCount,
      adultCount: adultCount,
      totalCount: totalCount
    });
  };
  onSubtract = pizzaSize => {
    let {
      smallCount,
      mediumCount,
      largeCount,
      adultCount,
      childrenCount,
      totalCount
    } = this.state;
    if (totalCount >= 1000) {
      alert("order limit exceeded");
    } else {
      if (pizzaSize === "SMALL" && smallCount !== 0) {
        smallCount--;
        childrenCount--;
        totalCount = totalCount - 150;
      } else if (pizzaSize === "MEDIUM" && mediumCount !== 0) {
        mediumCount--;
        adultCount--;
        totalCount = totalCount - 200;
      } else if (pizzaSize === "LARGE" && largeCount !== 0) {
        largeCount--;
        adultCount = adultCount - 2;
        totalCount = totalCount - 300;
      } else if (pizzaSize === "ADULTS") {
        adultCount--;
        largeCount--;
        totalCount = totalCount - 300;
      } else if (pizzaSize === "CHILDREN") {
        childrenCount--;
        smallCount--;
        totalCount = totalCount - 150;
      }
    }
    this.setState({
      smallCount: smallCount,
      mediumCount: mediumCount,
      largeCount: largeCount,
      totalCount: totalCount,
      childrenCount: childrenCount,
      adultCount: adultCount
    });
  };
  render() {
    return (
      <div className="main-wrapper">
        <div
          className="title-wrapper"
          style={{ color: "#006ab6", fontSize: "30px" }}
        >
          Order <b>Cake</b>
        </div>
        <div className="initial-wrapper">
          <Firstrow
            pizzaSize={"SMALL"}
            count={this.state.smallCount}
            subLeft={"138px"}
            addLeft={"30px"}
            onAdd={this.onAddition}
            onSub={this.onSubtract}
            iconSize={"20px"}
          />
          <Firstrow
            pizzaSize={"MEDIUM"}
            count={this.state.mediumCount}
            subLeft={"118px"}
            addLeft={"30px"}
            onAdd={this.onAddition}
            onSub={this.onSubtract}
            iconSize={"30px"}
          />
          <Firstrow
            pizzaSize={"LARGE"}
            count={this.state.largeCount}
            subLeft={"138px"}
            addLeft={"30px"}
            onAdd={this.onAddition}
            onSub={this.onSubtract}
            iconSize={"40px"}
          />
          <hr></hr>
          <Category
            userIcon={"fa fa-user"}
            userValue={"ADULTS"}
            leftVal={"79px"}
            numLeft={"30px"}
            numLeftp={"27px"}
            pplCount={this.state.adultCount}
            onAdd={this.onAddition}
            onSub={this.onSubtract}
          />
          <hr></hr>
          <Category
            userIcon={"fa fa-child"}
            userValue={"CHILDREN"}
            leftVal={"50px"}
            numLeft={"30px"}
            numLeftp={"27px"}
            pplCount={this.state.childrenCount}
            onAdd={this.onAddition}
            onSub={this.onSubtract}
          />
        </div>
        <div className="low-wrapper">
          <div style={{ color: "#1f50b1", fontSize: "30px" }}>
            Order <b>Total</b>
          </div>
          <div className="total-wrapper">{this.state.totalCount}</div>
        </div>
        {/* <div>
          <FontAwesomeIcon icon={faHome} />
        </div> */}
      </div>
    );
  }
}
