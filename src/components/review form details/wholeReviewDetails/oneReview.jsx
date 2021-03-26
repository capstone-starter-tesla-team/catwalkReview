import React from "react";
import Star from "./star.jsx";
import "../../../css/oneReview.css";

export default class NameOfTheService extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      test: "",
    };
    this.countCharacters = this.countCharacters.bind(this);
  }

  countCharacters(e) {
    var input = e.target.value;
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
    console.log(input);
  }

  renderView() {
    if (this.state.counter < 50) {
      return this.state.counter;
    } else {
      return "Minimum reached";
    }
  }

  render() {
    return (
      <div className="oneReview">
        <form>
          <label>
            <input className="name" placeholder="SEMER BEN SALEM" maxLength="60" type="text" name="name" />
            <h4 className="name">For privacy reasons, do not use your full name or email address</h4>
          </label>
          <label>
            <input className="summary" placeholder="You summary goes here" maxLength="60" type="text" name="name" />
          </label>
          <label>
            <input
              className="reviewText"
              onChange={this.countCharacters}
              placeholder="Your review goes here"
              minLength="50"
              maxLength="10000"
              type="text"
              name="name"
            />
          </label>
          <p> counter : {this.renderView()} </p>
          <div>
            <label>
              <h5>link image</h5>
              <input className="userImageInput" type="text" />
            </label>
            <label>
              <h5>link image</h5>
              <input className="userImageInput" type="text" />
            </label>
            <label>
              <h5>link image</h5>
              <input className="userImageInput" type="text" />
            </label>
            <label>
              <h5>link image</h5>
              <input className="userImageInput" type="text" />
            </label>
            <label>
              <h5>link image</h5>
              <input className="userImageInput" type="text" />
            </label>
          </div>
          <Star />
          <div>
            <h4 className="recom">Do you recommend our product?</h4>
            <input className="checbox" type="checkbox" />
          </div>
        </form>
        <div className="table" sname>
          <div className="radio">
            {" "}
            <h3>Size</h3> <input type="radio" name="size" />
            <label>A size too small</label>
            <input type="radio" name="size" />
            <label>1/2 A size too small</label>
            <input type="radio" name="size" />
            <label>Perfect</label>
            <input type="radio" name="size" />
            <label>1/2 too big</label>
            <input type="radio" name="size" />
            <label>too big</label>
            <br></br>
          </div>

          <div className="radio">
            {" "}
            <h3>Widh</h3> <input type="radio" name="widh" />
            <label>Too narrow</label>
            <input type="radio" name="widh" />
            <label>Slightly narrow</label>
            <input type="radio" name="widh" />
            <label>Perfect</label>
            <input type="radio" name="widh" />
            <label>Slightly wide</label>
            <input type="radio" name="widh" />
            <label>Too wide</label>
            <br></br>
          </div>

          <div className="radio">
            {" "}
            <h3>Comfort</h3> <input type="radio" name="Comfort" />
            <label>Uncomfortable</label>
            <input type="radio" name="Comfort" />
            <label>Slightly uncomfortable</label>
            <input type="radio" name="Comfort" />
            <label>Ok</label>
            <input type="radio" name="Comfort" />
            <label>Comfortable</label>
            <input type="radio" name="Comfort" />
            <label>Perfect</label>
            <br></br>
          </div>

          <div className="radio">
            {" "}
            <h3>Quality</h3> <input type="radio" name="Quality" />
            <label>Poor</label>
            <input type="radio" name="Quality" />
            <label>Below average</label>
            <input type="radio" name="Quality" />
            <label>What I expected</label>
            <input type="radio" name="Quality" />
            <label>Pretty great</label>
            <input type="radio" name="Quality" />
            <label>Perfect</label>
            <br></br>
          </div>

          <div className="radio">
            {" "}
            <h3>Length</h3> <input type="radio" name="Length" />
            <label>Runs Short</label>
            <input type="radio" name="Length" />
            <label>Runs slightly short</label>
            <input type="radio" name="Length" />
            <label>Perfect</label>
            <input type="radio" name="Length" />
            <label>Runs slightly long</label>
            <input type="radio" name="Length" />
            <label>Runs long</label>
            <br></br>
          </div>

          <div className="radio">
            {" "}
            <h3>Fit</h3> <input type="radio" name="Fit" />
            <label>Runs Short</label>
            <input type="radio" name="Fit" />
            <label>Runs slightly short</label>
            <input type="radio" name="Fit" />
            <label>Perfect</label>
            <input type="radio" name="Fit" />
            <label>Runs slightly long</label>
            <input type="radio" name="Fit" />
            <label>Runs long</label>
            <br></br>
          </div>
        </div>
        <button>Sumbit</button>
      </div>
    );
  }
}
