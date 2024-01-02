import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

import pfp from "../../../static/pfp.jpeg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          Hey, <br /> This is <br /> Aditya
        </h1>
        <img src={pfp} id="profile" alt="gif" />
      </div>
      <div className="hero2" style={{ fontSize: "3.5em" }}>
        <motion.h2
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Building Brands <br /> And Technologies
        </motion.h2>
      </div>
    </div>
  );
}

export default Hero;
