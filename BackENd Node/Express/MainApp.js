const express = require("express");
const app = express();
app.set("view engine","hbs");
var adfar = {
    name:"Adfar",
    age:26,
    salary:10000,
    height:"6feet",
}
var person = {
    name:"Adfar",
    age:26,
    salary:10000,
    height:"6feet",
    skills:["HTML","CSS","JS","React"]
}
app.get("/",(req,res)=>{
   res.render("index",{
    name:"Adfarrayjfsyfsjsagdvjgyasdyjsdvdjgyd"
   })
})
app.get("/adfar",(req,res)=>{
    res.render("adfar",{adfar:adfar})
})
app.get("/skills",(req,res)=>{
    res.render("skills",{person:person})
})
app.listen(5000,()=>{
    console.log("app is listening to port 4000")
})