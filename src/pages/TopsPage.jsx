import React, { useContext, useEffect, useState } from 'react';
import pin from '../images/pin.png';
import { tops } from '../data/TopData'
import { ChooseContext } from '../context/useChooseContext';


const TopsPage = () => {
    const {handleChooseClick,collection} = useContext(ChooseContext);
   console.log(collection)
  return (
    <div className=''>
       <h1 className='text-center font-Caveat text-5xl pt-3 '>Tops Collection</h1>
       <div className='grid grid-cols-3 gap-4 m-8'>
       {tops.map((top)=>(
        <div key={top.id} className='rounded-md m-7' style={{transform: `rotate(${top.rotationDeg}deg)`}}>
            <img src={pin} alt="" className='absolute w-10 mx-28'/>
            <img src={top.img} alt="top-cloth" className='aspect-w-16 aspect-h-9 shadow-lg' onClick={()=>handleChooseClick(top)}/>
        </div>
       ))}
       </div>
    
    </div>
  )
}

export default TopsPage