const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://adfarrasheed136:Margaret2476@cluster0.ashzien.mongodb.net/november?retryWrites=true&w=majority").then(()=>{
    console.log('connected to database');
}).catch((err)=>console.log(err))
// mongoose.connect("mongodb://localhost:27017").then(()=>{
//     console.log('connected to database');
// }).catch((err)=>console.log(err))
const userSchema = new mongoose.Schema({
    name:String,
    username: {
        type: String,
        required:true,
        unique:true,
    },
    password : String,
    address: String,
    phoneNumber: Number,
    about :String,
    profileImage: String
})
exports.User = mongoose.model("user",userSchema);