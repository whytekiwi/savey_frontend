import React from "react";
import Button from "../common/button/button";
import { ReactComponent as AddIcon } from "../../assets/img/add.svg";
import { ReactComponent as OpenIcon } from "../../assets/img/open.svg";
import { ReactComponent as AboutIcon } from "../../assets/img/about.svg";
import { ReactComponent as Title } from "../../assets/img/title.svg";
import "./navbar.sass";

export interface INavbarProps {
  onAddClicked: () => void;
  onOpenClicked: () => void;
  onAboutClicked: () => void;
}

const Navbar: React.FC<INavbarProps> = ({
  onAddClicked,
  onOpenClicked,
  onAboutClicked,
}) => {
  return (
    <div className="navbar">
      <div>
        <div className="title">
          <Title />
        </div>
        <div className="actions">
          <Button onClick={onAddClicked}>
            <AddIcon />
          </Button>
          <Button onClick={onOpenClicked}>
            <OpenIcon />
          </Button>
          <Button onClick={onAboutClicked}>
            <AboutIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
