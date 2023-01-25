import React from 'react'
import { Link } from 'react-router-dom';
import addAvatar from '../images/addAvatar.png'

function Register() {
   const handleSubmit = async (e) => {
      e.preventDefault()
      // const username = e.target[0].value;
      // const email = e.target[1].value;
      // const password = e.target[2].value;
      // const file = e.target[3].files[0];
   }

   return (
      <div className='formContainer'>
         <div className="formWrapper">
            <span className="logo">Tele Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
               <input required type="text" placeholder='Username' />
               <input required type="email" placeholder='Email' />
               <input required type="password" placeholder='Password' />
               <input required type="file" id='file' style={{ display: 'none' }} />
               <label htmlFor="file">
                  <img src={addAvatar} alt="" />
                  <span>Add a avatar</span>
               </label>
               <button>Sign Up</button>
            </form>
            <p>
               You do have an account ? Login
            </p>
         </div>
      </div>
   )
}

export default Register