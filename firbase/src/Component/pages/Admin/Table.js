import React, { useState, useEffect } from "react";
import axios from "axios";
import "./table.css"
const Datatable=()=> {
const [Orders,setOrder] = useState([])
const [text,settext] = useState('')
const [radiotext,setradioText] = useState('')

const  handleChange=(e)=>{
  e.preventDefault(e);
      const Value = e.target.value
      setradioText(Value)
}
const Search = async(e)=>{
  try {
    const placeholder= radiotext;
    console.log(placeholder);
    switch (placeholder) {

      case ("Id"):
      console.log(text);
          await axios.get(`http://localhost:2610/order/${text}`).then((res)=>((setOrder(res.data))))
        break;
      case "Phoneno":
        await axios.get(`http://localhost:2610/order/phone/${text}`).then((res)=>((setOrder(res.data))))
        break;
      case "Hallno":
        await axios.get(`http://localhost:2610/order/hall/${text}`).then((res)=>((setOrder(res.data))))
        break;   
      case "Seatno":
        await axios.get(`http://localhost:2610/order/seatno/${text}`).then((res)=>((setOrder(res.data))))
        break;     
      default:
        console.log("no");
          break;
    }
  } catch (error) {
    console.log(error);
  }
}
const getOrder =async() =>{
  try {
    const res = await axios.get(`http://localhost:2610/order/Order/get`)
    setOrder(res.data)
    }
    catch (error) {console.log("error");}
}

useEffect(()=>{ getOrder();},[])
return (
  <>
  <div className="area-selector">
  <div className="patlist">
    <h5> Search for paticular item</h5>
      <form className='form-doc'>
            <input type="radio" value="Id" 
              onClick={handleChange} name="search"/>
            <label>OrderID</label>

            <input type="radio" value="Phoneno" 
              onChange={handleChange} name="search"/>
            <label for="phoneno">Phone no</label>

            <input type="radio" value="Hallno" 
              onChange={handleChange} name="search"/>
            <label>HallNo</label>
            <input type="radio" name="search" value="Seatno" onChange={handleChange} /><label>Seat No</label>
            <input onChange={e => {settext(e.target.value)}} className="" type="text" placeholder ="text"/>
            <button type="submit" className='del' onClick={e=>{e.preventDefault(e) ; Search()}} >Submit</button>
            <button type="submit" className='del' onClick={e=>{e.preventDefault(e) ; getOrder()}} >Clear</button>
         </form>
    </div>  
  </div>
  
 <br/>
 <br/>

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
  


  </>
  


  
)
}

export default Datatable
