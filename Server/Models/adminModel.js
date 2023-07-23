const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    username: String,
    password: String,
    admintype: String,
    access:Boolean
});
// UserSchema.plugin(passportLocalMongoose);
// UserSchema.plugin(findOrCreate);
const register = mongoose.model('User', UserSchema);

module.exports = register;