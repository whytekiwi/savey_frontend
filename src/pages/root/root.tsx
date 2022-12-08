import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStores } from "../../stores/rootStore";
import Button from "../../components/common/button/button";
import { observer } from "mobx-react";
import Toast from "../../components/toast/toast";
import Navbar from "../../components/navbar/navbar";
import Modal from "../../components/modal/modal";
import OpenWishModal from "../../components/openWishModal/openWishModal";
import { runInAction } from "mobx";
import CircleImage from "../../components/common/circleImage/circleImage";
import "./root.sass";

const Root = () => {
  const { uiStore, wishStore } = useStores();
  const navigate = useNavigate();

  const [openWishModalOpen, setIsOpenWishModalOpen] = useState(false);

  const handleAboutClicked = () => {
    navigate("about");
  };

  const handleHomeClicked = () => {
    navigate("/");
    runInAction(() => (wishStore.wish = undefined));
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
            onHomeClicked={handleHomeClicked}
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
          <div className="confirm-modal">
            <CircleImage src="shhh.jpg" alt="Be very very quiet" />
            <p>
              Hey - I've got a secret to share with you. But you have to promise
              you won't tell Libby.
            </p>
            <Button
              onClick={() => runInAction(() => (uiStore.notLibby = true))}
            >
              Ok - I promise I won't tell
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default observer(Root);
