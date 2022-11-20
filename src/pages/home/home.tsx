import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/common/button/button";
import Modal from "../../components/common/modal/modal";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const [open, setIsOpen] = useState(false);

  const params = useParams();
  const id = params["id"];

  const handleToggle = () => {
    setIsOpen(!open);
  };

  return (
    <div>
      <h2>Id {id}</h2>
      <Button onClick={handleToggle}>Toggle Modal</Button>
      <Modal open={open} toggle={handleToggle}>
        <input type="text"/>
      </Modal>
    </div>
  );
};

export default Home;
