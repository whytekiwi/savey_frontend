import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const params = useParams();
  const id = params["id"];

  return (
    <div>
      <h2>Id {id}</h2>
    </div>
  );
};

export default observer(Home);
