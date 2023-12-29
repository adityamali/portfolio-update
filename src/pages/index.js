import * as React from "react";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Hero from "../components/homeSections/hero";
import Quote from "../components/homeSections/quote";
import Project from "../components/homeSections/project";

import "../styles/global.css";
import "../styles/home.css";

import Vec from "../../static/Vector.svg";
import TSBP from "../../static/tsbp.jpg";

export default function Home() {
  const duration = "duration : 0.5";

  return (
    <Layout>
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
