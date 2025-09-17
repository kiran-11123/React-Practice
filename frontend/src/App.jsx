import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase(){
       setCount(count+1);
  }

  function decrease(){
       
    if(count>1){
        setCount(count-1);
    }
  }

  return (
    <div> 

      <p>Count:{count}</p>


     <button onClick={increase}>Increase  </button>
      <button onClick={decrease}>Decrease  </button>

    </div>
  )
}

export default App
