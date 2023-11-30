import React, { useContext } from 'react';
import pin from '../images/pin.png';
import { dresses } from '../data/DressesData';
import { ChooseContext } from '../context/useChooseContext';

const DressesPage = () => {
  const {handleChooseClick} = useContext(ChooseContext);
  return (
    <div className=''>
    <h1 className='text-center font-Caveat text-5xl pt-3 '>Tops Collection</h1>
    <div className='grid grid-cols-3 gap-4 m-8'>
    {dresses.map((dress)=>(
     <div key={dress.id} className='rounded-md m-7' style={{transform: `rotate(${dress.rotationDeg}deg)`}}>
         <img src={pin} alt="" className='absolute w-10 mx-28'/>
         <img src={dress.img} alt="top-cloth" className='aspect-w-16 aspect-h-9 shadow-lg' onClick={()=>handleChooseClick(dress)}/>
     </div>
    ))}
    </div>
 
 </div>
  )
}

export default DressesPage