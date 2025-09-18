import { useState ,useEffect} from 'react'
import './App.css'

function App() {



    return(
     <div >

        <PostComponent/>
     </div>

    )
  }

  const style= {backgroundColor:"white" , borderRaduis:10 , borderColor:"gray" , borderWidth:1 ,display:"flex" ,gap:4}

  function PostComponent(){ 

    return(

      <div >

  
        <div style={style}>


          <img src ="vite.svg" alt="image"  style={{ width:20 , height:20 ,borderRadius:20}} />
          

          <div style={{  fontSize:15 , marginLeft:5}}>
              <b>100x devs</b>

              <div>23,0000 followers</div>

              <div>12m</div>
          </div>

        

          </div>

            <div>
               Want to know how to win big ? check out how the things work
          </div>

    </div>

    )
     
  }


  

export default App
