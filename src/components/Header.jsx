import React from 'react'
import SideBar from './SideBar'
import Search from './Search'
import Collection from './Collection'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-row justify-between'>
        <SideBar/>
        <div className='flex '>
        <Search/>
        <Link to='/collection'>Collection</Link>
        </div>
        
    </div>
  )
}

export default Header