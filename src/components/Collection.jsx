import React, { useContext, useState } from 'react';
import { ChooseContext } from '../context/useChooseContext';

const Collection = () => {
  const {collection} = useContext(ChooseContext);
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');

  console.log(collection)
  const changeCloth = (item)=>{
    if(item.type === 'top'){
        setTop(item)
    }else if(item.type === 'bottom'){
        setBottom(item)
    }
  }
  return (
    <div className='pt-8'>
        <h1 className='text-center overflow-hidden font-Caveat text-5xl'>Collection</h1>
    <div className='flex flex-row justify-between'>
        <div className='flex flex-col justify-center pl-96 py-0 overflow-hidden '>
            <div className=' w-44'>
                <img src={top.img} alt=""/>
            </div>
            <div className='w-44 relative'>
                <img src={bottom.img} alt="" />
            </div>
        </div>
          
        
        <div className='float-right overflow-scroll flex flex-col gap-3 h-96'>
        {collection.map((item)=>(
        <div key={item.id}>
            <div className='w-52'>
            <img src={item.img} alt="" className='shadow-lg' onClick={()=>changeCloth(item)}/>
            </div>
            
        </div>

        
      ))}
        </div>
     
    </div> 
      

        
     
    </div>
  )
}

export default Collection