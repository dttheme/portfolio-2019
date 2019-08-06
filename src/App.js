import React from "react";
import "./App.css";
import Nav from "./Nav.js";
import About from "./About.js";
import Project from "./Project.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <h1>Dyanna Turner</h1>
          <img
            src="images/dyanna_550.jpg"
            className="myFace"
            alt="dyannaturner"
          />
          <Nav />
        </header>
        <Route path="/" exact component={About} />
        <Route
          path="/sproutbud"
          router={() => (
            <Project
              liveUrl={"https://bud-app-237e9.firebaseapp.com/"}
              gitHubUrl={"https://github.com/dttheme/bud-app"}
              name={"Sprout Bud"}
            />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
