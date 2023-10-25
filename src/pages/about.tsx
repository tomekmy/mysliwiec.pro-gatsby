import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      about
    </motion.div>
  );
};

export default About;
