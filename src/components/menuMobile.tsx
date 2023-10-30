import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { ROUTES } from "utils/globals";

const MenuMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`sm:hidden transition-all absolute right-[146px] w-px ${
          showMenu ? "top-0" : "top-[-200px]"
        } h-[200px] mt-[-12px] bg-gradient-to-b from-black via-black to-white`}
      />
      <div className="absolute right-[2%] mt-3 sm:hidden overflow-hidden px-2">
        <div
          className="absolute right-0 w-10 [&>div]:h-1 [&>div]:my-[0.6rem] [&>div]:bg-black z-50 mr-1"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div
            className={`transition-all origin-right ${
              showMenu ? "rotate-[-45deg]" : "rotate-0"
            }`}
          ></div>
          <div
            className={`transition-all ${
              showMenu ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`transition-all origin-right ${
              showMenu ? "rotate-[45deg]" : "rotate-0"
            }`}
          ></div>
        </div>
        <ul
          className={`transition-all ${
            showMenu ? "right-0" : "right-[-160px]"
          } relative text-2xl mt-[-5px] hover:[&>li]:text-red-700 [&>li]:w-fit [&>li]:my-1`}
        >
          {ROUTES.map((link) => (
            <motion.li
              key={link.route}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 5 }}
            >
              <Link activeClassName="text-red-700" to={link.route}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuMobile;
