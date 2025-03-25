
import React from 'react'

function Input(props) {
    console.log("from input",props.value)
  return (
    <div>
      <input value={props.value}/>
    </div>
  )
}

export default Input
