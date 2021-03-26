import React from "react";
import OneReview from "./wholeReviewDetails/oneReview.jsx";
import "../../css/wholeReview.css";

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
      <div className="main">
        <div className="stars"></div>
        {/* this is the form to fill users */}
        <OneReview />
      </div>
    );
  }
}
