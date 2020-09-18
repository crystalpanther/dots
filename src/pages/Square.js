import React from 'react'

export default function Square(props) {
  console.log(props.square)
  return (
    <div className={`Square Square${props.square}`} onClick={props.onClick}/>
  )
}
