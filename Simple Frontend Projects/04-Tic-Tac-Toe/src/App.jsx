import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {

  const [turn,setTurn] = useState('X')
  const [win,setwin] = useState('')
  const [arr,setarr] = useState(["","","","","","","","",""])
  const [prev,setprev] = useState('')
  const [isgameOver,setGameOver] = useState(false)
  const [xWinCount,setXWinCount] = useState(0)
  const [yWinCount,setYWinCount] = useState(0)

  const win_pattern = [ [0,1,2],[3,4,5],[6,7,8],
                        [0,3,6],[1,4,7],[2,5,8],
                        [0,4,8],[2,4,6] ]


  function handleClick(ind){
    const updatedArr = [...arr]
    updatedArr[ind] = turn
    setarr(updatedArr)
    setprev(ind)
    checkWinner(updatedArr,turn)
    turn === 'X'?(setTurn('O')):setTurn('X')
  }

  function checkWinner(board, winner) {
    for (let pattern of win_pattern) {
      if (
        board[pattern[0]] &&
        board[pattern[0]] === board[pattern[1]] &&
        board[pattern[1]] === board[pattern[2]]
      ) {
        console.log(`win: ${winner}`);
        setwin(winner);
        if (winner === 'X') setXWinCount(c => c + 1);
        else setYWinCount(c => c + 1);
        return; // stop once a winner is found
      }
    }
    CheckGameOver(board);
  }

  function ResetPrevious(){
    turn === "X"?setTurn('O'):setTurn('X')
    const updatedArr = [...arr]
    updatedArr[prev] = ""
    setarr(updatedArr)
    setprev('')
  }

  function NewGame(){
    setarr(["","","","","","","","",""])
    setwin('')
    setprev('')
    setTurn('X')
    setGameOver(false)
  }

  function CheckGameOver(board) {
    const allFilled = board.every(it => it === 'X' || it === 'O');

    if (allFilled && !win) {   // only if no winner yet
      setGameOver(true);
    }
}

  return (
    <main className='app'>
      <Board arr={arr} win={win} handleClick={handleClick} ResetPrevious={ResetPrevious} NewGame={NewGame} isgameOver={isgameOver} xWinCount={xWinCount} yWinCount={yWinCount}/>
    </main>
  )
}

export default App
