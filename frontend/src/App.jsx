import { useState ,useEffect} from 'react'
import './App.css'

function App() {

    return(
     <div>
      
      
      <Counter/>

     




     </div>

    )
  }


  
  function Counter(){


      const[count,setCount] = useState(0);
   
    useEffect(()=>{


      setInterval(()=>{
      setCount(10000);
    
    },1000)

    console.log('mounted')

    },[])
    
    console.log('count');

  return  <p>Count :{count}</p>

  }


 

export default App
