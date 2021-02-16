import React, { Component } from "react";
import Footer from "../footer/Footer";
import "./Article.css";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      article: {},
    };
  }

  fetching() {
    let id = this.props.match.params.articleId;
    fetch(`http://localhost:8081/api/article/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            article: result,
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
            <div className="article-container">
              <div className="article-title">
                <h2>{this.state.article.title}</h2>
              </div>
              <p className="paragraph normal-text">{this.state.article.text}</p>
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

export default Article;
