import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_DURATION } from "utils/globals";
import SeoHead from "components/seo";
import { HeadFC } from "gatsby";

const About = () => {
  return (
    <motion.div
      className="absolute"
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      about
    </motion.div>
  );
};

export default About;

export const Head: HeadFC = () => <SeoHead />;
