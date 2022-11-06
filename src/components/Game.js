import React from "react";
import Board from "./Board";
import { useState } from "react";

export default function Game() {
  return (
    <article className="game container mt-5">
      <section className="row">
        <div className="col-sm-8 game-board">
          <Board />
        </div>
        <div className="col-sm-4 game-info">
          <p className="h2">{/* status */} status</p>
          <ul className="nav nav-pills flex-column">{/* TODO */}todo</ul>
        </div>
      </section>
    </article>
  );
}
