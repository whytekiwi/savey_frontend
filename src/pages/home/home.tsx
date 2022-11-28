import { observer } from "mobx-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import TextInput from "../../components/common/textInput/textInput";
import WishCard from "../../components/wishCard/wishCard";
import { useStores } from "../../stores/rootStore";

const Home = () => {
  const { uiStore, wishStore } = useStores();

  const { id } = useParams();
  const navigate = useNavigate();

  if (id && wishStore.wish?.id !== id) {
    wishStore.loadWish(id);
  }

  // id = T9aEOa

  return (
    <>
      <TextInput
        value={uiStore.id}
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
      <div>{wishStore.wish?.photoUrl}</div>
      <WishCard
        isLoading={false}
        wish={wishStore.wish}
        onPhotoSelected={(file) => wishStore.uploadPhoto(file)}
      />
    </>
  );
};

export default observer(Home);
