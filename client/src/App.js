// client app.js
import React from "react";
import NoPage from './Component/pages/NoPage/nopage'

import Payment from './Component/pages/Payment';
import Index from './Component/pages/Item/Index';

import PayPal from './Component/pages/Item/PayPal';
import COD from './Component/pages/Item/COD';
import App1 from './Component/pages/Home/App1';
import Home from "./Component/pages/Home/Home";
import SignIn from "./Component/pages/Item/SignIn";
import OrderSucc from "./Component/pages/Item/OrderSuccess";
import QR from "./Component/QR/QR";
import QR1 from "./Component/QR/QR1";
import QR2 from "./Component/QR/QR2";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Review from "./Component/review/review";
import ShowReview from "./Component/review/ShowReview";
import Social from "./Component/SocialLinks/Social";
import ShowImage from "./Component/SocialLinks/ShowImage";
// 
function App() {

  return (
    <>

          <Router>
                    <Routes>
                      
                      {/* Public Routes */}
                      <Route path ="/" element= {<Home/>}/>
                      <Route path = "/:Code" element = {<App1/>}/>
                      <Route path = '/payment' element = {<Payment/>}/>
                      <Route path = '/paypal' element = {<PayPal/>}/>
                      <Route path = '/cod' element = {<COD/>}/>
                      <Route path = '/signin' element = {<SignIn/>}/>
                      <Route path = '/code/Qr' element = {<QR/>}/>
                      <Route path = '/code/Qr1' element = {<QR1/>}/>
                      <Route path = '/code/Qr2' element = {<QR2/>}/>
                      <Route path = '/ordersucc' element = {<OrderSucc/>}/>
                      {/* <Route path= "/adminlogin" element = {<AdLogin />} /> */}
                    {/* Cath all other site */}
                      {/* <Route path= '*' element ={<NoPage/>}/>*/}
                      <Route path= 'no' element ={<NoPage/>}/>
                      <Route path = '/review/:profile' element = {<Review/>}/>   
                      <Route path = '/showReview/:profile' element = {<ShowReview/>}/>
                      <Route path= '/social/:profile' element ={<Social/>}/>
                      <Route path= '/showimage/:profile' element ={<ShowImage/>}/>
                </Routes>
          </Router>
      
    </>
  )
}
export default App;