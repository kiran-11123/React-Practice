import './App.css'
import './index.css'
import SidebarClass1 from './answers/1.basic-project'
import Sidebar2Transistion from './sidebars/Sidebar2Transistions'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

function App() {


  return(
   
    <div className='h-screen bg-white dark:bg-black'>
          
      <h1 className='text-black dark:text-white'>hi there</h1>
      
      <button onClick={()=>{
         document.querySelector("html").classList.toggle("dark")
      }}  className='dark:text-white ' >Toggle Theme</button>



    </div>
   
  )}



export default App
