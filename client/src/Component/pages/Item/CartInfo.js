import React from "react";
import styled from "styled-components";
import { numberFormat } from "./numberFormat";
import { Button } from "./Button";
import { P } from "./P";
import axios from "axios";
import { Arrow } from "./Arrow";
import { VerticalBar } from "./VerticalBar";
import { CartButtons } from "./CartButtons";
import {  useNavigate } from "react-router-dom";



export const CartInfo = ({ cart, increaseQ, decreaseQ, removeFromCart,foundEntry }) => {
const navigate = useNavigate();
const food = [];
const radio=[];
var price=0;
const seatNo= foundEntry.SitNo;
const HallNo=foundEntry.Audi;
const name=foundEntry.Name;
const Mall = foundEntry.Mall;
//to create an array of foodname that goes in database
function post(item){  
  console.log(item);
food.push(item.name)
radio.push(item.radio)
price=price+(item.price*item.quantity)
}

//on click function of checkout sends data to database
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
  const data =JSON.parse(localStorage.getItem('cart'));
  
    return(
  <>
    {cart.map((item, i) => (
      <DetailColumn key={item.name}>
        <P>
          {item.name} {item.radio} <VerticalBar /> {item.quantity} x ₹{item.price} <Arrow />{" "}
          ₹{numberFormat(item.price * item.quantity)}
        </P>

        <CartButtons
          increaseQ={() => increaseQ(i)}
          decreaseQ={() => decreaseQ(i)}
          removeFromCart={() => removeFromCart(i)}
        />
      </DetailColumn>
    ))}
    
    <CheckoutButton onClick={() => {handleOnClick(cart);}}>Checkout</CheckoutButton>
  </>
)
}
const DetailColumn = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 5px 0;
  width: 95%;
  border-bottom: 1px solid black;
`;

const CheckoutButton = styled(Button).attrs(() => ({
  backgroundColor: "darkblue"
}))`
  margin-top: 15px;
  margin-bottom: 15px;
`;