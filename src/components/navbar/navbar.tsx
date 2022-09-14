import React from "react";
import Icon from "../common/icon/icon";
import { IconSource } from "../common/icon/iconSource";
import "./navbar.sass";

export interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = ({}) => {
  return (
    <div className="navbar">
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#news">News</a>
      </div>
      <div>
        <Icon source={IconSource.Facebook} />
      </div>
    </div>
  );
};

export default Navbar;
