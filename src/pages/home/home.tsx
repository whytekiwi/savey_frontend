import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";
import { config } from "../../constants";
import { useStores } from "../../stores/rootStore";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const { wishStore } = useStores();

  const params = useParams();
  const id = params["id"];

  wishStore.loadWish(id);

  return (
    <div>
      <h2>Id {id}</h2>
      <h3>{config.base_url}</h3>
      {wishStore.wish && (
        <div>
          <h1>{wishStore.wish.name}</h1>
        </div>
      )}
    </div>
  );
};

export default observer(Home);
