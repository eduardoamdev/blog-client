import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import AboutMe from "./components/aboutMe/AboutMe";
import Article from "./components/article/Article";
import Tutorials from "./components/tutorials/Tutorials";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Home></Home>;
              }}
            />
            <Route
              exact
              path="/aboutMe"
              render={() => {
                return <AboutMe></AboutMe>;
              }}
            />
            <Route exact path="/article/:articleId" component={Article} />
            <Route
              exact
              path="/tutorials"
              render={() => {
                return <Tutorials></Tutorials>;
              }}
            />
            <Route exact path="/project/:projectId" component={Project} />
            <Route
              exact
              path="/contact"
              render={() => {
                return <Contact></Contact>;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
