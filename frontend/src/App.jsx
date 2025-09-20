import { useState ,useEffect, memo ,createContext ,useContext} from 'react'




function App() {

      



  

  return(

    <div>

      <Counter />
        
    </div>
  )

  
       
  }

  

  function Counter(){

      const[count,setCount] = useState(0);


      useEffect(()=>{

        setInterval(()=>{

          setCount(c=>c+1);

        },3000)
      },[])


       
    return(
      <div >

            <CurrentCount  />
           <Increase  />
           <Decrease  />
      </div>
    )
  }

  const CurrentCount= memo ( function(){
       
    return(
      <div>
        1
      </div>
    )
  })


  const Increase = memo(function ({setCount}){

    function increase(){
        setCount(c=>c+1)
    }
      return (
        <div>
            <button onClick={increase}>Increase</button>
        </div>
      )
  })

    const Decrease = memo(function ({setCount}){

      function decrease(){
         setCount(c=>c-1);
      }
      return (
        <div>
            <button onClick={decrease}>Decrease</button>
        </div>
      )
  })

  

export default App
