import React, { useState } from 'react'

import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const Search = () => {
   const [username, setUsername] = useState("")
   const [user, setUser] = useState(null)
   const [err, setErr] = useState(false)
   const handleSearch = async () => {
      const q = query(
         collection(db, "user"),
         where("username", "==", username)
      )
      try {
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
            setUser(doc.data());
         });
      } catch (err) {
         setErr(true)
      }
   }
   const handleKey = (e) => {
      e.code === "Enter" && handleSearch()
   }
   const handleSelect = () => {

   }
   return (
      <div className='search'>
         <div className="searchForm">
            <input type="text" placeholder='Search' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
         </div>
         {err && <span>User not found!</span>}
         {user && (
            <div className="userChat" onClick={handleSelect}>
               <img src={user.photoURL} alt="" />
               <div className="userChatInfo">
                  <span>{user.username}</span>
               </div>
            </div>
         )}
      </div>
   )
}

export default Search