import React from 'react'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css';
import Header from './components/Header';
import TopsPage from './pages/TopsPage';
import DressesPage from './pages/DressesPage';
import Collection from './components/Collection';



const App = () => {
  return (
    <div>
     <Header/>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/tops' element={<TopsPage/>}/>
        <Route path='/dresses' element={<DressesPage/>}/>
        <Route path='/collection' element={<Collection/>}/>
     </Routes>
    </div>
  )
}

export default App