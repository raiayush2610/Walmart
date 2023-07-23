import Card from "./Card";
import React from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
export default function Cart({ cartItems, addToCart, foundEntry }) {
console.log(foundEntry);
  const navigate = useNavigate();
const food = [];
const radio=[];
var price=0;
const seatNo= foundEntry.SitNo;
const HallNo=foundEntry.Audi;
const name=foundEntry.Name;
const Mall = foundEntry.Mall;
  function post(item){  
    console.log(item);
  food.push(item.name)
  radio.push(item.radio)
  price=price+(item.price*item.quantity)
  }
  function handleOnClick(cart) {
    // random number gerator
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
              
              //specify the length for the new string
    var lenString = 1;
    var randomstring = '';
  
              //loop to select a new character in each iteration
    for (var i=0; i<lenString; i++) {
      var rnum = Math.floor(Math.random() * characters.length);
      randomstring += characters.substring(rnum, rnum+1);
    }
  var n =Math.floor(Math.random()*(999-100+1)+100);
            const orderID=randomstring+n;
  {cart.map((item) => (
  post(item)
      ))}
  
      console.log(radio);
      console.log(price);
      console.log(radio);
      console.log(Mall);
      const res = axios.post(`http://localhost:2610/cart/Cart/post`,
      {
        orderID:orderID,
      foodName:food,
      foodPrice:price,
      seatNo:seatNo,
      HallNo:HallNo,
      radio:radio,
      Mall:Mall ,
      paymentStatus:false,
     })
      navigate("/payment",{state: {Id : cart,price : price,seatNo : seatNo,HallNo:HallNo,Mall:Mall,name:name,food:food,orderID:orderID,radio:radio}});
  
    }

  return (
    <div style={{ textAlign: "center" }}>
      <div className="columns is-multiline">
        {cartItems.map((data) => (
          <div
            className="column is-one-third is-flex is-justify-content-space-around"
            key={data._id}
          >
            <Card data={data} key={data._id} addToCart={addToCart} />
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <button
          // className="checkout"
          style={{
            width: "85%",
            height: "50px",
            backgroundColor: "rgb(252, 123, 36)",
            fontSize: "20px"
          }}
          onClick={() => {handleOnClick(cartItems);}}
        >
          CHECKOUT
        </button>
      )}
      
    </div>
  );
}
