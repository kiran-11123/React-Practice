import './App.css'
import './index.css'
import SidebarClass1 from './answers/1.basic-project'
import Sidebar2Transistion from './sidebars/Sidebar2Transistions'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const[sidebarOpen , setSidebarOpen] = useState(true);


  return(
   
    <div className=' flex'>
          
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <MainContent sidebarOpen={sidebarOpen} />


    </div>
   
  )}

  function Sidebar({sidebarOpen , setSidebarOpen}){
    return (
      <div className='w-96 h-screen bg-red-100'>
             
             
      </div>
    )
  }

  function MainContent(){

    return (
      <div className='w-full'>

        <div className='h-72 bg-black'>

        </div>
      <div className='grid grid-cols-11 p-2'>
        <div className='h-96 rounded-2xl shadow-lg col-span-2 bg-red-200 -translate-y-24'>

        </div>

             <div className='h-96 rounded-2xl shadow col-span-6 bg-yellow-200'>

        </div>

             <div className='h-96 rounded-2xl shadow col-span-3 bg-green-200'>

        </div>

      </div>

      </div>
    )

  }



export default App
