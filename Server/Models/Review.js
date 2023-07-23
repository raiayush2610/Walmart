const mongoose =require('mongoose');
const ReviewSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    stars : {
        type : Number,
        default : 0,
        min : 0,
        max : 5
    },
    title : {
        type : String,
        default : ""
    },
    review : {
        type : String,
        default : ""
    },
    profile:{
        type:String
    }
})
module.exports =mongoose.model("Review",ReviewSchema);