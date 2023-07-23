import React, { useEffect, useState } from "react";

import { useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebaseConfig from './firebase'
import firebase from "firebase/app";
import "firebase/auth";
import SignIn from "./SignIn";
export default function COD(){
  const location =useLocation();

  const orderID = location.state.orderID; 

const navigate=useNavigate();
    const [viewOtpForm, setViewOtpForm] = useState(false);
  const [, setUser] = useState(false);
  // const [phone, setPhone] = useState("");
  const [phone1,setPhone1]=useState('');
  const [disable, setDisable] = useState(true);
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDHR5_iaScP6Aku56TtUJSXMfbd9yWTizM",
  //   authDomain: "phoneauthenticationtapop.firebaseapp.com",
  //   projectId: "phoneauthenticationtapop",
  //   storageBucket: "phoneauthenticationtapop.appspot.com",
  //   messagingSenderId: "678175404379",
  //   appId: "1:678175404379:web:ebcde2846caaff8832aa7e",
  //   measurementId: "G-FBBKP62151"
  // };

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    const phone_number = "+91" + e.target.phone.value;
    // setPhone(phone_number);
    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("err");
        alert(error.message);
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success,otp verified!");
        setDisable(false)
        // window.open("/", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  
    const seatNo = location.state.seatNo;
    const name = location.state.name;
    const HallNo = location.state.HallNo; 
    const food = location.state.food; 
    const radio = location.state.radio;
    const Mall = location.state.Mall;
    function handleOnChange(e){
      setPhone1(e.target.value)
    }
    // console.log(phone);
    const price = location.state.price; 
    function handleOnClick(cart) {
      console.log(radio);
            console.log(price);
            axios.post(`http://localhost:2610/order/Order/post`,
            {
            orderID:orderID,
            foodName:food,
            foodPrice:price,
            seatNo:seatNo,
            HallNo:HallNo,
            radio:radio,
            phone:phone1,
            paymentMode:"COD",
            Orderby:Mall
           })
            // navigate("/payment",{state: {Id : cart,price : price,seatNo : seatNo,HallNo:HallNo,name:name}});
            navigate("/ordersucc",{state: {orderID:orderID}})

          }


    return(
    <>
    <div
        className="container card border-info shadow text-center"
        style={{ maxWidth: "40rem", minWidth: "10rem",display:"flex"}}
      >
          <div id="recaptcha-container"></div>

    <SignIn
            loginSubmit={loginSubmit}
            otpSubmit={otpSubmit}
            viewOtpForm={viewOtpForm}
            handleOnChange={handleOnChange}
          />
          
    <h4>Seat Number: <input
                style={{width:"50px"}}
                type="text"
                placeholder="SeatNo"
                name="phone"
                value={seatNo}
              /></h4>
    <h4>Name: {name}</h4>
    <h4>HallNo: {HallNo}</h4>
    <h4>Mall: {Mall}</h4>
    <h4>Amount to Pay: {price}</h4>
    <button disabled={disable}  onClick={handleOnClick} style={{padding: "5px 8px",margin: "5px",borderRadius: "10px"}}>Confirm Order</button>
    </div>
    </>
)
}
