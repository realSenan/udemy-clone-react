import React from 'react'

function Login({text,bg}) {
  return (
    <button className={`border  px-[15px] py-2 min-w-max ${bg} font-bold`}>
      {text}
    </button>
  )
}

export default Login
