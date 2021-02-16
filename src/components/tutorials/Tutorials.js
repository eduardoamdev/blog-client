import React, { Component } from "react";
import YouTube from "react-youtube";
import youtubeLogo from "../../images/youtube-logo.png";
import core from "../../images/core.jpg";
import Footer from "../footer/Footer";
import "./Tutorials.css";

class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tutorials: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/api/tutorials")
      .then((res) => res.json())
      .then(
        (result) => {
          let videos = result;
          this.setState({
            isLoaded: true,
            tutorials: videos,
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
    const opts = {
      height: "390",
      width: "640",
    };
    return (
      <div className="assistant-container">
        <div className="main-container">
          <div className="info-container">
            <div className="pink-div">
              <img src={core} alt="procesador" id="core-image" />
              <img src={youtubeLogo} alt="logo de youtube" id="youtube-image" />
            </div>
            <div className="tutorials-container">
              {this.state.tutorials.map((element) => {
                return (
                  <YouTube
                    videoId={element.link}
                    key={element._id}
                    opts={opts}
                    className="video-element"
                  />
                );
              })}
            </div>
          </div>
          <div className="normal-footer dark-blue">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorials;
