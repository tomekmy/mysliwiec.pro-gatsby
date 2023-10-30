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
      className="text-3xl absolute ml-[1%] max-w-[550px]"
      key="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      <p className="pb-3">
        <Textillate
          option={{
            in: {
              effect: "bounceIn",
              delay: 30,
            },
            out: {
              effect: "hinge",
              delay: 40,
              shuffle: true,
              sync: false,
              delayScale: 7,
            },
          }}
        >
          {t("hello")}
        </Textillate>
      </p>
      <p className="pb-3">
        <Textillate
          option={{
            initialDelay: 250,
            in: {
              effect: "bounceIn",
              delay: 30,
            },
            out: {
              effect: "hinge",
              delay: 15,
              shuffle: true,
              sync: false,
              delayScale: 2,
            },
          }}
        >
          {t("iAmDeveloper")}
        </Textillate>
      </p>
      <p>
        <Textillate
          option={{
            initialDelay: 900,
            in: {
              effect: "bounceIn",
              delay: 30,
            },
            out: {
              effect: "hinge",
              delay: 15,
              shuffle: true,
              sync: false,
              delayScale: 2,
            },
          }}
        >
          {t("whatIdo")}
        </Textillate>
      </p>
    </motion.div>
  );
};

export default Main;

export const Head: HeadFC = () => <SeoHead />;
