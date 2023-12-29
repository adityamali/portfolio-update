import React from "react";
import { useEffect } from "react";

import Header from "./Header";
// import Footer from "./Footer";
import AnimatedCursor from "react-animated-cursor";

import "../styles/layout.css";

var drawRipple = (ev) => {
  var x = ev.clientX;
  var y = ev.clientY;
  var node = document.querySelector(".ripple");
  var newNode = node.cloneNode(true);
  newNode.classList.add("animate");
  newNode.style.left = ev.clientX - 5 + "px";
  newNode.style.top = ev.clientY - 5 + "px";
  node.parentNode.replaceChild(newNode, node);
};

function Layout({ children }) {
  useEffect(() => {
    const ripple = document.querySelector(".ripple");
    window.addEventListener("click", drawRipple);
  }, []);

  return (
    <div className="layout">
      <Header />
      {children}
      {/* <Footer /> */}
      <AnimatedCursor
        innerSize={10}
        outerSize={40}
        color="223, 132, 255"
        outerAlpha={0.2}
        innerScale={0.6}
        outerScale={0.2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".card",
          "#light-off",
        ]}
      />
      <div className="ripple"></div>
    </div>
  );
}

export default Layout;
