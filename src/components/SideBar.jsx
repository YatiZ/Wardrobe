import React, { useState } from 'react';
import SIdeBarList from './SIdeBarList';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const SideBar = () => {
  const [menu, setMenu] = useState(false)
  
  const handleMenu = ()=>{
    setMenu(!menu)
  }

  return (
    <div >
    
    {menu? <div className='bg-slate-500 w-fit absolute z-10 mt-0 h-screen'>
        <CloseIcon onClick={handleMenu} ></CloseIcon>
        <SIdeBarList/>
    </div> :<MenuIcon onClick={handleMenu}></MenuIcon>}
      
       
    </div>
  )
}

export default SideBar