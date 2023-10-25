import React from "react";
import { motion } from "framer-motion";
import { Textillate } from "textillate-react";

import type { HeadFC } from "gatsby";
import Layout from "components/layout";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <motion.div
        className="text-3xl ml-[17%] w-[32rem]"
        key="main"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
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
            Witaj.
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
            Jestem Front-End Developerem.
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
            Zajmuję się kodowaniem stron i aplikacji internetowych.
          </Textillate>
        </p>
      </motion.div>
    </Layout>
  );
};

export default Main;

export const Head: HeadFC = () => (
  <>
    <title>Tomasz Myśliwiec - Front-end Developer</title>
    <meta
      name="description"
      content="Nazywam się Tomasz Myśliwiec i jestem Front-end Developerem. Zajmuję kodowaniem stron i aplikacji internetowych."
    />
  </>
);
