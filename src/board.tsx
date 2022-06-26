import React from "react";
import "./index.css";
import Square from "./square";

interface IBoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

const Board: React.FC<IBoardProps> = (props: IBoardProps) => {
  function renderSquare(i: number) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  var rows: JSX.Element[] = [];

  var cellId = 0;
  for (var i = 0; i < 3; i++) {
    var columns: JSX.Element[] = [];

    for (var j = 0; j < 3; j++) {
      columns.push(renderSquare(cellId++));
    }

    rows.push(<div className="board-row">{columns}</div>);
  }

  return <div>{rows}</div>;
};

export default Board;
