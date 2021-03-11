import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Project.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      project: {},
    };
  }

  fetching() {
    let id = this.props.match.params.projectId;
    fetch(`https://eblog-api.herokuapp.com/api/project/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            project: result,
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

  componentDidMount() {
    this.fetching();
  }

  componentDidUpdate() {
    this.fetching();
  }

  render() {
    return (
      <div className="assistant-container">
        <div className="main-container">
          <div className="info-container">
            <div className="project-container">
              <div className="title-link">
                <a href={this.state.project.link}>
                  {this.state.project.link}
                </a>
              </div>
              <p className="paragraph normal-text">
                {this.state.project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
