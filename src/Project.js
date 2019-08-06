import React from "react";
import "./Project.scss";

const Project = ({ liveUrl, gitHubUrl, name, image, desc, tech }) => {
  return (
    <div
      className="project"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="project__cover" />
      {/* <img src={image} alt={name} className="project__image" /> */}
      <div className="project__copy">
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>
          <b>Tech:</b> <i>{tech}</i>
        </p>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          Live Site
        </a>
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </div>
  );
};
export default Project;
