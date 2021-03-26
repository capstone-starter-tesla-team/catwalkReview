import React from "react";
import Filter from "./wholeReviewDisplayDetails/filter.jsx";
import Star from "./wholeReviewDisplayDetails/starDisplay.jsx";
import OneReviewDisplay from "./wholeReviewDisplayDetails/oneReviewDisplay.jsx";

export default class wholeReviewDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Filter />
        <Star />
        <OneReviewDisplay />
      </div>
    );
  }
}
