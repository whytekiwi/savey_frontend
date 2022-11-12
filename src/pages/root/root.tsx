import React from "react";
import Icon from "../../components/common/icon/icon";
import { IconSource } from "../../components/common/icon/iconSource";
import { Link, Outlet } from "react-router-dom";
import "./root.sass";

const Root = () => (
  <>
    <div className="navbar">
      <div>
        <Link to={`home`}>Home</Link>
        <Link to={`about`}>About</Link>
      </div>
      <div>
        <Icon source={IconSource.Facebook} />
      </div>
    </div>
    <div className="body">
      <Outlet />
    </div>
  </>
);

export default Root;
