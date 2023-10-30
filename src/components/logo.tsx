import React from "react";
import { Link } from "gatsby";
import { Textillate } from "textillate-react";

const Logo = () => {
  return (
    <div className="pt-3">
      <h1 className="text-4xl group sm:text-5xl">
        <Link to="/">
          <div>
            <span className="group-hover:text-red-700">T</span>omasz{" "}
          </div>
          <div>
            <span className="group-hover:text-red-700">M</span>yśliwiec
          </div>
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
