import React from 'react';
import { HomeData } from '../data/HomeData';
import Search from '../components/Search';
import Collection from '../components/Collection';

const HomePage = () => {
    const myStyles = {
        animation: 'spin-slow 3s ease-in-out infinite', // Apply keyframe animation
        color: 'white',
        width: '300px',
        transform: 'translate3d(0, 0, 0)',
      };
     
  return (
    <div className=''>
       <h1 className='text-center'>Yati's Wardrobe</h1>
       <div className='flex flex-row justify-around overflow-hidden relative'>
       {HomeData.map((data,index)=>(
             <div key={index}>
        
                <div style={myStyles}>
                <img src={data.img} alt='popular-img' className='w-full object-contain' />
                </div>
                
             </div>
           ))}
          
           
       </div>
          
    </div>
  )
}

export default HomePage