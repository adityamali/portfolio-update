import React from "react";

import TSBP from "../../../static/tsbp.jpg";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { motion } from "framer-motion";

function Project() {
  const data = useStaticQuery(graphql`
    query Projects {
      allWpProject {
        nodes {
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  const projectsData = data.allWpProject.nodes;

  console.log(projectsData);

  projectsData.forEach((project) => {
    let imageUrl = project.featuredImage.node.sourceUrl;
    console.log(imageUrl); // This will log the sourceUrl of each project's featured image
  });

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projectsWrap">
        <motion.div
          className="tsbpImg mega-project"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
        >
          <img src={TSBP} alt="The SuperBike Project" />
        </motion.div>
        <motion.div
          className="tsbpText mega-project"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
        >
          <div className="Text">
            <h2>The SuperBike Project</h2>
            <p>
              The SuperBike Project is a full stack web application that
              provides a platform for users to view, buy and sell motorcycles.
              The application is built using the MERN stack and utilizes Redux,
              React, Node, Express, MongoDB, JWT, and more.
            </p>
            <br />
            <Link to="/projects/tsbp">
              <button>Learn More</button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="project2Text mega-project"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
        >
          <div className="Text">
            <h2>The SuperBike Project</h2>
            <p>
              The SuperBike Project is a full stack web application that
              provides a platform for users to view, buy and sell motorcycles.
              The application is built using the MERN stack and utilizes Redux,
              React, Node, Express, MongoDB, JWT, and more.
            </p>
            <br />
            <Link to="/projects/tsbp">
              <button>Learn More</button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="project2Img mega-project"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
        >
          <img src={TSBP} alt="The SuperBike Project" />
        </motion.div>
        <div className="allProjects">
          {projectsData.map((project) => (
            <motion.div
              className="project"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
            >
              <div className="projectImg">
                <img
                  src={project.featuredImage.node.sourceUrl}
                  alt={project.title}
                  className="project-Img"
                />
              </div>
              <div className="project-Text">
                <h3>{project.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.excerpt }}></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
