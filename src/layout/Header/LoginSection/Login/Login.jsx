import React from 'react'

function Login({text,bg,pad,w,tx2}) {
  return (
    <button className={`border  px-[15px] py-2 min-w-max ${bg} font-bold ${pad} ${w} gap-2`}>
      {text}{tx2}
    </button>
  )
}

export default Login
