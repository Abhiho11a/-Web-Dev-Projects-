import React from 'react'
import '../App.css'


const Board = ({arr,win,handleClick,ResetPrevious,NewGame,isgameOver,xWinCount,yWinCount,}) => {

  return (
    <div className="board">
        <h2 style={{textAlign:'center',fontSize:"2rem"}}>Tic Tac Toe Using <br/><span style={{color:"#20cffbff"}}> React JS</span></h2>
        { win && <h2 style={{textAlign:'center',fontSize:"30px",margin:"-25px 0px"}}> Winner : <span style={{color:`${win === 'X'?"#ff007f":"#00ffcc"}`,fontSize:"40px"}}>{win}</span></h2> }
        { isgameOver && <h2 style={{textAlign:'center',color:'red'}}>Game Over !! Please Replay The Game...</h2>}
        <div className="container">
            <div className="row1">
            <button className={`boxes ${arr[0]||win?'disabled':''}`} style={{color:`${arr[0] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[0] || win} onClick={()=>{handleClick(0)}}>{arr[0]}</button>
            <button className={`boxes ${arr[1]||win?'disabled':''}`} style={{color:`${arr[1] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[1] || win} onClick={()=>{handleClick(1)}}>{arr[1]}</button>
            <button className={`boxes ${arr[2]||win?'disabled':''}`} style={{color:`${arr[2] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[2] || win} onClick={()=>{handleClick(2)}}>{arr[2]}</button>
            </div>
            <div className="row2">
            <button className={`boxes ${arr[3]||win?'disabled':''}`} style={{color:`${arr[3] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[3] || win} onClick={()=>{handleClick(3)}}>{arr[3]}</button>
            <button className={`boxes ${arr[4]||win?'disabled':''}`} style={{color:`${arr[4] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[4] || win} onClick={()=>{handleClick(4)}}>{arr[4]}</button>
            <button className={`boxes ${arr[5]||win?'disabled':''}`} style={{color:`${arr[5] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[5] || win} onClick={()=>{handleClick(5)}}>{arr[5]}</button>
            </div>
            <div className="row3">
            <button className={`boxes ${arr[6]||win?'disabled':''}`} style={{color:`${arr[6] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[6] || win} onClick={()=>{handleClick(6)}}>{arr[6]}</button>
            <button className={`boxes ${arr[7]||win?'disabled':''}`} style={{color:`${arr[7] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[7] || win} onClick={()=>{handleClick(7)}}>{arr[7]}</button>
            <button className={`boxes ${arr[8]||win?'disabled':''}`} style={{color:`${arr[8] === 'X'?'#ff007f ':'#00ffcc'}`}} disabled={arr[8] || win} onClick={()=>{handleClick(8)}}>{arr[8]}</button>
            </div>
        </div>
        <div className="score-container">
          <div className='card X'>X:{xWinCount}</div>
          <div className='card Y'>O:{yWinCount}</div>
        </div>
        <div className="btn-container">
            <button className={`undo ${win||isgameOver?'disabled':''}`} disabled = {win || isgameOver} onClick={() => ResetPrevious()}>Undo</button>
            <button className='newGame' onClick={() => NewGame()}>Reset Game</button>
        </div>
      </div>
  )
}

export default Board
