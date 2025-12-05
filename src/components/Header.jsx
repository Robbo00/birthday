import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='leftHeader'>
        <h1>Celebrations</h1>
        <p>Fill with how many birthdays they have this week</p>   
        </div>

        <input className='search' type="search" placeholder='Search Friends...' />
    </div>
  )
}

export default Header