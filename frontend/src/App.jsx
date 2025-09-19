import { useState ,useEffect, useRef} from 'react'
import './App.css'
import { BrowserRouter , Routes , Route ,Link  , useNavigate} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Error from './components/Error'
import Layout from './components/Layout'
function App() {

  const inputRef = useRef();
  const inputRef2 = useRef();

  function focusOnInput(){
       document.getElementById("name");
       inputRef.current.focus();
       inputRef2.current.focus();
  }

      
     
  return(

    <div>

      Signup

      <input  ref={inputRef} type={"text"}></input>

       <input ref={inputRef2} type={"text"}></input>

       <button onClick={focusOnInput}>Submit</button>


   
         

      </div>
  )

  
       
  }

  

export default App
