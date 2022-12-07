import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./root.sass";
import { useStores } from "../../stores/rootStore";
import Button from "../../components/common/button/button";
import { observer } from "mobx-react";
import Toast from "../../components/toast/toast";
import Navbar from "../../components/navbar/navbar";
import Modal from "../../components/modal/modal";
import OpenWishModal from "../../components/openWishModal/openWishModal";

const Root = () => {
  const { uiStore, wishStore } = useStores();
  const navigate = useNavigate();

  const [openWishModalOpen, setIsOpenWishModalOpen] = useState(false);

  const handleAboutClicked = () => {
    navigate("about");
  };

  const handleAddClicked = () => {
    navigate("/");
    wishStore.loadWish();
  };

  const handleOpenClicked = () => {
    setIsOpenWishModalOpen(true);
  };

  return (
    <>
      {uiStore.notLibby ? (
        <>
          <Navbar
            onAboutClicked={handleAboutClicked}
            onAddClicked={handleAddClicked}
            onOpenClicked={handleOpenClicked}
          />
          <div className="body">
            <Outlet />
            <Toast />
          </div>
          <OpenWishModal
            isOpen={openWishModalOpen}
            toggle={() => setIsOpenWishModalOpen(!openWishModalOpen)}
            loadWish={(id) => {
              setIsOpenWishModalOpen(false);
              navigate(`/${id}`);
            }}
          />
        </>
      ) : (
        <Modal open={true}>
          <>
            <div>Please confirm you ain't Libby</div>
            <Button onClick={() => (uiStore.notLibby = true)}>
              I ain't Libby
            </Button>
          </>
        </Modal>
      )}
    </>
  );
};

export default observer(Root);
