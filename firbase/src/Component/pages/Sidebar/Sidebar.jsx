import React from 'react'
import { useState } from 'react';
import hamburger from "../../imgs/hamsign.png"
import "./sidebar.css"
function Sidebar() {
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
                <li><a href="/QR">QR</a></li> 
                <li><a href="/Mastable">Order table</a></li> 
               
                
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

export default Sidebar