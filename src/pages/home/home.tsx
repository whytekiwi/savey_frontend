import React from "react";
import Button from "../../components/common/button/button";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const buttonClicked = () => {
    console.log("clicked");
  };

  return (
    <div>
      <h1>Home!</h1>
      <Button
        text="Hello world"
        onClick={buttonClicked}
      />
      <Button
        text="Hello world"
        onClick={buttonClicked}
        disabled={true}
      />
      <Button
        text="Hello world"
        onClick={buttonClicked}
        type="error"
      />
      <Button
        text="Hello world"
        onClick={buttonClicked}
        type="error"
        disabled={true}
      />
      <Button
        text="Hello world"
        onClick={buttonClicked}
        type="success"
      />
      <Button
        text="Hello world"
        onClick={buttonClicked}
        type="success"
        disabled={true}
      />
    </div>
  );
};

export default Home;
