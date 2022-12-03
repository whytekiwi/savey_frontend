import { observer } from "mobx-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import TextInput from "../../components/common/textInput/textInput";
import WishCard from "../../components/wishCard/wishCard";
import { Wish } from "../../models/wish";
import { useStores } from "../../stores/rootStore";

const Home = () => {
  const { uiStore, wishStore } = useStores();

  const { id } = useParams();
  const navigate = useNavigate();

  if (id && wishStore.wish?.id !== id) {
    wishStore.loadWish(id);
  }

  const handleWishUpdated = (wish: Wish) => {
    wishStore.saveWish(wish);
  };

  return (
    <>
      <TextInput
        value={uiStore.id}
        placeholder="Your secret key"
        onValueChanged={(value) => uiStore.setId(value)}
      />
      <Button onClick={() => navigate(`/${uiStore.id}`)}>Load Wish</Button>
      <Button
        onClick={() => {
          wishStore.loadWish();
        }}
      >
        Create Wish
      </Button>
      {wishStore.wish && (
        <WishCard
          isLoading={wishStore.isLoading}
          isUploadingPhoto={wishStore.isUploadingPhoto}
          isUploadingVideo={wishStore.isUploadingVideo}
          wish={wishStore.wish}
          onPhotoSelected={(file) => wishStore.uploadPhoto(file)}
          onVideoSelected={(file) => wishStore.uploadVideo(file)}
          onWishUpdated={handleWishUpdated}
        />
      )}
    </>
  );
};

export default observer(Home);
