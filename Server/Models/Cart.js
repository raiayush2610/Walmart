const mongoose =require('mongoose');
const CartSchema = new mongoose.Schema({
          OrderID:String,
          Foodname:Array,
          Foodprice:Number,
          seatNo:String,
          HallNo:Number,
          radio:Array,
          Mall:String,
          paymentStatus:Boolean,
})
module.exports =mongoose.model("Cart",CartSchema);
