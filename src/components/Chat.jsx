import React, { useContext } from "react";

import { ChatContext } from "../context/ChatContext";

import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";

import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        {data.user.photoURL ? (
          <img src={data.user?.photoURL} alt="profile" />
        ) : (
          <></>
        )}
        {data.user?.displayName && (
          <span>
            {data.user?.displayName?.charAt(0).toUpperCase() +
              data.user?.displayName?.slice(1)}
          </span>
        )}
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
