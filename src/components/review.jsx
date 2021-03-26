import React, { Component } from "react";
import "../css/review.css";
// import WholeReview from "./review form details/wholeReviewForm.jsx";
import WholeReviewDisplay from "./review display details/wholeReviewDisplay.jsx";
import axios from "axios";

class App extends Component {
  // componentDidMount() {
  //   const token = "bd2fc03b4175ad5e44fd58e8bfd887910082a987";
  //   axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews", {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-type": "Application/json",
  //       " Authorization": token,
  //     },
  //   });
  // }

  render() {
    return (
      <div>
        <WholeReviewDisplay />{" "}
      </div>
    );
  }
}
export default App;
