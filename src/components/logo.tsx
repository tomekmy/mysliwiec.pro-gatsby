import React from "react";
import { Link } from "gatsby";
import { Textillate } from "textillate-react";

const Logo = () => {
  return (
    <div className="pt-3">
      <h1 className="text-5xl group">
        <Link to="/">
          <span className="group-hover:text-red-700">T</span>omasz{" "}
          <span className="group-hover:text-red-700">M</span>yśliwiec
        </Link>
      </h1>
      <h2 className="text-lg pt-2">
        <Textillate
          option={{
            in: { effect: "fadeInLeftBig" },
          }}
        >
          Front-End Developer
        </Textillate>
      </h2>
    </div>
  );
};

export default Logo;
