import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter , Routes , Route ,Link } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
function App() {
      
     
  return(

    <div>

   
        <BrowserRouter>

         <Link to="/">Nav</Link>  | <Link to="/home">Home</Link>  | <Link to="/projects">Projects</Link>

      <Routes>

      <Route path="/" element={<Nav/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />

      </Routes>

      </BrowserRouter>



      </div>
  )

  
       
  }

  

export default App
