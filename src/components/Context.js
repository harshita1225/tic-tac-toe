import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "PLAYER_MOVE":
        if (state.winner === "X" || state.winner === "O") {
          return state;
        }
        const boardSquares = state.boardSquares;
        const player = state.playerX ? "X" : "O";
        boardSquares[action.payload] = player;
        let winner = determineWinner(player, state.boardSquares);
        const numberOfMoves = (state.numberOfMoves += 1);
        if (state.numberOfMoves === 9 && winner === null) {
          winner = "Draw";
        }
        console.log(state, action.payload);
        return {
          ...state,
          boardSquares,
          playerX: !state.playerX,
          winner,
          numberOfMoves,
        };

      case "reset":
        return {
          ...state,
          numberOfMoves: 0,
          winner: null,
          playerX: true,
          boardSquares: {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
            9: null,
          },
        };
      default:
        return state;
    }
  };

  const initialState = {
    winner: "",
    playerX: true,
    boardSquares: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    },
  };

  function determineWinner(player, boardSquares) {
    if (
      (boardSquares["1"] === player &&
        boardSquares["2"] === player &&
        boardSquares["3"] === player) ||
      (boardSquares["4"] === player &&
        boardSquares["5"] === player &&
        boardSquares["6"] === player) ||
      (boardSquares["7"] === player &&
        boardSquares["8"] === player &&
        boardSquares["9"] === player) ||
      (boardSquares["1"] === player &&
        boardSquares["4"] === player &&
        boardSquares["7"] === player) ||
      (boardSquares["2"] === player &&
        boardSquares["5"] === player &&
        boardSquares["8"] === player) ||
      (boardSquares["3"] === player &&
        boardSquares["6"] === player &&
        boardSquares["9"] === player) ||
      (boardSquares["1"] === player &&
        boardSquares["5"] === player &&
        boardSquares["9"] === player) ||
      (boardSquares["3"] === player &&
        boardSquares["5"] === player &&
        boardSquares["7"] === player)
    ) {
      return player;
    }
    return null;
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
