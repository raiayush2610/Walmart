require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const foodroute = require('./Route/food')
const Cartroute = require('./Route/Cart')
const Adminroute = require('./Route/User')
const Reviewroute = require('./Route/Review')
const Orderroute = require('./Route/Order')
const QRrouter = require('./Route/QR')
const menuRoute = require('./Route/Menu')
const recordRoutes=require('./Route/Social')
const bodyParser=require('body-parser')
// const session = require('express-session');
// const passport = require("passport");

// const jwt = require('jsonwebtoken')

const cors = require('cors');

const app = express();
app.use(cors({origin:'*'}));
mongoose.set('strictQuery', false);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({origin: '*'}))
const dbo = require("./db/conn");

// Adding the Models
const  item = require("./Models/Resturant");

// Route
app.use('/', foodroute);
app.use('/cart',Cartroute)
app.use('/order',Orderroute)
app.use('/QR',QRrouter)
app.use('/admin',Adminroute)
app.use('/menu',menuRoute)
app.use('/review',Reviewroute)
app.use('/record',recordRoutes)
let uri = "mongodb+srv://foodpop:food123@foodapp.3mlcdml.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, (err) => {

    if (!err) {
        console.log("Connection to database successful!");
    }
    
});
Port = 2610;
app.listen(Port, function(){
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });

    console.log("Server is running on port  "+Port);
});