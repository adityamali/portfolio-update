import { Link } from "gatsby";
import React from "react";
import { motion } from "framer-motion";

import Resume from "../../static/Resume.pdf";

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
          <Link to="/#projects">Projects</Link>
          <Link to="/blogTemplate">Blog</Link>
          {/* <a href="localhost:8001/">Blog</a> */}
          <a href={Resume}>Resume</a>
          <a href="https://github.com/adityamali">Github</a>
          <a href="https://dribbble.com/theadityamali">Dribbble</a>
          <a href="https://www.linkedin.com/in/adityamali/">LinkedIn</a>
          <Link to="/work" id="work">
            Work With Me
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
