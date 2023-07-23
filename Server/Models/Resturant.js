const mongoose =require('mongoose');
const FoodSchema = new mongoose.Schema({
          foodNumber:Number,
          Foodname:String,
          Foodprice:Number
          
})
module.exports =mongoose.model("Food",FoodSchema);