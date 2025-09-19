import { useState ,useEffect, useRef} from 'react'
import './App.css'
import { BrowserRouter , Routes , Route ,Link  , useNavigate} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Error from './components/Error'
import Layout from './components/Layout'
function App() {

  // aclock with start and stop button

  const[currentCount ,setCurrentCount] = useState(1);
  const timer = useRef();

  function startclock(){
        
     let value = setInterval(()=>{
        setCurrentCount(c=>c+1);

    },1000)

    timer.current = value;
  }

  function stopclock(){
    console.log("hi")
     
    clearInterval(timer.current);
   
  }
     
  return(

    <div>


      {currentCount}
      <br />

      <button onClick={startclock}>Start</button>

        <button onClick={stopclock}>Stop</button>

      

          
   
         

      </div>
  )

  
       
  }

  

export default App
