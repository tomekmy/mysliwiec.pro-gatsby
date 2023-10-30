import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_DURATION } from "utils/globals";
import SeoHead from "components/seo";
import { HeadFC } from "gatsby";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="absolute"
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      {t("introText")}
    </motion.div>
  );
};

export default About;

export const Head: HeadFC = () => <SeoHead prefix="O mnie" />;
