const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Sessions").then(()=>{
    console.log('connected to database');
}).catch((err)=>console.log(err))

const userSchema = new mongoose.Schema({
    name:String,
    username: {
        type: String,
        required:true,
        unique:true,
    },
    password : String
})
exports.User = mongoose.model("user",userSchema)