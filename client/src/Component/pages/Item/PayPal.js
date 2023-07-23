import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPal(price) {
console.log(price);
    // const [show, setShow] = useState(false);
    const [ , setSuccess] = useState(false);
    // const [ , setErrorMessage] = useState("");
    const [ , setOrderID] = useState(false);
    const n=price.price;
    console.log(n);
    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                description: "Sunflower",
                amount: {
                  currency_code: "USD",
                  value: 0.1,
                },
              },
            ],
            // not needed if a shipping address is actually needed
            application_context: {
              shipping_preference: "NO_SHIPPING",
            },
          })
          .then((orderID) => {
            setOrderID(orderID);
            return orderID;
          });
      };


 // check Approval
 const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // const { payer } = details;
      setSuccess(true);
      console.log("payment succeful");
    });
  };

   //capture likely error
//  const onError = (data, actions) => {
//     setErrorMessage("An Error occured with your payment ");
//   };

    return (
        <PayPalScriptProvider options={{ "client-id": "ATE90LzYjYOg3MTxxxetdE0-soPT_ggmhTQnT_kBG2b9RKBa_cgOuDB7E2SA8HMzeV6MfBZPuREpMIrP" }}>
<PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
         />        </PayPalScriptProvider>
    );
 }