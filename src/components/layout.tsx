import React, { useState, type ReactNode, useEffect } from "react";
import Logo from "./logo";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";
import "i18n";
import Mail from "images/mail_icon_black.inline.svg";
import Facebook from "images/facebook_icon_black.inline.svg";
import LinkedIn from "images/linkedin_icon_black.inline.svg";
import GitHub from "images/github_icon_black.inline.svg";
import EnIcon from "images/en_icon_black.inline.svg";
import PlIcon from "images/pl_icon_black.inline.svg";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isLogoAnimationPlayed, setIsLogoAnimationPlayed] = useState(false);

  useEffect(() => {
    console.log("sdsfd");
  }, []);

  return (
    <div className="grid grid-cols-[6%_minmax(260px,300px)_1fr_6%] min-h-screen">
      <div className="grid grid-rows-[200px_1fr_80px]">
        <div className="justify-self-end">
          <div className="w-96 h-px absolute top-40 left-0 bg-gradient-to-r from-black via-black to-white" />
          <div className="w-px h-[30rem] bg-gradient-to-b from-black via-black to-white" />
          <div className="max-w-sm w-[35%] h-px absolute top-96 left-0 bg-gradient-to-r from-black via-black to-white" />
        </div>
        <div />
        <div className="justify-self-end">
          <div className="w-80 h-px absolute left-0 bg-gradient-to-r from-black via-black to-white" />
          <div className="w-px h-64 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
        </div>
      </div>
      <div className="grid grid-rows-[190px_1fr_80px] pl-5">
        <Logo />
        <Menu />
        <div className="grid grid-cols-[40px_40px_40px_40px] items-center hover:[&>a]:animate-buzz [&>a]:w-[25px]">
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
        </div>
      </div>
      <div className="grid grid-rows-[1fr_80px]">
        <main className="pt-44">
          <AnimatePresence>{children}</AnimatePresence>
        </main>
        <div className="grid justify-end px-5">
          <button type="button" className="w-[25px] hover:animate-buzz">
            <EnIcon />
          </button>
        </div>
      </div>
      <div className="grid grid-rows-[200px_1fr_80px]">
        <div />
        <div />
        <div>
          <div className="w-56 h-px absolute right-0 bg-gradient-to-l from-black via-black to-white" />
          <div className="w-px h-52 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
