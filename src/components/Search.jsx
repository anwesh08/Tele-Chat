import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
         <input type="text" placeholder='Search' />
      </div>
      <div className="userChat">
         <img src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         <div className="userChatInfo">
            <span>Jane</span>
         </div>
      </div>
    </div>
  )
}

export default Search