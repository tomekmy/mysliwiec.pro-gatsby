import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { ROUTES } from "utils/globals";

const MenuMobile = () => {
  return (
    <div className="absolute right-[3%] mt-3">
      <div className="absolute left-[-0.5rem] w-px h-[200px] mt-[-12px] bg-gradient-to-b from-black via-black to-white" />
      <div className="absolute right-0 w-10 [&>div]:h-1 [&>div]:my-2 [&>div]:bg-black">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className="text-2xl mt-[-5px] hover:[&>li]:text-red-700 [&>li]:w-fit [&>li]:my-1">
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
  );
};

export default MenuMobile;
