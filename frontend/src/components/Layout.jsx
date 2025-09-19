import React from 'react'
import { Outlet , Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{height:"100vh"}}>


    <Link to="/">Nav</Link>  | <Link to="/home">Home</Link>  | <Link to="/projects">Projects</Link>


      <div style={{height:"90vh"}}>
        
          <Outlet/>
    </div>  


    <footer>Hi this is footer </footer>


    </div>
  )
}

export default Layout