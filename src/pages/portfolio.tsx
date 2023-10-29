import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_DURATION } from "utils/globals";
import SeoHead from "components/seo";
import { HeadFC } from "gatsby";

const Portfolio = () => {
  return (
    <motion.div
      key="portfolio"
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      portfolio
    </motion.div>
  );
};

export default Portfolio;

export const Head: HeadFC = () => <SeoHead prefix="Portfolio" />;
