import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter , Routes , Route ,Link  , useNavigate} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Error from './components/Error'
import Layout from './components/Layout'
function App() {

      
     
  return(

    <div>

   
        <BrowserRouter>


      <Routes>

        <Route path="/" element={<Layout />} >

         <Route path="/" element={<Nav/>} />
         <Route path="/home" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="*" element={<Error/>} />

        </Route>

      </Routes>

      </BrowserRouter>



      </div>
  )

  
       
  }

  

export default App
