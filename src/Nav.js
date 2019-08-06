import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <h2> Projects!</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/sproutbud">Sprout Bud</Link>
          </li>
          <li>
            <Link to="/about">Rumblr</Link>
          </li>
          <li>
            <Link to="/about">MoodRing</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
