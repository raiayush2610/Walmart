import {  NavLink, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Roles from "./Roles";
// import Master from "../pages/Admin/Master";
import Login from "../pages/Admin/Login";
// import useAuth from "./useAuth";
import { auth } from "../firebase";

const RequireAuth = ()=>{
          const [isAuthicated,setAuthicated]= useState(false)
          const[admin,setadmin]= useState(false)
useEffect(()=>{
  console.log(Roles);
  // Roles.forEach()
  auth.onAuthStateChanged((user)=>{
    if (user) {
      
      if (user.email === "master@admin.com") {
        setAuthicated(true)
        navigator("/Master")
        
      } else {
        // console.log("hello");
        setAuthicated(true)
      }
      // setAuthicated(true)
    } else {
      // setAuthicated("salve")
      
    }

  });
},[])
          // const {auth} = useAuth();
          // const location = useLocation()
          // console.log( auth);
          return(
            (isAuthicated===true)?<Outlet/>:<Login/> 
            
                  
                    
          );
          
}
export default RequireAuth