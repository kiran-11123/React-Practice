
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    function redirect(){
           navigate("/")
    }

  return (
    <div>
        
        
        This is Home


        <button onClick={redirect}>Go Back to Nav Page</button>
  


        
    </div>

  )

    
}

export default Home