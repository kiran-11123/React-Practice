import { useState ,useEffect, createContext ,useContext} from 'react'




function App() {




  

  return(

    <div>

      <Counter />
        
    </div>
  )

  
       
  }

  

  function Counter(){

      const[count,setCount] = useState(0);
       
    return(
      <div >

            <CurrentCount count={count} />
           <Increase  setCount={setCount}/>
           <Decrease setCount={setCount} />
      </div>
    )
  }

  function CurrentCount({count}){
       
    return(
      <div>
        {count}
      </div>
    )
  }


  function Increase({setCount}){

    function increase(){
        setCount(c=>c+1)
    }
      return (
        <div>
            <button onClick={increase}>Increase</button>
        </div>
      )
  }

    function Decrease({setCount}){

      function decrease(){
         setCount(c=>c-1);
      }
      return (
        <div>
            <button onClick={decrease}>Decrease</button>
        </div>
      )
  }

  

export default App
