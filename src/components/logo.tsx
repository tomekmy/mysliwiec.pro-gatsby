import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import { Textillate } from "textillate-react";
import { useLocation } from "@reach/router";
import { ThemeContext } from "context";

const Logo = () => {
  const location = useLocation();
  const ctx = useContext(ThemeContext);

  console.log("ctx", ctx);

  console.log(location);
  return (
    <div className="pt-3">
      <h1 className="text-5xl group">
        <Link to="/">
          <span className="group-hover:text-red-700">T</span>omasz{" "}
          <span className="group-hover:text-red-700">M</span>yśliwiec
        </Link>
      </h1>
      <h2 className="text-lg pt-2">
        {ctx.isLogoPlayed ? (
          <div>Front-End Developer</div>
        ) : (
          <Textillate
            option={{
              in: { effect: "fadeInLeftBig" },
              callback: () => {
                ctx.setIsLogoPlayed(true);
              },
            }}
          >
            Front-End Developer
          </Textillate>
        )}
      </h2>
    </div>
  );
};

export default Logo;
