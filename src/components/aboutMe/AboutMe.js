import React, { Component } from "react";
import bluePhoto from "../../images/blue-photo.jpg";
import Footer from "../footer/Footer";
import "./AboutMe.css";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      info: [],
    };
  }

  componentDidMount() {
    fetch("https://eblog-api.herokuapp.com/api/personal")
      .then((res) => res.json())
      .then(
        (result) => {
          let filteredResult = result.filter((element) => {
            return element.type === "presentation";
          });
          let personalInfo = filteredResult[0];
          this.setState({
            isLoaded: true,
            info: personalInfo,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div className="assistant-container">
        <div className="main-container">
          <div className="info-container">
            <div className="about-me-container">
              <img src={bluePhoto} alt="foto" />
              <p className="paragraph normal-text">{this.state.info.text}</p>
            </div>
          </div>
          <div className="dark-blue">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
