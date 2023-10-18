import React, { type ReactNode } from "react";
import Logo from "./logo";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";
import "i18n";
// import mail from "@/assets/mail_icon_black.svg";
// import facebook from "@/assets/facebook_icon_black.svg";
// import linkedIn from "@/assets/linkedin_icon_black.svg";
// import gitHub from "@/assets/github_icon_black.svg";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[6%_300px_1fr_6%] min-h-screen">
      <div className="grid grid-rows-[200px_1fr_80px]">
        <div className="justify-self-end">
          <div className="w-96 h-px absolute top-40 left-0 bg-gradient-to-r from-black via-black to-white" />
          <div className="w-px h-[30rem] bg-gradient-to-b from-black via-black to-white" />
          <div className="w-96 h-px absolute top-96 left-0 bg-gradient-to-r from-black via-black to-white" />
        </div>
        <div />
        <div className="justify-self-end">
          <div className="w-96 h-px absolute left-0 bg-gradient-to-r from-black via-black to-white" />
          <div className="w-px h-64 absolute bottom-0 bg-gradient-to-t from-black via-black to-white" />
        </div>
      </div>
      <div className="grid grid-rows-[190px_1fr_80px] pl-5">
        <Logo />
        <Menu />
        <div className="grid grid-cols-[40px_40px_40px_40px] items-center hover:[&>a]:animate-buzz [&>a]:w-[25px]">
          {/* <a href="mailto:tomek@mysliwiec.pro">
            <Image src={mail} alt="E-mail" width={25} height={25} />
          </a>
          <a href="https://www.facebook.com/mysliwiec.pro/">
            <Image src={facebook} alt="Facebook" width={25} height={25} />
          </a>
          <a href="https://www.linkedin.com/in/tomekmy/">
            <Image src={linkedIn} alt="LinkedIn" width={25} height={25} />
          </a>
          <a href="https://github.com/tomekmy/">
            <Image src={gitHub} alt="GitHub" width={25} height={25} />
          </a> */}
        </div>
      </div>
      <div className="grid grid-rows-[1fr_80px]">
        <main className="pt-44">
          <AnimatePresence>{children}</AnimatePresence>
        </main>
        <div className="text-right">language</div>
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
