import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import "../../../css/starDisplay.css";

export default class StarsDisplay extends Component {
  render() {
    return (
      <div className="stars">
        <ReactStars rating={2.403} starDimension="500px" size={50} starSpacing="500px" />
      </div>
    );
  }
}
