import React from "react";
import { useLocation } from "react-router-dom";


export default function OrderSucc() {
    const location = useLocation();
    const orderID=location.state.orderID;
  return (
    <>
      <div
        className="container card border-info shadow text-center"
        style={{ maxWidth: "25rem", minWidth: "10rem" }}
      >

        <p1>Success</p1>
        <p><h5>
          We received your order request
          <br/>Your OrderID is "<u>{orderID}</u>" it will be asked on your order delivery
          <br /> Your order will be delivered in 15min</h5>
          <br />
          <br/>
        </p>
      </div>
      <br />
      <br />
    </>
  );
}
