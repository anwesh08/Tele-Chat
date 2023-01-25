import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
   const handleSubmit = async (e) => {
      e.preventDefault()
      // const email = e.target[0].value
      // const password = e.target[1].value
   }

   return (
      <div className='formContainer'>
         <div className="formWrapper">
            <span className="logo">Tele Chat</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
               <input required type="email" placeholder='Email' />
               <input required type="password" placeholder='Password' />
               <button>Sign in</button>
            </form>
            <p>
               You don't have an account ? Register
            </p>
         </div>
      </div>
   )
}

export default Login