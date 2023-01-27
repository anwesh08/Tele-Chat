import React, { useContext } from 'react'

import { ChatContext } from '../context/ChatContext'

import Cam from '../images/cam.png'
import Add from '../images/add.png'
import More from '../images/more.png'

import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  const { data } = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat