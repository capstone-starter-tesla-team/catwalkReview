import React from "react";
import "../../../css/userFormReview.css";

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
        <h1>user form review</h1>
      </div>
    );
  }
}
