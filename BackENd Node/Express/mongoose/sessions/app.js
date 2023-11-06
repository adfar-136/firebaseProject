const express = require("express");
const bodyParser = require("body-parser");
const { User } = require("./database");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("home")
})
app.post("/register",async (req,res)=>{
    const user = await User.findOne({username:req.body.username})
    if(user){
        return res.status(400).send("user already Registered")
    }
    const newUser= await User.create(req.body);
    res.status(201).send(newUser)
})
app.post("/login",async (req,res)=>{
    const user = await User.findOne({username:req.body.username})
    if(user.password === req.body.password){
    return res.send(`Hey welcome back Mr ${user.name}`)
    }
    return res.send("invalid credentials")

})
 app.get("/login",(req,res)=>{
    res.render("login")
 })
app.get("/register",(req,res)=>{
 res.render("register")
})
app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})