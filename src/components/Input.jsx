import React from 'react'

import Add from '../images/addAvatar.png'
import Attach from '../images/attach.png'
import Send from '../images/send.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
         <img src={Attach} alt="" />
         <input type="file" id="file" style={{display: 'none'}} />
         <label htmlFor="file">
            <img src={Add} alt="" />
         </label>
         <button>
            <img src={Send} alt="" />
         </button>
      </div>
    </div>
  )
}

export default Input