import React from "react";
import Navbar from "../../components/navbar/navbar";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
