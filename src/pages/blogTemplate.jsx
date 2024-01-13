import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout.jsx";

import "../styles/blog-page.css";
import "../styles/global.css";

function Blog({ data }) {
  const title = data.wpPost.title;
  const content = data.wpPost.content;
  const featuredImage = data.wpPost.featuredImage.node.sourceUrl;
  const categories = data.wpPost.categories.nodes.name;

  console.log(data.wpPost.categories.nodes.name);

  return (
    <Layout>
      <div className="blog-page">
        <div className="blog-wrapper">
          <div className="blog-header">
            <div className="super">
              <p className="where">
                <span id="special">
                  {/* {categories.map((category) => {
                    <p>{category}</p>;
                  })} */}
                </span>
              </p>
              <div className="share">
                <a href="https://www.facebook.com">fb</a>
                <a href="https://www.twitter.com">tw</a>
                <a href="https://www.linkedin.com">in</a>
                <a href="https://www.instagram.com">ig</a>
              </div>
            </div>
            <h1>
              <span id="title">{title}</span>
            </h1>
            <br />
            <div className="featured-img">
              <img src={featuredImage} id="featuredImg" />
            </div>
          </div>
          <hr />
          <div className="blog-body">
            <span dangerouslySetInnerHTML={{ __html: content }}></span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Post {
    wpPost(id: { eq: "cG9zdDox" }) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;

export default Blog;
