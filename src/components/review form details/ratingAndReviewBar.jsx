import React from "react";
import "../../css/ratingAndReviewBar.css";

export default class NameOfTheService extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    console.log("service mounted");
  }

  render() {
    return (
      <div>
        <h1>rating and review bar</h1>
      </div>
    );
  }
}
