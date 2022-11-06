import React from "react";
import { Context } from "./Context";
import { useContext } from "react";

export default function Square(props) {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <div className="boardWrapper">
        {Object.keys(state.boardSquares).map((key) => (
          <div
            className={state.winner ? "gameOverBoardSquare" : "boardSquare"}
            key={key}
            onClick={() => {
              if (state.boardSquares[key] === null) {
                dispatch({ type: "playerMove", squareNumber: key });
              }
            }}
          >
            {state.boardSquares[key]}
            {state.boardSquares[key] === null && (state.playerX ? "X" : "O")}
          </div>
        ))}
      </div>
    </>
  );
}
