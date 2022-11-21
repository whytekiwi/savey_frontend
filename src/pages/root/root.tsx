import React from "react";
import Icon from "../../components/common/icon/icon";
import { IconSource } from "../../components/common/icon/iconSource";
import { Link, Outlet } from "react-router-dom";
import "./root.sass";
import { useStores } from "../../stores/rootStore";
import Button from "../../components/common/button/button";
import { observer } from "mobx-react";

const Root = () => {
  const { uiStore } = useStores();

  return (
    <>
      {uiStore.notLibby ? (
        <>
          <div className="navbar">
            <div>
              <Link to={``}>Home</Link>
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
      ) : (
        <>
          <div>Please confirm you ain't Libby</div>
          <Button onClick={() => (uiStore.notLibby = true)}>
            I ain't Libby
          </Button>
        </>
      )}
    </>
  );
};

export default observer(Root);
