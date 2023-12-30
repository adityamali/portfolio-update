import React from "react";
import { Link } from "gatsby";
import { useState } from "react";

import "../styles/global.css";

import logo from "../../static/logo.png";

export default function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  //   const openNavStyle = { cursor: "pointer" };

  //   const openNav = () => {
  //     document.getElementById("myNav").style.width = "100%";
  //   };

  //   const closeNav = () => {
  //     document.getElementById("myNav").style.width = "0%";
  //   };

  return (
    <div className={colorChange ? "header-logo colorChange" : "header-logo"}>
      {/* <div id="myNav" class="overlay"1>
        <a
          href="javascript:void(0)"
          class="closebtn"
          onClick={() => {
            closeNav();
          }}
        >
          &times;
        </a>
        <div class="overlay-content">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resume">Resume</Link>
        </div>
        <div className="social">
          <a href="https://github.com/adityamali">Github</a>
          <a href="http://dribbble.com">Dribbble</a>
          <a href="http://linkedin.com">LinkedIn</a>
        </div>
      </div> */}
      <Link to="/">
        <img src={logo} className="logo-img" alt="" />
      </Link>
      {/* <span
        className="open-nav"
        style={openNavStyle}
        role="button"
        tabIndex={0}
        onClick={() => {
          openNav();
        }}
      >
        &#9776;
      </span> */}
    </div>
  );
}
