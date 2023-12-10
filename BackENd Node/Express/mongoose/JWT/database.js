const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/novjwt").then(()=>{
    console.log("Connected with mongodb")
})
const userSchema = mongoose.Schema({
    username: String,
    password:String,
})
const User = mongoose.model("user",userSchema);
module.exports = {User};