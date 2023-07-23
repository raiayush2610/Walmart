import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <ul>
      
          {/* <li><Link to ="/adminlogin">Admin Login</Link> </li> */}
          <li> <Link to ="/admin">Register</Link></li>
          <li><Link to ="/Master">Master page</Link> </li>
          <li><Link to ="/Sal">Slave page</Link> </li>
          {/* <li><Link to ="/QR">QR</Link> </li> */}
     </ul>
    </>
  )
}

export default Home
