const mongoose =require('mongoose');
const socialRecord = new mongoose.Schema({
    profile:String,
    instagram: String,
    labelInstagram:String,
    facebook:String,
    labelFacebook:String,
    spotify:String,
    labelSpotify:String,
    whatsapp:String,
    labelWhatsapp:String,
    medium:String,
    labelMedium:String,
    imgCollection: Array,
    phone:String,
    email:String
})
module.exports =mongoose.model("socialRecord",socialRecord);