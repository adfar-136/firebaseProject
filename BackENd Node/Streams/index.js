// let read = fs.createReadStream("adfar.txt");
// var dataa ='';
// read.on("data",function(chunk){
//     dataa += chunk;
// })
// read.on("end",()=>{
//     console.log(dataa)
// })
// read.on("error",(err)=>{
//     console.log(err)
// })
const fs = require("fs")
// let data = "MY Name is ADfar, i am a MERN Instructor";
// let writeStream = fs.createWriteStream("write.txt");
// writeStream.write(data);
// writeStream.end();
// writeStream.on("finish",()=>{
//     console.log("Completed")
// })

let readStream= fs.createReadStream("adfar.txt");
let writeStream =fs.createWriteStream("hello.txt");
readStream.pipe(writeStream)