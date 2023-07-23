const mongoose =require('mongoose');
const OrderSchema = new mongoose.Schema({
          OrderID:String,
          Foodname:Array,
          Foodprice:Number,
          seatNo:String,
          HallNo:Number,
          radio:Array,
          phone:Number,
          // Date:Datenow(),
          paymentMode:String,
          date:String,
          time:String,
          Orderby:String
})
module.exports =mongoose.model("Order",OrderSchema);
