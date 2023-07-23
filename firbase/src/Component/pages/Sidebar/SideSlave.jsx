import React from 'react'
import { useState } from 'react';
import hamburger from "../../imgs/hamsign.png"
import "./sidebar.css"
function SideSlave() {
          const [isActive,SetActive] = useState("false")


const handlechange =() =>{
          SetActive(!isActive)
}        
  return (
    <>
    <div className={isActive ? "sidebarGo": "main-sidebar"}>    
    {/* <div className="main-sidebar">     */}

            <div>
                {/* <a> */}
            </div>
            <ul>
                <li><a href="/addmenu">Add Menu</a></li> 
               
                
            </ul>

        </div>
        <section id="content-header">
                    <div class="hamburger" >
                       <img class="ham" src={hamburger} onClick={handlechange}  width="30px" alt=""/>
                </div>
        </section>
        <div className="admin">
          </div>
    </>
  )
}

export default SideSlave