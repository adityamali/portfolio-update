import * as React from "react";
import { motion } from "framer-motion";

import Layout from "../components/Layout.jsx";
import Nav from "../components/Nav.jsx";
import Hero from "../components/homeSections/hero.jsx";
import Quote from "../components/homeSections/quote.jsx";
import Project from "../components/homeSections/project.jsx";

import "../styles/global.css";
import "../styles/home.css";

import Vec from "../../static/Vector.svg";
// import TSBP from "../../static/tsbp.jpg";

export default function Home() {
  const duration = "duration : 0.5";

  return (
    <Layout>
      <svg xmlns="http://www.w3.org/2000/svg" width="152" height="95" viewBox="0 0 152 95" fill="none" id="vect1">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M-24.3619 20.6887C-20.8952 0.698751 -1.10124 -12.4907 14.9557 -27.5937C30.4072 -42.1273 43.4938 -59.5394 65.7381 -64.0588C91.0858 -69.2087 122.339 -69.3532 139.056 -52.8072C155.227 -36.8015 138.132 -12.4784 139.382 8.83175C140.603 29.6314 160.56 51.4247 146.181 68.5861C131.602 85.9859 101.049 80.5984 76.4547 83.9376C48.3493 87.7536 17.2914 103.319 -5.29068 89.152C-28.2027 74.7778 -28.5813 45.019 -24.3619 20.6887Z" fill="#F0F0F0" />
      </svg>
      <motion.img
        src={Vec}
        alt=""
        className="vectorDesign"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <main>
        <Hero />
        <Nav />
        <Quote />
        <Project />
      </main>
    </Layout>
  );
}

