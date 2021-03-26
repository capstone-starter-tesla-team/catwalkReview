import React, { Component } from "react";
import "../../../css/filter.css";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <p className="review">
          248 reviews, sorted by <span className="relevance">relevance 🠇</span>{" "}
        </p>
      </div>
    );
  }
}
