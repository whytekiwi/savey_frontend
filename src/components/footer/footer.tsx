import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/whytekiwi.svg";
import "./footer.sass";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Link to="privacy">Privacy Policy</Link>
        <Link to="about">About</Link>
      </div>
      <div>
        <span>Copyright 2022 WhyteKiwi</span>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
