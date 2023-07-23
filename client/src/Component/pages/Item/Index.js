import React, {  useEffect, useState } from "react";
import OrderProduct from "./Order";
import axios from 'axios'
import styled from "styled-components";
import API from "./mockAPI";
import { ListedItems } from "./ListedItems";
import { useParams, useNavigate} from 'react-router-dom';
import { FixedCart } from "./FixedCart";
import { CartDetails } from "./CartDetails";
import { Overlay } from "./Overlay";
let foundEntry= {}

export default function Index() {
  const {Code} = useParams();
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [foundEntry2 ,setfoundEntry] =useState([]);
    // const [items, setItems] = useState(API);
    const [cartOpen, isCartOpen] = useState(false);
    const [radio, setRadio] = useState('');
    const [items,setItems] = useState([])

    const getMenu=async() =>{
      try{
        const res = await axios.get(`http://localhost:2610/menu/menu/get/`)
        setItems(res.data)
      }
      catch (error) {console.log(error);}
    }
    const getQRcode =async() =>{
      try {
        const coded = Code;
        console.log(Code);
        console.log(coded);
        const res = await axios.get(`http://localhost:2610/QR/getQR/${Code}`)
        console.log(res.data.length);
        if (res.data.length===0) {
          navigate('/no')
          
        }else{
          setfoundEntry(res.data)
        }
        }
            catch (error) {console.log(error);}
  }
  useEffect(()=>{
    getQRcode();
    getMenu();
   console.log(items);
  //  console.log(menus);
  },[])
  

   
function onChangeHandler(e){
  setRadio(e.target.value)
}
  if (cart.length === 0) {
    console.log("cart is emplty");
   } else {
    console.log()
   }

   
   //handles add to cart button action
  const addToCart = i => {
    setItems(state =>
      state.map((item, p) => {
        if (i === p) {
          setCart([
            ...cart,
            { name: item.name, price: item.price, quantity: item.quantity,src:item.src,radio:radio }
          ]);
          return { ...item, inCart: true };
        }
        return item;
      })
    );
    setRadio('');
    };
  

  

// '+' button function to increase quantity
  const increaseQuantity = {
    inCart: i => {
      setCart(state =>
        state.map((item, o) => {
          if (i === o && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    },
    inItems: i => {
      setItems(state =>
        state.map((item, o) => {
          if (o === i && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  };

// '-' button function to decrease quantity
  const decreaseQuantity = {
    inCart: i => {
      setCart(prevCart =>
        prevCart.map((item, o) => {
          if (i === o && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    },
    inItems: i => {
      setItems(state =>
        state.map((item, o) => {
          if (i === o && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    }
  };

 // remove button function 
  const removeFromCart = i => {
    let chosenItem, index;
    index = 0;
    while (index < cart.length) {
      if (index === i) {
        chosenItem = cart[index].name;
        break;
      }
      index++;
    }
    setCart(state => state.filter(item => chosenItem !== item.name));
    setItems(state =>
      state.map(item => {
        if (item.name === chosenItem) {
          return { ...item, inCart: false, quantity: 1 };
        }
        return item;
      })
    );
  };
  foundEntry2.forEach(entry =>foundEntry = entry)

  const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);


  return (
    <>
      {/* <GlobalStyles /> */}
      <CartDetails
        open={cartOpen}
        onClose={() => isCartOpen(false)}
        cart={cart}
        increaseQ={increaseQuantity.inCart}
        decreaseQ={decreaseQuantity.inCart}
        cartCountTotal={cartCountTotal}
        removeFromCart={removeFromCart}
        foundEntry={foundEntry}
        // local={local}
      />

      <FixedCart onOpen={() => isCartOpen(true)} cartItems={cartCountTotal} />
      <Overlay onClick={() => isCartOpen(false)} open={cartOpen} />

      <Wrapper>
        
        <H1>Food menu of { foundEntry.Mall} </H1>
        <H2>Welcome {foundEntry.Name}</H2>
        <H3>Seat No. {foundEntry.SitNo}</H3>
        <H5>Audi:{foundEntry.Audi}</H5>

        <ListedItems
          items={items}
         
          
          increaseCount={increaseQuantity.inItems}
          decreaseCount={decreaseQuantity.inItems}
          increaseCount2={increaseQuantity.inCart}
         
          decreaseCount2={decreaseQuantity.inItems}
          increaseQ={increaseQuantity.inCart}
          decreaseQ={decreaseQuantity.inCart}
          addToCart={addToCart}//hh
          onChangeHandler= {onChangeHandler}
          // local={local}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 75px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const H1 = styled.h1`
 
  padding: 0 5px 50px 10px;
  text-align: center;
`;
const H2 = styled.h2`
  padding: 0 5px 10px 5px;
  text-align: center;
`;
const H3 = styled.h3`
  padding: 0 15px 10px 5px;
  text-align: left;
`;
const H5 = styled.h5`
  padding: 0 15px 25px 10px;
  text-align: left;
`;