import React, { useState} from "react";
import{ auth} from '../../firebase'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth"




// Toast or display the message of login status
import  Toast  from "../Toast/toast";
import ToastContainer from "../Toast/toastContai";
import 'react-toastify/dist/ReactToastify.css';

// this is  Admin login
function Login() {

  const navigate = useNavigate();

//  const [user,setUser] = useState([]);
  const[foundentry,setfoundEntry]= useState();
  const[ username,setusername]= useState([null]);
  const[ password,setpassword]= useState([null]);
  const[ user,setuser]= useState([null]);
  // const [errorMsg,seterrorMsg] = useState("")
// const foundentry={};
  const [submitButtonDisabled,setsubmitButtonDisabled] = useState(false);
  const getUsername =async(e) =>{
    try {
      console.log(e);
      const res = await axios.get(`http://localhost:2610/admin/getname/${e}`)
      setfoundEntry(res.data)
      return(foundentry);
      }catch (error) {console.log("error");}
}
//  useEffect(()=>{getUsername(uername);},[])
  
  const handleLogin = async(e) => {
    try {
      // console.log(username);
      getUsername(username);
      
      if(!username.length|| !password.length){ // Checking the value of the filed is null or not
        Toast.error("Please fill  All the flied")
        return;
       }
      //  Toast.error("");
       setsubmitButtonDisabled(true)
      //  firebase provide the function to create the authenticalion
      signInWithEmailAndPassword(auth,username,password).then(async(res)=>{
        // console.log(foundentry[0].access);
        if(username ==="master@admin.com"){
          // navigate(`/master/${username}`,{replace:true}) 
          navigate("/master", {replace: true}) 
        }else{
         if(foundentry[0].access===true){
          navigate("/Sal",{state:{user:user}})}
          else
          Toast.error("Account Deactivated.Contact Admin");
          // console.log(user);
        }
        setsubmitButtonDisabled(false)
       }).catch((erro)=>{
        console.log(erro.message);
        Toast.error(erro.message);
        setsubmitButtonDisabled(false)});
        
    } catch (error) {
      console.error(error);
    }
  } 
  // useEffect(()=>{;},[])
  return (
    <>
       <div className="register">
      
        <ToastContainer position="bottom-center" limit={1}/>
            <form className="register-form">    
                <h1 className="h3 heading-h1 mb-3 mb-4 fw-normal">Login </h1>
                <input onChange={(e)=>setusername(e.target.value) } className="bottomemail" type="email"  placeholder ="E-mail"/><br/>
                <input onChange={(e)=>setuser(e.target.value) }className="bottomemail" placeholder ="User"/>
                <input  onChange={(e)=>setpassword(e.target.value)}className="bottomemail" type="password" placeholder ="Password" autoComplete="false"/>
                <button disabled={submitButtonDisabled} className="registerbtn" onClick={e=>{handleLogin(e.preventDefault());}} id="login-button">Login </button> 
                {/* <b>{errorMsg}</b> */}
            </form>
            
        </div>
       
    </>
  )
}

export default Login
