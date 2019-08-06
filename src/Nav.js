import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="app__nav">
      <h2> Projects:</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/sproutbud">Sprout Bud</Link>
          </li>
          <li>
            <Link to="/moodring">MoodRing</Link>
          </li>
          <li>
            <Link to="/rumblr">Rumblr</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
