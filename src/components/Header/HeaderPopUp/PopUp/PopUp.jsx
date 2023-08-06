import React from 'react'

function PopUp({text,className}) {
    console.log(text)
  return (
    <div className={`text-mainTextClr hover:text-activeClr cursor-pointer ${className}`}>
      {text}
    </div>
  )
}

export default PopUp
