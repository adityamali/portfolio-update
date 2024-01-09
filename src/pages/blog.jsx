import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout.jsx";

import "../styles/blog-home.css";
import "../styles/global.css";

function Blogs({
  data: {
    allWpPost: { nodes: projectsData },
  },
}) {
  console.log(projectsData);
  return (
    <Layout>
      <div className="blogs">
        <div className="h-wrap">
          <h1>Blogs</h1>
        </div>
        <div className="allPosts">
          {projectsData.map((project) => (
            <div className="post">
              <div className="postImg">
                <img
                  src={project.featuredImage.node.sourceUrl}
                  alt={project.title}
                  className="post-Img"
                />
              </div>
              <div className="post-Text">
                <h3>{project.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.excerpt }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query AllPosts {
    allWpPost {
      nodes {
        title
        id
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default Blogs;
