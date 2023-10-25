import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      Contact
    </motion.div>
  );
};

export default Contact;
