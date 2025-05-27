import Square from "./Square";

export default function Board({ marks, winner, isNextX, onPlay }) {
  //

  function handleClick(i) {
    //
    if (marks[i] || winner) return;

    const nextMarks = marks.slice();
    nextMarks[i] = isNextX ? "X" : "O";

    onPlay(nextMarks);
  }

  function createRow(c1, c2, c3) {
    //
    return (
      <div className="square-row">
        <Square mark={marks[c1]} onClick={() => handleClick(c1)} />
        <Square mark={marks[c2]} onClick={() => handleClick(c2)} />
        <Square mark={marks[c3]} onClick={() => handleClick(c3)} />
      </div>
    );
  }

  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = "Next: " + (isNextX ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div>
        {createRow(0, 1, 2)}
        {createRow(3, 4, 5)}
        {createRow(6, 7, 8)}
      </div>
    </>
  );
}
