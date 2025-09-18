import { useState ,useEffect} from 'react'
import './App.css'

function App() {

  const [visible , setVisible] = useState(false);

  function toggle(){
       setVisible(!visible);
  }



    return(
     <div >

       <button onClick={toggle}>Click me</button>

       {visible && <div> This is visible </div>}
     </div>

    )
  }

  

export default App
