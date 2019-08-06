import React from "react";
import "./App.scss";
import Nav from "./Nav.js";
import About from "./About.js";
import Project from "./Project.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const projectData = {
  sproutBud: {
    name: "Sprout Bud",
    desc: "Keep track of your plants and have a happier harvest.",
    tech: "React, Node/Express, Firebase",
    liveUrl: "https://bud-app-237e9.firebaseapp.com/",
    gitHubUrl: "https://github.com/dttheme/bud-app",
    image: "./images/sprout_bud.png"
  },
  moodRing: {
    name: "MoodRing",
    desc: "Part survey, part journal, part mirror.",
    tech: "JQuery, HTML, CSS, Node/Express, MongoDB, JWT, Mocha & Chai",
    liveUrl: "https://vast-everglades-57515.herokuapp.com/",
    gitHubUrl: "https://github.com/dttheme/MoodRing",
    image: "./images/moodring_1.png"
  },
  rumblr: {
    name: "Rumblr",
    desc: "Earthquake tracking and information sharing.",
    tech: "JQuery, HTML, CSS & WebGL Earth API",
    liveUrl: "https://www.dyannaturner.com/Rumblr/",
    gitHubUrl: "https://github.com/dttheme/Rumblr",
    image: "./images/rumblr_1.png"
  }
};

const Header = () => {
  return (
    <header className="app__header">
      <h1>Dyanna Turner</h1>

      <Nav />
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__routes">
          <Route path="/" exact component={About} />
          <Route
            path="/sproutbud"
            component={() => <Project {...projectData.sproutBud} />}
          />
          <Route
            path="/moodring"
            component={() => <Project {...projectData.moodRing} />}
          />
          <Route
            path="/rumblr"
            component={() => <Project {...projectData.rumblr} />}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
