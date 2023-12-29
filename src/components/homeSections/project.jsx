import React from "react";

import TSBP from "../../../static/tsbp.jpg";
import { graphql } from "gatsby";

function Project() {
  const projects = [
    {
      name: "project1",
      img: TSBP,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores aut illum dolor vel, consequuntur cupiditate quisquam dignissimos molestias vero numquam?",
    },
    {
      name: "project2",
      img: TSBP,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores aut illum dolor vel, consequuntur cupiditate quisquam dignissimos molestias vero numquam?",
    },
    {
      name: "project3",
      img: TSBP,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores aut illum dolor vel, consequuntur cupiditate quisquam dignissimos molestias vero numquam?",
    },
    {
      name: "project4",
      img: TSBP,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores aut illum dolor vel, consequuntur cupiditate quisquam dignissimos molestias vero numquam?",
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projectsWrap">
        <div className="tsbpImg mega-project">
          <img src={TSBP} alt="The SuperBike Project" />
        </div>
        <div className="tsbpText mega-project">
          <div className="Text">
            <h2>The SuperBike Project</h2>
            <p>
              The SuperBike Project is a full stack web application that
              provides a platform for users to view, buy and sell motorcycles.
              The application is built using the MERN stack and utilizes Redux,
              React, Node, Express, MongoDB, JWT, and more.
            </p>
          </div>
        </div>
        <div className="project2Text mega-project">
          <div className="Text">
            <h2>The SuperBike Project</h2>
            <p>
              The SuperBike Project is a full stack web application that
              provides a platform for users to view, buy and sell motorcycles.
              The application is built using the MERN stack and utilizes Redux,
              React, Node, Express, MongoDB, JWT, and more.
            </p>
          </div>
        </div>
        <div className="project2Img mega-project">
          <img src={TSBP} alt="The SuperBike Project" />
        </div>
        <div className="allProjects">
          {projects.map((project) => (
            <div className="project">
              <div className="projectImg">
                <img
                  src={project.img}
                  alt={project.name}
                  className="project-Img"
                />
              </div>
              <div className="project-Text">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
