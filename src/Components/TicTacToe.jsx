import React from 'react'
import './TicTacToe.css'
import Board from './Board'
import Winner from './Winner'
export default function TicTacToe() {
  return (
    <div className='tictactoe'>
      <h1>Tic Tac Toe</h1>
      < Board/>
      <Winner/>
    </div>
  )
}
