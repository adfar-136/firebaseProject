var fs = require("fs")
// fs.writeFile("adfarr.txt","adfar",()=>{
//     console.log('done')
// })
// fs.appendFile("adfarr.txt"," World",()=>{
// })
fs.readFile("adfr.txt","utf-8",(err,data)=>{
   if(err){
    console.log(err)
   }else{
    console.log(data)
   }
})