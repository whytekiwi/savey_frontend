import React from "react";
import { Outlet } from "react-router-dom";
import "./root.sass";
import { useStores } from "../../stores/rootStore";
import Button from "../../components/common/button/button";
import { observer } from "mobx-react";

const Root = () => {
  const { uiStore } = useStores();

  return (
    <>
      {uiStore.notLibby ? (
        <div className="body">
          <Outlet />
        </div>
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
