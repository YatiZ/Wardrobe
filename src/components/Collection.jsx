import React, { useContext } from 'react';
import { ChooseContext } from '../context/useChooseContext';

const Collection = () => {
  const {collection} = useContext(ChooseContext);
  console.log(collection)
  return (
    <div>Collection
      {collection.map((item)=>(
        <div key={item.id}>
            <p>{item.id}</p>
            <img src={item.img} alt="" className='w-10'/>
        </div>
      ))}
    </div>
  )
}

export default Collection