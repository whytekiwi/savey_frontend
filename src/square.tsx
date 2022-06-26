import React from "react";

interface ISquareProps {
  onClick: () => void;
  value: any;
}

const Square = (props: ISquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
