import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_DURATION } from "utils/globals";
import SeoHead from "components/seo";
import { HeadFC } from "gatsby";

const Contact = () => {
  return (
    <motion.div
      key="contact"
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      Contact
    </motion.div>
  );
};

export default Contact;

export const Head: HeadFC = () => <SeoHead />;
