import React, { useContext } from "react";

import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { AuthContext } from "../context/AuthContext";

import Logout from '../images/signout.png'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="logo">Tele Chat</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>
          <img src={Logout} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar