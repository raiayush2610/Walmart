import React, { useState, useEffect } from "react";
import axios from "axios";
import "./table.css"
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import  {Container, Card, CardContent, Grid,Button} from '@mui/material';//material ui 
import SideSlave from "../Sidebar/SideSlave";
function Salve() {
  const location=useLocation();
 const navigate= useNavigate();
 const user = location.state.user;

 const [Orders,setOrder] = useState([])
const logout = async()=>{
  try {
   signOut(auth)
    navigate("/",{replace:true})
  } catch (error) {
   console.log("error:- "+error); 
  }
  
}
// const addMenu = async()=>{
//   navigate("/addmenu")
  
// }
const getOrder =async() =>{
  try {
    // const id = location.state.user;

    const res = await axios.get(`http://localhost:2610/order/Order/get/${user}`)

    setOrder(res.data)
    }
    catch (error) {console.log("error");}
}

useEffect(()=>{ getOrder();},[user])
  return (
    <>
      <SideSlave/>
     <Container >
      <Card>
        <Grid container spacing={2} columnSpacing={-20}  rowSpacing={-5}>
              <h1 className="wel">Weclome {user}</h1>
        </Grid>
       
       <Grid item xl={12} md={6} sm={12} xm={12} className="grid">
              <Button className="signout" variant='contained' color="primary" onClick={logout}>SignOut</Button>
              
          </Grid>
        <CardContent>
          <Grid container spacing={2} columnSpacing={30} rowSpacing={-5} xm={12}>
            
           
            
            <table id="cust" border="1">
                      <tr>
                      <th>OrderID</th>
                      <th>HallNo</th>
                      <th>SeatNo</th> 
                      
                      <th>Foodname</th>
                      <th>Foodprice</th>
                      <th>PaymentMethod</th>
                      <th>PhoneNo</th>
                      <th>Date</th>
                      <th>Time</th>
                      </tr> 
                    {Orders.map((ord=>
                    
                    <tr>
                    {(ord.OrderID == null) ? <td>null</td> : <td>{ord.OrderID}</td>}
                    {(ord.HallNo == null) ? <td>null</td> : <td>{ord.HallNo}</td>}
                    {(ord.seatNo == null) ? <td>null</td> : <td>{ord.seatNo}</td>}
                    {(ord.Foodname == null) ? <td>null</td> : <td>{ord.Foodname[0]}-{ord.radio[0]}<br/>{ord.Foodname[1]}-{ord.radio[1]}</td>}
                    {(ord.Foodprice == null) ? <td>null</td> : <td>{ord.Foodprice}</td>}
                    {(ord.paymentMode == null) ? <td>null</td> : <td>{ord.paymentMode}</td>}
                    {(ord.phone == null) ? <td>null</td> : <td>{ord.phone}</td>}
                    {(ord.date == null) ? <td>null</td> : <td>{ord.date}</td>}
                    {(ord.time == null) ? <td>null</td> : <td>{ord.time}</td>}
                    {/* <td><button>Deliver</button></td> */}

                    </tr>
                    
                    ))}
                    </table>
          
          </Grid>
          
          
          
        </CardContent>
      </Card>
    
    

   

    </Container>
    </>
  )
}

export default Salve
