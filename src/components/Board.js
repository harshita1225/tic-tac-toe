import React from "react";
import Square from "./Square";
import { Context } from "./Context";
import { useContext } from "react";

export default function Board() {
  const { state, dispatch } = useContext(Context);
  // console.log(state);
  const renderSquare = (i) => {
    {
    }
    return <Square />;
  };
  const status = "Next Player:X";

  return (
    <React.Fragment>
      <div className="status h2 text-center">{status}</div>
      <div className="board">{renderSquare(0)}</div>
    </React.Fragment>
  );
}
