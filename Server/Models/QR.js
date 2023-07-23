const mongoose =require('mongoose');
const QRSchema = new mongoose.Schema({
          id:String,
          Name: String,
          SitNo: String,
          Audi : String,
          Hall: String,
          Mall : String,
          // Img : String
})
module.exports =mongoose.model("QR",QRSchema);