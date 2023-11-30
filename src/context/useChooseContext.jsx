import { createContext, useState } from "react";

const ChooseContext = createContext();

const ChooseClothesProvider = ({children})=>{
   const [collection, setCollection] = useState([]);
   
   const handleChooseClick = (cloth)=>{
     const updatedChoose = [...collection,cloth];
     setCollection(updatedChoose);

   }
   return(
    <ChooseContext.Provider value={{handleChooseClick,collection}}>
       {children}
    </ChooseContext.Provider>
   )
}
export {ChooseClothesProvider, ChooseContext}