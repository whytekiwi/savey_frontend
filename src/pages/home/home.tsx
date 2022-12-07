import { observer } from "mobx-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WishCard from "../../components/wishCard/wishCard";
import { Wish } from "../../models/wish";
import { useStores } from "../../stores/rootStore";
import { ReactComponent as AddIcon } from "../../assets/img/add.svg";
import { ReactComponent as OpenIcon } from "../../assets/img/open.svg";
import { ReactComponent as AboutIcon } from "../../assets/img/about.svg";
import "../pages.sass";
import Button from "../../components/common/button/button";
import Loader from "../../components/common/loader/loader";
import OpenWishModal from "../../components/openWishModal/openWishModal";

const Home = () => {
  const { wishStore } = useStores();
  const navigate = useNavigate();

  const { id } = useParams();
  const [openWishModalOpen, setIsOpenWishModalOpen] = useState(false);

  if (id && wishStore.wish?.id !== id && !wishStore.isLoading) {
    wishStore.loadWish(id);
  }

  const handleWishUpdated = (wish: Wish) => {
    wishStore.saveWish(wish);
  };

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

  const photoUrl = process.env.PUBLIC_URL + "20221022_224128.jpg";

  return wishStore.wish ? (
    <WishCard
      isUploadingPhoto={wishStore.isUploadingPhoto}
      isUploadingVideo={wishStore.isUploadingVideo}
      wish={wishStore.wish}
      onPhotoSelected={(file) => wishStore.uploadPhoto(file)}
      onVideoSelected={(file) => wishStore.uploadVideo(file)}
      onWishUpdated={handleWishUpdated}
    />
  ) : wishStore.isLoading ? (
    <div className="loading-wish">
      <Loader />
      <span>Getting your wish ready...</span>
    </div>
  ) : (
    <div className="page-content">
      <h1>Kia ora whānau</h1>
      <div className="row">
        <img
          src={photoUrl}
          className="circle"
          alt="DJ and Libby at Blindspott 2022"
        />
        <div>
          <p>My name's DJ, and I'm collecting wishes for Libby's birthday!</p>{" "}
          <p>
            A birthday wish is something you'd like to say to Libby for her
            birthday. It could be a story, a song, a memory, wherever the
            inspiration takes you.
          </p>
          <p>
            You'll be able to upload a photo, and a video. I'll wrap them up
            into a nice little app so she can take the wishes with her.
          </p>
          <p>To get started, you can</p>
          <table>
            <tr>
              <td>- Create a whole new wish </td>
              <td>
                <Button onClick={handleAddClicked}>
                  <AddIcon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>- Open an existing wish</td>
              <td>
                <Button onClick={handleOpenClicked}>
                  <OpenIcon />
                </Button>
              </td>
            </tr>
            <tr>
              <td>- Or learn more</td>
              <td>
                <Button onClick={handleAboutClicked}>
                  <AboutIcon />
                </Button>
              </td>
            </tr>
          </table>
          <OpenWishModal
            isOpen={openWishModalOpen}
            toggle={() => setIsOpenWishModalOpen(!openWishModalOpen)}
            loadWish={(id) => {
              setIsOpenWishModalOpen(false);
              navigate(`/${id}`);
            }}
          />
        </div>
      </div>
      <p>
        Remember - this is a secret. She doesn't know about what this is, she
        just knows that something is happening. So don't tell her! And share
        with others you think Libby might want to hear from.
      </p>
    </div>
  );
};

export default observer(Home);
