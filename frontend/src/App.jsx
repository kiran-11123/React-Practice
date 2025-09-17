import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])



  function AddTodo(){
         
       let newArray = [...todo];

       newArray.push({
            title:"Eat food",
            Description:"Need to eat good food",
            done:true
       })

       setTodo(newArray);
  }

  return (
    <div> 

       <button onClick={AddTodo}>Add Todo</button>

       {JSON.stringify(todo)}

    </div>
  )
}

export default App
