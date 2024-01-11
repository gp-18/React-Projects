import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import{HiCode} from 'react-icons/hi'

const HeaderSocails = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocails;
