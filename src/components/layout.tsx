import React, { type ReactNode } from "react";
import Logo from "./logo";
import MenuBig from "./menuBig";
import { AnimatePresence } from "framer-motion";
import "i18n";
import Mail from "images/mail_icon_black.inline.svg";
import Facebook from "images/facebook_icon_black.inline.svg";
import LinkedIn from "images/linkedin_icon_black.inline.svg";
import GitHub from "images/github_icon_black.inline.svg";
import EnIcon from "images/en_icon_black.inline.svg";
import PlIcon from "images/pl_icon_black.inline.svg";
import MenuMobile from "./menuMobile";
import i18next from "i18next";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[3%_1fr_3%] sm:grid-cols-[6%_minmax(260px,300px)_1fr_6%] min-h-screen">
      <div className="grid grid-rows-[200px_1fr_80px]">
        <div className="justify-self-end">
          <div className="w-[40%] min-w-[260px] sm:min-w-[360px] max-w-[440px] h-px absolute top-40 left-0 bg-gradient-to-r from-black via-black to-white" />
          <div className="w-px h-[30rem] bg-gradient-to-b from-black via-black to-white" />
          <div className="hidden max-w-sm w-[35%] min-w-[230px] h-px absolute top-96 left-0 bg-gradient-to-r from-black via-black to-white" />
        </div>
        <div />
        <div className="justify-self-end">
          <div className="w-56 sm:w-80 h-px absolute left-0 bg-gradient-to-r from-black via-black to-white" />
          <div className="w-px h-64 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
        </div>
      </div>
      <div className="grid grid-rows-[190px_1fr_80px] pl-5">
        <Logo />
        <MenuMobile />
        <MenuBig />
        <main className="pt-5">
          <AnimatePresence>{children}</AnimatePresence>
        </main>
        <div className="grid grid-cols-[40px_40px_40px_40px_1fr] sm:grid-cols-[40px_40px_40px_40px] items-center hover:[&>a]:animate-buzz [&>a]:w-[25px]">
          <a href="mailto:tomek@mysliwiec.pro">
            <Mail />
          </a>
          <a href="https://www.facebook.com/mysliwiec.pro/">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/in/tomekmy/">
            <LinkedIn />
          </a>
          <a href="https://github.com/tomekmy/">
            <GitHub />
          </a>
          <button
            type="button"
            className="mr-5 justify-self-end w-[25px] hover:animate-buzz sm:hidden"
            onClick={() =>
              i18next
                .changeLanguage(i18next.language === "pl" ? "en" : "pl")
                .then(() => window.location.reload())
            }
          >
            {i18next.language === "pl" ? <EnIcon /> : <PlIcon />}
          </button>
        </div>
      </div>
      <div className="hidden grid-rows-[160px_1fr_80px]">
        <main className="pt-5 hidden">
          <AnimatePresence>{children}</AnimatePresence>
        </main>
        <div className="grid justify-end px-5">
          <button
            type="button"
            className="mr-5 justify-self-end w-[25px] hover:animate-buzz"
            onClick={() =>
              i18next
                .changeLanguage(i18next.language === "pl" ? "en" : "pl")
                .then(() => window.location.reload())
            }
          >
            {i18next.language === "pl" ? <EnIcon /> : <PlIcon />}
          </button>
        </div>
      </div>
      <div className="grid grid-rows-[200px_1fr_80px]">
        <div />
        <div />
        <div>
          <div className="w-24 sm:w-56 h-px absolute right-0 bg-gradient-to-l from-black via-black to-white" />
          <div className="w-px h-52 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
