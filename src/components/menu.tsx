import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const ROUTES = [
  {
    name: "START",
    route: "/",
  },
  {
    name: "O MNIE",
    route: "/about",
  },
  {
    name: "PORTFOLIO",
    route: "/portfolio",
  },
  {
    name: "KONTAKT",
    route: "/contact",
  },
];

const Menu = () => {
  return (
    <ul className="text-2xl hover:[&>li]:text-red-700 [&>li]:w-fit [&>li]:my-1.5">
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

export default Menu;
