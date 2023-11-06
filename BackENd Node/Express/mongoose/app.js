const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/November").then(()=>{
    console.log('connected to db');
}).catch((error)=>{
    console.log(error)
})
var student = new mongoose.Schema({
    name : String,
    age : Number,
    email : String ,
})

const Student = new mongoose.model("Student",student);

// const createData=()=>{
//     const document = new Student({
//         name:"Swapnil Chaudhari" ,
//         age : 20 ,
//         email : "Swapnil@gmail.com"
//     })
//     document.save();
// }
// const createData=async ()=>{
//     const document =await Student.create({
//         name:"Adu",
//         age:10,
//         email:"Adu@gmail.com"
//     })
//     console.log(document);
// }
const findData =async ()=>{
    const fData =await Student.find({age:{$lt:15}})
    console.log(fData)
}
findData();
// createData();