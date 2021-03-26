import React from "react";
import "../../css/ratingAndReviewStars.css";

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
        <h1>rating and review stars</h1>
      </div>
    );
  }
}
