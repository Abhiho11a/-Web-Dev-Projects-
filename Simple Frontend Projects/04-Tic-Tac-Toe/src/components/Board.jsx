import React, { useState } from 'react'
import '../App.css'


const Board = () => {

  const [turn,setTurn] = useState('X')
  const [win,setwin] = useState('')
  const [arr,setarr] = useState(["","","","","","","","",""])
  const [prev,setprev] = useState('')
  const [isgameOver,setGameOver] = useState(false)
  const [xWinCount,setXWinCount] = useState(0)
  const [yWinCount,setYWinCount] = useState(0)

  const [gameType,setGameType] = useState('')

  const win_pattern = [ [0,1,2],[3,4,5],[6,7,8],
                        [0,3,6],[1,4,7],[2,5,8],
                        [0,4,8],[2,4,6] ]

  function getEmptySpots(board){
      return board.map((box,ind) => box==""?ind:null).filter(it => it != null)
  }   
    
  function checkWin(board, player) {
      // Check every combination
      for (const combo of win_pattern) {
          // If all three squares in the combo match the player's marker
          if (
              board[combo[0]] === player &&
              board[combo[1]] === player &&
              board[combo[2]] === player
          ) {
              return true; // Found a win!
          }
      }
      return false; // No win found for this player
  }

  function checkTie(board) {
      // A tie is true if no one has won AND the board is full
      if (!checkWin(board, 'X') && !checkWin(board, 'O') && getEmptySpots(board).length === 0) {
          return true;
      }
      return false;
  }

  function minimax(board, isMaximizing) {
      if (checkWin(board, 'X')) {
          return -10;
      }
      if (checkWin(board, 'O')) {
          return 10;
      }
      if (checkTie(board)) {
          return 0;
      }

      const availableSpots = getEmptySpots(board);

      if (isMaximizing) {
          // --- Maximizer's (AI's) Turn ---
          let bestScore = -Infinity; // Start with the worst possible score

          for (const index of availableSpots) {
              // A. Make the move (AI plays 'O')
              board[index] = 'O';

              // B. Recurse (switch to Minimizer's turn)
              let score = minimax(board, false);

              // C. Undo the move (clean up the board for the next loop iteration)
              board[index] = "";

              // D. Choose the best score
              bestScore = Math.max(bestScore, score);
          }
          return bestScore;

      } else {
          let bestScore = Infinity; // Start with the best possible score (for the AI)

          for (const index of availableSpots) {
              board[index] = 'X';

              let score = minimax(board, true);

              board[index] = "";

              bestScore = Math.min(bestScore, score);
          }
          return bestScore;
      }
  }
  function findBestMove(board) {
      let bestScore = -Infinity;
      let bestMoveIndex = -1;

      const availableSpots = getEmptySpots(board);

      for (const index of availableSpots) {
          // 1. Make the candidate move
          board[index] = 'O';

          let score = minimax(board, false);

          board[index] = "";

          if (score > bestScore) {
              bestScore = score;
              bestMoveIndex = index;
          }
      }
      return bestMoveIndex;
  }

  function handleClick (ind){
    let updated = [...arr]
    updated[ind] = turn
    setprev(ind)
    setarr(updated)
    
    if(gameType === 'single')
      {
        let compMove = findBestMove(updated)
        updated[compMove] = 'O'
        checkWinner(updated,'O')
        setTurn('X')
      }
      else
      {
          setTurn(prev => prev ==='X'?'O':'X')
          checkWinner(updated,turn)
    }
    };

  function checkWinner(board, winner) {
    for(let pattern of win_pattern)
    {
      if(board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]] && board[pattern[0]] === winner)
      {
        setwin(winner)
        winner === 'X'?setXWinCount(prev => prev+1):setYWinCount(prev => prev+1)
        return
      }
    }
    CheckGameOver(board);
  }

  function ResetPrevious(){
    if(prev=='')
      return
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
    setGameType('')
  }

  function CheckGameOver(board) {
    const allFilled = board.every(it => it === 'X' || it === 'O');

    if (allFilled && (win === "")) {   // only if no winner yet
      setGameOver(true);
    }
}

function handleGameType(type){
  setGameType(type)
}

function setTextColor(turn){
  if(turn === 'X')
    return '#ff007f'

  return '#00ffcc'
}
  return (
    <div className="board">
        <h2 style={{textAlign:'center',fontSize:"2rem"}}>Tic Tac Toe Using <br/><span style={{color:"#20cffbff"}}> React JS</span></h2>
        <div className="game-type">
          <button className={`${gameType === "single"?"selected":""} ${gameType==="double"?"disabled":''}`} disabled={gameType==="double"} onClick={() => handleGameType('single')}>Single Player</button>
          <button className={`${gameType === "double"?"selected":""} ${gameType==="single"?"disabled":''}`} disabled={gameType==="single"} onClick={() => handleGameType('double')}>Two Player</button>
        </div>
        { win && <h2 style={{textAlign:'center',fontSize:"30px",margin:"-25px 0px"}}> Winner : <span style={{color:`${win === 'X'?"#ff007f":"#00ffcc"}`,fontSize:"40px"}}>{win}</span></h2> }
        { isgameOver && <h2 style={{textAlign:'center',color:'red'}}>Game Over !! Please Replay The Game...</h2>}
        <div className="container">
            <div className="row1">
            <button className={`boxes ${arr[0]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[0])}} disabled={arr[0] || win || gameType === ""} onClick={()=>{handleClick(0)}}>{arr[0]}</button>
            <button className={`boxes ${arr[1]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[1])}} disabled={arr[1] || win || gameType === ""} onClick={()=>{handleClick(1)}}>{arr[1]}</button>
            <button className={`boxes ${arr[2]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[2])}} disabled={arr[2] || win || gameType === ""} onClick={()=>{handleClick(2)}}>{arr[2]}</button>
            </div>
            <div className="row2">
            <button className={`boxes ${arr[3]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[3])}} disabled={arr[3] || win || gameType === ""} onClick={()=>{handleClick(3)}}>{arr[3]}</button>
            <button className={`boxes ${arr[4]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[4])}} disabled={arr[4] || win || gameType === ""} onClick={()=>{handleClick(4)}}>{arr[4]}</button>
            <button className={`boxes ${arr[5]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[5])}} disabled={arr[5] || win || gameType === ""} onClick={()=>{handleClick(5)}}>{arr[5]}</button>
            </div>
            <div className="row3">
            <button className={`boxes ${arr[6]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[6])}} disabled={arr[6] || win || gameType === ""} onClick={()=>{handleClick(6)}}>{arr[6]}</button>
            <button className={`boxes ${arr[7]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[7])}} disabled={arr[7] || win || gameType === ""} onClick={()=>{handleClick(7)}}>{arr[7]}</button>
            <button className={`boxes ${arr[8]||win||gameType === ""?'disabled':''}`} style={{color:setTextColor(arr[8])}} disabled={arr[8] || win || gameType === ""} onClick={()=>{handleClick(8)}}>{arr[8]}</button>
            </div>
        </div>
        <div className="score-container">
          <div className='card X'>X:{xWinCount}</div>
          <div className='card Y'>O:{yWinCount}</div>
        </div>
        <div className="btn-container">
            <button className={`undo ${win||isgameOver||gameType==="single"?'disabled':''}`} disabled = {win || isgameOver || gameType==="single"} onClick={() => ResetPrevious()}>Undo</button>
            <button className='newGame' onClick={() => NewGame()}>Reset Game</button>
        </div>
      </div>
  )
}

export default Board