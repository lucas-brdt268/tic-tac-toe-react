import { useState } from 'react'
import Square from './Square';

function Game()
{
  return ();
}

export default function App() {
  //
  const [marks, setMarks] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);

  function handleClick(i) {
    //
    if(marks[i] || winner) return;
    
    const nextMarks = marks.slice();
    nextMarks[i] = (isX ? 'X' : 'O');
    setIsX(!isX);
    setMarks(nextMarks);
    setWinner(whoIsWinner(nextMarks));
  }

  function createRow(c1, c2, c3) {
    //
    return (
      <div className='square-row'>
        <Square mark={marks[c1]} onClick={() => handleClick(c1)} />
        <Square mark={marks[c2]} onClick={() => handleClick(c2)} />
        <Square mark={marks[c3]} onClick={() => handleClick(c3)} />
      </div>
    );
  }

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
      [2, 4, 6]
    ];

    for(let line of lines) {
      const [a, b, c] = line;
      if(m[a] === m[b] && m[a] === m[c]) return m[a];
    }
    return null;
  }

  let status;
  if(winner) {
    status = 'Winner is ' + winner;
  } else {
    status = 'Next: ' + (isX ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>
        {status}
      </div>
      <div>
        {createRow(0, 1, 2)}
        {createRow(3, 4, 5)}
        {createRow(6, 7, 8)}
      </div>
    </>
  );
}
