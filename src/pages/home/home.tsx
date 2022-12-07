import { observer } from "mobx-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import WishCard from "../../components/wishCard/wishCard";
import { Wish } from "../../models/wish";
import { useStores } from "../../stores/rootStore";

const Home = () => {
  const { wishStore } = useStores();
  const navigate = useNavigate();

  const { id } = useParams();

  if (id && wishStore.wish?.id !== id) {
    wishStore.loadWish(id);
  }

  if (!id && wishStore.wish?.id) {
    navigate(`/${wishStore.wish?.id}`)
  }

  const handleWishUpdated = (wish: Wish) => {
    wishStore.saveWish(wish);
  };

  return wishStore.wish ? (
    <WishCard
      isUploadingPhoto={wishStore.isUploadingPhoto}
      isUploadingVideo={wishStore.isUploadingVideo}
      wish={wishStore.wish}
      onPhotoSelected={(file) => wishStore.uploadPhoto(file)}
      onVideoSelected={(file) => wishStore.uploadVideo(file)}
      onWishUpdated={handleWishUpdated}
    />
  ) : (
    <div>TODO landing page for home</div>
  );
};

export default observer(Home);
