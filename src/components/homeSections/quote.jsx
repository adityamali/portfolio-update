import React from "react";
import { motion } from "framer-motion";

function Quote() {
  return (
    <motion.div
      className="quote"
      initial={{ backgroundColor: "#FFF9F4" }}
      animate={{ backgroundColor: "#0E0E2C" }}
      // exit={{ backgroundColor: "#FFF9F4" }}
      transition={{ duration: 3 }}
    >
      <motion.h2
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 100 }}
        transition={{ duration: 2 }}
      >
        "I'm a full stack developer and a designer who loves to build brands and
        technologies"
      </motion.h2>
    </motion.div>
  );
}

export default Quote;
