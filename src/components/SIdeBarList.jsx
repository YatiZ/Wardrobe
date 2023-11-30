import React from 'react'
import { Link } from 'react-router-dom'

const SIdeBarList = () => {
  return (
    <div className='p-10 h-full'>
        <ul className='text-purple-800'>
            <li className='py-3 hover:underline hover:cursor-pointer '><Link to='/'>Home Page</Link></li>
            <li className='py-3 hover:underline hover:cursor-pointer '><Link to='/tops'>Tops</Link></li>
            <li className='py-3 hover:underline hover:cursor-pointer '>Skirts</li>
            <li className='py-3 hover:underline hover:cursor-pointer '><Link to='/dresses'>Dresses</Link></li>
            <li className='py-3 hover:underline hover:cursor-pointer '>Pants</li>
            <li className='py-3 hover:underline hover:cursor-pointer '>Shoes</li>
            <li className='py-3 hover:underline hover:cursor-pointer '>Bag</li>
        </ul>
    </div>
  )
}

export default SIdeBarList