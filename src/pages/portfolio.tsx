import React from "react";
import { motion } from "framer-motion";
import Layout from "components/layout";

const Portfolio = () => {
  return (
    <Layout>
      <motion.div
        key="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        portfolio
      </motion.div>
    </Layout>
  );
};

export default Portfolio;
