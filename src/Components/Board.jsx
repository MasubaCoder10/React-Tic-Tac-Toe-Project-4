import React from 'react'
import Buttons from './Buttons'
import Strike from './Strike'

export default function Board() {
  return (
    <div className='board'>
      <h2>Board</h2>
      <div className="parentButtons">
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        <Buttons/>
        
      </div>
      <Strike/>
    </div>
  )
}
