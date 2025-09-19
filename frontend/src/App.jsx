import { useState ,useEffect, useRef} from 'react'
function App() {


  return(

    <div>
      <LightBulb />
    </div>
  )

  
       
  }

  function LightBulb(){

    const[bulbOn , setbulbOn] =useState(true);
        
    return(
         <div>

          <BulbState bulbOn={bulbOn} />
          <ToggleBulbState setbulbOn={setbulbOn} bulbOn={bulbOn} />
          


         </div>
    )
  }

  function BulbState({bulbOn}){

    
        
    return(
         <div>

          {bulbOn ?"Bulb On" : "Bulb off"}

         </div>
    )
  }

  function ToggleBulbState({setbulbOn,bulbOn}){

    function toggle(){
         
      setbulbOn(!bulbOn)
    }
        
    return(

         <div>
             <button onClick={toggle}> Toggle the bulb</button>
         </div>
    )
  }

  

export default App
