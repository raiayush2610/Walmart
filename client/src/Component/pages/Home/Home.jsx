import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import './home.css'
function Home() {
  
  const [input,setinput]= useState("");
  
  return (
    <>
   
    <div className="user2">

            <h1>Enter the code</h1>
            <div className="user">
              <input type="text"  value={input} placeholder="Enter the code" onInput={(e)=>setinput(e.target.value)}/>
              <Link to={`/${input}`}><button className='home-btn'>Click me</button></Link>
              
            </div>

        </div>
    </>
  )
}

export default Home
