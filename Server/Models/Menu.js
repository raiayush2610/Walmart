const mongoose =require('mongoose');
const MenuSchema = new mongoose.Schema({
          name:String,
          price:Number,
          quantity:Number,
          inCart:Boolean,
          src:String,
          categoryName:String

})
module.exports =mongoose.model("slave",MenuSchema);
