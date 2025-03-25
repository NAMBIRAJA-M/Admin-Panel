

import React from 'react'

function LabelComponent(props) {
    console.log("from label component",props.value)
  return (
    <div>
      <label>{props.value}</label>
    </div>
  )
}

export default LabelComponent
