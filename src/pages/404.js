import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout.jsx";

import "../styles/404.css";
import "../styles/global.css";

function Error404() {
  return (
    <Layout>
      <div className="error404">
        <h1>404</h1>
        <p>Sorry, the page you are looking for does not exist. </p>
        <p>
          You can always go back to the homepage by clicking the button below.
        </p>
        <br />
        <Link to="/">
          <button>Go back to home</button>
        </Link>
      </div>
    </Layout>
  );
}

export default Error404;
