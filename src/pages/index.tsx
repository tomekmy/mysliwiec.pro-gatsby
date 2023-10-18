import React from "react";
import { motion } from "framer-motion";

import type { HeadFC } from "gatsby";
import Layout from "components/layout";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <motion.div
        className="text-3xl"
        key="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        {t("main")}
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
