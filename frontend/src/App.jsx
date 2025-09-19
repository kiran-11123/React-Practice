import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
function App() {
      
     
  return(
      <BrowserRouter>

      <Routes>

      <Route path="/" element={<Nav/>} />
      <Route path="/home" element={<Home/>} />

      </Routes>

      </BrowserRouter>
  )

  
       
  }

  

export default App
