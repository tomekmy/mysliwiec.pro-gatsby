import React from "react";
import { motion } from "framer-motion";
import { Textillate } from "textillate-react";

import type { HeadFC } from "gatsby";
import { useTranslation } from "react-i18next";
import { ANIMATION_DURATION } from "utils/globals";
import SeoHead from "components/seo";

const Main = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="text-3xl absolute ml-[10%]"
      key="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      {t("main")}
    </motion.div>
  );
};

export default Main;

export const Head: HeadFC = () => <SeoHead />;
