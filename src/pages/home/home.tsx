import { observer } from "mobx-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import TextInput from "../../components/common/textInput/textInput";
import PhotoBanner from "../../components/photoBanner/photoBanner";
import { useStores } from "../../stores/rootStore";
import WishStore from "../../stores/wishStore";

const Home = () => {
  const { uiStore, wishStore } = useStores();

  const { id } = useParams();
  const navigate = useNavigate();

  if (id && wishStore.wish?.id !== id) {
    wishStore.loadWish(id);
  }

  return (
    <>
      <PhotoBanner text="hello world" />

      {wishStore.wish && <div>{wishStore.wish.name}</div>}

      <TextInput
        value={uiStore.id}
        onValueChanged={(value) => uiStore.setId(value)}
      />
      <Button onClick={() => navigate(`/${uiStore.id}`)}>Load Wish</Button>
    </>
  );
};

export default observer(Home);
