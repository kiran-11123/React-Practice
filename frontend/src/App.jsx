import { useState ,useEffect} from 'react'
import './App.css'

function App() {

  const[count , setCount] = useState(0);

  function increaseValue(){
          
    setCount((curval)=>curval+1) 
  }


  useEffect(()=>{

    setInterval(increaseValue , 1000);

  },[])

       return(

           <div>
                {count}
           </div>
       )
  }

  

export default App
