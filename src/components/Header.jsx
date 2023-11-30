import React from 'react'
import SideBar from './SideBar'
import Search from './Search'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-row justify-between mb-8 bg-red-500 absolute z-10 overflow-y-hidden'>
        <div className='fixed left-0'>
        <SideBar/>
        </div>
        <div className='flex fixed right-0'>
        <Search/>
        <Link to='/collection'>Collection</Link>
        </div>
        
    </div>
  )
}

export default Header