import { useState } from "react";
import Board from "./Board.jsx";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [historyPos, setHistoryPos] = useState(history.length - 1);

  const marks = history[historyPos];
  const winner = whoIsWinner(marks);
  const isNextX = historyPos % 2 !== 0;

  function whoIsWinner(m) {
    //
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (m[a] === m[b] && m[a] === m[c]) return m[a];
    }
    return null;
  }

  function hanldlePlay(m) {
    //
    const nextHistory = history.slice(0, historyPos + 1);
    nextHistory.push(m);
    setHistory(nextHistory);
    setHistoryPos(historyPos + 1);
  }

  function jump(toHistoryPos) {
    setHistoryPos(toHistoryPos);
  }

  let historyShow = history.map((marks, idx) => {
    return (
      <li key={idx}>
        <button onClick={() => jump(idx)} className={idx === historyPos ? 'current' : ''}>
          {idx === 0 ? 'Go to game start' : `Jump to #${idx}`}</button>
      </li>
      );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board marks={marks} winner={winner} isNextX={isNextX} onPlay={hanldlePlay} />
      </div>
      <div className="game-history">
        <ol>{historyShow}</ol>
      </div>
    </div>
  );
}

export default function App() {
  //
  return <Game />
}
