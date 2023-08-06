import React from 'react'
import PopUp from './PopUp/PopUp'
import {GiShoppingCart} from 'react-icons/gi'

function HeaderPopUp() {
    
  return (
    <div className='flex gap-2 items-center text-sm'>
      <PopUp text = {"Udmey Buisness"}/>
      <PopUp text = {"Tech On Udemy"}/>
      <PopUp text = {<GiShoppingCart size={28}/>} />
    </div>
  )
}

export default HeaderPopUp
