import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { ROUTES } from "utils/globals";

const MenuBig = () => {
  return (
    <ul className="text-2xl hover:[&>li]:text-red-700 [&>li]:w-fit [&>li]:my-1.5 hidden sm:block">
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
  );
};

export default MenuBig;
