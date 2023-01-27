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
        <img src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Anwesh Mishra</span>
        <button onClick={() => signOut(auth)}>
          <img src={Logout} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar