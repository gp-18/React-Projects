import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assests/snapchat.png";
import HeaderSocails from "./HeaderSocails";
import { TypeAnimation } from "react-type-animation";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Parth Gupta</h1>
        <TypeAnimation
          sequence={[
            "A Student",
            2000,
            "A Designer",
            2000,
            "A Developer",
            2000,
            "A Programmer",
            2000,
            "A Coder",
            2000,
          ]}
          speed={50}
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "25px",
            display: "inline-block",
            color: "rgba(255,255,255,0.6)",
          }}
        />
        <CTA />
        <HeaderSocails />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
