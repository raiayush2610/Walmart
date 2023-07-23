import React from 'react'
import { useLocation} from 'react-router-dom';
import { Button } from "./Item/Button"
import {  useNavigate } from "react-router-dom";

import {
  
  MDBCardImage,
  MDBCol,

  MDBIcon,
 

  MDBTypography,
} from "mdb-react-ui-kit";
import { CartTotals } from './Item/CartTotals';
import PayPal from './Item/PayPal';

export default function Payment() {
const navigate=useNavigate();
    const location =useLocation();
    const cart = location.state.Id;
    const price = location.state.price;
    const name = location.state.name;
    const HallNo = location.state.HallNo;
    const food = location.state.food;
    const orderID = location.state.orderID;
   
    const Mall= location.state.Mall;
    const seatNo = location.state.seatNo;
    const radio = location.state.radio;
    

    //COD button action
    function handleOnClick() {
      navigate("/cod",{state: {seatNo:seatNo,name:name,HallNo:HallNo,Mall:Mall,price:price,food:food,orderID:orderID,radio:radio}});
    }

  return (
    <>
        <div
        className="container card border-info shadow text-center"
        style={{ maxWidth: "50rem", minWidth: "10rem",display:"flex"}}
      >
    {cart.map((item, i) => (
        <>    
   <MDBCol lg="7" className="px-5 py-4">
   <div className="d-flex align-items-center mb-5">
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              src={require(`./uploads/${item.src}`)}
                              fluid
                              style={{ width: "150px" }}
                              alt="Generic placeholder image"
                            />
                          </div>
    
                          <div className="flex-grow-1 ms-3">
                            <a href="#!" className="float-end text-black">
                              <MDBIcon fas icon="times" />
                            </a>
                            <MDBTypography tag="h5" className="text-primary">
                              {item.name} {item.radio}
                            </MDBTypography>

    
                            <div className="d-flex align-items-center">
                              <p className="fw-bold mb-0 me-5 pe-3">₹{item.price}</p>
    
                              <div className="def-number-input number-input safari_only">
                            
                              <p className="fw-bold mb-0 me-5 pe-3">Quantity: {item.quantity}</p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                        </MDBCol>
        </>
        ))}
        <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />
                    <MDBCol lg="7" className="px-5 py-4">
                    
                    
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <CartTotals cart={cart} />
                    </div>
                    </MDBCol>
                    <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>
                    <PayPal price={price}/>
                    <Button onClick={handleOnClick}>COD</Button>
                    </MDBCol>
                    </div>
       </> 
       
  );
}
