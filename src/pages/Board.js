import React, { useState, useEffect, useReducer } from 'react'
import Square from './Square'

export default function Board(props) {
  const squares = Array(25).fill('')
  const gameSquares = squares.slice()
  const [color, setColor] = useState('')
  const [index, setIndex] = useState(0)
  const start = props.gameStart

  const handleClick = (i) => {
    setColor('Green')
    setIndex(i)
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex(Math.floor(Math.random() * gameSquares.length))
  //   }, 1000);
  //   setColor('Blue')
  //   return () => clearInterval(interval);
  // }, []);

  // gameSquares.splice(index, 1, color)

  function randomSquare() {
    if (start) {
      setIndex(Math.floor(Math.random() * gameSquares.length))
    }
  }

  if (start) {}

  return (
    <div className="Board">
      {gameSquares.map((square, i) =>
        <Square onClick={() => handleClick(i)} key={i} square={square}/>
      )}
    </div>
  )
}

// = Math.floor(Math.random() * gameSquares.length)