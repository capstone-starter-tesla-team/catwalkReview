import React from "react";
import "../../../css/star.css";

export default class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 1,
      // imageUrl: "https://www.linkpicture.com/q/star_8.png",
      // color: "Yellow",
    };
    // this.renderView = this.renderView.bind(this);
  }
  // // swape color of stars depends on hover and click
  // changeColor(id) {
  //   const color = this.state.color;
  //   if (color === "Yellow") {
  //     this.setState({
  //       imageUrl: "https://linkpicture.com/q/star_7.png",
  //       color: "Black",
  //     });
  //   } else {
  //     this.setState({
  //       imageUrl: "https://linkpicture.com/q/star_8.png",
  //       color: "Yellow",
  //     });
  //   }
  // }

  // ratinf stars npm and material ui star doesnt work, i m trying to hard code it
  renderView(id) {
    console.log("id", id);
    if (id === 1) {
      return (
        <div>
          <img onClick={() => this.renderView(this.setState({ i: 1 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 2 }))} id="1" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 3 }))} id="2" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 4 }))} id="3" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 5 }))} id="4" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          {console.log("inside id1")}
        </div>
      );
    } else if (id === 2) {
      return (
        <div>
          <img onClick={() => this.renderView(this.setState({ i: 1 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 2 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 3 }))} id="2" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 4 }))} id="3" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 5 }))} id="4" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          {console.log("inside id2")}
        </div>
      );
    } else if (id === 3) {
      return (
        <div>
          <img onClick={() => this.renderView(this.setState({ i: 1 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 2 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 3 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 4 }))} id="3" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 5 }))} id="4" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          {console.log("inside id3")}
        </div>
      );
    } else if (id === 4) {
      return (
        <div>
          <img onClick={() => this.renderView(this.setState({ i: 1 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 2 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 3 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 4 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 5 }))} id="4" src="https://www.linkpicture.com/q/star_8.png" alt="alt" />
          {console.log("inside id4")}
        </div>
      );
    } else if (id === 5) {
      return (
        <div>
          <img onClick={() => this.renderView(this.setState({ i: 1 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 2 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 3 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 4 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 5 }))} id="1" src="https://linkpicture.com/q/star_7.png" alt="alt" />
          {console.log("inside id5")}
        </div>
      );
    } else {
      return (
        <div>
          <img onClick={() => this.renderView(this.setState({ i: 1 }))} id="1" src="https://linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 2 }))} id="1" src="https://linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 3 }))} id="1" src="https://linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 4 }))} id="1" src="https://linkpicture.com/q/star_8.png" alt="alt" />
          <img onClick={() => this.renderView(this.setState({ i: 5 }))} id="1" src="https://linkpicture.com/q/star_8.png" alt="alt" />
          {console.log("inside main div")}{" "}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="star">
        {" "}
        <h4>Rate us</h4>
        {this.renderView(this.state.i)}
      </div>
    );
  }
}
