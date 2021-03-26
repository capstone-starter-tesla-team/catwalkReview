import React from "react";

export default class OneReviewDisplay extends React.Component {
  render() {
    return (
      <div>
        <p>username+date</p>
        <p>review title</p>
        <p>review</p>
        <p>
          Helpfull?{" "}
          <a href="fb.com/semer1994">
            yes <span>(number of yes)</span> |
          </a>
          <a href="fb.com/semer1994">Report</a>
        </p>
      </div>
    );
  }
}
