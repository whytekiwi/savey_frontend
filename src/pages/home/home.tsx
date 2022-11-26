import { observer } from "mobx-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import TextInput from "../../components/common/textInput/textInput";
import PhotoBanner from "../../components/photoBanner/photoBanner";
import { useStores } from "../../stores/rootStore";

const Home = () => {
  const { uiStore } = useStores();

  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <PhotoBanner text="hello world" />

      <TextInput
        value={uiStore.id}
        onValueChanged={(value) => uiStore.setId(value)}
      />
      <Button onClick={() => navigate(`/${uiStore.id}`)}>Load Wish</Button>
    </>
  );
};

export default observer(Home);
