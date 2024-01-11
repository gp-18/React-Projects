import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">
        PARTH GUPTA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#top" rel="noreferrer">
            {" "}
            parthgupta1803@gmail.com
          </a>
        </li>

        <li>
          <a href="#top" rel="noreferrer">
            {" "}
            Home
          </a>
        </li>
        <li>
          <a href="#about" rel="noreferrer">
            About
          </a>
        </li>
        <li>
          <a href="#experience" rel="noreferrer">
            Experience
          </a>
        </li>
        <li>
          <a href="#services" rel="noreferrer">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" rel="noreferrer">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="mailto:parthgupta1803@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail />
        </a>

        <a
          href="https://www.linkedin.com/in/parth-gupta-1a9ba2184/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>

        <a href="https://github.com/gp-18" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>

        <a
          href="https://auth.geeksforgeeks.org/user/parthgupta1803/practice"
          target="_blank"
          rel="noreferrer"
        >
          <HiCode />
        </a>

        <a
          href="https://www.instagram.com/yaar.parthh/?next=%2F"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; PARTH GUPTA-18. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
