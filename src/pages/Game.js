import React, { useState } from 'react'
import Board from './Board'

export default function Game() {
  const [play, setPlay] = useState(false)
  const handleClick = () => {
    setPlay(true)
  }
  return (
    <div className="Game">
      <h1>StarNavi: Game In Dots</h1>
      <div className="Game__Navigation">
        <div className="Game__Navigation--Item">
          <select className="Button Button__MiddleDark">
            <option>Pick Game Mode</option>
          </select>
        </div>
        <div className="Game__Navigation--Item">
          <input type="text" className="Input" placeholder="Enter Game Mode" />
        </div>
        <div className="Game__Navigation--Item">
          <button className="Button Button__Dark" onClick={() => handleClick()}>Play</button>
        </div>
      </div>
      <Board gameStart={play}/>
    </div>
  )
}
