import "./xyz.css";
import React from "react";
import CardsComponent from "./Cards-component";
import Cart from "./Cart";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
let foundEntry= {}

export default function App1() {
  const {Code} = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);
  const [radio, setRadio] = React.useState('');

  const [showCart, setShowCart] = React.useState(false);
  const [foundEntry2 ,setfoundEntry] =React.useState([]);
  const addToCart = (_id, count) => {
    const newData = [...data];
    const addedItemId = data.findIndex((el) => el._id === _id);
    newData[addedItemId].addedCount = count;
    setData(newData);
  };
  function onChangeHandler(e){
    setRadio(e.target.value)
  }
  const getQRcode =async() =>{
    try {
      const coded = Code;
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
  React.useEffect(() => {
    getQRcode();
    Submit();
  }, []);


  const Submit = (e) => {
    e?.preventDefault();
    fetch(
      "http://localhost:2610/menu/menu/get/"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  foundEntry2.forEach(entry =>foundEntry = entry)
  const cartItems = data.filter((el) => Boolean(el.addedCount));

  return (
    <div className="App container">
      <div className="header">
        <h1
          style={{
            color: "green",
            fontSize: "40px",
            fontWeight: "bolder"
          }}
          onClick={() => setShowCart(false)}
        >
          Tapop
        </h1>
        <div>
          <form onSubmit={Submit}>
            <input
              type="text"
              key={data._id}
              value={search}
              className="input"
              placeholder="Search for vegetable, fruit, nuts"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <FaSearch className="search-button" />
          </form>
        </div>
        <div className="cart-container" onClick={() => setShowCart(true)}>
          <span className="cart" style={{ color: "white" }}>
            {cartItems.length}
          </span>
          <img
            className="cart-img"
            alt="{value.toString()}"
            src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
          ></img>
        </div>
      </div>
      <br />
      {showCart ? (
        <Cart cartItems={cartItems} addToCart={addToCart} foundEntry={foundEntry} />
      ) : (
        <CardsComponent
          data={data}
          key={data._id}
          value={search}
          addToCart={addToCart}
          search={search}
          onChangeHandler={onChangeHandler}
        />
      )}
    </div>
  );
}
