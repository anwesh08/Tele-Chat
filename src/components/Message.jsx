import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
         <img src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         <span>Just Now</span>
      </div>
      <div className="messageContent">
         <p>Hello</p>
         <img src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Message