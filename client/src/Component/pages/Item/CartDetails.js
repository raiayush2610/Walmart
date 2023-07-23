import React from "react";
import styled from "styled-components";
import { CloseButton } from "./CloseButton";

import { CartTotals } from "./CartTotals";
import { CartInfo } from "./CartInfo";
import { lightGray } from "./GlobalStyles";

export const CartDetails = ({
  cartEmply,
  cart,
  increaseQ,
  decreaseQ,
  cartCountTotal,
  removeFromCart,
  open,
  foundEntry,
  onClose,

  
  
}) => {
  // console.log("cart is emplt  in details page"+cartEmply);
  return (
    <OpenWrapper open={open}>
      <CloseButton onClick={onClose} />
      <Wrapper>
        {!!cart && (
          <>
         
          {/* gives total amount of cart */}
            <CartTotals cart={cart} cartCountTotal={cartCountTotal} />  
            {/* gives items present in cart */}
            <CartInfo
              cartEmpty={cartEmply}
              cart={cart}
              increaseQ={increaseQ}
              decreaseQ={decreaseQ}
              removeFromCart={removeFromCart}
              foundEntry={foundEntry}
            
            />
          </>
        )}
      </Wrapper>
    </OpenWrapper>
  );
};
const OpenWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 134;
  background-color: ${lightGray};
  width: 320px;
  transform: translateX(${({ open }) => (open ? "0px" : "320px")});
  transition: transform 0.5s;
  max-height: 99%;
  min-height: 75px;
  overflow-y: auto;
  border-radius: 0 0 0 20px;
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;
