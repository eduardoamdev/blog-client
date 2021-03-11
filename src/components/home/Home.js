import React, { Component } from "react";
import Footer from "../footer/Footer";
import "./Home.css";

class Home extends Component {
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
            return element.type === "title";
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
          <div className="title-container">
            <h1 className="main-title">{this.state.info.text}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
