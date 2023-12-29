import { Link } from "gatsby";
import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <nav>
      <div className="nav">
        <motion.div
          className="links"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resume">Resume</Link>
          <a href="https://github.com/adityamali">Github</a>
          <a href="http://dribbble.com">Dribbble</a>
        </motion.div>
      </div>
    </nav>
  );
}
